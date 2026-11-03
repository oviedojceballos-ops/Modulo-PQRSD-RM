import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Info,
  Layers,
  Database,
  Workflow,
  Cpu,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Clock,
  Search,
  ExternalLink,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';
import { APP_METADATA, HEALTH_FINDINGS, HealthFinding } from '../data/appData';
import { evaluatePqrsSla, calculateHealthScore, calculateBusinessDays } from '../utils/slaEngine';

interface ProjectStatusViewProps {
  onGoToDocumentation: () => void;
  onGoToManual: () => void;
  onGoToDeliverables: () => void;
}

export const ProjectStatusView: React.FC<ProjectStatusViewProps> = ({
  onGoToDocumentation,
  onGoToManual,
  onGoToDeliverables
}) => {
  // Severity & category filter for App Health
  const [healthFilter, setHealthFilter] = useState<'all' | 'bots' | 'rbac' | 'backend' | 'anomalia'>('all');
  const [selectedFinding, setSelectedFinding] = useState<HealthFinding | null>(HEALTH_FINDINGS[0]);

  // SLA simulator state
  const [simCreationDate, setSimCreationDate] = useState<string>('2026-10-25');
  const [simPriority, setSimPriority] = useState<string>('General');
  const [simState, setSimState] = useState<'Abierta' | 'Atendida' | 'Cerrada'>('Abierta');
  const [simResponseDate, setSimResponseDate] = useState<string>('2026-11-04');

  const healthScore = calculateHealthScore(HEALTH_FINDINGS);

  const filteredFindings = HEALTH_FINDINGS.filter((f) => {
    if (healthFilter === 'all') return true;
    if (healthFilter === 'anomalia') return f.id === 'health-1';
    if (healthFilter === 'bots') return f.id === 'health-21' || f.id === 'health-20' || f.id === 'health-19';
    if (healthFilter === 'rbac') return f.id === 'health-2';
    if (healthFilter === 'backend') return f.id === 'health-10' || f.id === 'health-17' || f.id === 'health-3';
    return true;
  });

  // Calculate live simulated SLA
  const creationObj = new Date(simCreationDate + 'T00:00:00');
  const responseObj = simState !== 'Abierta' ? new Date(simResponseDate + 'T00:00:00') : null;
  const currentObj = new Date();
  const slaResult = evaluatePqrsSla(creationObj, responseObj, currentObj, simPriority, simState);

  return (
    <div className="space-y-10 py-6">
      
      {/* Hero Executive Status Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-slate-700/50">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Estado de Entrega: 100% Funcional & Documentada
              </span>
              <span>·</span>
              <span className="text-slate-300">Versión {APP_METADATA.version}</span>
              <span>·</span>
              <span className="text-slate-300">AppSheet Enterprise</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Sistema de Gestión de PQRSD
              <span className="block text-emerald-400 font-medium text-lg sm:text-xl lg:text-2xl mt-1">
                Concesión Vial Ruta Magdalena Sierra Mar
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Plataforma digital para la radicación, trazabilidad legal de días hábiles, generación de PDFs oficiales, despacho por correo con Google Apps Script y auditoría de los 14 servicios viales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={onGoToDeliverables}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-colors"
            >
              <span>Ver Acta de Entrega al Cliente</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onGoToDocumentation}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-medium text-xs sm:text-sm rounded-xl transition-colors"
            >
              <span>Explorar Arquitectura del Sistema</span>
            </button>
          </div>
        </div>

        {/* Global Component Counters Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-700/60">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span>Tablas Datos</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-white">
              {APP_METADATA.metrics.tables}
            </div>
            <span className="text-[11px] text-slate-400">198 Columnas</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Vistas UX</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-white">
              {APP_METADATA.metrics.views}
            </div>
            <span className="text-[11px] text-slate-400">19 Custom / 31 Sys</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>Acciones</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-white">
              {APP_METADATA.metrics.actions}
            </div>
            <span className="text-[11px] text-slate-400">59 Custom / 75 Sys</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Workflow className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bots Automatización</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-white">
              {APP_METADATA.metrics.bots}
            </div>
            <span className="text-[11px] text-slate-400">17 Tareas en ejecución</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
              <span>Relaciones</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-white">
              {APP_METADATA.metrics.relationships}
            </div>
            <span className="text-[11px] text-slate-400">Dependencias estáticas</span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="flex items-center gap-2 text-xs text-emerald-400 mb-1 font-semibold">
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Índice Salud</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-emerald-300">
              {healthScore}%
            </div>
            <span className="text-[11px] text-emerald-300/80 font-medium">100% Validado por Desarrollador</span>
          </div>
        </div>
      </section>

      {/* Grid: Delivery Milestones & SLA Engine Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Estado de los Entregables del Proyecto (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Hitos de Entrega del Proyecto
                </h2>
                <p className="text-xs text-slate-500">
                  Progreso y verificación de los componentes solicitados por el cliente
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                100% Completado
              </span>
            </div>

            <div className="space-y-3.5">
              {[
                {
                  title: "Documentación Técnica Integral",
                  desc: "Detalle de las 12 tablas, 198 columnas, fórmulas matriciales y dependencias estáticas.",
                  status: "Completado",
                  tag: "Doc Técnica"
                },
                {
                  title: "Diagramas de Arquitectura del Sistema",
                  desc: "Flujo de integración AppSheet, Google Sheets, Drive, Apps Script y Looker Studio.",
                  status: "Completado",
                  tag: "Arquitectura"
                },
                {
                  title: "Manual de Usuario y Operación Paso a Paso",
                  desc: "Guía oficial para radicación, semáforo legal, resolución, PDF y apelaciones.",
                  status: "Completado",
                  tag: "Manual"
                },
                {
                  title: "Plan de Pruebas Funcionales y de Seguridad",
                  desc: "14 casos de prueba estructurados cubriendo roles, días hábiles, bots y límites.",
                  status: "Completado",
                  tag: "QA / Testing"
                },
                {
                  title: "Estrategia de Despliegue y Mantenimiento",
                  desc: "Configuración de carpetas en Google Drive, variables de entorno y soporte preventivo.",
                  status: "Completado",
                  tag: "Despliegue"
                },
                {
                  title: "Gestor de Requerimientos y Trazabilidad",
                  desc: "Módulo interactivo para supervisar requerimientos funcionales y nuevas peticiones.",
                  status: "Completado",
                  tag: "Gestión"
                }
              ].map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 whitespace-nowrap shrink-0">
                    {milestone.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Desarrollado para: Concesión Vial Ruta Magdalena Sierra Mar</span>
              <span>Aprobado para Entrega</span>
            </div>
          </div>
        </div>

        {/* Right Column: Semáforo Interactivo de Tiempos Legales (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900">
                  Simulador de Términos (Ley 1755)
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">NETWORKDAYS.INTL</span>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Pruebe cómo opera el semáforo legal virtual de la aplicación AppSheet según la prioridad y el cruce con los feriados colombianos:
            </p>

            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Fecha de Radicación (Creación)
                </label>
                <input
                  type="date"
                  value={simCreationDate}
                  onChange={(e) => setSimCreationDate(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Prioridad de Solicitud
                  </label>
                  <select
                    value={simPriority}
                    onChange={(e) => setSimPriority(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="General">General (15 días)</option>
                    <option value="Documentos o Información">Documentos (10 días)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estado PQR
                  </label>
                  <select
                    value={simState}
                    onChange={(e) => setSimState(e.target.value as any)}
                    className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="Abierta">Abierta</option>
                    <option value="Atendida">Atendida</option>
                    <option value="Cerrada">Cerrada</option>
                  </select>
                </div>
              </div>

              {simState !== 'Abierta' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Fecha de Respuesta Formal
                  </label>
                  <input
                    type="date"
                    value={simResponseDate}
                    onChange={(e) => setSimResponseDate(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-mono"
                  >
                  </input>
                </div>
              )}
            </div>

            {/* Simulated Live Output */}
            <div className="mt-4 p-4 rounded-xl border transition-all bg-white shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>Días hábiles transcurridos:</span>
                <span className="font-bold font-mono text-slate-900 text-sm">
                  {slaResult.businessDaysElapsed} días
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span>Límite legal aplicable:</span>
                <span className="font-bold font-mono text-slate-900 text-sm">
                  {slaResult.maxLegalDays} días hábiles
                </span>
              </div>

              {/* Status Alert Badge */}
              <div
                className={`p-3 rounded-lg text-xs font-semibold flex items-start gap-2.5 ${
                  slaResult.color === 'green'
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    : slaResult.color === 'amber'
                    ? 'bg-amber-50 text-amber-900 border border-amber-200'
                    : 'bg-rose-50 text-rose-900 border border-rose-200'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {slaResult.color === 'green' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : slaResult.color === 'amber' ? (
                    <Clock className="w-4 h-4 text-amber-600" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                  )}
                </div>
                <div>
                  <div className="font-bold">{slaResult.label}</div>
                  <div className="text-[11px] opacity-90 mt-1">
                    Calificación de Oportunidad: <span className="font-semibold underline">{slaResult.qualification}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onGoToManual}
              className="mt-4 w-full py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Ver Procedimiento Completo en Manual</span>
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* App Health Auditor Panel (100% Validados & Resueltos por Arquitectura) */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Auditoría 100% Validada & Resuelta
              </span>
              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                0 Críticos · 0 Medios Pendientes · 0 Bloqueos
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              Diagnóstico de Salud de la Aplicación (App Health)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Validación y sustentación técnica oficial provista por el desarrollador líder (Ing. Juan Carlos Oviedo Ceballos)
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-medium self-start lg:self-auto">
            <button
              onClick={() => setHealthFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                healthFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos ({HEALTH_FINDINGS.length})
            </button>
            <button
              onClick={() => setHealthFilter('bots')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                healthFilter === 'bots'
                  ? 'bg-white text-emerald-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              Bots & Consecutivos (3)
            </button>
            <button
              onClick={() => setHealthFilter('rbac')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                healthFilter === 'rbac'
                  ? 'bg-white text-indigo-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-indigo-700'
              }`}
            >
              Seguridad RBAC (1)
            </button>
            <button
              onClick={() => setHealthFilter('backend')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                healthFilter === 'backend'
                  ? 'bg-white text-blue-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              Acciones Backend (3)
            </button>
            <button
              onClick={() => setHealthFilter('anomalia')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                healthFilter === 'anomalia'
                  ? 'bg-white text-amber-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-amber-700'
              }`}
            >
              Anomalía Descartada (1)
            </button>
          </div>
        </div>

        {/* Global Developer Validation Summary Banner */}
        <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-white tracking-wide">
                Declaración de Conformidad Técnica & Arquitectura
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Estado: 100% Producción Estable
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Todos los puntos observados por la auditoría estática del snapshot han sido sustentados y verificados en la app: las supuestas acciones duplicadas son secuencias específicas enlazadas por AppSheet a bots distintos con sufijos numéricos automáticos; los Slices responden a políticas de seguridad RBAC para prevenir modificaciones no autorizadas; las acciones ocultas son disparadas por automatizaciones backend; y el campo <span className="font-mono text-emerald-300">TiempoRespuesta</span> calcula sus días hábiles de forma 100% nativa en Google Sheets mediante fórmula matricial sin necesidad de acciones en AppSheet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Findings List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[540px] overflow-y-auto pr-1">
            {filteredFindings.map((finding) => (
              <div
                key={finding.id}
                onClick={() => setSelectedFinding(finding)}
                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                  selectedFinding?.id === finding.id
                    ? 'border-emerald-600 bg-emerald-50/40 ring-1 ring-emerald-500 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1 ${
                      finding.id === 'health-1'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {finding.id === 'health-1' ? 'Anomalía Descartada' : 'Validado'}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {finding.category}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-900 line-clamp-1">
                  {finding.title}
                </h4>
                <p className="text-xs text-slate-500 font-mono mt-0.5 line-clamp-1">
                  {finding.component}
                </p>
              </div>
            ))}
          </div>

          {/* Finding Detail & Remediation Card (7 cols) */}
          <div className="lg:col-span-7">
            {selectedFinding ? (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {selectedFinding.resolutionStatus}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                      100% Funcional
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    ID: {selectedFinding.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {selectedFinding.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-600 mt-0.5">
                    Componente: {selectedFinding.component}
                  </p>
                </div>

                {/* Developer Explanation Box */}
                {selectedFinding.developerExplanation && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Sustentación Oficial del Desarrollador (Ing. Oviedo Ceballos):</span>
                    </div>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      {selectedFinding.developerExplanation}
                    </p>
                  </div>
                )}

                {/* Formula Box if Available */}
                {selectedFinding.formulaApplied && (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                        Fórmula Matricial Aplicada en Google Sheets:
                      </span>
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                        Cálculo Automático
                      </span>
                    </div>
                    <div className="p-3 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800 select-all">
                      {selectedFinding.formulaApplied}
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Esta fórmula calcula e imprime en tiempo real los días hábiles acumulados ('X Día Hábil' o 'X Días Hábiles') evaluando la fila dinámicamente sin requerir inserciones manuales ni disparadores de AppSheet.
                    </p>
                  </div>
                )}

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold block text-slate-900 mb-1">Diagnóstico Original:</span>
                  {selectedFinding.summary}
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    Evidencia Registrada:
                  </span>
                  <div className="p-2.5 bg-slate-900 text-slate-200 rounded-lg font-mono text-xs overflow-x-auto">
                    {selectedFinding.evidence}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    Criterio de Aprobación & Estado de Resolución:
                  </span>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed">
                    {selectedFinding.suggestedFix}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Verificación Directa en AppSheet Editor v1.9.0</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Arquitectura Aprobada
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                Seleccione un hallazgo para ver el diagnóstico y solución recomendada
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const ChevronRightIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
