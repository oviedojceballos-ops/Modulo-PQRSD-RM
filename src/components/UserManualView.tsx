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
  ChevronRight,
  ShieldCheck,
  Download,
  Eye,
  Maximize2,
  X,
  Layers,
  Calendar,
  Mail,
  FileSpreadsheet,
  Edit3,
  Bell,
  Search,
  ExternalLink
} from 'lucide-react';
import { ROAD_SERVICES, APP_METADATA } from '../data/appData';

interface ProcedureStep {
  num: string;
  title: string;
  desc: string;
  highlight?: string;
}

interface ProcedureItem {
  id: number;
  category: 'Radicación' | 'SLA & Términos' | 'Gestión y PDF' | 'Novedades & Edición' | 'Reportes & BI';
  title: string;
  summary: string;
  role: string;
  badge: string;
  steps: ProcedureStep[];
  callout: string;
  screenshots: {
    url: string;
    caption: string;
    badgeText: string;
    description: string;
  }[];
}

export const UserManualView: React.FC = () => {
  const [activeProcedure, setActiveProcedure] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [lightboxImg, setLightboxImg] = useState<{ url: string; caption: string } | null>(null);

  const procedures: ProcedureItem[] = [
    {
      id: 1,
      category: "Radicación",
      badge: "Formulario Oficial",
      title: "1. Radicación de una Nueva PQRSD (Consecutivo Único PQR-YYYY-XXXXXX)",
      summary: "Procedimiento oficial para capturar, clasificar y registrar solicitudes ciudadanas con asignación secuencial y notificación.",
      role: "Ciudadano / Gestor Técnico / Administrador",
      steps: [
        {
          num: "Paso 1",
          title: "Acceso al Formulario de Radicación",
          desc: "Acceda al menú principal de la aplicación y seleccione la vista 'Agregar Pqr' o presione el botón flotante '+' (Add) en la vista de lista de radicados.",
          highlight: "Acción Add en tabla Pqrs"
        },
        {
          num: "Paso 2",
          title: "Selección del Tipo de Solicitud",
          desc: "Despliegue el campo 'Tipo de solicitud' y elija entre las 5 opciones reglamentarias: Petición, Queja, Reclamo, Sugerencia o Denuncia. Esta selección habilita dinámicamente los campos requeridos.",
          highlight: "Column Tipo_Solicitud (Enum)"
        },
        {
          num: "Paso 3",
          title: "Definición de Prioridad Solicitud (Ley 1755)",
          desc: "Seleccione mediante botones de opción la prioridad legal: 'General' (límite legal de 15 días hábiles) o 'Documentos o Información' (límite prioritario de 10 días hábiles). Se eliminó la prioridad arbitraria anterior para apegarse al marco normativo colombiano.",
          highlight: "Prioridad_Solicitud: General (15d) | Documentos (10d)"
        },
        {
          num: "Paso 4",
          title: "Clasificación por Servicio Vial",
          desc: "Seleccione obligatoriamente el servicio de la concesión objeto de la solicitud (catálogo Ser-01 a Ser-14, e.g. Ambulancia, Atención al Usuario, Báscula, Colpass, Carro Taller, Grúa, Peajes, Estado de la Vía, Señalización, etc.).",
          highlight: "Catálogo oficial de 14 servicios viales"
        },
        {
          num: "Paso 5",
          title: "Datos del Solicitante, Fecha del Suceso y Descripción",
          desc: "Indique si presenta como 'Registrado' (exige Identificación, Nombre y Celular con prefijo internacional +57) o 'Anónimo'. Digite la fecha en la que ocurrieron los hechos y una descripción pormenorizada de los mismos.",
          highlight: "Validación de celular (+57) y correo electrónico"
        },
        {
          num: "Paso 6",
          title: "Adjuntos Iniciales y Guardado Síncrono",
          desc: "Si dispone de soportes o fotos, cárguelas en el campo 'Adjuntar archivo relacionado' (se recomienda comprimir en un único archivo). Al presionar 'Guardar', el bot síncrono 'Bot_Radicacion_IDInterno' consulta ConsecutivosPqr y genera el consecutivo oficial visible (ej. PQR-2026-000153).",
          highlight: "Consecutivo automático PQR-[Año]-[000000]"
        }
      ],
      callout: "Regla Técnica: Al guardar la PQRSD se ejecuta una acción compuesta que incrementa el contador anual en la tabla ConsecutivosPqr y sintetiza el código estructurado PQR-[Año]-[Número]. El estado inicial asignado es 'Abierta'.",
      screenshots: [
        {
          url: "/assets/manual/pantallazo_4.png",
          caption: "Formulario Oficial Completo de Radicación de PQRSD",
          badgeText: "Formulario Pqrs_Form",
          description: "Vista de captura con logos institucionales, selección de Servicio, Prioridad (General vs Documentos), teléfono con +57 y adjunto."
        },
        {
          url: "/assets/manual/pantallazo_3.png",
          caption: "Menú Desplegable con los 5 Tipos de Solicitud",
          badgeText: "Tipos de Solicitud",
          description: "Despliegue de opciones canónicas: Petición, Queja, Reclamo, Sugerencia y Denuncia."
        },
        {
          url: "/assets/manual/pantallazo_1.png",
          caption: "Bandeja Principal de Radicados con Semáforos y Consecutivos",
          badgeText: "Lista de Pqrs",
          description: "Visualización en tiempo real de números internos generados, alertas de términos y departamentos asignados."
        }
      ]
    },
    {
      id: 2,
      category: "SLA & Términos",
      badge: "Ley 1755 / CPACA",
      title: "2. Control de Tiempos Legales y Semáforo de Términos (Días Hábiles)",
      summary: "Cálculo en tiempo real de días hábiles transcurridos descontando festivos nacionales colombianos mediante función matricial.",
      role: "Gestores Técnicos / Administradores / Interventoría",
      steps: [
        {
          num: "Regla 1",
          title: "Cálculo Matricial Excluyendo Festivos Colombianos",
          desc: "El sistema emplea la función matricial _xlfn.NETWORKDAYS.INTL calculando los días desde el día hábil siguiente a la radicación (creacion+1) hasta la fecha de respuesta oficial o fecha actual (TODAY()), descontando fines de semana y los feriados registrados en la tabla 'festivos_2025_2036'.",
          highlight: "NETWORKDAYS.INTL(creacion+1, TODAY(), 1, festivos)"
        },
        {
          num: "Regla 2",
          title: "Límites Legales según Tipo de Solicitud",
          desc: "• Documentos o Información: Límite perentorio de 10 días hábiles.\n• Solicitud General (Petición, Queja, Reclamo, Sugerencia, Denuncia): Límite de 15 días hábiles.",
          highlight: "10 días vs 15 días hábiles"
        },
        {
          num: "Regla 3",
          title: "Alerta Roja 🔴 (Plazo Legal Vencido)",
          desc: "Se activa automáticamente cuando los días hábiles transcurridos superan el límite legal fijado. Se visualiza con el texto: '🔴 Plazo legal vencido (X días hábiles transcurridos, límite legal: 10 o 15 días)' y requiere resolución prioritaria.",
          highlight: "Días hábiles >= límite legal"
        },
        {
          num: "Regla 4",
          title: "Alerta Amarilla 🟡 (OK: Dentro del Plazo Legal)",
          desc: "Se muestra mientras la PQR permanezca en estado 'Abierta' y el conteo de días hábiles sea inferior al límite de ley, indicando el margen disponible para contestar oportunamente.",
          highlight: "Días hábiles < límite legal"
        },
        {
          num: "Regla 5",
          title: "Estado Resuelto ✅ (Atendida o Cerrada)",
          desc: "Al emitirse la respuesta formal institucional, el semáforo cambia a verde '✅ Atendida' o '✅ Cerrada' y el conteo de días transcurridos se congela en la columna Tiempo_Respuesta.",
          highlight: "Tiempo_Respuesta congelado"
        }
      ],
      callout: "Garantía Jurídica: La tabla 'festivos_2025_2036' incluye todos los feriados decretados por la Ley Emiliani hasta el año 2036, garantizando total precisión ante requerimientos de la ANI o entes de control.",
      screenshots: [
        {
          url: "/assets/manual/novedad_nov_3.png",
          caption: "Bandeja de Radicados Vencidos con Alerta Roja de Plazo Legal",
          badgeText: "Semáforo Rojo 🔴",
          description: "Listado con advertencia explícita de días hábiles transcurridos superando los 10 o 15 días reglamentarios."
        },
        {
          url: "/assets/manual/novedad_nov_4.png",
          caption: "Bandeja de Radicados Vigentes con Semáforo Amarillo Dentro del Plazo",
          badgeText: "Semáforo Amarillo 🟡",
          description: "Control preventivo mostrando los días hábiles transcurridos y el margen legal restante."
        },
        {
          url: "/assets/manual/novedad_nov_5.png",
          caption: "Radicados Atendidos y Cerrados con Marca Verde de Oportunidad",
          badgeText: "Semáforo Verde ✅",
          description: "Casos culminados exitosamente dentro de los términos establecidos."
        },
        {
          url: "/assets/manual/pantallazo_5.png",
          caption: "Ficha Detallada de la PQR con Alerta y Resumen de Caso",
          badgeText: "Detalle de PQR",
          description: "Vista pormenorizada con semáforo legal, historial de gestiones y anexos vinculados."
        }
      ]
    },
    {
      id: 3,
      category: "Gestión y PDF",
      badge: "Flujo Inteligente",
      title: "3. Formulación de Respuesta y Flujo Inteligente de Gestión",
      summary: "Procedimiento asistido para redactar la respuesta técnica de la concesión, adjuntar soportes y evaluar el ciclo de vida del caso.",
      role: "Gestor Técnico Asignado / Administrador",
      steps: [
        {
          num: "Paso 1",
          title: "Acceder al Radicado y Validaciones Inteligentes",
          desc: "Abra la PQR en estado 'Abierta' o 'Atendida' y presione el botón 'Gestionar Pqr'. El sistema evalúa: si no tiene gestiones previas, abre inmediatamente el formulario de contestación. Si ya tiene gestiones previas, evalúa si la última está incompleta (despacho pendiente) para reabrirla, o si ya concluyó su despacho para abrir una nueva ronda de respuesta.",
          highlight: "Lógica evaluativa inteligente en acción Gestionar Pqr"
        },
        {
          num: "Paso 2",
          title: "Redactar la Respuesta Formal",
          desc: "Diligencie el campo 'Respuesta personalizada' con la motivación técnica, fáctica y jurídica que responde de fondo a la solicitud ciudadana.",
          highlight: "Respuesta personalizada estructurada"
        },
        {
          num: "Paso 3",
          title: "Asignación del Estado de Gestión",
          desc: "Seleccione el nuevo estado que asumirá el caso: 'Atendida' (cuando se emite contestación pero se mantiene seguimiento) o 'Cerrada' (cuando el trámite concluye en su totalidad).",
          highlight: "EstadoPqr: Atendida | Cerrada"
        },
        {
          num: "Paso 4",
          title: "Adjuntos de Respuesta y Enlaces en la Nube",
          desc: "Si la contestación requiere anexos (informes fotográficos de cuadrilla, certificados de pesaje, actas), adjúntelos en 'Adjunte un documento relacionado'. Para archivos superiores a 15 MB, ingrese un enlace público en 'Inserte un enlace para compartir'.",
          highlight: "Límite recomendado de 15 MB para redes de campo"
        }
      ],
      callout: "Restricción de Estado: La acción 'Gestionar Pqr' únicamente está habilitada mientras la PQR se encuentre en estado 'Abierta' o 'Atendida'. Una PQR cerrada no permite nuevas gestiones salvo que sea reabierta por Apelación.",
      screenshots: [
        {
          url: "/assets/manual/pantallazo_10.png",
          caption: "Formulario de Gestión y Contestación Institucional",
          badgeText: "GestionPqr_Form",
          description: "Campos para ID Pqr, selección de estado (Atendida/Cerrada), Gestor asignado, respuesta personalizada y adjuntos."
        },
        {
          url: "/assets/manual/pantallazo_6.png",
          caption: "Tabla de Gestiones Relacionadas a la PQR",
          badgeText: "Historial de Gestiones",
          description: "Relación bidireccional mostrando cada gestión generada con su fecha y servicio correspondiente."
        }
      ]
    },
    {
      id: 4,
      category: "Gestión y PDF",
      badge: "Automatización Cloud",
      title: "4. Generación de PDF Oficial y Despacho por Correo (Apps Script)",
      summary: "Maquetación automatizada del documento PDF con membrete institucional, firma digital y despacho automático al solicitante.",
      role: "Gestor Técnico / Administrador",
      steps: [
        {
          num: "Paso 1",
          title: "Generación del Documento Formal PDF",
          desc: "Tras guardar la gestión, presione la acción 'Crear PDF_GestionPqr_General'. El bot crea automáticamente el archivo maquetado en tamaño Carta con el membrete oficial de la Concesión Vial y la firma digitalizada del Gestor, almacenándolo en Google Drive en la carpeta '/Gestion_PDF/[ID_PQR]-[ID_Gestion]-[CoPDF].pdf'.",
          highlight: "Bot CrearPDF_GestionPqr_General"
        },
        {
          num: "Paso 2",
          title: "Verificación Previa y Corrección de PDF",
          desc: "El gestor puede pulsar 'Abrir PDF' para previsualizar el documento generado. Si detecta un error de redacción antes del envío, puede usar el botón 'Corregir PDF' para limpiar el archivo y regenerarlo.",
          highlight: "Previsualización segura antes del despacho"
        },
        {
          num: "Paso 3",
          title: "Activación del Envío al Correo del Ciudadano",
          desc: "Presione la acción 'Enviar Correo con Respuesta'. El campo Estado_Email pasará de 'Pendiente' a 'Iniciado', y registrará la marca de tiempo exacta de respuesta (NOW()).",
          highlight: "Estado_Email: Iniciado"
        },
        {
          num: "Paso 4",
          title: "Despacho Asíncrono vía Google Apps Script",
          desc: "El bot 'Enviar Respuesta Gestion' ejecuta la función 'enviarEmailGestionPqr' en el proyecto de Apps Script 'Gestion desde Corporativo'. El script adjunta el PDF formal desde Drive y lo remite desde el correo corporativo al email del solicitante.",
          highlight: "Integración Apps Script 'enviarEmailGestionPqr'"
        },
        {
          num: "Paso 5",
          title: "Confirmación de Entrega y Reenvíos",
          desc: "Una vez entregado, el campo Estado_Email se actualiza a 'Completado' con un check verde. En caso de requerir reenvío a solicitud del usuario, se habilitará la acción 'Reenviar Correo'.",
          highlight: "Estado_Email: Completado ✅"
        }
      ],
      callout: "Cuota de Envíos: Las cuentas de Google Workspace cuentan con una cuota garantizada de hasta 1.500 correos diarios a través de Apps Script, cubriendo ampliamente el volumen mensual de la concesión.",
      screenshots: [
        {
          url: "/assets/manual/pantallazo_11.png",
          caption: "Ficha de Gestión con PDF Creado y Estado de Correo Completado",
          badgeText: "Detalle de Gestión",
          description: "Botones de acción (Apelación, Ir a Anexos, Abrir PDF, Reenviar Correo) y estado de despacho electrónico confirmado."
        }
      ]
    },
    {
      id: 5,
      category: "Novedades & Edición",
      badge: "Nueva Función",
      title: "5. Radicación y Consulta de Anexos Posteriores (ArchivosPostPqr)",
      summary: "Permite incorporar nuevas pruebas, evidencias fotográficas de vía y documentos adicionales tras la radicación inicial.",
      role: "Administrador / Gestores de Área",
      steps: [
        {
          num: "Paso 1",
          title: "Disponibilidad de la Acción 'Anexar Archivos'",
          desc: "En la vista de detalle de una PQR en trámite, el Administrador dispone del botón 'Anexar Archivos'. Esta opción está activa únicamente mientras la PQR no esté en estado 'Cerrada'.",
          highlight: "Acción exclusiva de Administrador"
        },
        {
          num: "Paso 2",
          title: "Diligenciamiento de la Evidencia Adicional",
          desc: "El sistema abre el formulario 'Insertar archivos a Pqrs', mostrando el ID de la PQR, el nombre del solicitante y la descripción original. Se carga el nuevo archivo probatorio y se registran las observaciones técnicas pertinentes.",
          highlight: "Asignación de código correlativo Anx-0001, Anx-0002"
        },
        {
          num: "Paso 3",
          title: "Notificación Automática Interna al Gestor",
          desc: "Al guardar el anexo, el bot 'Anexos' invoca la función de Apps Script 'notificarAnexos', informando inmediatamente por correo corporativo al Gestor asignado que se ha cargado un nuevo soporte probatorio.",
          highlight: "Alerta automática por Apps Script"
        },
        {
          num: "Paso 4",
          title: "Consulta Centralizada de Archivos",
          desc: "Todos los gestores disponen de la acción 'Consultar Archivos' (o 'Ir a los Anexos'), la cual abre la lista cronológica de documentos adicionales vinculados al radicado con visor y descarga directa.",
          highlight: "Disponible para todos los Gestores"
        }
      ],
      callout: "Regla de Borrado: La acción 'Borrar' sobre anexos solo está disponible para el Administrador y únicamente permite eliminar el último registro insertado para salvaguardar la cadena de custodia documental.",
      screenshots: [
        {
          url: "/assets/manual/actualizacion_5.png",
          caption: "Formulario para Insertar Archivos Posteriores a una PQR",
          badgeText: "Anexar Archivos",
          description: "Captura de documentos con observaciones y vinculación automática al código de radicado madre."
        },
        {
          url: "/assets/manual/actualizacion_6.png",
          caption: "Bandeja de Archivos Anexados con Marcas Temporales",
          badgeText: "Archivos Anexados",
          description: "Visualización de anexos ordenados con identificador correlativo APP-2026-xxx y fecha/hora."
        },
        {
          url: "/assets/manual/actualizacion_8.png",
          caption: "Vista de Consulta de Archivos disponible para Gestores",
          badgeText: "Consultar Archivos",
          description: "Acceso rápido a todas las evidencias fotográficas y documentales del caso."
        }
      ]
    },
    {
      id: 6,
      category: "Novedades & Edición",
      badge: "Nueva Función",
      title: "6. Corrección Administrativa de Datos (Editar Correo PQR)",
      summary: "Herramienta administrativa para subsanar errores tipográficos en el correo del usuario sin afectar el estado de la solicitud.",
      role: "Administrador / Creador",
      steps: [
        {
          num: "Paso 1",
          title: "Objetivo de la Funcionalidad",
          desc: "Permite al administrador corregir errores cometidos por el ciudadano al digitar su correo electrónico, asegurando que las respuestas formales en PDF no reboten por dirección inválida.",
          highlight: "Subsanación de fallas de digitación"
        },
        {
          num: "Paso 2",
          title: "Ubicación del Botón de Edición Rápida",
          desc: "En la vista de detalle de la PQR, el Administrador dispone del botón 'Editar Correo PQR' (ícono @). Este botón está siempre visible y disponible sin importar si la PQR está Abierta, Atendida o Cerrada.",
          highlight: "Acción permanente para Administrador"
        },
        {
          num: "Paso 3",
          title: "Ventana Modal de Modificación",
          desc: "Al pulsar el botón se despliega una ventana modal interactiva 'Editar Correo PQR' con el campo para ingresar la dirección corregida. Se presiona 'Guardar' y el correo queda actualizado en la base de datos inmediatamente.",
          highlight: "Actualización sin alterar el estado del radicado"
        }
      ],
      callout: "Integridad de Datos: El botón 'Editar Correo PQR' actualiza de forma segura la columna Email de la tabla Pqrs sin reiniciar los contadores de días hábiles ni modificar el histórico de gestiones emitidas.",
      screenshots: [
        {
          url: "/assets/manual/actualizacion_3.png",
          caption: "Ventana Modal Interactiva para Editar el Correo del Peticionario",
          badgeText: "Editar Correo PQR",
          description: "Diálogo modal que permite cambiar la dirección de correo electrónico institucional o del ciudadano."
        }
      ]
    },
    {
      id: 7,
      category: "Novedades & Edición",
      badge: "Trazabilidad",
      title: "7. Sistema de Notificaciones, Renotificación y Trazabilidad al Gestor",
      summary: "Alertas automáticas vía correo corporativo con control estricto de renotificaciones y marcas de tiempo de auditoría.",
      role: "Administrador / Gestor Técnico",
      steps: [
        {
          num: "Paso 1",
          title: "Notificación Inicial al Asignar Radicado",
          desc: "Cuando se radica una PQR y se asigna a un departamento, el sistema notifica de inmediato al correo corporativo del Gestor con los detalles del caso, semáforo legal preventivo y enlaces de acceso directo.",
          highlight: "Correo automático con botón 'Abrir en App'"
        },
        {
          num: "Paso 2",
          title: "Renotificación por Vencimiento Próximo",
          desc: "Si el Gestor no ha emitido respuesta y el plazo se aproxima al vencimiento, el Administrador dispone del botón 'Renotificar Gestor' para recordarle formalmente su obligación de respuesta.",
          highlight: "Acción 'Renotificar Gestor'"
        },
        {
          num: "Paso 3",
          title: "Registro de Trazabilidad en Auditoría",
          desc: "Cada vez que se renotifica, el sistema incrementa automáticamente el campo 'Veces que fue notificado por el administrador' (ContadorNotificacion) y actualiza la 'Fecha de última notificación' (UltimaNotificacion) con la hora exacta.",
          highlight: "Campos ContadorNotificacion y UltimaNotificacion"
        },
        {
          num: "Paso 4",
          title: "Recordatorio de Cierre para PQR Atendida",
          desc: "Para radicados en estado 'Atendida', el Administrador puede enviar una notificación especial al Gestor indicando que debe completar las acciones de fondo requeridas para proceder al cierre definitivo del caso.",
          highlight: "Alerta 'PQR en Estado ATENDIDA'"
        }
      ],
      callout: "Auditoría ANI: Este registro permite documentar formalmente la debida diligencia de la administración de la concesión ante demoras atribuibles a dependencias técnicas internas.",
      screenshots: [
        {
          url: "/assets/manual/actualizacion_16.png",
          caption: "Plantilla de Correo Oficial: Nueva PQR Asignada con Semáforo Legal",
          badgeText: "Notificación de Asignación",
          description: "Formato HTML con alerta de plazo legal (6 de 7 días hábiles), área, peticionario y accesos directos."
        },
        {
          url: "/assets/manual/actualizacion_17.png",
          caption: "Plantilla de Correo de Recordatorio: PQR en Estado ATENDIDA",
          badgeText: "Recordatorio de Cierre",
          description: "Notificación preventiva solicitando culminar el proceso para proceder al cierre oportuno."
        },
        {
          url: "/assets/manual/actualizacion_19.png",
          caption: "Campos de Auditoría: Veces Notificado y Fecha de Última Notificación",
          badgeText: "Auditoría en Detalle Pqr",
          description: "Visualización de los nuevos campos de trazabilidad en la ficha técnica del radicado."
        }
      ]
    },
    {
      id: 8,
      category: "Gestión y PDF",
      badge: "Segunda Instancia",
      title: "8. Trámite de Apelaciones y Alertas de Inconformidad",
      summary: "Protocolo para reabrir radicados cerrados ante inconformidad del solicitante con despacho prioritario a Jefes de Área.",
      role: "Administrador / Creador / Jefes de Área",
      steps: [
        {
          num: "Paso 1",
          title: "Condición de Aplicación de Apelación",
          desc: "La apelación aplica exclusivamente sobre solicitudes que previamente alcanzaron el estado 'Cerrada' y cuentan con gestión de respuesta formal.",
          highlight: "Condición: [Estado_Pqr] = 'Cerrada'"
        },
        {
          num: "Paso 2",
          title: "Ejecución de la Acción Apelación",
          desc: "El Administrador ingresa al detalle de la última gestión y presiona el botón 'Apelacion' (ícono de bandera).",
          highlight: "Acción compuesta 'Apelacion'"
        },
        {
          num: "Paso 3",
          title: "Registro de Inconformidad y Reapertura",
          desc: "Se ingresan los argumentos y motivos en 'Comentarios de apelación'. La PQR pasa automáticamente a estado 'Atendida', la bandera de Apelación cambia a 'Sí' y se registra la FechaApelacion.",
          highlight: "Reapertura de Cerrada -> Atendida"
        },
        {
          num: "Paso 4",
          title: "Alerta Crítica a Directores vía Apps Script",
          desc: "El bot 'Notificar_Apelacion_Deepseek' dispara el script 'enviarCorreoDpto', notificando de inmediato con prioridad alta al Jefe de Área y Director de la dependencia responsable para una reevaluación técnica de segunda instancia.",
          highlight: "Script 'enviarCorreoDpto' para apelaciones"
        }
      ],
      callout: "Garantía al Usuario: El recurso de apelación garantiza el derecho constitucional de contradicción ciudadana conforme al CPACA, reactivando los términos para una respuesta complementaria.",
      screenshots: [
        {
          url: "/assets/manual/actualizacion_18.png",
          caption: "Plantilla de Correo Oficial: Notificación de Apelación de Gestión",
          badgeText: "Notificación de Apelación",
          description: "Alerta prioritaria despachada a directores con motivo de inconformidad y fecha de recurso."
        },
        {
          url: "/assets/manual/pantallazo_11.png",
          caption: "Botón de Apelación en la Barra Superior de la Gestión",
          badgeText: "Botón Apelacion",
          description: "Acceso directo en la cabecera de la ficha de gestión para radicar el recurso."
        }
      ]
    },
    {
      id: 9,
      category: "Reportes & BI",
      badge: "Analítica en Tiempo Real",
      title: "9. Dashboard Analítico Interactivo y Monitoreo Gerencial",
      summary: "Visualización gráfica integral de la operación de PQRSD mediante tableros dinámicos en AppSheet y Looker Studio.",
      role: "Directores / Gerencia / Administrador",
      steps: [
        {
          num: "Paso 1",
          title: "Acceso al Menú 'DashBoard'",
          desc: "En el menú lateral de la aplicación, seleccione la vista interactiva 'DashBoard' creada especialmente para el seguimiento gerencial.",
          highlight: "Vista interactiva tipo Dashboard"
        },
        {
          num: "Paso 2",
          title: "Exploración de Paneles Gráficos",
          desc: "El tablero integra simultáneamente múltiples indicadores:\n• Servicios con mayor número de quejas y peticiones.\n• Distribución por Departamentos y Gestores asignados.\n• Población solicitante por Servicio Vial.\n• Semáforo de Estado de Pqrs (Abierta, Atendida, Cerrada).\n• Gráfica de evolución temporal entre fechas y comparativo por Años.",
          highlight: "Gráficos de Donut y Barras sincronizados"
        },
        {
          num: "Paso 3",
          title: "Filtrado Dinámico en Pantalla",
          desc: "En el panel derecho del Dashboard, utilice el módulo 'filtros' para ajustar la Fecha Inicio, Fecha Fin y Servicio Vial. Todas las gráficas se recalculan de forma instantánea.",
          highlight: "Filtros interactivos de sesión"
        },
        {
          num: "Paso 4",
          title: "Acceso a Tablero Ejecutivo en Looker Studio",
          desc: "Al pulsar la acción 'Estadísticas' en la vista de Pqrs, el sistema abre el reporte gerencial avanzado en Google Looker Studio para exportación de presentaciones a la Junta Directiva.",
          highlight: "Integración con Looker Studio"
        }
      ],
      callout: "Toma de Decisiones: El Dashboard permite identificar corredores viales críticos (peajes con demoras, requerimientos de báscula, puntos de ambulancia) para orientar intervenciones de mantenimiento prioritarias.",
      screenshots: [
        {
          url: "/assets/manual/actualizacion_1.png",
          caption: "Tablero de Control y Dashboard Interactivo en AppSheet",
          badgeText: "Dashboard Gerencial",
          description: "Panel integral con gráficos de rosca, distribución por gestor, barras por año y panel de filtros de fecha."
        }
      ]
    },
    {
      id: 10,
      category: "Reportes & BI",
      badge: "Exportación Oficial",
      title: "10. Generación y Descarga de Reportes Consolidados en Excel (.xlsx)",
      summary: "Procedimiento oficial para compilar auditorías de PQRSD y exportar libros estructurados en hoja de cálculo.",
      role: "Administrador / Creador / Auditoría",
      steps: [
        {
          num: "Paso 1",
          title: "Ingresar al Menú 'Reportes'",
          desc: "Acceda a la vista principal 'Historial reportes' desde el menú. Aquí se conservan todos los informes consolidados generados históricamente con su fecha y parámetros.",
          highlight: "Historial de Reportes disponible para Administrador"
        },
        {
          num: "Paso 2",
          title: "Configurar Parámetros del Reporte",
          desc: "Presione 'Generar Reporte'. Defina el Tipo de PQR (por defecto 'Todos' o una categoría específica), el Tipo de Reporte ('Todos', 'Estado', 'Departamento', 'Servicios'), y establezca obligatoriamente el rango en 'Fecha Inicio' y 'Fecha Fin'.",
          highlight: "Filtros por Fecha Inicio y Fecha Fin"
        },
        {
          num: "Paso 3",
          title: "Compilación Automatizada por Bot",
          desc: "Al presionar 'Guardar', el sistema abre la vista Detalle del Reporte. El bot 'Todas las Pqr' compila las filas de la base de datos que cumplen con los criterios y genera el archivo Excel con la plantilla institucional.",
          highlight: "Bot 'Todas las Pqr' en /Reportes/Reportes_Generados"
        },
        {
          num: "Paso 4",
          title: "Descarga del Libro Excel (.xlsx)",
          desc: "Espere unos segundos a que finalice la compilación. El sistema mostrará el ícono de descarga; dé clic sobre este para descargar automáticamente el libro físico de Excel en su equipo.",
          highlight: "Descarga directa de Reporte_[Tipo]_[Fecha].xlsx"
        }
      ],
      callout: "Estandarización: La estructura de columnas del archivo Excel generado sigue estrictamente el formato entregado por la Concesión Vial, listo para radicación ante la Interventoría y la ANI.",
      screenshots: [
        {
          url: "/assets/manual/novedad_nov_8.png",
          caption: "Vista Principal del Historial de Reportes Generados",
          badgeText: "Historial reportes",
          description: "Listado cronológico con parámetros de auditoría y enlaces a los libros generados."
        },
        {
          url: "/assets/manual/novedad_nov_9.png",
          caption: "Formulario para Generar Reporte con Filtros de Rango de Fechas",
          badgeText: "Generar Reporte",
          description: "Configuración de tipo de solicitud, dependencia y fechas de corte inicial y final."
        },
        {
          url: "/assets/manual/novedad_nov_13.png",
          caption: "Ejemplo del Informe Oficial de Gestión de PQRSD Generado en Excel",
          badgeText: "Libro Excel .xlsx",
          description: "Reporte con membrete institucional oficial de Ruta Magdalena Sierra Mar y columnas de auditoría legal."
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos los Procedimientos' },
    { id: 'Radicación', label: '1. Radicación' },
    { id: 'SLA & Términos', label: '2. SLA & Días Hábiles' },
    { id: 'Gestión y PDF', label: '3. Gestión & PDF' },
    { id: 'Novedades & Edición', label: '4. Novedades & Edición' },
    { id: 'Reportes & BI', label: '5. Reportes & Dashboard' }
  ];

  const filteredProcedures = procedures.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.steps.some(s => s.title.toLowerCase().includes(searchTerm.toLowerCase()) || s.desc.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const currentProc = procedures.find(p => p.id === activeProcedure) || procedures[0];

  return (
    <div className="space-y-8 py-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">
              Manual de Operación & Referencias
            </span>
            <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-slate-100 text-slate-700">
              Versión {APP_METADATA.version}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Manual de Usuario Oficial con Capturas y Procedimientos
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Guía paso a paso ilustrada con capturas reales de la aplicación AppSheet, flujos de validación, días hábiles, correos y reportes.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <a
            href="/assets/aistudio/Pantallazos_de_la_aplicaci_n_Modulo_de_Gesti_n_PQRSD_999c3d6f.pdf"
            download="Pantallazos_Oficiales_PQRSD.pdf"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            title="Descargar Dossier de Pantallazos en PDF"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>Descargar Pantallazos PDF</span>
          </a>

          <a
            href="/assets/aistudio/Manual_Tecnico_y_Usuario_PQRSD_a25cf70c.pdf"
            download="Manual_Tecnico_y_Usuario_PQRSD.pdf"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Manual PDF Completo</span>
          </a>
        </div>
      </div>

      {/* Category Pills and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar procedimiento, campo o paso..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Main Container: Index Sidebar on Left (4 cols), Procedure & Screenshots on Right (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Navigation Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-1.5 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Procedimientos ({filteredProcedures.length})
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {currentProc.category}
              </span>
            </div>

            {filteredProcedures.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveProcedure(p.id);
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className={`w-full p-3 rounded-xl text-left transition-all border ${
                  activeProcedure === p.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    activeProcedure === p.id
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {p.badge}
                  </span>
                  <span className="text-[11px] opacity-75 font-mono">
                    {p.screenshots.length} {p.screenshots.length === 1 ? 'captura' : 'capturas'}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold line-clamp-1 leading-snug">
                    {p.title}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${activeProcedure === p.id ? 'text-emerald-400' : 'text-slate-400'}`} />
                </div>
                <span className={`text-[11px] block mt-1 line-clamp-2 leading-relaxed ${
                  activeProcedure === p.id ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {p.summary}
                </span>
              </button>
            ))}

            {filteredProcedures.length === 0 && (
              <div className="p-6 text-center text-xs text-slate-400">
                No se encontraron procedimientos que coincidan con la búsqueda.
              </div>
            )}
          </div>
        </div>

        {/* Procedure Detail & Screenshot Showcase (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            
            {/* Header of Active Procedure */}
            <div className="pb-5 border-b border-slate-100 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {currentProc.category}
                </span>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Rol: {currentProc.role}
                </span>
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                  {currentProc.screenshots.length} capturas referenciadas
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {currentProc.title}
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                {currentProc.summary}
              </p>
            </div>

            {/* Visual Screenshot References Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Capturas Reales de la Aplicación en AppSheet
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">
                  Haz clic en cualquier imagen para ampliar
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProc.screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-400 transition-all flex flex-col justify-between"
                  >
                    <div
                      onClick={() => setLightboxImg({ url: shot.url, caption: shot.caption })}
                      className="cursor-pointer relative overflow-hidden bg-slate-200/50 flex items-center justify-center p-2 min-h-[200px]"
                    >
                      <img
                        src={shot.url}
                        alt={shot.caption}
                        className="w-full h-auto max-h-[300px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-all flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-3 py-1.5 rounded-xl shadow-md text-xs font-semibold text-slate-900 flex items-center gap-1.5 backdrop-blur-xs">
                          <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Ampliar Captura</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white border-t border-slate-200 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {shot.badgeText}
                        </span>
                        <button
                          onClick={() => setLightboxImg({ url: shot.url, caption: shot.caption })}
                          className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Ver HD</span>
                        </button>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {shot.caption}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                        {shot.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-step instructions */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Instrucciones Paso a Paso para el Operador</span>
              </h3>

              <div className="space-y-3">
                {currentProc.steps.map((st, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-slate-900 text-white font-mono text-[11px] font-bold">
                          {st.num}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">
                          {st.title}
                        </h4>
                      </div>

                      {st.highlight && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                          {st.highlight}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs text-slate-600 leading-relaxed pl-1 whitespace-pre-line">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Rule Callout */}
            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-sm block text-blue-900">
                  Regla de Negocio y Consideración Técnica:
                </span>
                <p className="leading-relaxed text-blue-800">
                  {currentProc.callout}
                </p>
              </div>
            </div>

            {/* Bottom Stepper Navigation */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                disabled={activeProcedure === 1}
                onClick={() => {
                  setActiveProcedure(prev => Math.max(1, prev - 1));
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Procedimiento Anterior
              </button>

              <span className="text-xs font-mono text-slate-400">
                {activeProcedure} de {procedures.length}
              </span>

              <button
                disabled={activeProcedure === procedures.length}
                onClick={() => {
                  setActiveProcedure(prev => Math.min(procedures.length, prev + 1));
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-xs"
              >
                Siguiente Procedimiento →
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal for Fullscreen Image Examination */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  Captura Oficial AppSheet
                </span>
                <span className="text-xs font-bold text-slate-900 truncate max-w-md sm:max-w-xl">
                  {lightboxImg.caption}
                </span>
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 bg-slate-900/5 flex items-center justify-center min-h-[400px]">
              <img
                src={lightboxImg.url}
                alt={lightboxImg.caption}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-sm"
              />
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>Ruta Magdalena Sierra Mar · Guía Técnica PQRSD</span>
              <a
                href={lightboxImg.url}
                download
                className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar Imagen</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
