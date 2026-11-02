import { RequirementItem } from '../utils/slaEngine';

export interface RoadService {
  code: string;
  id: string;
  name: string;
  description: string;
  category: 'Asistencia y Operación' | 'Infraestructura y Vía' | 'Atención y Comunidad';
  typicalPqrs: string;
}

export interface TableSummary {
  name: string;
  columnsCount: number;
  description: string;
  keyColumn: string;
  labelColumn: string;
  allowedUpdates: string;
  securityFilter: string;
  keyColumns: {
    name: string;
    type: string;
    required: boolean;
    formula?: string;
    description: string;
  }[];
}

export interface AutomationBot {
  name: string;
  table: string;
  event: string;
  condition: string;
  scriptProject?: string;
  scriptFunction?: string;
  description: string;
  processType: 'Call a script' | 'Create a new file' | 'Run action on rows' | 'Set row values' | 'Grouped actions';
  targetFolder?: string;
}

export interface HealthFinding {
  id: string;
  severity: 'high' | 'medium' | 'info';
  category: 'broken-reference' | 'duplicate-like' | 'unused-candidate';
  title: string;
  component: string;
  summary: string;
  evidence: string;
  guidance: string;
  resolutionStatus: 'Identificado' | 'Plan de Remediación Listo' | 'Bajo Revisión';
  suggestedFix: string;
}

export interface TestCase {
  id: string;
  category: 'Funcional' | 'Seguridad' | 'Automatización' | 'SLA / Días Hábiles';
  title: string;
  precondition: string;
  steps: string[];
  expectedResult: string;
  status: 'Aprobado' | 'En Validación' | 'Pendiente';
  criticality: 'Alta' | 'Media';
}

export const APP_METADATA = {
  appName: "Pqrs_RM_IpRev-678335064",
  title: "App para el procesamiento de PQRSD Ruta Magdalena Sierra Mar",
  version: "1.000572",
  framework: "Google AppSheet Enterprise",
  engineVersion: "AppSheet Toolkit v1.9.0 / Snapshot v2.0.0",
  concessionName: "Concesión Vial Ruta Magdalena Sierra Mar",
  developerName: "Ing. Oviedo J. Ceballos",
  developerLogo: "https://github.com/oviedojceballos-ops/LogoPersonalOviedo/blob/main/LogoHorizontalOV2_Footer.png?raw=true",
  emissionDate: "Noviembre 2, 2026",
  platformState: "Producción Activa / Entregable Final",
  metrics: {
    tables: 12,
    columns: 198,
    slices: 4,
    views: 50,
    customViews: 19,
    systemViews: 31,
    actions: 134,
    customActions: 59,
    systemActions: 75,
    bots: 10,
    tasks: 17,
    relationships: 1332,
    appHealthFindings: 21,
    highFindings: 1,
    mediumFindings: 4,
    infoFindings: 16
  }
};

export const ROAD_SERVICES: RoadService[] = [
  {
    code: "Ser-01",
    id: "Ser-01",
    name: "Servicio de Ambulancia",
    description: "Reportes e incidencias sobre atención prehospitalaria y traslados de urgencia en el corredor vial.",
    category: "Asistencia y Operación",
    typicalPqrs: "Tiempos de respuesta ante accidentes, disponibilidad de paramédicos."
  },
  {
    code: "Ser-02",
    id: "Ser-02",
    name: "Atención al Usuario",
    description: "Requerimientos sobre las oficinas físicas, puntos de atención presencial, trámites o trato de personal.",
    category: "Atención y Comunidad",
    typicalPqrs: "Solicitud de certificaciones, peticiones de información ciudadana, quejas de trato."
  },
  {
    code: "Ser-03",
    id: "Ser-03",
    name: "Servicio de Báscula",
    description: "Eventos relacionados con el control de pesaje, estaciones de pesaje vehicular y verificación de sobrepeso.",
    category: "Asistencia y Operación",
    typicalPqrs: "Calibración de básculas, tiempos de espera de vehículos de carga pesada."
  },
  {
    code: "Ser-04",
    id: "Ser-04",
    name: "Colpass / Telepeaje",
    description: "Gestión, lectura o inconvenientes asociados al sistema de telepeaje electrónico interoperable Colpass.",
    category: "Asistencia y Operación",
    typicalPqrs: "Fallos en lectura de TAG, cobros duplicados, activación de saldo."
  },
  {
    code: "Ser-05",
    id: "Ser-05",
    name: "Carro Taller",
    description: "Solicitudes de asistencia mecánica menor, cambio de llantas, despinche y apoyo técnico preventivo en vía.",
    category: "Asistencia y Operación",
    typicalPqrs: "Solicitud de auxilio mecánico, tiempo de llegada del móvil de asistencia."
  },
  {
    code: "Ser-06",
    id: "Ser-06",
    name: "Servicio de Grúa",
    description: "Servicios de remolque de vehículos varados o siniestrados hacia zonas seguras de la concesión.",
    category: "Asistencia y Operación",
    typicalPqrs: "Tiempo de despacho de grúa liviana o pesada, condiciones de remolque."
  },
  {
    code: "Ser-07",
    id: "Ser-07",
    name: "Peajes y Estaciones de Recaudo",
    description: "Operación de las casetas de recaudo en efectivo, tarifas diferenciales, filas y agilidad en caseta.",
    category: "Asistencia y Operación",
    typicalPqrs: "Inconformidad con cobro tarifario, tiempo de espera en hora pico, facturación electrónica."
  },
  {
    code: "Ser-08",
    id: "Ser-08",
    name: "Gestión Predial",
    description: "Consultas, reclamaciones o gestiones sobre adquisición de predios, avalúos y faja de retiro vial.",
    category: "Infraestructura y Vía",
    typicalPqrs: "Estado de avalúos prediales, compensaciones socioeconómicas a propietarios."
  },
  {
    code: "Ser-09",
    id: "Ser-09",
    name: "Estado de la Vía",
    description: "Reportes directos sobre baches, huecos, ondulaciones, bermas deterioradas u obstáculos en la calzada.",
    category: "Infraestructura y Vía",
    typicalPqrs: "Reporte de daños a vehículos por baches, solicitud de bacheo puntual."
  },
  {
    code: "Ser-10",
    id: "Ser-10",
    name: "Mantenimiento de Infraestructura",
    description: "Obras civiles mayores, mantenimiento periódico de puentes, cunetas, taludes, drenajes y calzadas.",
    category: "Infraestructura y Vía",
    typicalPqrs: "Limpieza de alcantarillas, estabilidad de taludes, intervención de puentes."
  },
  {
    code: "Ser-11",
    id: "Ser-11",
    name: "Señalización Vial",
    description: "Estado, reposición o ausencia de señales verticales, hitos, tachas reflectivas y demarcación horizontal.",
    category: "Infraestructura y Vía",
    typicalPqrs: "Falta de visibilidad nocturna, señales derribadas por incidentes, repintado de líneas."
  },
  {
    code: "Ser-12",
    id: "Ser-12",
    name: "Servicio de Baños",
    description: "Condiciones de salubridad, agua, higiene y disponibilidad de servicios higiénicos en estaciones de servicio.",
    category: "Atención y Comunidad",
    typicalPqrs: "Aseo en baterías sanitarias de peajes o áreas de servicio, mantenimiento de lavamanos."
  },
  {
    code: "Ser-13",
    id: "Ser-13",
    name: "Atención a la Comunidad",
    description: "Gestión social con comunidades aledañas, afectaciones a veredas vecinas, pasos peatonales y acuerdos.",
    category: "Atención y Comunidad",
    typicalPqrs: "Solicitud de reductores de velocidad en centros poblados, puentes peatonales, empleo local."
  },
  {
    code: "Ser-14",
    id: "Ser-14",
    name: "Otros Requerimientos",
    description: "Casos especiales, consultas jurídicas o temas institucionales no clasificados en las áreas anteriores.",
    category: "Atención y Comunidad",
    typicalPqrs: "Consultas institucionales de entes territoriales, trámites interinstitucionales."
  }
];

export const APP_TABLES: TableSummary[] = [
  {
    name: "Pqrs",
    columnsCount: 49,
    description: "Tabla principal del sistema donde se radican las Peticiones, Quejas, Reclamos, Sugerencias y Denuncias.",
    keyColumn: "ID_PQR",
    labelColumn: "ID_Interno",
    allowedUpdates: "Updates, Adds, Deletes (Controlado por Rol y Estado)",
    securityFilter: "=OR(IN(USEREMAIL(), LIST(admins)), IN(LOOKUP(USEREMAIL(), 'Gestores', 'CorreoGestor', 'Rol'), LIST('Administrador', 'Creador')), [Departamento] = LOOKUP(USEREMAIL(), 'Departamentos', 'CorreoDpto', 'ID_Departamento'))",
    keyColumns: [
      { name: "ID_PQR", type: "Text", required: true, formula: "=uniqueid()", description: "Identificador global único del sistema" },
      { name: "ID_Interno", type: "Text", required: false, description: "Código oficial de radicado generado por bot (e.g. PQR-2026-000123)" },
      { name: "Tipo_Solicitud", type: "Enum", required: true, description: "Petición, Queja, Reclamo, Sugerencia, Denuncia" },
      { name: "Prioridad_Solicitud", type: "Enum", required: true, description: "General (15 días hábiles) o Documentos/Información (10 días hábiles)" },
      { name: "Servicio", type: "Ref", required: true, description: "Referencia al servicio vial de la concesión (Ser-01 al Ser-14)" },
      { name: "Estado_Pqr", type: "Text", required: false, formula: "='Abierta'", description: "Estado del ciclo de vida: Abierta, Atendida, Cerrada" },
      { name: "Dias_Habiles_Sheet", type: "Number", required: true, formula: "=ArrayFormula(MAP(..., LAMBDA(..., NETWORKDAYS.INTL(..., festivos))))", description: "Días hábiles calculados excluyendo festivos colombianos" },
      { name: "AlertaVencimiento_Virtual", type: "Text", required: false, formula: "=IFS([Estado_Pqr]<>'Abierta', '✅'..., [Dias_Habiles_Sheet]>=..., '🔴 Plazo legal vencido'..., TRUE, '🟡 OK: Dentro del plazo')", description: "Semáforo visual de alerta legal" },
      { name: "Calificacion_Virtual", type: "Text", required: false, formula: "=IFS(..., 'Excelente', ..., 'Bueno', ..., 'Fuera del tiempo')", description: "Calificación de oportunidad en la respuesta" }
    ]
  },
  {
    name: "GestionPqr",
    columnsCount: 33,
    description: "Registra cada gestión, contestación formal, archivo adjunto y respuesta emitida por los gestores.",
    keyColumn: "ID_Gestion",
    labelColumn: "ID_Interno",
    allowedUpdates: "Updates, Adds (Controlado por estado de respuesta y PDF)",
    securityFilter: "Hereda visibilidad de Pqrs por departamento asignado o rol Administrador.",
    keyColumns: [
      { name: "ID_Gestion", type: "Text", required: true, formula: "=uniqueid()", description: "Identificador único de la gestión" },
      { name: "ID_PQR", type: "Ref", required: true, description: "Referencia obligatoria a la PQR madre en tabla Pqrs" },
      { name: "RespuestaPQR", type: "LongText", required: true, description: "Contenido detallado de la contestación institucional" },
      { name: "EstadoPqr", type: "Enum", required: true, description: "Nuevo estado que asigna la gestión (Atendida / Cerrada)" },
      { name: "PDF", type: "File", required: false, description: "Ruta en Google Drive del PDF oficial generado en /Gestion_PDF" },
      { name: "Estado_Email", type: "Enum", required: false, formula: "='Pendiente'", description: "Iniciado, Completado o Pendiente (despacho por Apps Script)" },
      { name: "Apelacion", type: "Text", required: false, formula: "='No'", description: "Bandera de inconformidad ciudadana (Sí/No) para reapertura" }
    ]
  },
  {
    name: "Departamentos",
    columnsCount: 11,
    description: "Áreas y dependencias operativas y administrativas de la concesión vial.",
    keyColumn: "ID_Departamento",
    labelColumn: "Departamento",
    allowedUpdates: "All Changes para administradores; Read Only para gestores",
    securityFilter: "=OR(USEREMAIL() = admin, [CorreoDpto] = USEREMAIL())",
    keyColumns: [
      { name: "ID_Departamento", type: "Text", required: true, formula: "='Dep-SIERRAMAR-' & RIGHT('00' & MAX + 1, 2)", description: "Código correlativo del departamento" },
      { name: "Departamento", type: "Text", required: true, description: "Nombre de la dependencia (e.g. Operaciones, Jurídica, Mantenimiento)" },
      { name: "CorreoDpto", type: "Email", required: true, description: "Correo electrónico para inicio de sesión en AppSheet" },
      { name: "CorreoCorporativo", type: "Email", required: true, description: "Buzón corporativo institucional para notificaciones Apps Script" }
    ]
  },
  {
    name: "Gestores",
    columnsCount: 20,
    description: "Directorio de funcionarios autorizados para dar respuesta técnica a radicados.",
    keyColumn: "ID_Gestor",
    labelColumn: "NombreGestor",
    allowedUpdates: "Gestión restringida a Administrador y Creador",
    securityFilter: "=OR(IN(USEREMAIL(), admins), [ID_Departamento] = LOOKUP(USEREMAIL(), ...))",
    keyColumns: [
      { name: "ID_Gestor", type: "Text", required: true, formula: "='User-SIERRAMAR-' & RIGHT('000' & MAX + 1, 3)", description: "Código de usuario gestor" },
      { name: "NombreGestor", type: "Text", required: true, description: "Nombres y apellidos del funcionario" },
      { name: "Rol", type: "Enum", required: false, formula: "='Gestor'", description: "Gestor, Jefe Área, Administrador" },
      { name: "FirmaGestor", type: "Image", required: false, description: "Firma digitalizada para incrustar en el PDF formal" },
      { name: "SVGImagen_vitual", type: "Image", required: false, description: "Tarjeta interactiva SVG generada dinámicamente con estado y conteo de Pqrs" }
    ]
  },
  {
    name: "Servicio",
    columnsCount: 7,
    description: "Catálogo de los 14 servicios viales cubiertos por la concesión.",
    keyColumn: "ID_Servicio",
    labelColumn: "Servicio",
    allowedUpdates: "Read Only general; Edición sólo Administrador",
    securityFilter: "Todos los usuarios tienen acceso de lectura",
    keyColumns: [
      { name: "ID_Servicio", type: "Text", required: true, formula: "='Ser-' & RIGHT('00' & (_RowNumber-1), 2)", description: "Código estándar (Ser-01 a Ser-14)" },
      { name: "Servicio", type: "Text", required: true, description: "Denominación del servicio vial" },
      { name: "Estado", type: "Enum", required: false, description: "Activo / Inactivo" }
    ]
  },
  {
    name: "ArchivosPostPqr",
    columnsCount: 9,
    description: "Repositorio para adjuntar pruebas, evidencias fotográficas y anexos complementarios post-radicación.",
    keyColumn: "ID_APP",
    labelColumn: "ID_APP",
    allowedUpdates: "Adds permitidos mientras la PQR no esté cerrada",
    securityFilter: "Relacionado a Pqrs asignadas",
    keyColumns: [
      { name: "ID_APP", type: "Text", required: true, formula: "='Anx-' & RIGHT('0000' & MAX + 1, 4)", description: "Identificador del anexo" },
      { name: "ID_PQR", type: "Ref", required: true, description: "PQR a la cual se asocia el anexo" },
      { name: "Archivo_Post", type: "File", required: false, description: "Archivo cargado (PDF, imagen, comprimido)" },
      { name: "Observaciones", type: "LongText", required: false, description: "Nota explicativa de la prueba o evidencia" }
    ]
  },
  {
    name: "Filtros",
    columnsCount: 21,
    description: "Tabla de parámetros dinámicos para dashboard interactivo y filtrado por fechas y servicios.",
    keyColumn: "ID_Filtro",
    labelColumn: "FechaInicio",
    allowedUpdates: "Updates permitidos para el usuario en sesión",
    securityFilter: "Uso de sesión / interactivo",
    keyColumns: [
      { name: "FechaInicio", type: "Date", required: false, formula: "=TODAY()", description: "Fecha inicial del rango de auditoría" },
      { name: "FechaFin", type: "Date", required: false, formula: "=TODAY()", description: "Fecha de corte del rango de auditoría" },
      { name: "TotalPqr_virtual", type: "Number", required: false, formula: "=COUNT(SELECT(Pqrs[ID_PQR], ...))", description: "Total de radicados en el rango seleccionado" }
    ]
  },
  {
    name: "festivos_2025_2036",
    columnsCount: 6,
    description: "Calendario de días festivos oficiales en Colombia para el cómputo exacto de días hábiles legales.",
    keyColumn: "ID_Festivos",
    labelColumn: "Fecha",
    allowedUpdates: "Read Only",
    securityFilter: "Pública para la función NETWORKDAYS.INTL",
    keyColumns: [
      { name: "Fecha", type: "Date", required: true, description: "Fecha del feriado" },
      { name: "Festivo", type: "Text", required: false, description: "Nombre de la festividad nacional" },
      { name: "Año", type: "Number", required: true, description: "Año fiscal (2025 al 2036)" }
    ]
  },
  {
    name: "Reportes",
    columnsCount: 12,
    description: "Histórico y generador de reportes consolidados en formato Excel (.xlsx) exportados a Google Drive.",
    keyColumn: "ID_Reporte",
    labelColumn: "ID_Reporte",
    allowedUpdates: "Adds permitidos para Administrador y Creador",
    securityFilter: "Restringido a Administrador y Creador",
    keyColumns: [
      { name: "Tipo_Reporte", type: "Enum", required: true, description: "Estado, Departamento, Apelación, Servicios, Todos" },
      { name: "Archivo_Excel", type: "File", required: false, description: "Enlace descargable al archivo generado en /Reportes/Reportes_Generados" },
      { name: "Fecha_Reporte", type: "DateTime", required: false, formula: "=NOW()", description: "Marca temporal de la auditoría" }
    ]
  },
  {
    name: "Noticias",
    columnsCount: 9,
    description: "Tablón de avisos, alertas viales, emergencias y notificaciones internas de la concesión.",
    keyColumn: "ID_NOTICIA",
    labelColumn: "TITULO_NOTICIA",
    allowedUpdates: "Controlado por Creador / Administrador",
    securityFilter: "Lectura abierta, edición restringida",
    keyColumns: [
      { name: "TITULO_NOTICIA", type: "Text", required: true, description: "Encabezado de la noticia" },
      { name: "TIPO_NOTICIA", type: "Enum", required: true, description: "Emergencias, Alertas, Notificaciones" },
      { name: "ESTADO_NOTICIA", type: "Enum", required: true, description: "Vigente / Vencida" }
    ]
  },
  {
    name: "ConsecutivosPqr",
    columnsCount: 5,
    description: "Control de secuencias numéricas correlativas para radicación de Pqrs y Gestiones.",
    keyColumn: "ID_Consecutivo",
    labelColumn: "Ultimo_Numero",
    allowedUpdates: "Modificado exclusivamente por bots de radicación",
    securityFilter: "Sistema interno",
    keyColumns: [
      { name: "ID_Consecutivo", type: "Text", required: true, description: "Identificador del consecutivo ('PQR', 'GES')" },
      { name: "Ultimo_Numero", type: "Number", required: false, description: "Último consecutivo asignado en el año" }
    ]
  },
  {
    name: "Datos_Rm",
    columnsCount: 16,
    description: "Identidad corporativa de la Concesión Vial Ruta Magdalena Sierra Mar (NIT, teléfonos, redes y enlaces).",
    keyColumn: "ID_RM",
    labelColumn: "Nombre_Empresa",
    allowedUpdates: "Administrador / Creador",
    securityFilter: "Lectura abierta",
    keyColumns: [
      { name: "Nombre_Empresa", type: "Text", required: false, description: "Razón social de la concesión" },
      { name: "Telefono_1", type: "Phone", required: true, description: "Línea de emergencia en vía y enlace a WhatsApp" },
      { name: "Web", type: "Url", required: true, description: "Portal oficial rmsierramar.com.co" }
    ]
  }
];

export const AUTOMATION_BOTS: AutomationBot[] = [
  {
    name: "Bot_Radicacion_IDInterno",
    table: "Pqrs",
    event: "Adds (Nuevo radicado)",
    condition: "Al guardar registro nuevo en Pqrs",
    description: "Incrementa el consecutivo en tabla ConsecutivosPqr, asigna el número correlativo y sintetiza el código de radicado único visible 'PQR-YYYY-XXXXXX'.",
    processType: "Grouped actions"
  },
  {
    name: "Notificar Departamento",
    table: "Pqrs",
    event: "Adds, Updates",
    condition: "AND([DepartamentoNotificado] = True, [_THISROW_BEFORE].[DepartamentoNotificado] <> True)",
    scriptProject: "Notificar_Departamento",
    scriptFunction: "enviarCorreoPQR",
    description: "Dispara Google Apps Script para despachar alerta inmediata al correo corporativo del Gestor y Director del Departamento informando nuevo caso y fecha límite legal.",
    processType: "Call a script"
  },
  {
    name: "Bot_Radicacion_IDInterno ges",
    table: "GestionPqr",
    event: "Adds (Nueva gestión)",
    condition: "Al guardar registro en GestionPqr",
    description: "Incrementa la secuencia numérica de gestiones y genera el ID institucional de respuesta 'Gestion-YYYY-XXXXXX'.",
    processType: "Grouped actions"
  },
  {
    name: "CrearPDF_GestionPqr_General",
    table: "GestionPqr",
    event: "Updates",
    condition: "[_THISROW_BEFORE].[CoPDF] <> [_THISROW_AFTER].[CoPDF]",
    targetFolder: "/Gestion_PDF",
    description: "Genera el documento formal maquetado en PDF de respuesta a la PQR con membrete oficial, firmas digitales y lo almacena en Google Drive.",
    processType: "Create a new file"
  },
  {
    name: "Enviar Respuesta Gestion",
    table: "GestionPqr",
    event: "Updates",
    condition: "[Estado_Email] = 'Iniciado'",
    scriptProject: "Gestion desde Corporativo",
    scriptFunction: "enviarEmailGestionPqr",
    description: "Llama a Google Apps Script para adjuntar automáticamente el PDF generado desde Drive y despacharlo por correo electrónico al ciudadano solicitante.",
    processType: "Call a script"
  },
  {
    name: "Actualizar_Estado",
    table: "GestionPqr",
    event: "Updates",
    condition: "ISNOTBLANK([FechaRespuesta])",
    description: "Sincroniza la tabla madre Pqrs actualizando automáticamente su estado a Atendida o Cerrada cuando el gestor emite su respuesta.",
    processType: "Run action on rows"
  },
  {
    name: "Actualizar Fecha_Respuesta",
    table: "GestionPqr",
    event: "Updates",
    condition: "ISBLANK([ID_PQR].[Fecha_Respuesta])",
    description: "Establece la fecha y hora oficial de respuesta en la PQR madre, congelando el conteo de días hábiles transcurridos.",
    processType: "Run action on rows"
  },
  {
    name: "Anexos",
    table: "ArchivosPostPqr",
    event: "Adds",
    condition: "Al adjuntar un archivo posterior",
    scriptProject: "Anexos",
    scriptFunction: "notificarAnexos",
    description: "Notifica por script al gestor asignado y a la administración cuando se agregan evidencias o fotos adicionales a un radicado en trámite.",
    processType: "Call a script"
  },
  {
    name: "Notificar_Apelacion_Deepseek",
    table: "GestionPqr",
    event: "Updates",
    condition: "AND([Apelacion] = 'Sí', ISNOTBLANK([ComentariosApelacion]))",
    scriptProject: "Apelacion_Deepseek",
    scriptFunction: "enviarCorreoDpto",
    description: "Alerta con prioridad crítica al Jefe de Área cuando un usuario interpone recurso de apelación, reactivando el caso para revisión de segunda instancia.",
    processType: "Call a script"
  },
  {
    name: "Todas las Pqr",
    table: "Reportes",
    event: "Adds",
    condition: "AND([Tipo_Pqr]='Todos', [Tipo_Reporte]='Todos')",
    targetFolder: "/Reportes/Reportes_Generados",
    description: "Compila las filas filtradas de la base de datos y exporta un libro físico de Excel (.xlsx) nombrado Reporte_[Tipo]_[Fecha].xlsx a Google Drive.",
    processType: "Create a new file"
  }
];

export const HEALTH_FINDINGS: HealthFinding[] = [
  {
    id: "health-1",
    severity: "high",
    category: "broken-reference",
    title: "Referencia No Resuelta: Columna TiempoRespuesta",
    component: "Actualizar campos Action - 1 (GestionPqr)",
    summary: "La acción intenta escribir sobre la columna GestionPqr.TiempoRespuesta, pero en el esquema la columna real es FechaRespuesta.",
    evidence: "Set these columns[1] -> GestionPqr.TiempoRespuesta",
    guidance: "Actualizar la configuración de la acción en AppSheet para apuntar a GestionPqr.FechaRespuesta o a la columna virtual TiempoRes_Virtual.",
    resolutionStatus: "Plan de Remediación Listo",
    suggestedFix: "En AppSheet Editor > Behavior > Actions > 'Actualizar campos Action - 1', cambiar el destino de columna de 'TiempoRespuesta' a 'FechaRespuesta'."
  },
  {
    id: "health-21",
    severity: "medium",
    category: "duplicate-like",
    title: "Acciones Duplicadas: Generación de ID PQR",
    component: "Action for Generar ID_PQR (Pqrs) / Action for Generar ID_PQR 2 (Pqrs)",
    summary: "Se detectaron 2 acciones con configuración idéntica para generar el ID de PQR en la tabla Pqrs.",
    evidence: "Misma firma de configuración tras excluir etiquetas de despliegue.",
    guidance: "Consolidar en una sola acción para evitar ejecuciones redundantes en bots concurrentes.",
    resolutionStatus: "Plan de Remediación Listo",
    suggestedFix: "Mantener una única acción centralizada de tipo Composite en la tabla Pqrs."
  },
  {
    id: "health-20",
    severity: "medium",
    category: "duplicate-like",
    title: "Acciones Duplicadas: Incremento de Consecutivos Gestión",
    component: "Afectar_Pqrs Action 1 y 2, Incrementar_Consecutivo Action - 5, Asignar número",
    summary: "4 acciones comparten signatura de actualización sobre el consecutivo de GestionPqr.",
    evidence: "Configuraciones paralelas para el flujo de incremento secuencial.",
    guidance: "Verificar si son variantes de procesos paralelos o redundancias de desarrollo.",
    resolutionStatus: "Plan de Remediación Listo",
    suggestedFix: "Estandarizar el bot 'Bot_Radicacion_IDInterno ges' con una única acción de incremento sobre ConsecutivosPqr."
  },
  {
    id: "health-19",
    severity: "medium",
    category: "duplicate-like",
    title: "Acciones Duplicadas: Secuencias de Radicación PQR",
    component: "ejecucion Action - 2, Incrementar_Consecutivo 1, 2 y 4",
    summary: "6 acciones comparten signatura para incrementar y asignar consecutivo a Pqrs.",
    evidence: "Variantes creadas durante pruebas de versionamiento de la app.",
    guidance: "Unificar en el pipeline del bot 'Bot_Radicacion_IDInterno'.",
    resolutionStatus: "Plan de Remediación Listo",
    suggestedFix: "Eliminar las acciones huérfanas 2 y 4 y delegar exclusivamente en Bot_Radicacion_IDInterno."
  },
  {
    id: "health-2",
    severity: "medium",
    category: "unused-candidate",
    title: "Slice Sin Consumidores: Gestores_Solo_Lectura",
    component: "Gestores_Solo_Lectura (Gestores)",
    summary: "El slice no tiene vistas, acciones ni bots consumidores detectados en el snapshot.",
    evidence: "0 dependencias entrantes descubiertas.",
    guidance: "Confirmar si se utiliza para deep links o si puede retirarse para optimizar memoria de sincronización.",
    resolutionStatus: "Bajo Revisión",
    suggestedFix: "Vincular a una vista de consulta pública de gestores o eliminar si ya no aplica."
  },
  {
    id: "health-10",
    severity: "info",
    category: "unused-candidate",
    title: "Acción Oculta Sin Consumidores: Actualizar Fecha_Respuesta",
    component: "Actualizar Fecha_Respuesta (Pqrs)",
    summary: "Acción en posición Hide sin llamadas entrantes directas en el grafo estático.",
    evidence: "Position: Hide; 0 incoming dependencies",
    guidance: "Puede ser invocada dinámicamente mediante LINKTOACTION.",
    resolutionStatus: "Identificado",
    suggestedFix: "Conservar como acción utilitaria de soporte para scripts externos."
  },
  {
    id: "health-17",
    severity: "info",
    category: "unused-candidate",
    title: "Acción Oculta: Actualizar PQR desde Apelacion",
    component: "Actualizar PQR desde Apelacion (Pqrs)",
    summary: "Acción oculta en tabla Pqrs.",
    evidence: "0 dependencias estáticas directas.",
    guidance: "Utilizada como acción hija en el proceso de apelación.",
    resolutionStatus: "Identificado",
    suggestedFix: "Mantener activa para el flujo de apelaciones del rol Administrador."
  },
  {
    id: "health-3",
    severity: "info",
    category: "unused-candidate",
    title: "Vista Personalizada: Agregar Pqr",
    component: "Agregar Pqr (Pqrs)",
    summary: "Vista en posición 'right' sin referencias descubiertas en menú principal.",
    evidence: "Position: right",
    guidance: "Diseñada como acceso directo rápido en barra lateral derecha.",
    resolutionStatus: "Identificado",
    suggestedFix: "Mantener como botón de acceso rápido para radicación ágil."
  }
];

export const INITIAL_REQUIREMENTS: RequirementItem[] = [
  {
    id: "req-1",
    code: "RF-01",
    title: "Radicación de PQRSD Multicanal",
    description: "Permitir a usuarios registrados y anónimos radicar peticiones, quejas, reclamos, sugerencias y denuncias clasificadas en 14 servicios viales.",
    type: "Funcional",
    priority: "Alta",
    status: "Completado",
    component: "Tabla Pqrs, Vista Pqrs_Form",
    verifiedInAppSheet: true
  },
  {
    id: "req-2",
    code: "RF-02",
    title: "Generación de Consecutivo Único Automatizado",
    description: "Asignar secuencialmente el código institucional 'PQR-YYYY-XXXXXX' mediante bot síncrono al momento del guardado.",
    type: "Funcional",
    priority: "Alta",
    status: "Completado",
    component: "Bot_Radicacion_IDInterno, Tabla ConsecutivosPqr",
    verifiedInAppSheet: true
  },
  {
    id: "req-3",
    code: "RF-03",
    title: "Semáforo Legal de Vencimiento de Términos (Ley 1755)",
    description: "Cálculo en tiempo real de días hábiles transcurridos descontando festivos de Colombia (10 días para Documentos/Información, 15 para General).",
    type: "Funcional",
    priority: "Alta",
    status: "Completado",
    component: "Dias_Habiles_Sheet, AlertaVencimiento_Virtual, festivos_2025_2036",
    verifiedInAppSheet: true
  },
  {
    id: "req-4",
    code: "RF-04",
    title: "Generación Automática de Documento PDF de Respuesta",
    description: "Crear archivo PDF formal estandarizado con membrete y firma digital en la carpeta en la nube /Gestion_PDF.",
    type: "Funcional",
    priority: "Alta",
    status: "Completado",
    component: "Bot CrearPDF_GestionPqr_General, Tabla GestionPqr",
    verifiedInAppSheet: true
  },
  {
    id: "req-5",
    code: "RF-05",
    title: "Despacho Automatizado por Correo con Adjunto",
    description: "Integración con Google Apps Script corporativo para enviar la respuesta al correo del ciudadano adjuntando el PDF generado.",
    type: "Funcional",
    priority: "Alta",
    status: "Completado",
    component: "Bot Enviar Respuesta Gestion, Apps Script enviarEmailGestionPqr",
    verifiedInAppSheet: true
  },
  {
    id: "req-6",
    code: "RF-06",
    title: "Cargue de Pruebas y Anexos Posteriores",
    description: "Habilitar la radicación de documentos y fotos adicionales después de la creación del radicado con notificación automática al gestor.",
    type: "Funcional",
    priority: "Media",
    status: "Completado",
    component: "Tabla ArchivosPostPqr, Bot Anexos (notificarAnexos)",
    verifiedInAppSheet: true
  },
  {
    id: "req-7",
    code: "RF-07",
    title: "Flujo de Apelaciones y Segunda Instancia",
    description: "Reapertura de casos cerrados ante inconformidad ciudadana con despacho de alerta prioritaria a Jefes de Área vía Apps Script.",
    type: "Funcional",
    priority: "Alta",
    status: "Completado",
    component: "Bot Notificar_Apelacion_Deepseek, Acción Apelacion",
    verifiedInAppSheet: true
  },
  {
    id: "req-8",
    code: "RF-08",
    title: "Dashboard de Analítica y Estadísticas Looker Studio",
    description: "Visualización gráfica interactiva de radicados por año, mes, servicio y estado, con enlace embebido a Looker Studio.",
    type: "Funcional",
    priority: "Media",
    status: "Completado",
    component: "Vista DashBoard, Tabla Filtros, Acción EstadisticasLocker",
    verifiedInAppSheet: true
  },
  {
    id: "req-9",
    code: "RF-09",
    title: "Exportación de Reportes a Libros Excel (.xlsx)",
    description: "Bot de compilación que genera reportes estructurados en hoja de cálculo almacenados en /Reportes/Reportes_Generados/.",
    type: "Funcional",
    priority: "Media",
    status: "Completado",
    component: "Bot Todas las Pqr, Tabla Reportes",
    verifiedInAppSheet: true
  },
  {
    id: "req-10",
    code: "RF-10",
    title: "Tablón de Noticias y Alertas Viales",
    description: "Publicación de alertas de tráfico, cierres y emergencias con vigencia temporal configurable.",
    type: "Funcional",
    priority: "Baja",
    status: "Completado",
    component: "Tabla Noticias, Slice Noticias Publicadas",
    verifiedInAppSheet: true
  },
  {
    id: "req-11",
    code: "RNF-01",
    title: "Seguridad y Control de Acceso por Roles (RBAC)",
    description: "Validación estricta de correo electrónico institucional (USEREMAIL()) en Security Filters para aislar gestores por departamento.",
    type: "No Funcional",
    priority: "Alta",
    status: "Completado",
    component: "Security Filters en Pqrs, Gestores, Departamentos",
    verifiedInAppSheet: true
  },
  {
    id: "req-12",
    code: "RNF-02",
    title: "Cumplimiento Regulatorio y Trazabilidad Legal",
    description: "Soporte de auditoría conforme al Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA).",
    type: "No Funcional",
    priority: "Alta",
    status: "Completado",
    component: "Auditoría de estados, histórico de gestiones y marcas de tiempo",
    verifiedInAppSheet: true
  },
  {
    id: "req-13",
    code: "RNF-03",
    title: "Almacenamiento Confiable de Evidencias en Google Drive",
    description: "Almacenamiento jerárquico de evidencias fotográficas y archivos PDF sin sobrepasar límites de archivo individual de 15 MB.",
    type: "No Funcional",
    priority: "Alta",
    status: "Completado",
    component: "Google Drive File Store integrado",
    verifiedInAppSheet: true
  },
  {
    id: "req-14",
    code: "RM-01",
    title: "Corrección de Referencia Rota en Acción Actualizar Campos",
    description: "Corregir el apuntador en 'Actualizar campos Action - 1' de TiempoRespuesta hacia FechaRespuesta para eliminar el hallazgo High de App Health.",
    type: "Mejora",
    priority: "Alta",
    status: "En Progreso",
    component: "GestionPqr::Actualizar campos Action - 1",
    verifiedInAppSheet: false
  },
  {
    id: "req-15",
    code: "RM-02",
    title: "Consolidación de Acciones Duplicadas de Incremento",
    description: "Depurar las 6 acciones variantes de incremento numérico para simplificar el árbol de dependencias de la app.",
    type: "Mejora",
    priority: "Media",
    status: "En Progreso",
    component: "Pqrs / ConsecutivosPqr actions",
    verifiedInAppSheet: false
  },
  {
    id: "req-16",
    code: "RM-03",
    title: "Portal Web de Consulta Ciudadana con Código de Radicado",
    description: "Implementar consulta pública donde los usuarios de la vía puedan digitar su número 'PQR-YYYY-XXXXXX' y ver el estado sin iniciar sesión.",
    type: "Mejora",
    priority: "Media",
    status: "En Pruebas",
    component: "Portal Web de Guía y Consulta",
    verifiedInAppSheet: true
  }
];

export const TEST_PLAN_CASES: TestCase[] = [
  {
    id: "TC-001",
    category: "Funcional",
    title: "Radicación exitosa de Petición General por usuario registrado",
    precondition: "Usuario autenticado con correo corporativo o formulario abierto.",
    steps: [
      "Abrir vista 'Pqrs_Form'",
      "Seleccionar Tipo_Solicitud = 'Petición'",
      "Seleccionar Prioridad_Solicitud = 'General'",
      "Seleccionar Servicio = 'Ser-02 (Atención al Usuario)'",
      "Completar Identificación, Nombre y Teléfono",
      "Escribir descripción y presionar 'Guardar'"
    ],
    expectedResult: "El Bot_Radicacion_IDInterno asigna consecutivo PQR-2026-XXXXXX, estado = 'Abierta' y se calculan 0 días hábiles.",
    status: "Aprobado",
    criticality: "Alta"
  },
  {
    id: "TC-002",
    category: "SLA / Días Hábiles",
    title: "Cálculo de días hábiles excluyendo festivos colombianos",
    precondition: "PQR radicada el 28 de octubre de 2026.",
    steps: [
      "Verificar conteo al 4 de noviembre de 2026",
      "Cruzar contra tabla festivos_2025_2036 donde el 2 de noviembre es festivo"
    ],
    expectedResult: "El sistema descuenta fin de semana y festivo, arrojando exactamente 4 días hábiles transcurridos.",
    status: "Aprobado",
    criticality: "Alta"
  },
  {
    id: "TC-003",
    category: "SLA / Días Hábiles",
    title: "Activación de Luz Roja por plazo legal vencido (10 días)",
    precondition: "PQR con prioridad 'Documentos o Información'.",
    steps: [
      "Simular radicado con 11 días hábiles transcurridos sin respuesta registrada"
    ],
    expectedResult: "AlertaVencimiento_Virtual cambia a '🔴 Plazo legal vencido (11 días hábiles transcurridos, límite legal: 10 días)'.",
    status: "Aprobado",
    criticality: "Alta"
  },
  {
    id: "TC-004",
    category: "Automatización",
    title: "Generación de PDF formal en Google Drive",
    precondition: "Gestor diligencia contestación en RespuestaPQR.",
    steps: [
      "Presionar acción 'Crear PDF_GestionPqr_General'",
      "Esperar ejecución del bot CrearPDF_GestionPqr_General"
    ],
    expectedResult: "Se crea el archivo en /Gestion_PDF con orientación carta, membrete oficial y firma del gestor.",
    status: "Aprobado",
    criticality: "Alta"
  },
  {
    id: "TC-005",
    category: "Automatización",
    title: "Despacho de correo al ciudadano con PDF adjunto",
    precondition: "PDF creado y Estado_Email = 'Pendiente'.",
    steps: [
      "Presionar acción 'Enviar Correo con Respuesta'",
      "El campo Estado_Email pasa a 'Iniciado'",
      "El bot ejecuta Apps Script enviarEmailGestionPqr"
    ],
    expectedResult: "El correo es recibido por el ciudadano con el PDF adjunto y Estado_Email cambia a 'Completado'.",
    status: "Aprobado",
    criticality: "Alta"
  },
  {
    id: "TC-006",
    category: "Seguridad",
    title: "Aislamiento de casos por Security Filter departamental",
    precondition: "Gestor del Departamento de Mantenimiento inicia sesión.",
    steps: [
      "Acceder a la lista de Pqrs",
      "Verificar registros visibles"
    ],
    expectedResult: "Solo se visualizan Pqrs asignadas al Departamento de Mantenimiento; las demás quedan bloqueadas.",
    status: "Aprobado",
    criticality: "Alta"
  },
  {
    id: "TC-007",
    category: "Funcional",
    title: "Flujo de Apelación y Notificación a Jefes de Área",
    precondition: "PQR en estado Cerrada.",
    steps: [
      "Rol Administrador presiona acción 'Apelacion'",
      "Ingresa Comentarios de Apelación y guarda"
    ],
    expectedResult: "PQR reabre a estado Atendida, Apelación pasa a 'Sí' y se ejecuta bot Notificar_Apelacion_Deepseek.",
    status: "Aprobado",
    criticality: "Alta"
  },
  {
    id: "TC-008",
    category: "Automatización",
    title: "Cargue de Anexos Posteriores y alerta al Gestor",
    precondition: "PQR en trámite.",
    steps: [
      "Presionar acción 'Anexar Archivos'",
      "Subir documento probatorio en ArchivosPostPqr"
    ],
    expectedResult: "Se guarda con ID Anx-XXXX y el bot Anexos ejecuta script notificarAnexos.",
    status: "Aprobado",
    criticality: "Media"
  },
  {
    id: "TC-009",
    category: "Funcional",
    title: "Generación y descarga de reporte Excel (.xlsx)",
    precondition: "Rol Administrador ingresa a vista Reportes.",
    steps: [
      "Crear nuevo registro en Reportes con Tipo_Pqr = 'Todos' y Tipo_Reporte = 'Todos'",
      "Definir rango de fechas y guardar"
    ],
    expectedResult: "El Bot 'Todas las Pqr' compila los datos en Google Drive y habilita el botón 'Descargar Reporte'.",
    status: "Aprobado",
    criticality: "Media"
  }
];
