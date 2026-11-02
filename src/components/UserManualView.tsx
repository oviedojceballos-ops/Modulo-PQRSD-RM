import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Clock,
  Send,
  Paperclip,
  RotateCcw,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Download
} from 'lucide-react';
import { ROAD_SERVICES } from '../data/appData';

export const UserManualView: React.FC = () => {
  const [activeProcedure, setActiveProcedure] = useState<number>(1);

  const procedures = [
    {
      id: 1,
      title: "1. Radicación de una Nueva PQRSD",
      summary: "Procedimiento oficial para capturar y asignar peticiones de usuarios registrados o anónimos.",
      role: "Usuario / Gestor / Administrador",
      steps: [
        {
          num: "Paso 1",
          title: "Acceso al Formulario de Radicación",
          desc: "Acceda al menú principal de la aplicación y seleccione la vista 'Agregar Pqr' o presione el botón flotante con el ícono '+' (Add)."
        },
        {
          num: "Paso 2",
          title: "Selección del Tipo y Prioridad de Solicitud",
          desc: "Elija el Tipo de Solicitud (Petición, Queja, Reclamo, Sugerencia o Denuncia) y defina la Prioridad: 'General' (15 días hábiles legales) o 'Documentos o Información' (10 días hábiles legales)."
        },
        {
          num: "Paso 3",
          title: "Clasificación por Servicio Vial",
          desc: "Seleccione obligatoriamente el servicio de la concesión afectado (e.g. Ser-01 Ambulancia, Ser-04 Colpass, Ser-07 Peajes, Ser-09 Estado Vial, etc.)."
        },
        {
          num: "Paso 4",
          title: "Datos del Solicitante y Descripción Detallada",
          desc: "Defina si el usuario radica como 'Registrado' (requiere Identificación, Nombre y Teléfono con formato +57) o 'Anónimo'. Ingrese la descripción de los hechos y la fecha del suceso."
        },
        {
          num: "Paso 5",
          title: "Delegación Interna y Cierre de Radicación",
          desc: "Asigne el Departamento interno responsable y el Gestor encargado. Al presionar 'Guardar', el proceso automatizado 'Bot_Radicacion_IDInterno' asignará síncronamente el código oficial único en la columna ID_Interno (ej. PQR-2026-000142)."
        }
      ],
      callout: "Regla Técnica: Al guardar la PQRSD se ejecuta una acción agrupada que incrementa el contador anual en la tabla ConsecutivosPqr y genera el código estructurado PQR-[Año]-[Número]."
    },
    {
      id: 2,
      title: "2. Control de Tiempos Legales y Semáforo de Alertas",
      summary: "Monitoreo en tiempo real de días hábiles transcurridos según la Ley 1755 de 2015 y CPACA.",
      role: "Todos los Roles",
      steps: [
        {
          num: "Regla 1",
          title: "Cálculo de Días Hábiles con Festivos Colombianos",
          desc: "El sistema emplea la función matricial _xlfn.NETWORKDAYS.INTL calculando los días desde el día hábil siguiente a la radicación hasta la fecha de respuesta (o fecha actual si sigue abierta), descontando fines de semana y los días de la tabla festivos_2025_2036."
        },
        {
          num: "Regla 2",
          title: "Límites Legales según Prioridad",
          desc: "• Prioridad 'Documentos o Información': Máximo 10 días hábiles legales.\n• Prioridad 'General': Máximo 15 días hábiles legales."
        },
        {
          num: "Regla 3",
          title: "Luz Verde (Estado Atendido u Oportuno)",
          desc: "Indica que el radicado ya recibió contestación formal dentro de los términos de ley. Se visualiza con el emoji '✅ Atendida' o '✅ Cerrada'."
        },
        {
          num: "Regla 4",
          title: "Luz Amarilla (Dentro del Plazo Legal)",
          desc: "Indica que la PQR sigue abierta pero aún dispone de margen legal de respuesta. Muestra los días hábiles transcurridos y el límite restante."
        },
        {
          num: "Regla 5",
          title: "Luz Roja (Plazo Legal Vencido)",
          desc: "Alerta crítica de advertencia que informa que se superó el límite fijado por la legislación colombiana (10 o 15 días hábiles). Requiere atención prioritaria e inmediata."
        }
      ],
      callout: "Formula Virtual: La columna AlertaVencimiento_Virtual calcula de manera instantánea el semáforo sin modificar los datos fuente de Google Sheets."
    },
    {
      id: 3,
      title: "3. Formulación de Respuesta y Generación de PDF",
      summary: "Procedimiento para redactar la contestación institucional y generar el PDF membretado en Google Drive.",
      role: "Gestor Técnico / Administrador",
      steps: [
        {
          num: "Paso 1",
          title: "Acceder al Radicado Delegado",
          desc: "Desde la lista de Pqrs asignadas, abra el registro y presione el botón de acción 'Gestionar Pqr'."
        },
        {
          num: "Paso 2",
          title: "Redactar la Contestación Institucional",
          desc: "Diligencie el campo obligatorio 'Respuesta PQR' con la motivación técnica y jurídica correspondiente. Actualice el EstadoPqr a 'Atendida'."
        },
        {
          num: "Paso 3",
          title: "Adjuntar Documentación de Soporte",
          desc: "Si existen informes técnicos adicionales o radicados de correspondencia externa, cárguelos en el campo 'ArchivoRespuesta' o agregue enlaces públicos en 'Enlaces_Archivos'."
        },
        {
          num: "Paso 4",
          title: "Generación del PDF Oficial",
          desc: "Guarde la gestión y presione el botón 'Crear PDF_GestionPqr_General'. El bot 'CrearPDF_GestionPqr_General' compilará la plantilla institucional con orientación Carta, membrete de la Concesión y firma digital del gestor, almacenando el archivo en la carpeta en la nube /Gestion_PDF."
        }
      ],
      callout: "Almacenamiento: Todos los PDFs emitidos se resguardan en la carpeta /Gestion_PDF de Google Drive bajo la convención [ID_PQR]-[ID_Gestion]-[CoPDF].pdf."
    },
    {
      id: 4,
      title: "4. Despacho Automatizado por Correo vía Apps Script",
      summary: "Envío transparente de la contestación formal al correo del ciudadano solicitante.",
      role: "Gestor Técnico / Administrador",
      steps: [
        {
          num: "Paso 1",
          title: "Verificación de PDF Creado",
          desc: "Confirme que la columna PDF ya muestra el archivo adjunto y el campo Estado_Email se encuentra en estado 'Pendiente'."
        },
        {
          num: "Paso 2",
          title: "Activación del Despacho",
          desc: "Presione la acción 'Enviar Correo con Respuesta'. El campo Estado_Email cambiará a 'Iniciado' y registrará la FechaRespuesta con la hora exacta (NOW())."
        },
        {
          num: "Paso 3",
          title: "Ejecución Asíncrona en Google Apps Script",
          desc: "El bot 'Enviar Respuesta Gestion' invoca el script 'enviarEmailGestionPqr' en el proyecto 'Gestion desde Corporativo'. El script descarga el PDF de Google Drive y lo adjunta al correo despachado desde el buzón corporativo de la concesión al email del ciudadano solicitante."
        },
        {
          num: "Paso 4",
          title: "Marcación de Finalización",
          desc: "Una vez despachado satisfactoriamente, el sistema marca automáticamente el campo Estado_Email como 'Completado' y bloquea envíos duplicados accidentales."
        }
      ],
      callout: "Reenvíos: Si el ciudadano requiere un reenvío, el botón 'Reenviar Correo' se habilita exclusivamente cuando el estado previo es 'Completado'."
    },
    {
      id: 5,
      title: "5. Radicación de Anexos Posteriores",
      summary: "Incorporación de pruebas técnicas y complementos documentales post-radicación.",
      role: "Gestor / Administrador",
      steps: [
        {
          num: "Paso 1",
          title: "Invocar la Acción Anexar Archivos",
          desc: "En la ficha de detalle de la PQR en trámite (mientras no esté en estado 'Cerrada'), presione el botón 'Anexar Archivos'."
        },
        {
          num: "Paso 2",
          title: "Cargar Soporte o Evidencia",
          desc: "Suba el documento en 'Archivo_Post' (fotografías de vía, actas de inspección, registros de báscula) y registre una nota en 'Observaciones'."
        },
        {
          num: "Paso 3",
          title: "Notificación Automática Interna",
          desc: "Al guardar, el bot 'Anexos' ejecuta la función 'notificarAnexos' mediante Apps Script, informando instantáneamente al Gestor asignado que se ha radicado un nuevo anexo probatorio."
        }
      ],
      callout: "Trazabilidad: Todos los anexos quedan vinculados a la PQR madre mediante la columna virtual Related ArchivosPostPqrs."
    },
    {
      id: 6,
      title: "6. Gestión de Apelaciones y Segunda Instancia",
      summary: "Trámite de inconformidad ciudadana y reapertura de radicados cerrados.",
      role: "Administrador / Creador",
      steps: [
        {
          num: "Paso 1",
          title: "Verificación de PQR Cerrada",
          desc: "La apelación aplica sobre radicados que ya contaron con respuesta inicial y se encuentran en estado 'Cerrada'."
        },
        {
          num: "Paso 2",
          title: "Ejecución de la Acción Apelación",
          desc: "El Administrador ingresa a la última gestión y activa la acción compuesta 'Apelacion'."
        },
        {
          num: "Paso 3",
          title: "Registro de Comentarios de Inconformidad",
          desc: "Se ingresan los motivos de inconformidad en 'ComentariosApelacion'. El estado de la PQR cambia inmediatamente a 'Atendida' con bandera de Apelación = 'Sí'."
        },
        {
          num: "Paso 4",
          title: "Alerta Crítica a Jefes de Área",
          desc: "El bot 'Notificar_Apelacion_Deepseek' despacha un correo de máxima prioridad al Gestor y al Director del Departamento para una reevaluación técnica de segunda instancia."
        }
      ],
      callout: "Seguridad: Solo los roles Administrador y Creador están facultados para procesar la reactivación por apelación."
    },
    {
      id: 7,
      title: "7. Módulo de Reportes, Looker Studio y Exportación a Excel",
      summary: "Analítica de datos y generación de reportes consolidados para auditorías de interventoría.",
      role: "Administrador / Creador / Directores",
      steps: [
        {
          num: "Paso 1",
          title: "Consulta de Tableros en Tiempo Real (DashBoard)",
          desc: "Acceda a la vista 'DashBoard' para explorar las cuatro gráficas analíticas interactivas: Pqrs por Años, Estado Pqrs, Servicios con mayor incidencia y Gráfica entre Fechas."
        },
        {
          num: "Paso 2",
          title: "Enlace Directo a Looker Studio",
          desc: "Presione la acción 'Estadísticas' en la ficha de Pqrs para abrir el informe ejecutivo interactivo en Google Looker Studio con métricas de gestión."
        },
        {
          num: "Paso 3",
          title: "Generación de Libro Físico Excel (.xlsx)",
          desc: "En la vista 'Reportes', presione 'Agregar Reporte'. Seleccione los filtros deseados (Tipo de PQR, Departamento o Servicio) y establezca obligatoriamente el rango en Fecha_Inicio y Fecha_Fin."
        },
        {
          num: "Paso 4",
          title: "Descarga Directa del Reporte Compilado",
          desc: "El bot 'Todas las Pqr' compilará las filas coincidentes y escribirá un archivo Excel bajo la convención 'Reportes/Reportes_Generados/Reporte_[Tipo]_[Fecha].xlsx'. Presione 'Descargar Reporte' para guardarlo localmente."
        }
      ],
      callout: "Interventoría: Los reportes en Excel son el insumo oficial exigido por la Agencia Nacional de Infraestructura (ANI) e interventoría vial."
    }
  ];

  const currentProc = procedures.find(p => p.id === activeProcedure) || procedures[0];

  return (
    <div className="space-y-8 py-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800">
              Manual de Operación
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Manual de Usuario Paso a Paso
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Guía de procedimientos estandarizados para la operación del sistema de PQRSD de la Concesión Vial
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <a
            href="/assets/aistudio/Manual_Tecnico_y_Usuario_PQRSD_a25cf70c.pdf"
            download="Manual_Tecnico_y_Usuario_PQRSD.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>Descargar Manual PDF Oficial</span>
          </a>
        </div>
      </div>

      {/* Main Procedure Navigator (Sidebar on left, Detail on right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Navigation Index (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-1.5">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3 px-2">
              Índice de Procedimientos
            </span>

            {procedures.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProcedure(p.id)}
                className={`w-full p-3 rounded-xl text-left transition-all ${
                  activeProcedure === p.id
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-100'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold line-clamp-1">{p.title}</span>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${activeProcedure === p.id ? 'text-emerald-400' : 'text-slate-400'}`} />
                </div>
                <span className={`text-[11px] block mt-1 line-clamp-1 ${
                  activeProcedure === p.id ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {p.summary}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Procedure Content (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 mb-1.5 inline-block">
                  Procedimiento Operativo Estandarizado
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  {currentProc.title}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {currentProc.summary}
                </p>
              </div>

              <div className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                Rol: {currentProc.role}
              </div>
            </div>

            {/* Steps list */}
            <div className="space-y-4">
              {currentProc.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-mono text-[11px] font-bold">
                      {st.num}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {st.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-1 whitespace-pre-line">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Rule Callout */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Nota Técnica para Gestores y Auditoría:</span>
                {currentProc.callout}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                disabled={activeProcedure === 1}
                onClick={() => setActiveProcedure(prev => Math.max(1, prev - 1))}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ← Procedimiento Anterior
              </button>

              <span className="text-xs font-mono text-slate-400">
                {activeProcedure} de {procedures.length}
              </span>

              <button
                disabled={activeProcedure === procedures.length}
                onClick={() => setActiveProcedure(prev => Math.min(procedures.length, prev + 1))}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Siguiente Procedimiento →
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
