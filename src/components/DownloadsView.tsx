import React, { useState } from 'react';
import {
  Download,
  FileText,
  FileCode,
  FileCheck2,
  BookOpen,
  Layers,
  CheckCircle2,
  ExternalLink,
  Code2,
  Copy,
  Printer,
  Image as ImageIcon,
  Clock,
  Sparkles,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';

export const DownloadsView: React.FC = () => {
  const [selectedDocKey, setSelectedDocKey] = useState<string>('manual-usuario');
  const [copied, setCopied] = useState(false);

  const officialPdfDeliverables = [
    {
      id: 'manual-usuario',
      title: 'Manual Técnico y de Usuario PQRSD Oficial',
      format: 'PDF (.pdf)',
      tag: 'Manual Operativo',
      color: 'amber',
      downloadUrl: '/assets/aistudio/Manual_Tecnico_y_Usuario_PQRSD_a25cf70c.pdf',
      downloadName: 'Manual_Tecnico_y_Usuario_PQRSD_Ruta_Magdalena.pdf',
      size: '5 Páginas Oficiales',
      summary: 'Manual estandarizado para la radicación, trámite, contestación formal en PDF, despacho por correo corporativo y apelaciones.'
    },
    {
      id: 'pantallazos-app',
      title: 'Dossier de Pantallazos Oficiales de la Aplicación',
      format: 'PDF (.pdf)',
      tag: 'Guía Visual HD',
      color: 'emerald',
      downloadUrl: '/assets/aistudio/Pantallazos_de_la_aplicaci_n_Modulo_de_Gesti_n_PQRSD_999c3d6f.pdf',
      downloadName: 'Pantallazos_Modulo_Gestion_PQRSD_Ruta_Magdalena.pdf',
      size: '8 Páginas con Capturas',
      summary: 'Secuencia completa de capturas de pantalla de la app en AppSheet: formulario de radicación, detalle de caso, gestiones, anexos y despacho.'
    },
    {
      id: 'actualizaciones-app',
      title: 'Actualizaciones y Nuevas Funciones de la App',
      format: 'PDF (.pdf)',
      tag: 'Nuevas Funciones',
      color: 'indigo',
      downloadUrl: '/assets/aistudio/Actualizaciones_aplicadas_en_la_app_b2df1755.pdf',
      downloadName: 'Actualizaciones_Aplicadas_App_PQRSD.pdf',
      size: '6 Páginas Técnicas',
      summary: 'Documentación del nuevo Dashboard interactivo, edición rápida de correo PQR, consulta de anexos, y plantillas de correo de Apps Script.'
    },
    {
      id: 'novedad-dias-habiles',
      title: 'Actualización de Días Hábiles, Semáforos y Reportes',
      format: 'PDF (.pdf)',
      tag: 'Ley 1755 / SLA',
      color: 'rose',
      downloadUrl: '/assets/aistudio/M_dulo_de_Gesti_n_PQRSD_Actualizacion_01-11-2026_03659520.pdf',
      downloadName: 'Actualizacion_Dias_Habiles_y_Reportes_PQRSD.pdf',
      size: '6 Páginas Regulatorias',
      summary: 'Validación explícita de días hábiles colombianos excluyendo festivos 2025–2036, mensajes de alerta legal y módulo de reportes Excel.'
    },
    {
      id: 'appsheet-doc',
      title: 'Especificación Técnica Integral desde AppSheet',
      format: 'PDF (.pdf)',
      tag: 'Toolkit v1.9.0',
      color: 'blue',
      downloadUrl: '/assets/aistudio/Application_Documentation_desde_Appsheet_07eab6e9.pdf',
      downloadName: 'Application_Documentation_AppSheet_PQRSD.pdf',
      size: 'Documentación Canónica',
      summary: 'Exportación exhaustiva con las 38 tablas, 955 columnas, 4 slices, 50 views, 67 format rules, 134 actions y expresiones AppSheet.'
    },
    {
      id: 'doc-tecnica-md',
      title: 'Documentación Técnica en Formato Markdown (.md)',
      format: 'Markdown (.md)',
      tag: 'Diccionario de Datos',
      color: 'violet',
      downloadUrl: '/assets/aistudio/Pqrs_RM_IpRev-678335064_TechnicalDocumentation_d626990c.md',
      downloadName: 'Pqrs_RM_TechnicalDocumentation.md',
      size: '22 KB Markdown',
      summary: 'Diccionario de datos con fórmulas matriciales, catálogo de automatizaciones y matriz de dependencias estáticas.'
    }
  ];

  const documentOutlines = [
    {
      id: 'manual-usuario',
      title: '1. Manual de Usuario Oficial (PQRSD)',
      format: 'PDF (.pdf) / Interactivo',
      downloadUrl: '/assets/aistudio/Manual_Tecnico_y_Usuario_PQRSD_a25cf70c.pdf',
      downloadName: 'Manual_Tecnico_y_Usuario_PQRSD_Ruta_Magdalena.pdf',
      size: '5 Páginas Formato Institucional',
      summary: 'Manual estandarizado para la radicación, trámite, contestación formal en PDF, despacho por correo y apelaciones.',
      sections: [
        '1. Introducción al Sistema de PQRSD y Cobertura Temática (14 Servicios Viales)',
        '2. Roles, Permisos y Matriz de Acceso (Administrador / Creador vs Gestor Técnico)',
        '3. Manual de Operación Paso a Paso:',
        '   3.1 Radicación de una Nueva PQRSD (Consecutivo PQR-YYYY-XXXXXX)',
        '   3.2 Control de Tiempos Legales (Semáforo de Alertas y Días Hábiles Ley 1755)',
        '   3.3 Formulación de Respuesta y Despacho Automatizado (/Gestion_PDF & Apps Script)',
        '   3.4 Radicación de Anexos Posteriores (ArchivosPostPqr)',
        '   3.5 Gestión de Apelaciones y Alertas de Inconformidad',
        '4. Módulo de Reportes e Inteligencia de Negocios (Looker Studio y Exportación a Excel)'
      ]
    },
    {
      id: 'pantallazos-app',
      title: '2. Dossier Fotográfico y Pantallazos de la Aplicación',
      format: 'PDF (.pdf)',
      downloadUrl: '/assets/aistudio/Pantallazos_de_la_aplicaci_n_Modulo_de_Gesti_n_PQRSD_999c3d6f.pdf',
      downloadName: 'Pantallazos_Modulo_Gestion_PQRSD_Ruta_Magdalena.pdf',
      size: '8 Páginas con Capturas',
      summary: 'Dossier visual con capturas reales de la aplicación en AppSheet.',
      sections: [
        '1. Vista Inicial de la Aplicación (Bandeja con semáforos, consecutivos y departamentos)',
        '2. Formulario de Solicitud Inicial y Despliegue de los 5 Tipos Canónicos',
        '3. Formulario Completo con Prioridad Legal, datos +57 y clasificación vial',
        '4. Ficha de Detalle de PQR Radicada y Vistas Relacionadas',
        '5. Módulo de Archivos Anexados y Barra de Acciones/Disparadores',
        '6. Flujo de Gestión Inteligente y Notificación por Correo al Gestor',
        '7. Formulario Oficial de Gestión de Respuestas y Adjuntos recomendados <15 MB',
        '8. Ficha de Gestión Culminada con Despacho de Correo Completado'
      ]
    },
    {
      id: 'actualizaciones-app',
      title: '3. Dossier de Actualizaciones y Nuevas Funciones',
      format: 'PDF (.pdf)',
      downloadUrl: '/assets/aistudio/Actualizaciones_aplicadas_en_la_app_b2df1755.pdf',
      downloadName: 'Actualizaciones_Aplicadas_App_PQRSD.pdf',
      size: '6 Páginas Técnicas',
      summary: 'Nuevas características incorporadas al módulo de PQRSD.',
      sections: [
        '1. Creación de Dashboard Interactivo con Gráficos de Rosca y Barras',
        '2. Modal Rápido para Editar Correo PQR sin alterar estado de caso',
        '3. Botón y Formulario para Anexar Archivos Posteriores',
        '4. Acción Consultar Archivos para visualización de todos los gestores',
        '5. Matriz de Acciones Granulares (Administrador vs Gestor)',
        '6. Plantillas Oficiales de Correo Apps Script (Nueva PQR, Recordatorio Atendida, Apelación)',
        '7. Campos de Auditoría ContadorNotificacion y UltimaNotificacion'
      ]
    },
    {
      id: 'novedad-dias-habiles',
      title: '4. Actualización de Días Hábiles, Semáforos y Reportes',
      format: 'PDF (.pdf)',
      downloadUrl: '/assets/aistudio/M_dulo_de_Gesti_n_PQRSD_Actualizacion_01-11-2026_03659520.pdf',
      downloadName: 'Actualizacion_Dias_Habiles_y_Reportes_PQRSD.pdf',
      size: '6 Páginas Regulatorias',
      summary: 'Ajuste normativo de días hábiles colombianos según Ley 1755 de 2015.',
      sections: [
        '1. Validación Explícita de Días Hábiles Descontando Feriados en Colombia',
        '2. Semáforo Rojo para PQRSD Vencidas (Superando 10 o 15 días hábiles)',
        '3. Semáforo Amarillo para PQRSD Abiertas Vigentes dentro del Plazo',
        '4. Semáforo Verde para Casos Atendidos o Cerrados Oportunamente',
        '5. Reemplazo del campo Prioridad por Prioridad Solicitud (General vs Documentos)',
        '6. Módulo Historial reportes y Generar Reporte con Filtros por Fechas',
        '7. Plantilla Oficial de Exportación a Libros Excel (.xlsx)'
      ]
    },
    {
      id: 'plan-pruebas',
      title: '5. Plan de Pruebas de Software (QA & UAT)',
      format: 'Documento / Matriz de Verificación',
      downloadUrl: '#export-pruebas',
      downloadName: 'Plan_de_Pruebas_PQRSD_Ruta_Magdalena.md',
      size: '14 Casos de Prueba Estructurados',
      summary: 'Estrategia de aseguramiento de calidad con pruebas unitarias de SLA, pruebas de integración, pruebas de seguridad RBAC y criterios de aceptación.',
      sections: [
        '1. Objetivos del Plan de Pruebas y Alcance en AppSheet',
        '2. Tipos de Pruebas Ejecutadas:',
        '   • Pruebas Unitarias de Lógica: Cálculo exacto de días hábiles y exclusión de festivos colombianos',
        '   • Pruebas de Integración: Interacción síncrona entre bots de consecutivo y despacho Apps Script',
        '   • Pruebas de Seguridad: Validación de Security Filters con USEREMAIL() por departamento',
        '   • Pruebas de Aceptación de Usuario (UAT): Flujos de radicación, contestación, PDF y apelación',
        '3. Criterios de Aceptación y Matrices de Casos (TC-001 al TC-014)',
        '4. Registro de Resultados y Certificación de Aprobación'
      ]
    },
    {
      id: 'estrategia-despliegue',
      title: '6. Estrategia de Despliegue y Rollback Plan',
      format: 'Guía de Despliegue / DevOps Cloud',
      downloadUrl: '#export-despliegue',
      downloadName: 'Estrategia_de_Despliegue_PQRSD.md',
      size: 'Procedimiento Go-Live',
      summary: 'Secuencia de pasos para despliegue en Google Workspace, configuración de carpetas en Google Drive y plan de reversión ante incidentes.',
      sections: [
        '1. Pre-requisitos del Entorno (Cuentas corporativas, cuotas de Gmail, almacenamiento)',
        '2. Procedimiento de Despliegue en 3 Fases (Preparación de Hojas -> Autorización Scripts -> Go-Live)',
        '3. Configuración de Carpetas en la Nube (/Gestion_PDF y /Reportes/Reportes_Generados)',
        '4. Plan de Reversión (Rollback Plan): Restauración de versiones de AppSheet v1.000572 y copias de seguridad de Google Sheets',
        '5. Verificación de Salud Post-Despliegue y Pruebas de Humo (Smoke Tests)'
      ]
    },
    {
      id: 'guia-mantenimiento',
      title: '7. Guía de Configuración y Mantenimiento del Entorno',
      format: 'Manual de Administración y Soporte',
      downloadUrl: '#export-mantenimiento',
      downloadName: 'Guia_Mantenimiento_Entorno_PQRSD.md',
      size: 'Soporte Preventivo & Correctivo',
      summary: 'Instrucciones para administración del calendario de festivos, regeneración de esquemas y corrección de referencias rotas.',
      sections: [
        '1. Monitoreo del Entorno y Health Check Periódico',
        '2. Protocolo de Corrección del Hallazgo Crítico (Actualizar campos Action - 1 en GestionPqr)',
        '3. Mantenimiento del Calendario de Días Festivos (Tabla festivos_2025_2036)',
        '4. Regeneración de Estructura de Tablas en AppSheet Editor',
        '5. Supervisión de Cuotas de Google Apps Script y Almacenamiento en Google Drive',
        '6. Solución de Problemas Frecuentes (FAQs de Soporte)'
      ]
    }
  ];

  const currentDoc = documentOutlines.find(d => d.id === selectedDocKey) || documentOutlines[0];

  const handleDownloadGenerated = (doc: typeof documentOutlines[0]) => {
    if (doc.downloadUrl.startsWith('/assets/')) {
      const link = document.createElement('a');
      link.href = doc.downloadUrl;
      link.download = doc.downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const content = `# ${doc.title}\n\n**Formato:** ${doc.format}\n**Concesión Vial:** Concesión Vial Ruta Magdalena Sierra Mar\n**Fecha de Emisión:** Noviembre 2026\n**Versión:** 1.000572\n\n## Resumen Ejecutivo\n${doc.summary}\n\n## Estructura y Secciones Oficiales\n${doc.sections.map(s => `- ${s}`).join('\n')}\n\n---\n*Documentación Técnica Oficial generada para la Concesión Vial Ruta Magdalena Sierra Mar.*`;
      
      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = doc.downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleCopyOutline = () => {
    const text = `${currentDoc.title}\n\n${currentDoc.summary}\n\nSecciones:\n${currentDoc.sections.join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">
              Centro de Descargas Oficial
            </span>
            <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-slate-100 text-slate-700">
              Documentos & Manuales PDF
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Descarga de Manuales y Documentación Oficial
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manuales oficiales en PDF, dossier de pantallazos HD, novedades aplicadas, especificación técnica y guías en Markdown.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span>Imprimir Dossier</span>
          </button>
        </div>
      </div>

      {/* Grid: Official PDF Deliverables Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Documentos Oficiales del Sistema (PDF & Markdown)</span>
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            {officialPdfDeliverables.length} archivos verificados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {officialPdfDeliverables.map((doc) => (
            <div
              key={doc.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded font-mono ${
                    doc.color === 'amber' ? 'bg-amber-100 text-amber-800' :
                    doc.color === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
                    doc.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                    doc.color === 'rose' ? 'bg-rose-100 text-rose-800' :
                    doc.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    'bg-violet-100 text-violet-800'
                  }`}>
                    {doc.format}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{doc.size}</span>
                </div>
                
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {doc.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {doc.summary}
                </p>
              </div>

              <a
                href={doc.downloadUrl}
                download={doc.downloadName}
                className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Descargar {doc.format}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Writer Outlines Section */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Estructura Editorial y Esquema de Documentos
            </h2>
            <p className="text-xs text-slate-500">
              Desglose estructurado de secciones oficiales para auditoría e interventoría de la Concesión Vial
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyOutline}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? '¡Copiado!' : 'Copiar Esquema'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Document selector buttons (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {documentOutlines.map(doc => (
              <button
                key={doc.id}
                onClick={() => setSelectedDocKey(doc.id)}
                className={`w-full p-3 rounded-xl text-left border transition-all ${
                  selectedDocKey === doc.id
                    ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-900 line-clamp-1">
                    {doc.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <span>{doc.format}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Document Viewer (8 cols) */}
          <div className="lg:col-span-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {currentDoc.title}
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  {currentDoc.format} · {currentDoc.size}
                </span>
              </div>

              <button
                onClick={() => handleDownloadGenerated(currentDoc)}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shrink-0 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar</span>
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
              {currentDoc.summary}
            </p>

            <div>
              <span className="text-xs font-bold text-slate-900 block mb-2">
                Estructura de Secciones & Contenido:
              </span>
              <div className="bg-white p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 space-y-2">
                {currentDoc.sections.map((sec, i) => (
                  <div key={i} className="leading-relaxed">
                    {sec}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
