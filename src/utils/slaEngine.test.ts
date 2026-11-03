import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getLegalDeadlineDays,
  isWeekend,
  calculateBusinessDays,
  evaluatePqrsSla,
  calculateHealthScore,
  calculateRequirementsProgress,
  RequirementItem
} from './slaEngine';

test('getLegalDeadlineDays returns 10 for Documentos and 15 for General', () => {
  assert.equal(getLegalDeadlineDays('Documentos o Información'), 10);
  assert.equal(getLegalDeadlineDays('Documentos'), 10);
  assert.equal(getLegalDeadlineDays('General'), 15);
  assert.equal(getLegalDeadlineDays('Petición'), 15);
  assert.equal(getLegalDeadlineDays('Queja'), 15);
});

test('isWeekend correctly identifies Saturdays and Sundays', () => {
  // 2026-11-07 is Saturday, 2026-11-08 is Sunday, 2026-11-09 is Monday
  const saturday = new Date(2026, 10, 7);
  const sunday = new Date(2026, 10, 8);
  const monday = new Date(2026, 10, 9);

  assert.equal(isWeekend(saturday), true);
  assert.equal(isWeekend(sunday), true);
  assert.equal(isWeekend(monday), false);
});

test('calculateBusinessDays correctly excludes weekends and holidays', () => {
  // From Wednesday 2026-10-28 to Wednesday 2026-11-04
  // 2026-11-02 is a Colombian Holiday (Todos los Santos traslado)
  // Days counted: Thu Oct 29 (1), Fri Oct 30 (2), Sat Oct 31 (weekend), Sun Nov 01 (weekend),
  // Mon Nov 02 (holiday), Tue Nov 03 (3), Wed Nov 04 (4). Total = 4 business days.
  const start = new Date(2026, 9, 28);
  const end = new Date(2026, 10, 4);
  const days = calculateBusinessDays(start, end);
  assert.equal(days, 4);
});

test('evaluatePqrsSla classifies open requests accurately', () => {
  // Case 1: Open, 3 business days elapsed, General (15 days max) -> Dentro de plazo
  const creation = new Date(2026, 10, 3); // Tue Nov 3, 2026
  const current = new Date(2026, 10, 6);  // Fri Nov 6, 2026 -> 3 business days (Nov 4, 5, 6)
  const resultWithin = evaluatePqrsSla(creation, null, current, 'General', 'Abierta');

  assert.equal(resultWithin.status, 'DENTRO_DE_PLAZO');
  assert.equal(resultWithin.color, 'amber');
  assert.equal(resultWithin.maxLegalDays, 15);
  assert.equal(resultWithin.businessDaysElapsed, 3);

  // Case 2: Open, Documents priority (10 days max), elapsed 12 business days -> Plazo vencido
  const oldCreation = new Date(2026, 9, 1);
  const currentLater = new Date(2026, 9, 25);
  const resultOverdue = evaluatePqrsSla(oldCreation, null, currentLater, 'Documentos o Información', 'Abierta');

  assert.equal(resultOverdue.status, 'PLAZO_VENCIDO');
  assert.equal(resultOverdue.color, 'red');
  assert.equal(resultOverdue.maxLegalDays, 10);
  assert.ok(resultOverdue.businessDaysElapsed >= 10);
});

test('evaluatePqrsSla classifies closed requests with quality rating', () => {
  // Resolved within 5 days on 15 max -> Excelente
  const creation = new Date(2026, 10, 3);
  const resolved = new Date(2026, 10, 10);
  const result = evaluatePqrsSla(creation, resolved, resolved, 'General', 'Cerrada');

  assert.equal(result.status, 'RESUELTO_A_TIEMPO');
  assert.equal(result.qualification, 'Excelente');
  assert.equal(result.color, 'green');
});

test('calculateHealthScore discounts penalties appropriately', () => {
  const findings: { severity: 'high' | 'medium' | 'info' }[] = [
    { severity: 'high' },   // -15
    { severity: 'medium' }, // -5
    { severity: 'medium' }, // -5
    { severity: 'info' },   // -1
  ];
  const score = calculateHealthScore(findings);
  assert.equal(score, 100 - 15 - 10 - 1); // 74
});

test('calculateHealthScore returns 100 when all findings are resolved or validated', () => {
  const findings: { severity: 'high' | 'medium' | 'info'; resolutionStatus: string; isResolved: boolean }[] = [
    { severity: 'high', resolutionStatus: 'Anomalía Descartada (Resuelto)', isResolved: true },
    { severity: 'medium', resolutionStatus: 'Validado por el Desarrollador', isResolved: true },
    { severity: 'medium', resolutionStatus: 'Resuelto por Arquitectura', isResolved: true },
    { severity: 'info', resolutionStatus: 'Validado por el Desarrollador', isResolved: true },
  ];
  const score = calculateHealthScore(findings);
  assert.equal(score, 100);
});

test('calculateRequirementsProgress computes statistics properly', () => {
  const items: RequirementItem[] = [
    { id: '1', code: 'RF-01', title: 'A', description: '', type: 'Funcional', priority: 'Alta', status: 'Completado', component: '', verifiedInAppSheet: true },
    { id: '2', code: 'RF-02', title: 'B', description: '', type: 'Funcional', priority: 'Alta', status: 'Completado', component: '', verifiedInAppSheet: true },
    { id: '3', code: 'RF-03', title: 'C', description: '', type: 'Funcional', priority: 'Media', status: 'En Progreso', component: '', verifiedInAppSheet: false },
    { id: '4', code: 'RNF-01', title: 'D', description: '', type: 'No Funcional', priority: 'Alta', status: 'Pendiente', component: '', verifiedInAppSheet: false },
  ];
  const progress = calculateRequirementsProgress(items);
  assert.equal(progress.total, 4);
  assert.equal(progress.completed, 2);
  assert.equal(progress.inProgress, 1);
  assert.equal(progress.pending, 1);
  assert.equal(progress.percent, 50);
});
