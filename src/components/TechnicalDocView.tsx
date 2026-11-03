import React, { useState } from 'react';
import {
  Database,
  Layers,
  Cpu,
  Workflow,
  Search,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Code2,
  FileSpreadsheet,
  Mail,
  Shield,
  FileCode,
  Network
} from 'lucide-react';
import {
  APP_METADATA,
  APP_TABLES,
  AUTOMATION_BOTS,
  ROAD_SERVICES,
  TableSummary,
  AutomationBot
} from '../data/appData';

export const TechnicalDocView: React.FC = () => {
  const [subTab, setSubTab] = useState<'architecture' | 'data-model' | 'bots' | 'services'>('architecture');
  const [selectedTable, setSelectedTable] = useState<TableSummary>(APP_TABLES[0]);
  const [columnSearch, setColumnSearch] = useState('');
  const [selectedBot, setSelectedBot] = useState<AutomationBot | null>(AUTOMATION_BOTS[0]);
  const [serviceCategory, setServiceCategory] = useState<string>('all');

  return (
    <div className="space-y-8 py-6">
      
      {/* Header section with sub-tabs */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-800">
              Especificación Técnica
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Documentación Técnica y Arquitectura
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Componentes, dependencias estáticas, catálogo de datos, automatizaciones y diagramas de sistema
          </p>
        </div>

        {/* Sub-tabs selector */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-medium self-start md:self-auto overflow-x-auto no-scrollbar max-w-full">
          <button
            onClick={() => setSubTab('architecture')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              subTab === 'architecture'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Network className="w-3.5 h-3.5 text-blue-600" />
            <span>Diagramas de Arquitectura</span>
          </button>

          <button
            onClick={() => setSubTab('data-model')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              subTab === 'data-model'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-emerald-600" />
            <span>Modelo de Datos (12 Tablas)</span>
          </button>

          <button
            onClick={() => setSubTab('bots')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              subTab === 'bots'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Workflow className="w-3.5 h-3.5 text-amber-600" />
            <span>Bots & Apps Script (10)</span>
          </button>

          <button
            onClick={() => setSubTab('services')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              subTab === 'services'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>14 Servicios Viales</span>
          </button>
        </div>
      </div>

      {/* SUBTAB 1: ARCHITECTURE DIAGRAMS */}
      {subTab === 'architecture' && (
        <div className="space-y-8">
          
          {/* Main System Architecture Flow Diagram */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Diagrama de Arquitectura Tecnológica Integral
                </h3>
                <p className="text-xs text-slate-500">
                  Flujo de datos síncrono y asíncrono entre AppSheet, Google Cloud Platform, Workspace y Looker Studio
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 self-start">
                cloud-native serverless
              </span>
            </div>

            {/* Visual SVG Diagram */}
            <div className="w-full overflow-x-auto p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="min-w-[850px] py-4">
                <svg viewBox="0 0 920 420" className="w-full h-auto text-white">
                  <defs>
                    <linearGradient id="gradClient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    <linearGradient id="gradEngine" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="gradData" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#B45309" />
                    </linearGradient>
                    <linearGradient id="gradScript" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#6D28D9" />
                    </linearGradient>
                    <linearGradient id="gradOut" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#BE185D" />
                    </linearGradient>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 8 5 L 0 9 z" fill="#94A3B8" />
                    </marker>
                  </defs>

                  {/* Level 1: Client Layers */}
                  <g transform="translate(20, 40)">
                    <rect width="160" height="340" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="80" y="32" textAnchor="middle" fill="#94A3B8" fontSize="12" fontWeight="bold">1. CAPA CLIENTE</text>

                    <rect x="15" y="55" width="130" height="75" rx="8" fill="url(#gradClient)" />
                    <text x="80" y="85" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="bold">Usuarios de la Vía</text>
                    <text x="80" y="105" textAnchor="middle" fill="#DBEAFE" fontSize="9">Radicación Web/Móvil</text>
                    <text x="80" y="118" textAnchor="middle" fill="#DBEAFE" fontSize="8">(14 Servicios)</text>

                    <rect x="15" y="150" width="130" height="80" rx="8" fill="url(#gradClient)" />
                    <text x="80" y="180" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="bold">Gestores Técnicos</text>
                    <text x="80" y="200" textAnchor="middle" fill="#DBEAFE" fontSize="9">Resolución por Dpto</text>
                    <text x="80" y="215" textAnchor="middle" fill="#DBEAFE" fontSize="8">(Firma Digital)</text>

                    <rect x="15" y="250" width="130" height="75" rx="8" fill="url(#gradClient)" />
                    <text x="80" y="280" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="bold">Administradores</text>
                    <text x="80" y="300" textAnchor="middle" fill="#DBEAFE" fontSize="9">Control Global &</text>
                    <text x="80" y="313" textAnchor="middle" fill="#DBEAFE" fontSize="8">Apelaciones</text>
                  </g>

                  {/* Connector 1 -> 2 */}
                  <path d="M 180 180 L 230 180" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

                  {/* Level 2: AppSheet Platform Engine */}
                  <g transform="translate(240, 40)">
                    <rect width="200" height="340" rx="12" fill="#1E293B" stroke="#059669" strokeWidth="2" />
                    <text x="100" y="32" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">2. APPSHEET CORE</text>

                    <rect x="15" y="55" width="170" height="50" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="100" y="78" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="bold">Motor de Seguridad</text>
                    <text x="100" y="94" textAnchor="middle" fill="#94A3B8" fontSize="8">Security Filters (USEREMAIL)</text>

                    <rect x="15" y="120" width="170" height="65" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="100" y="142" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="bold">Semáforo Virtual</text>
                    <text x="100" y="158" textAnchor="middle" fill="#94A3B8" fontSize="8">NETWORKDAYS.INTL (Días Hábiles)</text>
                    <text x="100" y="172" textAnchor="middle" fill="#34D399" fontSize="8">Cruce Festivos 2025-2036</text>

                    <rect x="15" y="200" width="170" height="55" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="100" y="222" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="bold">Consecutivos Síncronos</text>
                    <text x="100" y="238" textAnchor="middle" fill="#94A3B8" fontSize="8">PQR-2026-XXXXXX / GES</text>

                    <rect x="15" y="270" width="170" height="55" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="100" y="292" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="bold">10 Bots Automatizados</text>
                    <text x="100" y="308" textAnchor="middle" fill="#94A3B8" fontSize="8">Crear PDF / Disparo Scripts</text>
                  </g>

                  {/* Connector 2 -> 3 */}
                  <path d="M 440 130 L 490 110" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />
                  <path d="M 440 290 L 490 280" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Level 3: Data & Storage */}
                  <g transform="translate(500, 40)">
                    <rect width="180" height="340" rx="12" fill="#1E293B" stroke="#D97706" strokeWidth="1.5" />
                    <text x="90" y="32" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="bold">3. ALMACENAMIENTO</text>

                    <rect x="15" y="55" width="150" height="85" rx="8" fill="url(#gradData)" />
                    <text x="90" y="85" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="bold">Google Sheets</text>
                    <text x="90" y="105" textAnchor="middle" fill="#FEF3C7" fontSize="9">12 Tablas Maestras</text>
                    <text x="90" y="120" textAnchor="middle" fill="#FEF3C7" fontSize="8">(198 Columnas & LAMBDAs)</text>

                    <rect x="15" y="155" width="150" height="80" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="90" y="182" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="bold">Google Drive Storage</text>
                    <text x="90" y="200" textAnchor="middle" fill="#94A3B8" fontSize="8">📁 /Gestion_PDF (Respuestas)</text>
                    <text x="90" y="215" textAnchor="middle" fill="#94A3B8" fontSize="8">📁 /Reportes_Generados</text>

                    <rect x="15" y="250" width="150" height="75" rx="8" fill="url(#gradScript)" />
                    <text x="90" y="278" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold">Google Apps Script</text>
                    <text x="90" y="296" textAnchor="middle" fill="#EDE9FE" fontSize="8">4 Proyectos Script</text>
                    <text x="90" y="310" textAnchor="middle" fill="#EDE9FE" fontSize="8">(Gestión, Alertas, Apelación)</text>
                  </g>

                  {/* Connector 3 -> 4 */}
                  <path d="M 680 180 L 730 180" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Level 4: External Integrations */}
                  <g transform="translate(740, 40)">
                    <rect width="160" height="340" rx="12" fill="#1E293B" stroke="#DB2777" strokeWidth="1.5" />
                    <text x="80" y="32" textAnchor="middle" fill="#F472B6" fontSize="12" fontWeight="bold">4. CANALES & BI</text>

                    <rect x="15" y="55" width="130" height="75" rx="8" fill="url(#gradOut)" />
                    <text x="80" y="85" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold">Gmail Corporativo</text>
                    <text x="80" y="103" textAnchor="middle" fill="#FCE7F3" fontSize="8">Despacho con PDF</text>
                    <text x="80" y="116" textAnchor="middle" fill="#FCE7F3" fontSize="8">Adjunto al Ciudadano</text>

                    <rect x="15" y="150" width="130" height="75" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="80" y="178" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="bold">Looker Studio</text>
                    <text x="80" y="196" textAnchor="middle" fill="#94A3B8" fontSize="8">Tableros Directivos</text>
                    <text x="80" y="210" textAnchor="middle" fill="#94A3B8" fontSize="8">BI en Tiempo Real</text>

                    <rect x="15" y="245" width="130" height="75" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="80" y="272" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="bold">Alertas Apelación</text>
                    <text x="80" y="290" textAnchor="middle" fill="#94A3B8" fontSize="8">Escalamiento Inmediato</text>
                    <text x="80" y="303" textAnchor="middle" fill="#94A3B8" fontSize="8">Jefes de Área</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Architecture Explanatory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-900 block mb-1">
                  1. Motor de Tiempos Legales (CPACA)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calcula síncronamente los días hábiles a través de la fórmula matricial <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">_xlfn.NETWORKDAYS.INTL</code> cruzada con la tabla de feriados colombianos 2025-2036.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-900 block mb-1">
                  2. Canal Asíncrono Apps Script
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evita bloqueos en la interfaz delegando el despacho masivo de correos con adjuntos PDF en servicios de Google Apps Script ejecutados mediante el bot <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">Enviar Respuesta Gestion</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-900 block mb-1">
                  3. Seguridad Multi-Nivel (RBAC)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Controla la visibilidad y edición de registros mediante <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">USEREMAIL()</code> asegurando que cada gestor únicamente visualice los casos que competen a su departamento.
                </p>
              </div>
            </div>
          </div>

          {/* Lifecycle State Machine of a PQRSD */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-slate-900">
              Ciclo de Vida y Máquina de Estados de una PQRSD
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {[
                {
                  step: "01",
                  title: "Radicación",
                  state: "Abierta",
                  color: "bg-blue-50 text-blue-900 border-blue-200",
                  badge: "bg-blue-600 text-white",
                  desc: "El usuario o punto de atención ingresa datos. Bot genera código PQR-YYYY-XXXXXX."
                },
                {
                  step: "02",
                  title: "Delegación & Alerta",
                  state: "En Trámite",
                  color: "bg-amber-50 text-amber-900 border-amber-200",
                  badge: "bg-amber-600 text-white",
                  desc: "Asignación a departamento y gestor. Apps Script envía correo de alerta interna."
                },
                {
                  step: "03",
                  title: "Soporte & Anexos",
                  state: "Investigación",
                  color: "bg-indigo-50 text-indigo-900 border-indigo-200",
                  badge: "bg-indigo-600 text-white",
                  desc: "Cargue de evidencias fotográficas en ArchivosPostPqr si se requieren pruebas técnicas."
                },
                {
                  step: "04",
                  title: "Resolución & PDF",
                  state: "Atendida",
                  color: "bg-emerald-50 text-emerald-900 border-emerald-200",
                  badge: "bg-emerald-600 text-white",
                  desc: "Redacción de respuesta, generación de PDF oficial y despacho automático vía Gmail."
                },
                {
                  step: "05",
                  title: "Cierre o Apelación",
                  state: "Cerrada / Apelada",
                  color: "bg-slate-100 text-slate-900 border-slate-300",
                  badge: "bg-slate-900 text-white",
                  desc: "Cierre formal definitivo o reapertura en segunda instancia si el usuario interpone apelación."
                }
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${phase.color} flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/70 border border-current">
                        Paso {phase.step}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${phase.badge}`}>
                        {phase.state}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {phase.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Architecture & UI Component Gallery */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 mb-1 inline-block">
                  Evidencia Visual del Entorno
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Referencias de Arquitectura y Vistas Desplegadas en AppSheet
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Vistas Canónicas v1.000572
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="h-40 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center mb-2">
                    <img
                      src="/assets/manual/actualizacion_1.png"
                      alt="Dashboard Analítico"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Dashboard Analítico en Tiempo Real
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    Tableros interactivos con métricas de servicios, gestores, estados y filtros dinámicos.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded self-start">
                  Vista DashBoard (menu)
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="h-40 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center mb-2">
                    <img
                      src="/assets/manual/pantallazo_1.png"
                      alt="Bandeja de Radicados"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Bandeja Principal y Semáforo Legal
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    Seguimiento de términos conforme a la Ley 1755 (10 y 15 días hábiles).
                  </p>
                </div>
                <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded self-start">
                  Vista Lista de Pqrs
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="h-40 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center mb-2">
                    <img
                      src="/assets/manual/pantallazo_10.png"
                      alt="Formulario de Gestión"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Formulario de Gestión y Contestación
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    Captura de respuesta oficial, asignación de estado y adjuntos técnicos.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded self-start">
                  Vista GestionPqr_Form
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="h-40 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center mb-2">
                    <img
                      src="/assets/manual/novedad_nov_13.png"
                      alt="Reporte Excel ANI"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Reporte Consolidado en Excel (.xlsx)
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    Libro generado con membrete oficial de Ruta Magdalena Sierra Mar para auditoría ANI.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded self-start">
                  Bot Todas las Pqr
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: DATA MODEL (12 TABLES & COLUMNS EXPLORER) */}
      {subTab === 'data-model' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Table List Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                Tablas del Sistema ({APP_TABLES.length})
              </span>
              
              <div className="space-y-1.5">
                {APP_TABLES.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => { setSelectedTable(t); setColumnSearch(''); }}
                    className={`w-full p-3 rounded-xl text-left flex items-center justify-between transition-all ${
                      selectedTable.name === t.name
                        ? 'bg-slate-900 text-white font-semibold shadow-xs'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Database className={`w-4 h-4 ${selectedTable.name === t.name ? 'text-emerald-400' : 'text-slate-400'}`} />
                      <span className="text-xs font-mono">{t.name}</span>
                    </div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      selectedTable.name === t.name ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {t.columnsCount} cols
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table Detail & Schema Inspector (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold font-mono text-slate-900">
                      {selectedTable.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {selectedTable.columnsCount} Columnas Totales
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {selectedTable.description}
                  </p>
                </div>

                <div className="text-right text-xs text-slate-400 font-mono">
                  <div>Llave: <span className="font-bold text-slate-700">{selectedTable.keyColumn}</span></div>
                  <div>Etiqueta: <span className="font-bold text-slate-700">{selectedTable.labelColumn}</span></div>
                </div>
              </div>

              {/* Security Filter info */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                <span className="font-bold text-slate-900 block mb-1">
                  Regla de Seguridad (Security Filter):
                </span>
                <code className="text-xs font-mono text-slate-700 break-all">
                  {selectedTable.securityFilter}
                </code>
              </div>

              {/* Search column input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Filtrar columnas por nombre o tipo..."
                  value={columnSearch}
                  onChange={(e) => setColumnSearch(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Columns Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Columna</th>
                      <th className="py-2.5 px-3">Tipo</th>
                      <th className="py-2.5 px-3">Requerido</th>
                      <th className="py-2.5 px-3">Fórmula / Regla AppSheet</th>
                      <th className="py-2.5 px-3">Propósito</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedTable.keyColumns
                      .filter(c => c.name.toLowerCase().includes(columnSearch.toLowerCase()) || c.type.toLowerCase().includes(columnSearch.toLowerCase()))
                      .map((col, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-2.5 px-3 font-mono font-medium text-slate-900">
                            {col.name}
                          </td>
                          <td className="py-2.5 px-3">
                            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200">
                              {col.type}
                            </span>
                          </td>
                          <td className="py-2.5 px-3">
                            {col.required ? (
                              <span className="text-rose-600 font-bold">Sí</span>
                            ) : (
                              <span className="text-slate-400">No</span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 max-w-xs">
                            {col.formula ? (
                              <code className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 line-clamp-2" title={col.formula}>
                                {col.formula}
                              </code>
                            ) : (
                              <span className="text-slate-400 italic">Entrada manual</span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 text-slate-600">
                            {col.description}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: BOTS & APPS SCRIPT CATALOG */}
      {subTab === 'bots' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bots List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                Bots de Automatización Activos ({AUTOMATION_BOTS.length})
              </span>

              <div className="space-y-2">
                {AUTOMATION_BOTS.map((bot) => (
                  <button
                    key={bot.name}
                    onClick={() => setSelectedBot(bot)}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all ${
                      selectedBot?.name === bot.name
                        ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-900 line-clamp-1">
                        {bot.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 shrink-0">
                        {bot.processType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <span>Tabla: {bot.table}</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-semibold">{bot.event}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bot Inspector & Script Parameters (7 cols) */}
          <div className="lg:col-span-7">
            {selectedBot ? (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <Workflow className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-lg font-bold text-slate-900">
                        {selectedBot.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tabla Disparadora: <span className="font-mono font-semibold text-slate-800">{selectedBot.table}</span>
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Bot Activo
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block mb-1">Descripción Funcional:</span>
                    {selectedBot.description}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="text-xs text-slate-500 block mb-1">Evento Disparador:</span>
                      <span className="text-xs font-bold text-slate-900">{selectedBot.event}</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="text-xs text-slate-500 block mb-1">Tipo de Proceso:</span>
                      <span className="text-xs font-bold text-slate-900">{selectedBot.processType}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">Condición de Ejecución:</span>
                    <code className="block p-2.5 bg-slate-900 text-slate-200 rounded-lg text-xs font-mono overflow-x-auto">
                      {selectedBot.condition}
                    </code>
                  </div>

                  {selectedBot.scriptProject && (
                    <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-purple-900">
                        <FileCode className="w-4 h-4 text-purple-700" />
                        <span>Proyecto Google Apps Script Vinculado</span>
                      </div>
                      <div className="text-xs text-purple-950 font-mono">
                        <div>Proyecto: <strong>{selectedBot.scriptProject}</strong></div>
                        <div>Función Invocada: <code className="bg-white px-1.5 py-0.5 rounded border border-purple-200">{selectedBot.scriptFunction}()</code></div>
                      </div>
                    </div>
                  )}

                  {selectedBot.targetFolder && (
                    <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl">
                      <span className="text-xs font-bold text-blue-900 block mb-1">
                        Carpeta Destino en Google Drive:
                      </span>
                      <code className="text-xs font-mono text-blue-950 font-bold bg-white px-2 py-0.5 rounded border border-blue-200">
                        {selectedBot.targetFolder}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                Seleccione un bot de automatización para inspeccionar sus parámetros y script
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUBTAB 4: 14 ROAD SERVICES TAXONOMY */}
      {subTab === 'services' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Catálogo de los 14 Servicios Viales Concesionados
              </h3>
              <p className="text-xs text-slate-500">
                Cobertura temática obligatoria para indexación de PQRSD en Ruta Magdalena Sierra Mar
              </p>
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setServiceCategory('all')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  serviceCategory === 'all' ? 'bg-slate-900 text-white font-medium' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Todos (14)
              </button>
              <button
                onClick={() => setServiceCategory('Asistencia y Operación')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  serviceCategory === 'Asistencia y Operación' ? 'bg-slate-900 text-white font-medium' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Operación
              </button>
              <button
                onClick={() => setServiceCategory('Infraestructura y Vía')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  serviceCategory === 'Infraestructura y Vía' ? 'bg-slate-900 text-white font-medium' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Infraestructura
              </button>
              <button
                onClick={() => setServiceCategory('Atención y Comunidad')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  serviceCategory === 'Atención y Comunidad' ? 'bg-slate-900 text-white font-medium' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Comunidad
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROAD_SERVICES
              .filter(s => serviceCategory === 'all' || s.category === serviceCategory)
              .map((serv) => (
                <div
                  key={serv.code}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                        {serv.code}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {serv.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {serv.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {serv.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700 block mb-0.5">Ejemplo de Requerimiento:</span>
                    {serv.typicalPqrs}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

    </div>
  );
};
