/**
 * Pure calculation logic for PQRSD SLA, Colombian Holidays, Business Days,
 * and AppSheet Application Intelligence Analytics.
 */

export interface SlaResult {
  businessDaysElapsed: number;
  maxLegalDays: number;
  status: 'DENTRO_DE_PLAZO' | 'PLAZO_VENCIDO' | 'RESUELTO_A_TIEMPO' | 'RESUELTO_FUERA_DE_TIEMPO';
  color: 'green' | 'amber' | 'red';
  label: string;
  qualification: 'Excelente' | 'Bueno' | 'Fuera del tiempo establecido' | 'En Espera';
}

/**
 * Standard Colombian legal deadlines by request priority (Law 1755 of 2015 / CPACA)
 */
export function getLegalDeadlineDays(priority: string): number {
  if (priority === 'Documentos o Información' || priority === 'Documentos') {
    return 10;
  }
  // General, Petición, Queja, Reclamo, Sugerencia, Denuncia
  return 15;
}

/**
 * Check if a given date is a weekend (Saturday or Sunday)
 */
export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}

/**
 * Known Colombian official holidays formatted as YYYY-MM-DD
 * (Extracted from the app's table festivos_2025_2036)
 */
export const COLOMBIAN_HOLIDAYS_SET = new Set([
  // 2025
  '2025-01-01', '2025-01-06', '2025-03-24', '2025-04-17', '2025-04-18',
  '2025-05-01', '2025-06-02', '2025-06-23', '2025-06-30', '2025-07-20',
  '2025-08-07', '2025-08-18', '2025-10-13', '2025-11-03', '2025-11-17',
  '2025-12-08', '2025-12-25',
  // 2026
  '2026-01-01', '2026-01-12', '2026-03-23', '2026-04-02', '2026-04-03',
  '2026-05-01', '2026-05-18', '2026-06-08', '2026-06-15', '2026-07-20',
  '2026-08-07', '2026-08-17', '2026-10-12', '2026-11-02', '2026-11-16',
  '2026-12-08', '2026-12-25',
  // 2027
  '2027-01-01', '2027-01-11', '2027-03-22', '2027-03-25', '2027-03-26',
  '2027-05-01', '2027-05-10', '2027-05-31', '2027-06-07', '2027-07-20',
  '2027-08-07', '2027-08-16', '2027-10-18', '2027-11-01', '2027-11-15',
  '2027-12-08', '2027-12-25'
]);

/**
 * Format a Date object to YYYY-MM-DD
 */
export function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Calculate business days between startDate and endDate
 * Simulates AppSheet / Excel NETWORKDAYS.INTL(creation + 1, responseOrToday, 1, holidays)
 */
export function calculateBusinessDays(startDate: Date, endDate: Date): number {
  if (startDate > endDate) return 0;

  let businessDays = 0;
  // Starting day + 1 as per formula: NETWORKDAYS.INTL(creacion+1, respuesta or today, 1, festivos)
  const current = new Date(startDate.getTime());
  current.setDate(current.getDate() + 1);

  while (current <= endDate) {
    const key = formatDateKey(current);
    if (!isWeekend(current) && !COLOMBIAN_HOLIDAYS_SET.has(key)) {
      businessDays++;
    }
    current.setDate(current.getDate() + 1);
  }

  return businessDays;
}

/**
 * Evaluate SLA status and qualification matching the exact AppSheet Virtual Column logic:
 * AlertaVencimiento_Virtual and Calificacion_Virtual
 */
export function evaluatePqrsSla(
  creationDate: Date,
  responseDate: Date | null,
  currentDate: Date,
  priority: string,
  state: 'Abierta' | 'Atendida' | 'Cerrada'
): SlaResult {
  const maxLegalDays = getLegalDeadlineDays(priority);
  const targetEnd = responseDate || currentDate;
  const businessDaysElapsed = calculateBusinessDays(creationDate, targetEnd);

  // If already resolved (Atendida or Cerrada)
  if (state !== 'Abierta') {
    if (businessDaysElapsed < maxLegalDays) {
      return {
        businessDaysElapsed,
        maxLegalDays,
        status: 'RESUELTO_A_TIEMPO',
        color: 'green',
        label: `✅ ${state} (En ${businessDaysElapsed} días hábiles - Plazo: ${maxLegalDays}d)`,
        qualification: 'Excelente'
      };
    } else if (businessDaysElapsed === maxLegalDays) {
      return {
        businessDaysElapsed,
        maxLegalDays,
        status: 'RESUELTO_A_TIEMPO',
        color: 'green',
        label: `✅ ${state} (En el límite de ${businessDaysElapsed} días hábiles)`,
        qualification: 'Bueno'
      };
    } else {
      return {
        businessDaysElapsed,
        maxLegalDays,
        status: 'RESUELTO_FUERA_DE_TIEMPO',
        color: 'red',
        label: `⚠️ ${state} fuera de tiempo legal (${businessDaysElapsed} días / Máx: ${maxLegalDays}d)`,
        qualification: 'Fuera del tiempo establecido'
      };
    }
  }

  // If still Open (Abierta)
  if (businessDaysElapsed >= maxLegalDays) {
    return {
      businessDaysElapsed,
      maxLegalDays,
      status: 'PLAZO_VENCIDO',
      color: 'red',
      label: `🔴 Plazo legal vencido (${businessDaysElapsed} días hábiles transcurridos, límite legal: ${maxLegalDays} días)`,
      qualification: 'En Espera'
    };
  } else {
    return {
      businessDaysElapsed,
      maxLegalDays,
      status: 'DENTRO_DE_PLAZO',
      color: 'amber',
      label: `🟡 OK: Dentro del plazo (${businessDaysElapsed} días hábiles transcurridos, límite legal: ${maxLegalDays} días)`,
      qualification: 'En Espera'
    };
  }
}

/**
 * Health Score calculation based on findings
 */
export function calculateHealthScore(findings: { severity: 'high' | 'medium' | 'info'; resolutionStatus?: string; isResolved?: boolean }[]): number {
  let penalty = 0;
  for (const f of findings) {
    const isResolved = f.isResolved || f.resolutionStatus?.includes('Resuelto') || f.resolutionStatus?.includes('Validado');
    if (!isResolved) {
      if (f.severity === 'high') penalty += 15;
      else if (f.severity === 'medium') penalty += 5;
      else if (f.severity === 'info') penalty += 1;
    }
  }
  const score = Math.max(0, 100 - penalty);
  return Math.round(score);
}

/**
 * Requirements Completion Stats
 */
export interface RequirementItem {
  id: string;
  code: string;
  title: string;
  description: string;
  type: 'Funcional' | 'No Funcional' | 'Mejora' | 'Despliegue';
  priority: 'Alta' | 'Media' | 'Baja';
  status: 'Completado' | 'En Progreso' | 'En Pruebas' | 'Pendiente';
  component: string;
  verifiedInAppSheet: boolean;
}

export function calculateRequirementsProgress(items: RequirementItem[]) {
  const total = items.length;
  if (total === 0) return { total: 0, completed: 0, inProgress: 0, pending: 0, percent: 0 };

  const completed = items.filter(i => i.status === 'Completado').length;
  const inProgress = items.filter(i => i.status === 'En Progreso' || i.status === 'En Pruebas').length;
  const pending = items.filter(i => i.status === 'Pendiente').length;
  const percent = Math.round((completed / total) * 100);

  return { total, completed, inProgress, pending, percent };
}
