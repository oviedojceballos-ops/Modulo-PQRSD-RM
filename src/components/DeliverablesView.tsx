import React, { useState } from 'react';
import {
  ClipboardCheck,
  ShieldCheck,
  Rocket,
  Wrench,
  CheckCircle2,
  FileText,
  AlertTriangle,
  FolderTree,
  KeyRound,
  ExternalLink,
  Download,
  Printer
} from 'lucide-react';
import { APP_METADATA, TEST_PLAN_CASES } from '../data/appData';

export const DeliverablesView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'acta' | 'roles' | 'tests' | 'deployment' | 'maintenance'>('acta');
  const [filterTestCategory, setFilterTestCategory] = useState<string>('all');

  const filteredTests = TEST_PLAN_CASES.filter(t => {
    if (filterTestCategory === 'all') return true;
    return t.category === filterTestCategory;
  });

  return (
    <div className="space-y-8 py-6">
      
      {/* Header and Sections Selector */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-indigo-100 text-indigo-800">
              Entregable Oficial al Cliente
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Documentación de Entrega, Pruebas y Despliegue
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Acta de entrega formal, matriz de roles y permisos, plan de pruebas de software y guía de mantenimiento
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-medium self-start md:self-auto overflow-x-auto no-scrollbar max-w-full">
          <button
            onClick={() => setActiveSection('acta')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeSection === 'acta' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>Acta de Entrega</span>
          </button>

          <button
            onClick={() => setActiveSection('roles')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeSection === 'roles' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Matriz de Roles</span>
          </button>

          <button
            onClick={() => setActiveSection('tests')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeSection === 'tests' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ClipboardCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Plan de Pruebas ({TEST_PLAN_CASES.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('deployment')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeSection === 'deployment' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Rocket className="w-3.5 h-3.5 text-amber-600" />
            <span>Estrategia Despliegue</span>
          </button>

          <button
            onClick={() => setActiveSection('maintenance')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeSection === 'maintenance' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-rose-600" />
            <span>Guía Mantenimiento</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: ACTA DE ENTREGA */}
      {activeSection === 'acta' && (
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                DOCUMENTO OFICIAL DE ENTREGABLE
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Acta de Entrega de Solución de Software
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Concesión Vial Ruta Magdalena Sierra Mar — Sistema PQRSD v1.000572
              </p>
            </div>

            <div className="text-left sm:text-right text-xs text-slate-500 font-mono">
              <div>Fecha: <strong>{APP_METADATA.emissionDate}</strong></div>
              <div>Estado: <strong className="text-emerald-700">Aprobado para Operación</strong></div>
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-slate-700 space-y-4 text-xs sm:text-sm leading-relaxed">
            <p>
              Por medio del presente documento se formaliza la entrega y puesta en producción de la aplicación <strong>"{APP_METADATA.title}"</strong>, desarrollada a la medida en la plataforma <strong>Google AppSheet Enterprise</strong> para la <strong>Concesión Vial Ruta Magdalena Sierra Mar</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-slate-900 block">Alcance Entregado:</span>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                  <li>Radicación de Peticiones, Quejas, Reclamos, Sugerencias y Denuncias en 14 servicios viales.</li>
                  <li>Motor síncrono de consecutivo correlativo institucional (<code className="font-mono text-emerald-800">PQR-YYYY-XXXXXX</code>).</li>
                  <li>Semáforo legal de vencimiento en días hábiles (Ley 1755 de 2015 / CPACA).</li>
                  <li>Cálculo automatizado con base de festivos de Colombia 2025–2036.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-slate-900 block">Automatizaciones e Integraciones:</span>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                  <li>Generación automatizada de PDF formal membretado con firma en <code className="font-mono text-blue-800">/Gestion_PDF</code>.</li>
                  <li>Despacho por correo electrónico con adjunto vía Google Apps Script.</li>
                  <li>Módulo de radicación de anexos probatorios posteriores.</li>
                  <li>Módulo de apelaciones de segunda instancia y alertas a Jefes de Área.</li>
                  <li>Tablero de control y reportes consolidados exportables a Excel (<code className="font-mono text-amber-800">.xlsx</code>).</li>
                </ul>
              </div>
            </div>

            <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">
              Inventario de Artefactos Entregados
            </h3>

            <div className="overflow-x-auto border border-slate-200 rounded-xl not-prose">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Artefacto / Componente</th>
                    <th className="py-2.5 px-3">Cantidad</th>
                    <th className="py-2.5 px-3">Repositorio / Formato</th>
                    <th className="py-2.5 px-3">Estado de Verificación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Tablas Maestras y Schemas</td>
                    <td className="py-2.5 px-3 font-mono">12 tablas / 198 cols</td>
                    <td className="py-2.5 px-3">Google Sheets / AppSheet Database</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-semibold">100% Verificado</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Vistas de Usuario y Dashboards</td>
                    <td className="py-2.5 px-3 font-mono">50 vistas (19 custom)</td>
                    <td className="py-2.5 px-3">AppSheet Native UI</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-semibold">100% Verificado</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Acciones del Sistema</td>
                    <td className="py-2.5 px-3 font-mono">134 acciones</td>
                    <td className="py-2.5 px-3">AppSheet Behavior Actions</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-semibold">100% Verificado</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Bots de Automatización</td>
                    <td className="py-2.5 px-3 font-mono">10 bots / 17 tareas</td>
                    <td className="py-2.5 px-3">AppSheet Automation Engine</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-semibold">100% Verificado</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Proyectos Google Apps Script</td>
                    <td className="py-2.5 px-3 font-mono">4 proyectos</td>
                    <td className="py-2.5 px-3">Google Apps Script (.gs)</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-semibold">100% Verificado</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Manuales de Usuario y Técnico</td>
                    <td className="py-2.5 px-3 font-mono">2 manuales</td>
                    <td className="py-2.5 px-3">PDF oficial & Markdown</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-semibold">100% Entregado</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 mt-6 border-t border-slate-200 not-prose">
              <div className="space-y-4">
                <div className="h-16 border-b border-dashed border-slate-300"></div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Entregado por:</div>
                  <div className="text-slate-600">Ing. Oviedo J. Ceballos</div>
                  <div className="text-slate-400">Desarrollador & Arquitecto de Solución AppSheet</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-16 border-b border-dashed border-slate-300"></div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Recibido a Conformidad por:</div>
                  <div className="text-slate-600">Dirección de Operaciones & Calidad</div>
                  <div className="text-slate-400">Concesión Vial Ruta Magdalena Sierra Mar</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* SECTION 2: MATRIZ DE ROLES Y PERMISOS */}
      {activeSection === 'roles' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Matriz de Roles y Permisos (RBAC)
            </h2>
            <p className="text-xs text-slate-500">
              Reglas de visibilidad y acceso por perfil basadas en USEREMAIL() y el campo Rol de la tabla Gestores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Admin Profile */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <h3 className="text-base font-bold">Perfil: Administrador / Creador</h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/20 text-white">
                  Control Total
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Posee permisos globales y explícitos sobre todas las tablas maestras (Pqrs, Gestores, Departamentos, Noticias, Reportes).
              </p>

              <div className="space-y-2 text-xs">
                <span className="font-bold text-emerald-300 block">Facultades Exclusivas:</span>
                <ul className="space-y-1.5 text-slate-300 list-disc pl-4">
                  <li>Crear, editar y deshabilitar Departamentos y Gestores.</li>
                  <li>Reapertura de casos cerrados e interposición del trámite de <strong>Apelación</strong>.</li>
                  <li>Auditoría de estadísticas globales en Looker Studio y Dashboards.</li>
                  <li>Generación y descarga de reportes consolidados en Excel (.xlsx).</li>
                  <li>Publicación y gestión de noticias y alertas viales.</li>
                </ul>
              </div>
            </div>

            {/* Gestor Profile */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <h3 className="text-base font-bold text-slate-900">Perfil: Gestor Técnico</h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  Operativo / Asignado
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Funcionario operativo asignado a dependencias específicas de la concesión vial (Mantenimiento, Peajes, Operaciones, Jurídica).
              </p>

              <div className="space-y-2 text-xs">
                <span className="font-bold text-slate-900 block">Límites y Condiciones:</span>
                <ul className="space-y-1.5 text-slate-600 list-disc pl-4">
                  <li>Solo visualiza las PQRSD correspondientes a su propio departamento (Security Filter).</li>
                  <li>Redacta la contestación técnica en el formulario 'Gestionar Pqr'.</li>
                  <li>Genera el PDF oficial y activa el despacho de correo al usuario.</li>
                  <li><strong>Bloqueo de Modificación:</strong> No puede editar la contestación una vez generado el PDF formal o si el caso está cerrado.</li>
                  <li>No tiene permiso de eliminación ni gestión de usuarios.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* SECTION 3: PLAN DE PRUEBAS */}
      {activeSection === 'tests' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Plan de Pruebas y Matriz de Verificación (QA)
              </h2>
              <p className="text-xs text-slate-500">
                Casos de prueba funcionales, de seguridad, SLA y automatizaciones ejecutados sobre la versión 1.000572
              </p>
            </div>

            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setFilterTestCategory('all')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterTestCategory === 'all' ? 'bg-slate-900 text-white font-medium' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Todos ({TEST_PLAN_CASES.length})
              </button>
              <button
                onClick={() => setFilterTestCategory('Funcional')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterTestCategory === 'Funcional' ? 'bg-slate-900 text-white font-medium' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Funcional
              </button>
              <button
                onClick={() => setFilterTestCategory('SLA / Días Hábiles')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterTestCategory === 'SLA / Días Hábiles' ? 'bg-slate-900 text-white font-medium' : 'bg-slate-100 text-slate-600'
                }`}
              >
                SLA / Ley 1755
              </button>
              <button
                onClick={() => setFilterTestCategory('Automatización')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterTestCategory === 'Automatización' ? 'bg-slate-900 text-white font-medium' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Bots & PDF
              </button>
              <button
                onClick={() => setFilterTestCategory('Seguridad')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterTestCategory === 'Seguridad' ? 'bg-slate-900 text-white font-medium' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Seguridad
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredTests.map((tc) => (
              <div
                key={tc.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                      {tc.id}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                      {tc.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {tc.title}
                    </h4>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {tc.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-semibold text-slate-700 block mb-1">Precondición & Entorno:</span>
                    <p className="text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                      {tc.precondition}
                    </p>

                    <span className="font-semibold text-slate-700 block mt-2 mb-1">Pasos Ejecutados:</span>
                    <ol className="list-decimal pl-4 space-y-0.5 text-slate-600">
                      {tc.steps.map((st, i) => (
                        <li key={i}>{st}</li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-700 block mb-1">Resultado Esperado y Obtenido:</span>
                    <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-200 text-emerald-950 leading-relaxed">
                      {tc.expectedResult}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 4: ESTRATEGIA DE DESPLIEGUE */}
      {activeSection === 'deployment' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Estrategia y Plan de Despliegue (Go-Live)
            </h2>
            <p className="text-xs text-slate-500">
              Fases de promoción entre ambientes de Desarrollo, Staging e implementación final en Producción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  Fase 1: Preparación
                </span>
                <span className="text-xs text-slate-400">Google Workspace</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">Aprovisionamiento de Orígenes</h3>
              <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Creación de la carpeta compartida en Google Drive para la Concesión.</li>
                <li>Estructuración de carpetas: <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">/Gestion_PDF</code> y <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">/Reportes/Reportes_Generados</code>.</li>
                <li>Verificación del libro Google Sheets con las 12 hojas y fórmulas matriciales activas.</li>
                <li>Cargue del calendario de festivos de Colombia (2025 al 2036).</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  Fase 2: Autorización
                </span>
                <span className="text-xs text-slate-400">Apps Script</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">Permisos y Despacho de Correo</h3>
              <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Vinculación de los 4 proyectos de Apps Script: <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">Gestion desde Corporativo</code>, <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">Notificar_Departamento</code>, <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">Anexos</code>, <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">Apelacion_Deepseek</code>.</li>
                <li>Concesión de permisos OAuth de Google Workspace para envío de correo institucional desde el buzón de la concesión.</li>
                <li>Validación del bot <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">CrearPDF_GestionPqr_General</code>.</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Fase 3: Producción
                </span>
                <span className="text-xs text-slate-400">Go-Live</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">Lanzamiento & Socialización</h3>
              <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Configuración del dominio institucional y lista blanca de usuarios de la concesión.</li>
                <li>Activación de los Security Filters departamentales.</li>
                <li>Entrega de credenciales y capacitación técnica a Gestores.</li>
                <li>Activación de la integración en Looker Studio para interventoría.</li>
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* SECTION 5: GUIA DE MANTENIMIENTO DEL ENTORNO */}
      {activeSection === 'maintenance' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Guía de Configuración y Mantenimiento del Entorno
            </h2>
            <p className="text-xs text-slate-500">
              Protocolos de soporte preventivo, correctivo y contingencias de la infraestructura AppSheet
            </p>
          </div>

          <div className="space-y-4">
            
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  Corrección del Hallazgo Crítico en Acción: Actualizar campos Action - 1
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Causa:</strong> En la tabla <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">GestionPqr</code>, la acción intenta actualizar la columna <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">TiempoRespuesta</code>, la cual no existe en la base de datos física (la columna real es <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">FechaRespuesta</code>).
              </p>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                <strong>Procedimiento de Corrección:</strong> En AppSheet Editor &rarr; Navegar a Behavior &rarr; Actions &rarr; GestionPqr &rarr; <em>Actualizar campos Action - 1</em> &rarr; en el segundo bloque de "Set these columns", cambiar el selector de columna a <code>FechaRespuesta</code> y asignar el valor <code>=[ID_PQR].[Fecha_Respuesta]</code>. Guardar y verificar que el error desaparezca en App Health.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  Mantenimiento del Calendario de Días Festivos (2025–2036)
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                La tabla <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">festivos_2025_2036</code> ya cuenta con todos los feriados decretados por la Ley Emiliani hasta el año 2036. En caso de que el Gobierno Nacional decrete un día cívico o feriado extraordinario, solo debe agregarse una fila en la hoja con la fecha correspondiente en formato <code className="bg-slate-200 px-1 py-0.5 rounded text-[11px]">YYYY-MM-DD</code> y el sistema recalculará los días hábiles en la siguiente sincronización.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  Límites de Almacenamiento y Cuotas de Google Apps Script
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                • <strong>Archivos Adjuntos:</strong> El sistema advierte en el formulario no subir archivos individuales superiores a 15 MB para evitar demoras en redes móviles de carretera. Se sugiere usar enlaces de Google Drive si el archivo supera esta dimensión.<br />
                • <strong>Cuota de Correo Gmail:</strong> Las cuentas corporativas de Google Workspace disponen de hasta 1.500 envíos diarios mediante Apps Script, cubriendo holgadamente el volumen operativo mensual de la concesión vial.
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
