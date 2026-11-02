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
  ExternalLink
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
  // Severity filter for App Health
  const [healthFilter, setHealthFilter] = useState<'all' | 'high' | 'medium' | 'info'>('all');
  const [selectedFinding, setSelectedFinding] = useState<HealthFinding | null>(HEALTH_FINDINGS[0]);

  // SLA simulator state
  const [simCreationDate, setSimCreationDate] = useState<string>('2026-10-25');
  const [simPriority, setSimPriority] = useState<string>('General');
  const [simState, setSimState] = useState<'Abierta' | 'Atendida' | 'Cerrada'>('Abierta');
  const [simResponseDate, setSimResponseDate] = useState<string>('2026-11-04');

  const healthScore = calculateHealthScore(HEALTH_FINDINGS);

  const filteredFindings = HEALTH_FINDINGS.filter((f) => {
    if (healthFilter === 'all') return true;
    return f.severity === healthFilter;
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

          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <FileCheck2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Índice Salud</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-emerald-300">
              {healthScore}%
            </div>
            <span className="text-[11px] text-slate-400">Auditoría AppSheet</span>
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

      {/* App Health Auditor Panel (21 findings analyzed) */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">
                Auditoría Estática
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Diagnóstico de Salud de la Aplicación (App Health)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Análisis completo de los 21 hallazgos capturados por el toolkit de AppSheet con su plan de remediación técnica
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium self-start sm:self-auto">
            <button
              onClick={() => setHealthFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                healthFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos (21)
            </button>
            <button
              onClick={() => setHealthFilter('high')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                healthFilter === 'high'
                  ? 'bg-white text-rose-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-rose-600'
              }`}
            >
              Alto (1)
            </button>
            <button
              onClick={() => setHealthFilter('medium')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                healthFilter === 'medium'
                  ? 'bg-white text-amber-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-amber-600'
              }`}
            >
              Medio (4)
            </button>
            <button
              onClick={() => setHealthFilter('info')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                healthFilter === 'info'
                  ? 'bg-white text-blue-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Informativo (16)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Findings List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredFindings.map((finding) => (
              <div
                key={finding.id}
                onClick={() => setSelectedFinding(finding)}
                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                  selectedFinding?.id === finding.id
                    ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      finding.severity === 'high'
                        ? 'bg-rose-100 text-rose-800'
                        : finding.severity === 'medium'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {finding.severity === 'high' ? 'Crítico (High)' : finding.severity === 'medium' ? 'Medio' : 'Info'}
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
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        selectedFinding.severity === 'high'
                          ? 'bg-rose-100 text-rose-800 border border-rose-300'
                          : selectedFinding.severity === 'medium'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-blue-100 text-blue-800 border border-blue-300'
                      }`}
                    >
                      Prioridad {selectedFinding.severity.toUpperCase()}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                      {selectedFinding.resolutionStatus}
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

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold block text-slate-900 mb-1">Diagnóstico:</span>
                  {selectedFinding.summary}
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    Evidencia en el Snapshot:
                  </span>
                  <div className="p-2.5 bg-slate-900 text-slate-200 rounded-lg font-mono text-xs overflow-x-auto">
                    {selectedFinding.evidence}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    Recomendación Técnica & Guía de Corrección:
                  </span>
                  <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs text-emerald-950 leading-relaxed">
                    {selectedFinding.suggestedFix}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Análisis Estático Verificado en AppSheet v1.9.0</span>
                  <span className="text-slate-700 font-medium">Resolución No Destructiva</span>
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
