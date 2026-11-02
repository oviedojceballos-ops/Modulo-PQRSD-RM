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
  Printer
} from 'lucide-react';

export const DownloadsView: React.FC = () => {
  const [selectedDocKey, setSelectedDocKey] = useState<string>('manual-usuario');
  const [copied, setCopied] = useState(false);

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
      id: 'doc-tecnica',
      title: '2. Documentación Técnica del Sistema (AppSheet)',
      format: 'Markdown (.md) / Toolkit v1.9.0',
      downloadUrl: '/assets/aistudio/Pqrs_RM_IpRev-678335064_TechnicalDocumentation_d626990c.md',
      downloadName: 'Pqrs_RM_TechnicalDocumentation.md',
      size: '22 KB / 12 Tablas / 198 Columnas',
      summary: 'Especificación detallada de schemas, expresiones AppSheet, relaciones estáticas (1.332 aristas) y fórmulas matriciales.',
      sections: [
        '1. Resumen de Componentes: 12 tablas, 198 columnas, 4 slices, 50 vistas, 134 acciones, 10 bots, 17 tareas',
        '2. Relaciones de Datos (Foreign Keys y REF_ROWS)',
        '3. Componentes de Mayor Impacto (Change Impact Hotspots: Pqrs.NumeroInterno, Tipo_Solicitud, ID_PQR)',
        '4. Diccionario de Datos Completo (Pqrs, GestionPqr, Gestores, Departamentos, Filtros, Noticias, ConsecutivosPqr, etc.)',
        '5. Fórmulas Matriciales de Negocio (_xlfn.NETWORKDAYS.INTL con LAMBDA y MAP)',
        '6. Catálogo de Bots y Automatizaciones (Apps Script Projects: Anexos, Gestion desde Corporativo, Notificar_Departamento, Apelacion_Deepseek)',
        '7. Hallazgos de Salud de la Aplicación (21 findings analizados)'
      ]
    },
    {
      id: 'plan-pruebas',
      title: '3. Plan de Pruebas de Software (QA & UAT)',
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
      title: '4. Estrategia de Despliegue y Rollback Plan',
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
      title: '5. Guía de Configuración y Mantenimiento del Entorno',
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
      // Direct file download
      const link = document.createElement('a');
      link.href = doc.downloadUrl;
      link.download = doc.downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Generate formatted Markdown document
      const content = `# ${doc.title}\n\n**Formato:** ${doc.format}\n**Concesión Vial:** Ruta Magdalena Sierra Mar\n**Fecha de Emisión:** Noviembre 2026\n**Versión:** 1.000572\n\n## Resumen Ejecutivo\n${doc.summary}\n\n## Estructura y Secciones Oficiales\n${doc.sections.map(s => `- ${s}`).join('\n')}\n\n---\n*Documentación Técnica Oficial generada para la Concesión Vial Ruta Magdalena Sierra Mar.*`;
      
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
              Centro de Descargas
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Descarga de Manuales y Documentación Oficial
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Archivos fuente, manuales en PDF, especificación técnica en Markdown y esquemas JSON del snapshot
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

      {/* Grid: Document Cards & Download Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Card 1: Manual de Usuario PDF */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">
                PDF OFICIAL
              </span>
              <span className="text-[11px] text-slate-400">Manual Operativo</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Manual Técnico y de Usuario PQRSD
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Documento formal con la cobertura de los 14 servicios viales, matriz de acceso, radicación, semáforo legal y exportaciones.
            </p>
          </div>

          <a
            href="/assets/aistudio/Manual_Tecnico_y_Usuario_PQRSD_a25cf70c.pdf"
            download="Manual_Tecnico_y_Usuario_PQRSD_Ruta_Magdalena.pdf"
            className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Descargar Manual PDF</span>
          </a>
        </div>

        {/* Card 2: Technical Documentation Markdown */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono">
                MARKDOWN (.MD)
              </span>
              <span className="text-[11px] text-slate-400">Toolkit v1.9.0</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Documentación Técnica Completa
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diccionario exhaustivo de las 12 tablas, 198 columnas, 134 acciones, 10 bots, slices, relaciones estáticas y change hotspots.
            </p>
          </div>

          <a
            href="/assets/aistudio/Pqrs_RM_IpRev-678335064_TechnicalDocumentation_d626990c.md"
            download="Pqrs_RM_TechnicalDocumentation.md"
            className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Descargar Documentación (.md)</span>
          </a>
        </div>

        {/* Card 3: App Snapshot JSON */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono">
                SNAPSHOT JSON
              </span>
              <span className="text-[11px] text-slate-400">Metadatos 2.0</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Snapshot Oficial AppSheet
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Estructura canónica de la aplicación con schemas de red, format rules, security filters y definiciones de bots.
            </p>
          </div>

          <a
            href="/assets/aistudio/Oficial_PQRSD_Ruta_Magdalena_Sierra_Mar_AppSnapshot_0c93fb2e.json"
            download="Oficial_PQRSD_Ruta_Magdalena_Sierra_Mar_AppSnapshot.json"
            className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Descargar Snapshot JSON</span>
          </a>
        </div>

        {/* Card 4: App Health JSON */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-mono">
                APP HEALTH
              </span>
              <span className="text-[11px] text-slate-400">21 Hallazgos</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Reporte de Salud y Diagnóstico
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Auditoría estática con análisis de referencias rotas, acciones duplicadas y componentes no utilizados.
            </p>
          </div>

          <a
            href="/assets/aistudio/Pqrs_RM_IpRev-678335064_AppHealth_33286764.json"
            download="Pqrs_RM_AppHealth.json"
            className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-rose-400" />
            <span>Descargar AppHealth (.json)</span>
          </a>
        </div>

        {/* Card 5: App Intelligence Graph JSON */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-mono">
                INTELLIGENCE
              </span>
              <span className="text-[11px] text-slate-400">1.332 Aristas</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Grafo de Dependencias Estáticas
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Grafo relacional de 425 nodos conectando columnas, vistas, tablas y tareas de ejecución en AppSheet.
            </p>
          </div>

          <a
            href="/assets/aistudio/Pqrs_RM_IpRev-678335064_AppIntelligence_9134db94.json"
            download="Pqrs_RM_AppIntelligence.json"
            className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>Descargar Intelligence (.json)</span>
          </a>
        </div>

        {/* Card 6: Plan de Pruebas & Despliegue Generado */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-mono">
                PAQUETE QA / ENTREGABLE
              </span>
              <span className="text-[11px] text-slate-400">Acta & Despliegue</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Acta de Entrega & Plan de Pruebas
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Documento consolidado con los 14 casos de prueba, estrategia de Go-Live y guía de mantenimiento preventivo.
            </p>
          </div>

          <button
            onClick={() => handleDownloadGenerated(documentOutlines[2])}
            className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-violet-400" />
            <span>Descargar Plan de Pruebas (.md)</span>
          </button>
        </div>

      </div>

      {/* Technical Writer Outlines Section */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Esquema Detallado de los 5 Documentos del Entregable
            </h2>
            <p className="text-xs text-slate-500">
              Estructura editorial y técnica formulada según las mejores prácticas de redacción técnica para software
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
