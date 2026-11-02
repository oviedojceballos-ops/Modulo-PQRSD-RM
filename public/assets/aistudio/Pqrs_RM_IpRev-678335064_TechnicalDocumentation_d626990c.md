# Pqrs_RM_IpRev-678335064 — Technical Documentation

Generated locally by AppSheet Toolkit v1.9.0 on 2/11/2026, 9:47:23.

- Source snapshot: Oficial_PQRSD Ruta Magdalena Sierra Mar_AppSnapshot.json
- Snapshot schema: appsheet-network-metadata/2
- Toolkit version captured in snapshot: 2.0.0
- Detailed system-generated Views/Actions: Included

## Application Summary

| Component | Count |
|---|---:|
| Tables | 12 |
| Columns | 198 |
| Slices | 4 |
| Views | 50 (19 custom / 31 system-generated) |
| Actions | 134 (59 custom / 75 system-generated) |
| Bots | 10 |
| Tasks | 17 |
| Static relationships | 1332 |
| App Health findings | 21 |

## App Health Summary

- High priority: 1
- Medium priority: 4
- Information: 16
- Unused candidates: 17
- Duplicate-like configuration: 3
- Broken references: 1

| Priority | Component | Finding | Confidence | Discovered affected |
|---|---|---|---|---:|
| high | Actualizar campos Action - 1 (GestionPqr) | Reference could not be resolved | high | 0 |
| medium | Action for Generar ID_PQR (Pqrs), Action for Generar ID_PQR 2 (Pqrs) | 2 actions have matching configuration | medium | 0 |
| medium | Afectar_Pqrs Action - 1 (GestionPqr), Afectar_Pqrs Action - 2 (GestionPqr), Incrementar_Consecutivo Action - 5 (GestionPqr), Action for Asignar número a la Gestion (GestionPqr) | 4 actions have matching configuration | medium | 0 |
| medium | ejecucion Action - 2 (Pqrs), Incrementar_Consecutivo Action - 1 (Pqrs), Incrementar_Consecutivo Action - 2 (Pqrs), Action for Asignar número a la PQR (Pqrs), Incrementar_Consecutivo Action - 4 (Pqrs), Action for Asignar número a la PQR 2 (Pqrs) | 6 actions have matching configuration | medium | 0 |
| medium | Gestores_Solo_Lectura (Gestores) | Slice has no discovered consumers | medium | 0 |
| info | Actualizar Fecha_Respuesta (Pqrs) | Hidden Action has no discovered consumers | medium | 0 |
| info | Actualizar PQR desde Apelacion (Pqrs) | Hidden Action has no discovered consumers | medium | 0 |
| info | Actualizar PQR desde Apelacion 2 (GestionPqr) | Hidden Action has no discovered consumers | medium | 0 |
| info | ActualizarEstado (Pqrs) | Hidden Action has no discovered consumers | medium | 0 |
| info | apelacion_actualizar_Datos (GestionPqr) | Hidden Action has no discovered consumers | medium | 0 |
| info | Asignar el número a la Gestion (GestionPqr) | Hidden Action has no discovered consumers | medium | 0 |
| info | Asignar el número a la PQR (Pqrs) | Hidden Action has no discovered consumers | medium | 0 |
| info | Crear el ID final (Pqrs) | Hidden Action has no discovered consumers | medium | 0 |
| info | Crear el ID final 2 (GestionPqr) | Hidden Action has no discovered consumers | medium | 0 |
| info | Agregar Pqr (Pqrs) | View has no discovered incoming reference | low | 0 |
| info | AnexosPqr (ArchivosPostPqr) | View has no discovered incoming reference | low | 0 |
| info | Datos Empresa (Datos_Rm) | View has no discovered incoming reference | low | 0 |
| info | Insertar Noticias (Noticias) | View has no discovered incoming reference | low | 0 |
| info | Portada (Datos_Rm) | View has no discovered incoming reference | low | 0 |
| info | Realizar Gestion (GestionPqr) | View has no discovered incoming reference | low | 0 |
| info | Ultimas Noticias (Noticias Publicadas) | View has no discovered incoming reference | low | 0 |

## Data Relationships

| From table | Ref column | To table |
|---|---|---|
| ArchivosPostPqr | ID_PQR | Pqrs |
| Filtros | Servicio | Servicio |
| GestionPqr | Departamento | Departamentos |
| GestionPqr | Gestor | Gestores |
| GestionPqr | ID_PQR | Pqrs |
| Gestores | ID_Departamento | Departamentos |
| Pqrs | Departamento | Departamentos |
| Pqrs | Gestor | Gestores |
| Pqrs | Servicio | Servicio |
| Reportes | Departamento | Departamentos |
| Reportes | Por_Servicio | Servicio |

## Change Impact Hotspots

Components with the largest discovered downstream impact in the captured configuration.

| Component | Type | Directly used by | Total discovered affected | Automation affected |
|---|---|---:|---:|---:|
| Pqrs.NumeroInterno | column | 12 | 149 | 8 |
| Pqrs.Tipo_Solicitud | column | 17 | 131 | 8 |
| Pqrs.ID_PQR | column | 31 | 114 | 8 |
| Departamentos.ID_Departamento | column | 5 | 106 | 8 |
| Departamentos.ID_SEQ_Virtual_Column | column | 1 | 106 | 8 |
| Pqrs.Departamento | column | 14 | 102 | 8 |
| GestionPqr.ID_PQR | column | 27 | 73 | 6 |
| GestionPqr.Departamento | column | 8 | 73 | 6 |
| Gestores.ID_Gestor | column | 10 | 65 | 4 |
| Gestores.ID_SEQ_Virtual_Column | column | 2 | 65 | 4 |
| Pqrs.Gestor | column | 13 | 59 | 4 |
| Pqrs.Estado_Pqr | column | 28 | 39 | 2 |
| Gestores.Related Pqrs | column | 5 | 39 | 4 |
| Pqrs.Fecha_Creacion | column | 12 | 37 | 2 |
| Servicio.Servicio | column | 3 | 36 | 2 |
| Servicio.ID_Servicio | column | 2 | 36 | 2 |
| ArchivosPostPqr.ID_PQR | column | 14 | 35 | 2 |
| Pqrs.Servicio | column | 12 | 34 | 2 |
| Departamentos.Estado | column | 4 | 34 | 0 |
| Gestores.Estado | column | 7 | 33 | 0 |
| Pqrs.Tipo | column | 5 | 33 | 2 |
| Gestores.ID_Departamento | column | 7 | 32 | 0 |
| Pqrs.ID_Interno | column | 12 | 31 | 4 |
| Pqrs.Descripcion | column | 7 | 31 | 2 |
| Departamentos.CorreoDpto | column | 5 | 31 | 0 |

## Data Model

### Pqrs

Columns: 49

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_PQR | Text | Yes | No | Yes |  | =uniqueid() |
| ID_Interno | Text | No | Yes | No |  |  |
| Tipo_Solicitud | Enum | No | No | Yes |  |  |
| Prioridad_Solicitud | Enum | No | No | Yes |  |  |
| Servicio | Ref | No | No | Yes | Servicio | =[Servicio].[Servicio] |
| Fecha_Suceso | Date | No | No | No |  | =TODAY() |
| Descripcion | LongText | No | No | Yes |  |  |
| TipoSolicitante | Enum | No | No | Yes |  |  |
| Identificacion | Text | No | No | No |  |  |
| NombreCompleto | Text | No | No | No |  |  |
| NombreFormateado | Text | No | No | No |  | =ArrayFormula(PROPER(RC[-1]:R[49997]C[-1])) |
| Email | Email | No | No | No |  |  |
| Telefono | Phone | No | No | No |  | =IF(<br>  LEFT([Telefono],3)="+57",<br>  [Telefono],<br>  "+57 " & [Telefono]<br>) |
| Poblacion | Enum | No | No | No |  | ="Ninguno / No aplica" |
| Fecha_Creacion | DateTime | No | No | No |  | =NOW() |
| Fecha_Respuesta | DateTime | No | No | No |  |  |
| Tiempo_Respuesta | Text | No | No | No |  |  |
| Estado_Pqr | Text | No | No | No |  | ="Abierta" |
| Apelacion | Text | No | No | No |  |  |
| ID_Gestion_Apelada | Text | No | No | No |  |  |
| FechaApelacion | Text | No | No | No |  |  |
| Departamento | Ref | No | No | Yes | Departamentos |  |
| Gestor | Ref | No | No | Yes | Gestores |  |
| Tipo | Enum | No | No | Yes |  | =IF(ISNOTBLANK([Departamento]),"Correo Electronico","AppUser") |
| Archivo | File | No | No | No |  |  |
| Enlaces_Archivos | Url | No | No | No |  |  |
| DepartamentoNotificado | Yes/No | No | No | No |  | ="No" |
| ContadorNotificacion | Number | No | No | No |  |  |
| UltimaNotificacion | DateTime | No | No | No |  |  |
| NumeroInterno | Text | No | No | No |  |  |
| Dias_Habiles_Sheet | Number | No | No | Yes |  | =ArrayFormula(MAP(RC[-16]:R[50497]C[-16], RC[-15]:R[50497]C[-15], LAMBDA(creacion, respuesta, IF(creacion="", "", MAX(0, _xlfn.NETWORKDAYS.INTL(creacion+1, IF(respuesta="", TODAY(), respuesta), 1, festivos_2025_2036!RC[-29]:R[50497]C[-29])))))) |
| HeaderVirtual | Show | No | No | No |  | =" " |
| NombredelServicioVirtual | Text | No | No | No |  | =[Servicio].[Servicio] |
| Related GestionPqrs | List | No | No | No | GestionPqr | REF_ROWS("GestionPqr", "ID_PQR") |
| TiempoRes_Virtual | Number | No | No | No |  | =IF(ISBLANK([Fecha_Respuesta]),0,FLOOR(HOUR([Fecha_Respuesta]-[Fecha_Creacion])/24)) |
| CorreoGestorVirtual | Email | No | No | No |  | =[Gestor].[CorreoGestor] |
| NombreDepartamentoVirtual | Text | No | No | No |  | =[Departamento].[Departamento] |
| NombreMesVirtual | Text | No | No | No |  | =INDEX(<br>  LIST(<br>    "1. Enero",<br>    "2. Febrero",<br>    "3. Marzo",<br>    "4. Abril",<br>    "5. Mayo",<br>    "6. Junio",<br>    "7. Julio",<br>    "8. Agosto",<br>    "9. Septiembre",<br>    "10. Octubre",<br>    "11. Noviembre",<br>    "12. Diciembre"<br>  ),<br>  MONTH([Fecha_Creacion])<br>) |
| ID_SEQ_Virtual_Column | Number | No | No | No |  | =IF(<br>  ISNOTBLANK([ID_PQR]),<br>  NUMBER(RIGHT([ID_PQR], 8)),<br>  0<br>) |
| Pqr_Mensuales_Virutal | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    MONTH([Fecha_Creacion]) = [_THISROW].[NombreMesVirtual]<br>  )<br>) |
| NumeroMesVirutal | Number | No | No | No |  | =MONTH([Fecha_creacion]) |
| AlertaVencimiento_Virtual | Text | No | No | No |  | =IFS(<br>  [Estado_Pqr] <> "Abierta", <br>    "✅ " & [Estado_Pqr],<br>    <br>  [Dias_Habiles_Sheet] >= IFS(<br>    [Prioridad_Solicitud] = "Documentos o Información", 10,   <br>    [Prioridad_Solicitud] = "General", 15,<br>    TRUE, 15 <br>  ),<br>    "🔴 Plazo legal vencido (" & [Dias_Habiles_Sheet] & " días hábiles transcurridos, límite legal: " & IFS(<br>      [Prioridad_Solicitud] = "Documentos o Información", 10,   <br>      [Prioridad_Solicitud] = "General", 15,<br>      TRUE, 15 <br>    ) & " días)",    <br>    <br>  TRUE,<br>    "🟡 OK: Dentro del plazo (" & [Dias_Habiles_Sheet] & " días hábiles transcurridos, límite legal: " & IFS(<br>      [Prioridad_Solicitud] = "Documentos o Información", 10,   <br>      [Prioridad_Solicitud] = "General", 15,<br>      TRUE, 15 <br>    ) & " días)"<br>) |
| TiempoSinRespuesta_Virtual | Number | No | No | No |  | =IF(<br>  ISBLANK([Fecha_Respuesta]),(HOUR(TODAY() - [Fecha_Creacion]) / 24),"") |
| Año_VirtualColumn | Number | No | No | No |  | =YEAR([Fecha_Creacion]) |
| Calificacion_Virtual | Text | No | No | No |  | =IF(<br>  [Estado_Pqr] = "Abierta",<br>  "📊 En Espera",<br>  <br>  IFS(<br>    <br>    AND(<br>      OR([Estado_Pqr] = "Atendida", [Estado_Pqr] = "Cerrada"),<br>      [Prioridad_Solicitud] = "Documentos o Información", <br>      [Dias_Habiles_Sheet] < 10<br>    ), "✅ Excelente",<br><br>    <br>    AND(<br>      OR([Estado_Pqr] = "Atendida", [Estado_Pqr] = "Cerrada"),<br>      [Prioridad_Solicitud] = "General", <br>      [Dias_Habiles_Sheet] < 15<br>    ), "✅ Excelente",<br><br>    <br>    AND(<br>      OR([Estado_Pqr] = "Atendida", [Estado_Pqr] = "Cerrada"),<br>      [Prioridad_Solicitud] = "Documentos o Información", <br>      [Dias_Habiles_Sheet] = 10<br>    ), "👍 Bueno",<br><br>   <br>    AND(<br>      OR([Estado_Pqr] = "Atendida", [Estado_Pqr] = "Cerrada"),<br>      [Prioridad_Solicitud] = "General", <br>      [Dias_Habiles_Sheet] = 15<br>    ), "👍 Bueno",<br><br>    <br>    OR([Estado_Pqr] = "Atendida", [Estado_Pqr] = "Cerrada"), <br>      "🔴 Fuera del tiempo establecido",<br><br>   <br>    TRUE, "📊 En Espera"<br>  )<br>) |
| AvisoArchivo | Show | No | No | No |  | =" " |
| Related ArchivosPostPqrs | List | No | No | No | ArchivosPostPqr | REF_ROWS("ArchivosPostPqr", "ID_PQR") |
| Footer | Show | No | No | No |  | =" " |

### Datos_Rm

Columns: 16

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_RM | Text | Yes | No | Yes |  | UNIQUEID() |
| Nombre_Empresa | Text | No | Yes | No |  |  |
| Nit | Text | No | No | No |  |  |
| Detalles | LongText | No | No | Yes |  |  |
| Correo | Email | No | No | No |  |  |
| Telefono_1 | Phone | No | No | Yes |  | =IF(<br>  LEFT([Telefono_1],3)="+57",<br>  [Telefono_1],<br>  "+57 " & [Telefono_1]<br>) |
| Telefono_2 | Phone | No | No | Yes |  | =IF(<br>  LEFT([Telefono_2],3)="+57",<br>  [Telefono_2],<br>  "+57 " & [Telefono_2]<br>) |
| Web | Url | No | No | Yes |  | HYPERLINK("https://rmsierramar.com.co", "rmsierramar.com.co") |
| Instagram | Url | No | No | Yes |  |  |
| Facebook | Url | No | No | Yes |  |  |
| LogoInst | Thumbnail | No | No | No |  |  |
| LogoFace | Show | No | No | No |  |  |
| LogoWhats | Thumbnail | No | No | No |  |  |
| Logo | Image | No | No | No |  |  |
| Beinvenida | Text | No | No | No |  |  |

### Servicio

Columns: 7

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_Servicio | Text | Yes | No | Yes |  | =CONCATENATE(“Ser-“& RIGHT((“00”&([_RowNumber]-1)),2)) |
| Servicio | Text | No | Yes | No |  |  |
| Estado | Enum | No | No | No |  |  |
| Related Pqrs | List | No | No | No | Pqrs | REF_ROWS("Pqrs", "Servicio") |
| Related Filtros | List | No | No | No | Filtros | REF_ROWS("Filtros", "Servicio") |
| Related Reportes | List | No | No | No | Reportes | REF_ROWS("Reportes", "Por_Servicio") |

### Gestores

Columns: 20

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_Gestor | Text | Yes | No | Yes |  | ="User-SIERRAMAR-" & RIGHT("000" & TEXT(MAX(Gestores[ID_SEQ_Virtual_Column]) + 1), 3) |
| ID_Departamento | Ref | No | No | No | Departamentos |  |
| NombreGestor | Text | No | Yes | Yes |  |  |
| Identificacion | Text | No | No | Yes |  |  |
| Rol | Enum | No | No | No |  | ="Gestor" |
| Estado | Enum | No | No | No |  | ="Activo" |
| CorreoGestor | Email | No | No | No |  | =[ID_Departamento].[CorreoDpto] |
| CorreoCorporativo | Email | No | No | Yes |  |  |
| TelefonoGestor | Phone | No | No | No |  | =IF(<br>  LEFT([TelefonoGestor],3)="+57",<br>  [TelefonoGestor],<br>  "+57 " & [TelefonoGestor]<br>) |
| FotoGestor | Image | No | Yes | No |  |  |
| FirmaGestor | Image | No | No | No |  |  |
| SVG | LongText | No | No | No |  |  |
| Fecha_Creacion | Date | No | No | No |  | =NOW() |
| Ultima_Edicion | Date | No | No | No |  | =NOW() |
| Related Pqrs | List | No | No | No | Pqrs | REF_ROWS("Pqrs", "Gestor") |
| Related GestionPqrs | List | No | No | No | GestionPqr | REF_ROWS("GestionPqr", "Gestor") |
| ID_SEQ_Virtual_Column | Number | No | No | No |  | =IF(<br>  ISNOTBLANK([ID_Gestor]),<br>  NUMBER(RIGHT([ID_Gestor], 3)),<br>  0<br>) |
| SVGFinal_virtual | LongText | No | No | No |  | =SUBSTITUTE([SVG],"""","""""") |
| SVGImagen_vitual | Image | No | No | No |  | ="data:image/svg+xml;utf8," & <br>SUBSTITUTE(<br>  CONCATENATE(<br>    "<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 400 340"" width=""400"" height=""340"">",<br>    "<defs>",<br>    "<linearGradient id=""cardGradient"" x1=""0%"" y1=""0%"" x2=""100%"" y2=""100%"">",<br>    "<stop offset=""0%"" style=""stop-color:", <br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    ";stop-opacity:1"" />",<br>    "<stop offset=""100%"" style=""stop-color:", <br>    IF([Estado] = "Activo", "#059669", "#DC2626"),<br>    ";stop-opacity:1"" />",<br>    "</linearGradient>",<br>    "<filter id=""shadow"">",<br>    "<feDropShadow dx=""0"" dy=""4"" stdDeviation=""6"" flood-opacity=""0.2""/>",<br>    "</filter>",<br>    "</defs>",<br>    <br>    "<!-- Tarjeta principal -->",<br>    "<rect x=""10"" y=""10"" width=""380"" height=""320"" rx=""16"" fill=""white"" filter=""url(#shadow)""/>",<br>    <br>    "<!-- Banda superior con gradiente -->",<br>    "<rect x=""10"" y=""10"" width=""380"" height=""80"" rx=""16"" fill=""url(#cardGradient)""/>",<br>    "<rect x=""10"" y=""74"" width=""380"" height=""16"" fill=""url(#cardGradient)""/>",<br>    <br>    "<!-- Contenedor de foto -->",<br>    "<circle cx=""200"" cy=""60"" r=""45"" fill=""white"" stroke=""#E5E7EB"" stroke-width=""3""/>",<br>    "<circle cx=""200"" cy=""60"" r=""42"" fill=""#D1D5DB""/>",<br>    <br>    "<!-- Icono de usuario -->",<br>    "<path d=""M200 45 c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z M175 85 c0-8 11.193-12 25-12 13.807 0 25 4 25 12"" fill=""white"" stroke=""white"" stroke-width=""2"" stroke-linecap=""round""/>",<br>    <br>    "<!-- Nombre del gestor -->",<br>    "<text x=""200"" y=""130"" font-family=""Arial, sans-serif"" font-size=""22"" font-weight=""bold"" fill=""#1F2937"" text-anchor=""middle"">", [NombreGestor], "</text>",<br>    <br>    "<!-- Rol -->",<br>    "<text x=""200"" y=""152"" font-family=""Arial, sans-serif"" font-size=""14"" fill=""#6B7280"" text-anchor=""middle"">", [Rol], "</text>",<br>    <br>    "<!-- Línea divisoria -->",<br>    "<line x1=""40"" y1=""170"" x2=""360"" y2=""170"" stroke=""#E5E7EB"" stroke-width=""1""/>",<br>    <br>    "<!-- Icono de email -->",<br>    "<rect x=""35"" y=""185"" width=""16"" height=""12"" rx=""2"" fill=""none"" stroke=""", <br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ stroke-width=""1.5""/>",<br>    "<path d=""M35 187 L43 193 L51 187"" fill=""none"" stroke=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ stroke-width=""1.5""/>",<br>    <br>    "<!-- Email -->",<br>    "<text x=""60"" y=""195"" font-family=""Arial, sans-serif"" font-size=""12"" fill=""#4B5563"">", [CorreoGestor], "</text>",<br>    <br>    "<!-- Icono de teléfono -->",<br>    "<rect x=""37"" y=""210"" width=""12"" height=""16"" rx=""2"" fill=""none"" stroke=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ stroke-width=""1.5""/>",<br>    "<line x1=""39"" y1=""223"" x2=""47"" y2=""223"" stroke=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ stroke-width=""1.5""/>",<br>    <br>    "<!-- Teléfono -->",<br>    "<text x=""60"" y=""222"" font-family=""Arial, sans-serif"" font-size=""12"" fill=""#4B5563"">", [TelefonoGestor], "</text>",<br>    <br>    "<!-- Icono de ID -->",<br>    "<rect x=""35"" y=""235"" width=""16"" height=""12"" rx=""1"" fill=""none"" stroke=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ stroke-width=""1.5""/>",<br>    "<line x1=""38"" y1=""239"" x2=""48"" y2=""239"" stroke=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ stroke-width=""1""/>",<br>    "<line x1=""38"" y1=""243"" x2=""45"" y2=""243"" stroke=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ stroke-width=""1""/>",<br>    <br>    "<!-- Identificación -->",<br>    "<text x=""60"" y=""245"" font-family=""Arial, sans-serif"" font-size=""12"" fill=""#4B5563"">ID: ", [Identificacion], "</text>",<br>    <br>    "<!-- Badge de estado -->",<br>    "<rect x=""280"" y=""185"" width=""80"" height=""24"" rx=""12"" fill=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ opacity=""0.1""/>",<br>    "<circle cx=""295"" cy=""197"" r=""4"" fill=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """/>",<br>    "<text x=""305"" y=""200"" font-family=""Arial, sans-serif"" font-size=""11"" font-weight=""600"" fill=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """>", [Estado], "</text>",<br>    <br>    "<!-- Línea divisoria inferior -->",<br>    "<line x1=""40"" y1=""265"" x2=""360"" y2=""265"" stroke=""#E5E7EB"" stroke-width=""1""/>",<br>    <br>    "<!-- Sección de PQRS Asignados -->",<br>    "<rect x=""30"" y=""280"" width=""160"" height=""40"" rx=""8"" fill=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ opacity=""0.05""/>",<br>    <br>    "<!-- Icono PQRS -->",<br>    "<circle cx=""50"" cy=""297"" r=""10"" fill=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ opacity=""0.2""/>",<br>    "<path d=""M46 294 L48 299 L54 292"" fill=""none"" stroke=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ stroke-width=""2"" stroke-linecap=""round"" stroke-linejoin=""round""/>",<br>    <br>    "<!-- Texto PQRS -->",<br>    "<text x=""70"" y=""295"" font-family=""Arial, sans-serif"" font-size=""10"" fill=""#6B7280"">PQRS Asignados</text>",<br>    "<text x=""70"" y=""310"" font-family=""Arial, sans-serif"" font-size=""16"" font-weight=""bold"" fill=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """>", COUNT([Related Pqrs]), "</text>",<br>    <br>    "<!-- Sección de Gestiones -->",<br>    "<rect x=""210"" y=""280"" width=""150"" height=""40"" rx=""8"" fill=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ opacity=""0.05""/>",<br>    <br>    "<!-- Icono Gestión -->",<br>    "<circle cx=""230"" cy=""297"" r=""10"" fill=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ opacity=""0.2""/>",<br>    "<path d=""M225 297 L228 300 L235 293"" fill=""none"" stroke=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """ stroke-width=""2"" stroke-linecap=""round"" stroke-linejoin=""round""/>",<br>    <br>    "<!-- Texto Gestiones -->",<br>    "<text x=""250"" y=""295"" font-family=""Arial, sans-serif"" font-size=""10"" fill=""#6B7280"">Gestiones</text>",<br>    "<text x=""250"" y=""310"" font-family=""Arial, sans-serif"" font-size=""16"" font-weight=""bold"" fill=""",<br>    IF([Estado] = "Activo", "#10B981", "#EF4444"),<br>    """>", COUNT([Related GestionPqrs]), "</text>",<br>    <br>    "</svg>"<br>  ),<br>  "#", "%23"<br>) |

### GestionPqr

Columns: 33

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_Gestion | Text | Yes | No | Yes |  | =uniqueid() |
| ID_PQR | Ref | No | No | Yes | Pqrs |  |
| ID_Interno | Text | No | Yes | No |  |  |
| ID_InternoPQR | Text | No | No | No |  | =[ID_PQR].[ID_Interno] |
| FechaPqr | Date | No | No | No |  | =[ID_PQR].[Fecha_Creacion] |
| Fecha_Gestion | Date | No | No | No |  | =NOW() |
| Servicio | Text | No | No | No |  | =[ID_PQR].[NombredelServicioVirtual] |
| DescripcionPqr | LongText | No | No | No |  | =[ID_PQR].[Descripcion] |
| RespuestaPQR | LongText | No | No | Yes |  | =[ObservacionPersonalizada] |
| FechaRespuesta | DateTime | No | No | No |  |  |
| EstadoPqr | Enum | No | No | Yes |  |  |
| Apelacion | Text | No | No | No |  | ="No" |
| FechaApelacion | DateTime | No | No | No |  |  |
| ComentariosApelacion | LongText | No | No | No |  |  |
| Departamento | Ref | No | No | Yes | Departamentos | =[ID_PQR].[Departamento] |
| Gestor | Ref | No | No | No | Gestores | =[ID_PQR].[Gestor] |
| NumeroInterno | Number | No | No | No |  |  |
| ObservacionPersonalizada | Text | No | No | Yes |  |  |
| CoPdf | Number | No | No | No |  |  |
| PDF | File | No | No | No |  |  |
| ArchivoRespuesta | File | No | No | No |  |  |
| Mensajeria_Interna | Text | No | No | No |  |  |
| Enlaces_Archivos | Url | No | No | No |  |  |
| Estado_Email | Enum | No | No | No |  | ="Pendiente" |
| FirmaDigital | Thumbnail | No | No | No |  | =[Gestor].[FirmaGestor] |
| Observaciones_PersonalizadasPDF_Virutal | LongText | No | No | No |  | =CONCATENATE(<br>  UPPER(LEFT([RespuestaPQR], 1)),<br>  LOWER(MID([RespuestaPQR], 2, LEN([RespuestaPQR]))<br>)) |
| ID_SEQ_Virtual_Column | Number | No | No | No |  | =IF(<br>  ISNOTBLANK([ID_Gestion]),<br>  NUMBER(RIGHT([ID_Gestion], 8)),<br>  0<br>) |
| Ultima_Gestion_Virtual | Yes/No | No | No | No |  | =[FechaRespuesta] <br>= MAX(<br>    SELECT(<br>      GestionPqr[FechaRespuesta],<br>      AND(<br>        [ID_PQR] = [_THISROW].[ID_PQR],<br>        ISNOTBLANK([FechaRespuesta])<br>      )<br>    )<br>  ) |
| HeaderVirutal | Show | No | No | No |  | =" " |
| AvisoEnlaceVirtual | Show | No | No | No |  | =" " |
| AvisoArchivoRespuestaVirtual | Show | No | No | No |  | =" " |
| Footer | Show | No | No | No |  | =" " |

### Departamentos

Columns: 11

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_Departamento | Text | Yes | No | Yes |  | ="Dep-SIERRAMAR-" & RIGHT("00" & TEXT(MAX(Departamentos[ID_SEQ_Virtual_Column]) + 1), 2) |
| Departamento | Text | No | Yes | Yes |  |  |
| Estado | Enum | No | No | No |  | =Activo |
| CorreoDpto | Email | No | No | Yes |  |  |
| CorreoCorporativo | Email | No | No | Yes |  |  |
| Related Pqrs | List | No | No | No | Pqrs | REF_ROWS("Pqrs", "Departamento") |
| Related Gestores | List | No | No | No | Gestores | REF_ROWS("Gestores", "ID_Departamento") |
| Related GestionPqrs | List | No | No | No | GestionPqr | REF_ROWS("GestionPqr", "Departamento") |
| ID_SEQ_Virtual_Column | Number | No | No | No |  | =IF(<br>  ISNOTBLANK([ID_Departamento]),<br>  NUMBER(RIGHT([ID_Departamento], 2)),<br>  0<br>) |
| Related Reportes | List | No | No | No | Reportes | REF_ROWS("Reportes", "Departamento") |

### Filtros

Columns: 21

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_Filtro | Text | Yes | No | Yes |  | UNIQUEID() |
| FechaInicio | Date | No | Yes | No |  | =TODAY() |
| FechaFin | Date | No | No | No |  | =TODAY() |
| Servicio | Ref | No | No | No | Servicio |  |
| TotalPqr_virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    AND(<br>      ISNOTBLANK([_THISROW].[FechaInicio]),<br>      ISNOTBLANK([_THISROW].[FechaFin]),<br>      [Fecha_Creacion] >= [_THISROW].[FechaInicio],<br>      [Fecha_Creacion] <= [_THISROW].[FechaFin]<br>    )<br>  )<br>) |
| Total_Pqrs_Virtual | Number | No | No | No |  | =COUNT(Pqrs[ID_PQR]) |
| servicioAmbulancia_Vitual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-01"<br>  )<br>) |
| AtencionUsuario_Virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-02"<br>  )<br>) |
| Bascula_Virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-03"<br>  )<br>) |
| Colpass_Virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-04"<br>  )<br>) |
| CarroTaller_Virutal | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-05"<br>  )<br>) |
| Grua_Virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-06"<br>  )<br>) |
| Peajes_Virutal | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-07"<br>  )<br>) |
| Predial | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-08"<br>  )<br>) |
| Estado_Vial_Virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-09"<br>  )<br>) |
| Mantenimiento_Inf_Vitual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-10"<br>  )<br>) |
| Señalizacion_Virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-11"<br>  )<br>) |
| Baños_Virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-12"<br>  )<br>) |
| Comunidad_Virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-13"<br>  )<br>) |
| Otros_Virtual | Number | No | No | No |  | =COUNT(<br>  SELECT(<br>    Pqrs[ID_PQR],<br>    [Servicio] = "Ser-14"<br>  )<br>) |

### Noticias

Columns: 9

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_NOTICIA | Text | Yes | No | Yes |  | ="NOTI-SIERRAMAR # "<br>& RIGHT("000" & TEXT(MAX(Noticias[ID_SEQ_Virtual_Column]) + 1), 3) |
| TITULO_NOTICIA | Text | No | Yes | Yes |  |  |
| DESCRIPCION_NOTICIA | LongText | No | No | Yes |  |  |
| TIPO_NOTICIA | Enum | No | No | Yes |  | ="Alertas" |
| ESTADO_NOTICIA | Enum | No | No | Yes |  | ="Vigente" |
| FECHA_HORA | DateTime | No | No | Yes |  | =NOW() |
| ID_SEQ_Virtual_Column | Number | No | No | No |  | =IF(<br>  ISNOTBLANK([ID_NOTICIA]),<br>  NUMBER(RIGHT([ID_NOTICIA], 3)),<br>  0<br>) |
| EncabezadoVirtual | Show | No | No | No |  | =" " |

### ConsecutivosPqr

Columns: 5

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_Consecutivo | Text | Yes | No | Yes |  | ="PQR" |
| Ultimo_Numero | Number | No | Yes | No |  |  |
| Año | Number | No | No | Yes |  |  |
| Logovirtual | Show | No | No | No |  | =" " |

### ArchivosPostPqr

Columns: 9

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_APP | Text | Yes | Yes | Yes |  | ="Anx-" & RIGHT("0000" & TEXT(MAX(ArchivosPostPqr[ContadorVirtual]) + 1), 4) |
| ID_PQR | Ref | No | No | No | Pqrs |  |
| ID_InternoPQR | Text | No | No | No |  | =[ID_PQR].[ID_Interno] |
| DescripcionPqr | LongText | No | No | No |  | =[ID_PQR].[Descripcion] |
| Archivo_Post | File | No | No | No |  |  |
| Fecha_Archivo | DateTime | No | No | No |  | =NOW() |
| Observaciones | LongText | No | No | No |  |  |
| ContadorVirtual | Number | No | No | No |  | =IF(<br>  ISNOTBLANK([ID_APP]),<br>  NUMBER(RIGHT([ID_APP], 4)),<br>  0<br>) |

### festivos_2025_2036

Columns: 6

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_Festivos | Text | Yes | No | Yes |  | UNIQUEID() |
| Fecha | Date | No | Yes | Yes |  | TODAY() |
| Festivo | Text | No | No | No |  |  |
| Año | Number | No | No | Yes |  |  |
| Dia_Semana | Enum | No | No | No |  |  |

### Reportes

Columns: 12

| Column | Type | Key | Label | Required | Ref To | Formula / Initial Value |
|---|---|---|---|---|---|---|
| _RowNumber | Number | No | No | No |  |  |
| ID_Reporte | Text | Yes | Yes | Yes |  | UNIQUEID() |
| Tipo_Pqr | Enum | No | No | Yes |  | ="Todos" |
| Tipo_Reporte | Enum | No | No | Yes |  | ="Todos" |
| Por_Servicio | Ref | No | No | No | Servicio |  |
| Departamento | Ref | No | No | No | Departamentos |  |
| Estado_Pqr | Enum | No | No | No |  |  |
| Fecha_Inicio | Date | No | No | No |  | =TODAY() |
| Fecha_Fin | Date | No | No | No |  | =TODAY() |
| Archivo_Excel | File | No | No | No |  |  |
| Fecha_Reporte | DateTime | No | No | No |  | =NOW() |
| Footer | Show | No | No | No |  | =" " |

## Slices

### Pqr x mes

- Source table: Pqrs
- Row filter: =AND(
  [Fecha_Creacion] >= DATE(Filtros[FechaInicio]),
  [Fecha_Creacion] <= DATE(Filtros[FechaFin]),
  OR([Servicio] = TEXT(Filtros[Servicio]), ISBLANK(Filtros[Servicio])))
- Update mode: 0
- Columns: _RowNumber, ID_PQR, Servicio, Fecha_Suceso, Descripcion, Identificacion, NombreCompleto, Email, Telefono, Fecha_Creacion, Fecha_Respuesta, Tiempo_Respuesta, Estado_Pqr, Departamento, Gestor, Tipo, Archivo, HeaderVirtual, NombredelServicioVirtual, Related GestionPqrs, TiempoRes_Virtual, CorreoGestorVirtual, NombreDepartamentoVirtual, NombreMesVirtual, ID_SEQ_Virtual_Column, Pqr_Mensuales_Virutal, NumeroMesVirutal, AlertaVencimiento_Virtual, TiempoSinRespuesta_Virtual, Año_VirtualColumn, Tipo_Solicitud, TipoSolicitante, Poblacion, Apelacion, DepartamentoNotificado, ID_Interno, NumeroInterno, FechaApelacion, NombreFormateado, ID_Gestion_Apelada, Calificacion_Virtual, AvisoArchivo, Enlaces_Archivos, ContadorNotificacion, UltimaNotificacion, Related ArchivosPostPqrs, Dias_Habiles_Sheet, Prioridad_Solicitud, Footer
- Actions: —

### Pqrs x Años

- Source table: Pqrs
- Row filter: —
- Update mode: 0
- Columns: _RowNumber, ID_PQR, Servicio, Fecha_Suceso, Descripcion, Identificacion, NombreCompleto, Email, Telefono, Fecha_Creacion, Fecha_Respuesta, Tiempo_Respuesta, Estado_Pqr, Departamento, Gestor, Tipo, Archivo, HeaderVirtual, NombredelServicioVirtual, Related GestionPqrs, TiempoRes_Virtual, CorreoGestorVirtual, NombreDepartamentoVirtual, NombreMesVirtual, ID_SEQ_Virtual_Column, Pqr_Mensuales_Virutal, NumeroMesVirutal, AlertaVencimiento_Virtual, TiempoSinRespuesta_Virtual, Año_VirtualColumn, Tipo_Solicitud, TipoSolicitante, Poblacion, Apelacion, DepartamentoNotificado, ID_Interno, NumeroInterno, FechaApelacion, NombreFormateado, ID_Gestion_Apelada, Calificacion_Virtual, AvisoArchivo, Enlaces_Archivos, ContadorNotificacion, UltimaNotificacion, Related ArchivosPostPqrs, Dias_Habiles_Sheet, Prioridad_Solicitud, Footer
- Actions: **auto**

### Noticias Publicadas

- Source table: Noticias
- Row filter: =[FECHA_HORA] >= (NOW() - 30)
- Update mode: 7
- Columns: _RowNumber, ID_NOTICIA, TITULO_NOTICIA, DESCRIPCION_NOTICIA, TIPO_NOTICIA, ESTADO_NOTICIA, FECHA_HORA, ID_SEQ_Virtual_Column, EncabezadoVirtual
- Actions: **auto**

### Gestores_Solo_Lectura

- Source table: Gestores
- Row filter: —
- Update mode: 0
- Columns: _RowNumber, ID_Gestor, ID_Departamento, NombreGestor, Identificacion, Rol, Estado, CorreoGestor, TelefonoGestor, FotoGestor, FirmaGestor, SVG, Related Pqrs, Related GestionPqrs, ID_SEQ_Virtual_Column, SVGFinal_virtual, SVGImagen_vitual, Fecha_Creacion, Ultima_Edicion, CorreoCorporativo
- Actions: **auto**

## Views

| View | Data | Type | Position | Sort / Group / Chart | System Generated |
|---|---|---|---|---|---|
| Agregar Pqr | Pqrs | table | right | Sort: [object Object],[object Object] | No |
| DashBoard | Pqrs | dashboard | menu |  | No |
| Departamentos | Departamentos | table | menu |  | No |
| Gestores | Gestores | gallery | menu |  | No |
| Reportes | Reportes | table | menu | Sort: [object Object] | No |
| Servicio | Servicio | table | menu |  | No |
| AnexosPqr | ArchivosPostPqr | deck | ref |  | No |
| ArchivosPostPqr_Detail | ArchivosPostPqr | detail | ref |  | Yes |
| ArchivosPostPqr_Form | ArchivosPostPqr | form | ref |  | Yes |
| ArchivosPostPqr_Inline | ArchivosPostPqr | deck | ref |  | Yes |
| ConsecutivosPqr_Detail | ConsecutivosPqr | detail | ref |  | Yes |
| ConsecutivosPqr_Form | ConsecutivosPqr | form | ref |  | Yes |
| Datos Empresa | Datos_Rm | deck | ref |  | No |
| Datos_Rm_Detail | Datos_Rm | detail | ref |  | Yes |
| Datos_Rm_Form | Datos_Rm | form | ref |  | Yes |
| Departamentos - Gestor | Pqrs x Años | chart | ref | Chart: Departamento,Gestor,Estado_Pqr,ContadorNotificacion | No |
| Departamentos_Detail | Departamentos | detail | ref |  | Yes |
| Departamentos_Form | Departamentos | form | ref |  | Yes |
| Estado Pqrs | Pqr x mes | chart | ref | Chart: Estado_Pqr | No |
| festivos_2025_2036_Detail | festivos_2025_2036 | detail | ref |  | Yes |
| filtros | Filtros | detail | ref |  | No |
| Filtros_Detail | Filtros | detail | ref |  | Yes |
| Filtros_Form | Filtros | form | ref |  | Yes |
| Filtros_Inline | Filtros | table | ref |  | Yes |
| GestionPqr_Detail | GestionPqr | detail | ref |  | Yes |
| GestionPqr_Form | GestionPqr | form | ref |  | Yes |
| GestionPqr_Inline | GestionPqr | table | ref |  | Yes |
| Gestores_Detail | Gestores | detail | ref |  | Yes |
| Gestores_Form | Gestores | form | ref |  | Yes |
| Gestores_Inline | Gestores | deck | ref |  | Yes |
| Grafica entre Fechas | Pqr x mes | chart | ref | Chart: NombreMesVirtual,Estado_Pqr,Servicio | No |
| Insertar Noticias | Noticias | form | ref |  | No |
| Noticias Publicadas_Detail | Noticias Publicadas | detail | ref |  | Yes |
| Noticias Publicadas_Form | Noticias Publicadas | form | ref |  | Yes |
| Noticias_Detail | Noticias | detail | ref |  | Yes |
| Noticias_Form | Noticias | form | ref |  | Yes |
| Poblacion y Servicio | Pqrs x Años | chart | ref | Chart: Poblacion,Servicio | No |
| Portada | Datos_Rm | card | ref |  | No |
| Pqrs por Años | Pqrs x Años | chart | ref | Chart: Año_VirtualColumn,NombreMesVirtual,Servicio | No |
| Pqrs_Detail | Pqrs | detail | ref |  | Yes |
| Pqrs_Form | Pqrs | form | ref |  | Yes |
| Pqrs_Inline | Pqrs | table | ref | Sort: [object Object] | Yes |
| Realizar Gestion | GestionPqr | table | ref |  | No |
| Reportes_Detail | Reportes | detail | ref |  | Yes |
| Reportes_Form | Reportes | form | ref |  | Yes |
| Reportes_Inline | Reportes | table | ref |  | Yes |
| Servicio_Detail | Servicio | detail | ref |  | Yes |
| Servicio_Form | Servicio | form | ref |  | Yes |
| Servicios | Pqrs x Años | chart | ref | Chart: Servicio,Estado_Pqr | No |
| Ultimas Noticias | Noticias Publicadas | table | ref | Sort: [object Object] | No |

## Actions

| Action | Table | Behavior | Position | Attach to column | Condition | System Generated |
|---|---|---|---|---|---|---|
| Delete | Pqrs | DELETE_RECORD | Hide |  | =AND(ISBLANK([Related GestionPqrs]),IN(LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"), LIST("Administrador", "Creador"))) | Yes |
| Edit | Pqrs | EDIT_RECORD | Prominent |  | =AND(<br>  ISBLANK([Related GestionPqrs]),<br>  IN(<br>    ANY(SELECT(Gestores[Rol], [CorreoGestor] = USEREMAIL())),<br>    {"Administrador", "Creador"}<br>  )<br>) | Yes |
| Compose Email (Email) | Pqrs | EMAIL | Hide | Email | NOT(ISBLANK([Email])) | Yes |
| Add | Pqrs | ADD_RECORD | Primary |  |  | Yes |
| Delete | Datos_Rm | DELETE_RECORD | Hide |  |  | Yes |
| Edit | Datos_Rm | EDIT_RECORD | Hide |  |  | Yes |
| Add | Datos_Rm | ADD_RECORD | Hide |  |  | Yes |
| Call Phone (Telefono) | Pqrs | CALL | Hide | Telefono | NOT(ISBLANK([Telefono])) | Yes |
| Send SMS (Telefono) | Pqrs | SMS | Hide | Telefono | NOT(ISBLANK([Telefono])) | Yes |
| View Ref (Servicio) | Pqrs | NAVIGATE_APP | Hide | Servicio | NOT(ISBLANK([Servicio])) | Yes |
| Open Url (Web) | Datos_Rm | NAVIGATE_URL | Inline | Web |  | Yes |
| Call Phone (Telefono_2) | Datos_Rm | CALL | Inline | Telefono_2 | NOT(ISBLANK([Telefono_2])) | Yes |
| Send SMS (Telefono_2) | Datos_Rm | SMS | Hide | Telefono_2 | NOT(ISBLANK([Telefono_2])) | Yes |
| Open Url (Instagram) | Datos_Rm | NAVIGATE_URL | Inline | Instagram | NOT(ISBLANK([Instagram])) | Yes |
| Open Url (Facebook) | Datos_Rm | NAVIGATE_URL | Inline | Facebook | NOT(ISBLANK([Facebook])) | Yes |
| Call Phone (Telefono_1) | Datos_Rm | CALL | Prominent | Telefono_1 | NOT(ISBLANK([Telefono_1])) | Yes |
| Send SMS (Telefono_1) | Datos_Rm | SMS | Hide | Telefono_1 | NOT(ISBLANK([Telefono_1])) | Yes |
| Compose Email (Correo) | Datos_Rm | EMAIL | Inline | Correo | NOT(ISBLANK([Correo])) | Yes |
| Instagram | Datos_Rm | NAVIGATE_URL | Inline | Instagram | true | No |
| facebook | Datos_Rm | NAVIGATE_URL | Prominent | Instagram | true | No |
| WhatsApp-1 | Datos_Rm | NAVIGATE_URL | Inline | Telefono_1 | true | No |
| Delete | GestionPqr | DELETE_RECORD | Hide |  |  | Yes |
| Edit | GestionPqr | EDIT_RECORD | Prominent |  | =AND([Apelacion]="No",ISBLANK([PDF])) | Yes |
| Add | GestionPqr | ADD_RECORD | Hide |  | =AND(CONTEXT("View")="Realizar Gestion",[EstadoPqr]<>"Cerrada") | Yes |
| View Ref (ID_PQR) | GestionPqr | NAVIGATE_APP | Inline | ID_PQR | NOT(ISBLANK([ID_PQR])) | Yes |
| Edit | Gestores | EDIT_RECORD | Primary |  | =OR(<br>  IN(<br>    LOOKUP(<br>      USEREMAIL(),<br>      "Gestores",<br>      "CorreoGestor",<br>      "Rol"<br>    ),<br>    {"Administrador","Creador"}<br>  ),<br>  COUNT(<br>    SELECT(<br>      Pqrs[ID_PQR],<br>      [Gestor] = [_THISROW].[ID_Gestor]<br>    )<br>  ) = 0<br>) | Yes |
| Add | Gestores | ADD_RECORD | Primary |  | =IN(LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"), LIST("Administrador", "Creador")) | Yes |
| Compose Email (CorreoGestor) | Gestores | EMAIL | Hide | CorreoGestor | NOT(ISBLANK([CorreoGestor])) | Yes |
| Call Phone (TelefonoGestor) | Gestores | CALL | Inline | TelefonoGestor | NOT(ISBLANK([TelefonoGestor])) | Yes |
| Send SMS (TelefonoGestor) | Gestores | SMS | Hide | TelefonoGestor | NOT(ISBLANK([TelefonoGestor])) | Yes |
| WhatsApp | Gestores | NAVIGATE_URL | Inline |  | =IN(LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"), LIST("Administrador", "Creador")) | No |
| ejecucion Action - 1 | GestionPqr | SET_COLUMN_VALUE | Prominent | ID_Gestion | true | No |
| ejecucion Action - 2 | Pqrs | REF_ACTION | Prominent |  | true | No |
| Actualizar campos Action - 1 | GestionPqr | SET_COLUMN_VALUE | Prominent | EstadoPqr | true | No |
| Actualizar campos Action - 2 | Pqrs | SET_COLUMN_VALUE | Prominent | Estado_Pqr | true | No |
| New step Action - 1 | Datos_Rm | REF_ACTION | Prominent |  | true | No |
| Actualizar Fecha_Respuesta | Pqrs | SET_COLUMN_VALUE | Hide | Estado_Pqr |  | No |
| Atendida | GestionPqr | SET_COLUMN_VALUE | Prominent | EstadoPqr | =AND([EstadoPqr]="Cerrada",[Ultima_Gestion_Virtual],LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol") = "Administrador") | No |
| Cerrada | GestionPqr | SET_COLUMN_VALUE | Prominent | EstadoPqr | =AND(<br>   [EstadoPqr] = "Atendida",<br>   [Ultima_Gestion_Virtual],<br>   LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol") = "Administrador"<br>   <br>) | No |
| Afectar_Pqrs Action - 1 | GestionPqr | REF_ACTION | Prominent |  | true | No |
| Afectar_Pqrs Action - 2 | GestionPqr | REF_ACTION | Prominent |  | true | No |
| Open File (Archivo) | Pqrs | OPEN_FILE | Prominent | Archivo | NOT(ISBLANK([Archivo])) | Yes |
| View Ref (Departamento) | Pqrs | NAVIGATE_APP | Inline | Departamento | NOT(ISBLANK([Departamento])) | Yes |
| Edit | Departamentos | EDIT_RECORD | Primary |  | =OR(<br>  IN(<br>    LOOKUP(<br>      USEREMAIL(),<br>      "Gestores",<br>      "CorreoGestor",<br>      "Rol"<br>    ),<br>    {"Administrador","Creador"}<br>  ),<br>  COUNT(<br>    SELECT(<br>      Gestores[ID_Gestor],<br>      [ID_Departamento] = [_THISROW].[ID_Departamento]<br>    )<br>  ) = 0<br>) | Yes |
| Add | Departamentos | ADD_RECORD | Primary |  | =IN(<br>  LOOKUP(<br>    USEREMAIL(),<br>    "Gestores",<br>    "CorreoGestor",<br>    "Rol"<br>  ),<br>  {"Administrador","Creador"}<br>) | Yes |
| View Ref (Gestor) | Pqrs | NAVIGATE_APP | Inline | Gestor | NOT(ISBLANK([Gestor])) | Yes |
| View Ref (ID_Departamento) | Gestores | NAVIGATE_APP | Hide | ID_Departamento | NOT(ISBLANK([ID_Departamento])) | Yes |
| Compose Email (CorreoDpto) | Departamentos | EMAIL | Inline | CorreoDpto | NOT(ISBLANK([CorreoDpto])) | Yes |
| Compose Email (CorreoGestorVirtual) | Pqrs | EMAIL | Inline | CorreoGestorVirtual | NOT(ISBLANK([CorreoGestorVirtual])) | Yes |
| View Ref (Departamento) | GestionPqr | NAVIGATE_APP | Inline | Departamento | NOT(ISBLANK([Departamento])) | Yes |
| View Ref (Gestor) | GestionPqr | NAVIGATE_APP | Inline | Gestor | NOT(ISBLANK([Gestor])) | Yes |
| Open File (PDF) | GestionPqr | OPEN_FILE | Prominent | PDF | NOT(ISBLANK([PDF])) | Yes |
| Open File (ArchivoRespuesta) | GestionPqr | OPEN_FILE | Prominent | ArchivoRespuesta | NOT(ISBLANK([ArchivoRespuesta])) | Yes |
| Delete | Gestores | DELETE_RECORD | Primary |  | =AND(<br>  IN(<br>    LOOKUP(<br>      USEREMAIL(),<br>      "Gestores",<br>      "CorreoGestor",<br>      "Rol"<br>    ),<br>    {"Administrador","Creador"}<br>  ),<br>  COUNT(<br>    SELECT(<br>      Pqrs[ID_PQR],<br>      [Gestor] = [_THISROW].[ID_Gestor]<br>    )<br>  ) = 0<br>) | Yes |
| Crear PDF_GestionPqr_General | GestionPqr | SET_COLUMN_VALUE | Prominent | CoPdf | =AND(ISNOTBLANK([ID_Interno]),ISBLANK([PDF])) | No |
| Delete | Filtros | DELETE_RECORD | Hide |  |  | Yes |
| Edit | Filtros | EDIT_RECORD | Hide |  |  | Yes |
| Add | Filtros | ADD_RECORD | Hide |  |  | Yes |
| Agregar Gestion | GestionPqr | NAVIGATE_APP | Prominent | ID_PQR | =OR(<br>  AND(<br>    [ID_PQR].[Estado_Pqr] <> "Cerrada",<br>    [EstadoPqr] <> "Cerrada",<br>    [Ultima_Gestion_Virtual],<br>    [Estado_Email] = "Completado"<br>  ),<br>  [Apelacion] = "Sí"<br>) | No |
| Enviar Correo con Respuesta | GestionPqr | SET_COLUMN_VALUE | Prominent | Estado_Email | =AND(ISNOTBLANK([PDF]),[Estado_Email]="Pendiente",[Apelacion]="No",ISNOTBLANK([ID_Interno])) | No |
| Completado Action - 1 | GestionPqr | SET_COLUMN_VALUE | Prominent | Estado_Email | true | No |
| View Ref (Servicio) | Filtros | NAVIGATE_APP | Inline | Servicio | NOT(ISBLANK([Servicio])) | Yes |
| Chart Data for Grafica entre Fechas | Pqrs | NAVIGATE_APP | Prominent |  | =CONTEXT("View") = "Grafica entre Fechas" | Yes |
| Chart Data for Pqrs por Años | Pqrs | NAVIGATE_APP | Prominent |  | =CONTEXT("View") = "Pqrs por Años" | Yes |
| Chart Data for Estado Pqrs | Pqrs | NAVIGATE_APP | Prominent |  | =CONTEXT("View") = "Estado Pqrs" | Yes |
| ActualizarEstado | Pqrs | SET_COLUMN_VALUE | Hide | Estado_Pqr | true | No |
| Gestionar Pqr | Pqrs | NAVIGATE_APP | Prominent | ID_PQR | =[Estado_Pqr]<>"Cerrada" | No |
| Agregar Pqr | Gestores | NAVIGATE_APP | Prominent |  | =AND(CONTEXT("ViewType") = "Detail",[Estado]="Activo") | No |
| Delete | Departamentos | DELETE_RECORD | Primary |  | =AND(<br>  OR(<br>    IN(<br>      LOOKUP(<br>        USEREMAIL(),<br>        "Gestores",<br>        "CorreoGestor",<br>        "Rol"<br>      ),<br>      {"Administrador","Creador"}<br>    ),<br>    COUNT(<br>      SELECT(<br>        Gestores[ID_Gestor],<br>        [ID_Departamento] = [_THISROW].[ID_Departamento]<br>      )<br>    ) = 0<br>  ),<br>  COUNT(<br>    SELECT(<br>      Gestores[ID_Gestor],<br>      [ID_Departamento] = [_THISROW].[ID_Departamento]<br>    )<br>  ) = 0<br>) | Yes |
| Delete | Noticias | DELETE_RECORD | Prominent |  | =IN(LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"), LIST("Administrador", "Creador")) | Yes |
| Edit | Noticias | EDIT_RECORD | Primary |  | =IN(LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"), LIST("Administrador", "Creador")) | Yes |
| Add | Noticias | ADD_RECORD | Primary |  | =IN(LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"), LIST("Administrador", "Creador")) | Yes |
| Vigente | Noticias | SET_COLUMN_VALUE | Inline | ESTADO_NOTICIA | =AND([ESTADO_NOTICIA]="Vencida",[FECHA_HORA] >= (NOW() - 15)) | No |
| Vencida | Noticias | SET_COLUMN_VALUE | Inline | ESTADO_NOTICIA | =[ESTADO_NOTICIA]="Vigente" | No |
| Reenviar Correo con Respuesta 2 | GestionPqr | SET_COLUMN_VALUE | Prominent | Estado_Email | =AND(ISNOTBLANK([PDF]),[Estado_Email]="Completado",[Apelacion]="No") | No |
| Actualizar PQR desde Apelacion 2 | GestionPqr | REF_ACTION | Hide | Apelacion |  | No |
| Edit | ConsecutivosPqr | EDIT_RECORD | Hide |  |  | Yes |
| Incrementar_Consecutivo_PQR | ConsecutivosPqr | SET_COLUMN_VALUE | Prominent | Ultimo_Numero | true | No |
| Action for actualizar Consecutivo | ConsecutivosPqr | REF_ACTION | Prominent |  | true | No |
| Delete | ConsecutivosPqr | DELETE_RECORD | Hide |  |  | Yes |
| Add | ConsecutivosPqr | ADD_RECORD | Hide |  |  | Yes |
| Incrementar_Consecutivo Action - 1 | Pqrs | REF_ACTION | Prominent |  | true | No |
| Incrementar_Consecutivo Action - 2 | Pqrs | REF_ACTION | Prominent |  | true | No |
| Asignar el número a la PQR | Pqrs | SET_COLUMN_VALUE | Hide | NumeroInterno | true | No |
| Crear el ID final | Pqrs | SET_COLUMN_VALUE | Hide | ID_Interno | true | No |
| Action for Asignar número a la PQR | Pqrs | REF_ACTION | Prominent |  | true | No |
| Action for Generar ID_PQR | Pqrs | COMPOSITE | Prominent |  | true | No |
| Asignar el número a la Gestion | GestionPqr | SET_COLUMN_VALUE | Hide | NumeroInterno | true | No |
| Crear el ID final 2 | GestionPqr | SET_COLUMN_VALUE | Hide | ID_Interno | true | No |
| Incrementar_Consecutivo Action - 4 | Pqrs | REF_ACTION | Prominent |  | true | No |
| Action for Asignar número a la PQR 2 | Pqrs | REF_ACTION | Prominent |  | true | No |
| Action for Generar ID_PQR 2 | Pqrs | COMPOSITE | Prominent |  | true | No |
| Incrementar_Consecutivo Action - 5 | GestionPqr | REF_ACTION | Prominent |  | true | No |
| Action for Asignar número a la Gestion | GestionPqr | REF_ACTION | Prominent |  | true | No |
| Action for Generar ID_Gestion | GestionPqr | COMPOSITE | Prominent |  | true | No |
| NotificarGestor | Pqrs | SET_COLUMN_VALUE | Prominent | DepartamentoNotificado | =AND(<br>  IN(<br>    LOOKUP(<br>      USEREMAIL(),<br>      "Gestores",<br>      "CorreoGestor",<br>      "Rol"<br>    ),<br>    LIST("Administrador", "Creador")<br>  ),<br>  [Estado_Pqr] <> "Cerrada",<br>  ISBLANK([ContadorNotificacion])<br>) | No |
| Actualizar PQR desde Apelacion | Pqrs | SET_COLUMN_VALUE | Hide | Apelacion |  | No |
| apelacion_actualizar_Datos | GestionPqr | SET_COLUMN_VALUE | Hide | Apelacion | true | No |
| Apelacion | GestionPqr | COMPOSITE | Prominent |  | =AND(<br>  [EstadoPqr] = "Cerrada",<br>  [Ultima_Gestion_Virtual],<br>  IN(LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"), LIST("Administrador", "Creador"))<br>) | No |
| Delete | Servicio | DELETE_RECORD | Prominent |  | =ISBLANK([Related Pqrs]) | Yes |
| Edit | Servicio | EDIT_RECORD | Primary |  | =ISBLANK([Related Pqrs]) | Yes |
| Add | Servicio | ADD_RECORD | Primary |  | =IN(LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"), LIST("Administrador", "Creador")) | Yes |
| Comentarios Apelación Insertar | GestionPqr | SET_COLUMN_VALUE | Prominent | ComentariosApelacion | =AND(<br>  IN(<br>    LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"),<br>    LIST("Administrador", "Creador")<br>  ),<br>  [Apelacion] = "Sí",<br>  ISBLANK([ComentariosApelacion])<br>) | No |
| Comentarios Apelación Editar | GestionPqr | SET_COLUMN_VALUE | Prominent | ComentariosApelacion | =AND(<br>  IN(<br>    LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"),<br>    LIST("Administrador", "Creador")<br>  ),<br>  <br>  ISNOTBLANK([ComentariosApelacion])<br>) | No |
| EstadisticasLocker | Pqrs | NAVIGATE_URL | Primary |  | =IN(LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"), LIST("Administrador", "Creador")) | No |
| Compose Email (CorreoCorporativo) | Departamentos | EMAIL | Inline | CorreoCorporativo | NOT(ISBLANK([CorreoCorporativo])) | Yes |
| Corregir PDF | GestionPqr | SET_COLUMN_VALUE | Prominent | CoPdf | =AND(ISNOTBLANK([PDF]),[Estado_Email]="Pendiente") | No |
| Open Url (Enlaces_Archivos) | GestionPqr | NAVIGATE_URL | Inline | Enlaces_Archivos | NOT(ISBLANK([Enlaces_Archivos])) | Yes |
| Open Url (Enlaces_Archivos) | Pqrs | NAVIGATE_URL | Inline | Enlaces_Archivos | NOT(ISBLANK([Enlaces_Archivos])) | Yes |
| Compose Email (CorreoCorporativo) | Gestores | EMAIL | Inline | CorreoCorporativo | NOT(ISBLANK([CorreoCorporativo])) | Yes |
| Delete | ArchivosPostPqr | DELETE_RECORD | Prominent |  | =AND(<br>  AND(<br>    [_THISROW].[ID_APP] = MAXROW(<br>      "ArchivosPostPqr",<br>      "Fecha_Archivo",<br>      [ID_PQR] = [_THISROW].[ID_PQR]<br>    ),<br>    [ID_PQR].[Estado_Pqr] <> "Cerrada"<br>  ),<br>  IN(<br>    LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"),<br>    LIST("Administrador", "Creador")<br>  )<br>) | Yes |
| Edit | ArchivosPostPqr | EDIT_RECORD | Primary |  | =AND(<br>  AND(<br>    [_THISROW].[ID_APP] = MAXROW(<br>      "ArchivosPostPqr",<br>      "Fecha_Archivo",<br>      [ID_PQR] = [_THISROW].[ID_PQR]<br>    ),<br>    [ID_PQR].[Estado_Pqr] <> "Cerrada"<br>  ),<br>  IN(<br>    LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"),<br>    LIST("Administrador", "Creador")<br>  )<br>) | Yes |
| Add | ArchivosPostPqr | ADD_RECORD | Primary |  | =AND(<br>  AND(<br>    [_THISROW].[ID_APP] = MAXROW(<br>      "ArchivosPostPqr",<br>      "Fecha_Archivo",<br>      [ID_PQR] = [_THISROW].[ID_PQR]<br>    ),<br>    [ID_PQR].[Estado_Pqr] <> "Cerrada"<br>  ),<br>  IN(<br>    LOOKUP(USEREMAIL(), "Gestores", "CorreoGestor", "Rol"),<br>    LIST("Administrador", "Creador")<br>  )<br>) | Yes |
| Open File (Archivo_Post) | ArchivosPostPqr | OPEN_FILE | Prominent | Archivo_Post | NOT(ISBLANK([Archivo_Post])) | Yes |
| Agregar Anexos | ArchivosPostPqr | NAVIGATE_APP | Prominent | ID_PQR | =AND(<br>  IN(<br>    LOOKUP(<br>      USEREMAIL(),<br>      "Gestores",<br>      "CorreoGestor",<br>      "Rol"<br>    ),<br>    LIST("Administrador", "Creador")<br>  ),<br>  [_THISROW].[ID_APP] = MAXROW(<br>    "ArchivosPostPqr",<br>    "Fecha_Archivo",<br>    [ID_PQR] = [_THISROW].[ID_PQR]<br>  ),<br>  [ID_PQR].[Estado_Pqr] <> "Cerrada"<br>) | No |
| Gestionar-Pqr | ArchivosPostPqr | NAVIGATE_APP | Prominent |  | =AND(<br>    [_THISROW].[ID_APP] = MAXROW(<br>      "ArchivosPostPqr",<br>      "Fecha_Archivo",<br>      [ID_PQR] = [_THISROW].[ID_PQR]<br>    ),<br>    [ID_PQR].[Estado_Pqr] <> "Cerrada"<br>  ) | No |
| Anexar Archivos | Pqrs | NAVIGATE_APP | Prominent | ID_PQR | =AND(<br>  IN(<br>    LOOKUP(<br>      USEREMAIL(),<br>      "Gestores",<br>      "CorreoGestor",<br>      "Rol"<br>    ),<br>    LIST("Administrador", "Creador")<br>  ),<br>  [Estado_Pqr] <> "Cerrada"<br>) | No |
| NotificarGestor 2 | Pqrs | SET_COLUMN_VALUE | Prominent | DepartamentoNotificado | =AND(<br>  IN(<br>    LOOKUP(<br>      USEREMAIL(),<br>      "Gestores",<br>      "CorreoGestor",<br>      "Rol"<br>    ),<br>    LIST("Administrador", "Creador")<br>  ),<br>  [Estado_Pqr] <> "Cerrada",<br>  [ContadorNotificacion] > 0<br>) | No |
| Consultar Archivos | Pqrs | NAVIGATE_APP | Prominent | ID_PQR | =ISNOTBLANK([Related ArchivosPostPqrs]) | No |
| Cambiar estado a False Action - 1 | Pqrs | SET_COLUMN_VALUE | Prominent | DepartamentoNotificado | true | No |
| Editar Correo PQR | Pqrs | SET_COLUMN_VALUE | Prominent | ID_Interno | =AND(<br>  IN(<br>    LOOKUP(<br>      USEREMAIL(),<br>      "Gestores",<br>      "CorreoGestor",<br>      "Rol"<br>    ),<br>    LIST("Administrador", "Creador")<br>  ),<br>  [Estado_Pqr] <> "Abierta"<br>) | No |
| Chart Data for Departamentos - Gestor | Pqrs | NAVIGATE_APP | Prominent |  | =CONTEXT("View") = "Departamentos - Gestor" | Yes |
| Chart Data for Servicios | Pqrs | NAVIGATE_APP | Prominent |  | =CONTEXT("View") = "Servicios" | Yes |
| Chart Data for Poblacion y Servicio | Pqrs | NAVIGATE_APP | Prominent |  | =CONTEXT("View") = "Poblacion y Servicio" | Yes |
| Ir a los Anexos | GestionPqr | NAVIGATE_APP | Prominent | ID_PQR | =IN([_THISROW].[ID_PQR], ArchivosPostPqr[ID_PQR]) | No |
| View Ref (ID_PQR) | ArchivosPostPqr | NAVIGATE_APP | Inline | ID_PQR | NOT(ISBLANK([ID_PQR])) | Yes |
| Delete | Reportes | DELETE_RECORD | Hide |  |  | Yes |
| Edit | Reportes | EDIT_RECORD | Hide |  |  | Yes |
| View Ref (Departamento) | Reportes | NAVIGATE_APP | Inline | Departamento | NOT(ISBLANK([Departamento])) | Yes |
| Add | Reportes | ADD_RECORD | Primary |  |  | Yes |
| View Ref (Por_Servicio) | Reportes | NAVIGATE_APP | Inline | Por_Servicio | NOT(ISBLANK([Por_Servicio])) | Yes |
| Open File (Archivo_Excel) | Reportes | OPEN_FILE | Prominent | Archivo_Excel | NOT(ISBLANK([Archivo_Excel])) | Yes |
| Crear Ruta Archivo Action - 1 | ArchivosPostPqr | SET_COLUMN_VALUE | Prominent | Archivo_Post | true | No |
| Crear Ruta Archivo Action - 2 | Reportes | SET_COLUMN_VALUE | Prominent | Archivo_Excel | true | No |

## Automation / Bots

### Anexos

- Enabled: Yes
- Event source: App
- Event table: ArchivosPostPqr
- Data change type: Adds
- Condition: —
- Process steps: 1
  1. Ejecutar Script (Call a script — notificarAnexos)
     - Apps Script Project: Anexos
     - Function Name: notificarAnexos
     - Return Value: false
     - Run asynchronously?: false
     - Function Parameters: [   {     "name": "iDPqr",     "value": "[ID_PQR]"   },   {     "name": "iDAnexo",     "value": "[ID_APP]"   },   {     "name": "observacionesAnexo",     "value": "[Observaciones]"   },   {     "name": "fechaAnexo",     "value": "[Fecha_Archivo]"   } ]
     - Inputs: []

### Actualizar_Estado

- Enabled: Yes
- Event source: App
- Event table: GestionPqr
- Data change type: Updates
- Condition: ISNOTBLANK([FechaRespuesta])
- Process steps: 1
  1. Afectar_Pqrs (Run action on rows)

### Actualizar Fecha_Respuesta

- Enabled: Yes
- Event source: App
- Event table: GestionPqr
- Data change type: Updates
- Condition: ISBLANK([ID_PQR].[Fecha_Respuesta])
- Process steps: 1
  1. Afectar_Pqrs (Run action on rows)

### CrearPDF_GestionPqr_General

- Enabled: Yes
- Event source: App
- Event table: GestionPqr
- Data change type: Updates
- Condition: [_THISROW_BEFORE].[CoPDF]<>[_THISROW_AFTER].[CoPDF]
- Process steps: 1
  1. CrearPdf (Create a new file)
     - Disable Timestamp?: true
     - Attachment Page Orientation: Portrait
     - Attachment Page Size: Letter
     - Use Custom Margins: true
     - File Folder Path: "/Gestion_PDF"
     - File Store: Default
     - Inputs: []
     - _extractionWarning: Some editor fields were omitted by the local metadata allowlist.

### Enviar Respuesta Gestion

- Enabled: Yes
- Event source: App
- Event table: GestionPqr
- Data change type: Updates
- Condition: [Estado_Email]="Iniciado"
- Process steps: 2
  1. Ejecutar Script (Call a script — enviarEmailGestionPqr)
     - Apps Script Project: Gestion desde Corporativo
     - Function Name: enviarEmailGestionPqr
     - Return Value: false
     - Run asynchronously?: false
     - Function Parameters: [   {     "name": "correo",     "value": "\"[REDACTED_EMAIL]\"",     "_redactedFields": [       "value"     ]   },   {     "name": "asunto",     "value": "\"Respuesta a Pqr Presentada, ID PQR: \"& [ID_PQR].[ID_Interno]"   },   {     "name": "mensaje",     "value": "\"A continuación le brindamos respuesta a la pqr presentada, \" & [FechaPqr] & \" sobre el servicio: \" & [Servicio] &\".\"&\"<br><br>\"\"Encontrara un adjunto descargable en PDF.\""   },   {     "name": "rutaPDF",     "value": "[PDF]"   },   {     "name": "rutaPDF2",     "value": "IF(ISBLANK([ArchivoRespuesta]),\"\",[ArchivoRespuesta])"   },   {     "name": "correoUser",     "value": "[ID_PQR].[Email]"   } ]
     - Inputs: []
  2. Completado (Set row values — sets Estado_Email)
     - Inputs: []
     - Set these column(s): [   {     "column": "Estado_Email",     "value": "\"Completado\""   } ]

### Bot_Radicacion_IDInterno ges

- Enabled: Yes
- Event source: App
- Event table: GestionPqr
- Data change type: Adds
- Condition: —
- Process steps: 3
  1. Incrementar_Consecutivo (Run action on rows)
  2. Asignar número a la Gestion (Run action on rows)
  3. Generar ID_Gestion (Grouped actions)

### Notificar_Apelacion_Deepseek

- Enabled: Yes
- Event source: App
- Event table: GestionPqr
- Data change type: Updates
- Condition: AND( [Apelacion] = "Sí", ISNOTBLANK([ComentariosApelacion]))
- Process steps: 1
  1. Ejecutar Script (Call a script — enviarCorreoDpto)
     - Apps Script Project: Apelacion_Deepseek
     - Function Name: enviarCorreoDpto
     - Return Value: false
     - Run asynchronously?: false
     - Function Parameters: [   {     "name": "correodpto",     "value": "[Gestor].[CorreoCorporativo]"   },   {     "name": "nombreGestor",     "value": "[Gestor].[NombreGestor]"   },   {     "name": "area",     "value": "[Departamento].[Departamento]"   },   {     "name": "descripcion",     "value": "[ObservacionPersonalizada]"   },   {     "name": "apelacion",     "value": "[ComentariosApelacion]"   },   {     "name": "fechaApelacion",     "value": "[FechaApelacion]"   },   {     "name": "ID_Interno",     "value": "[ID_Interno]"   },   {     "name": "prioridad",     "value": "[ID_PQR].[Prioridad_Solicitud]"   } ]
     - Inputs: []

### Notificar Departamento

- Enabled: Yes
- Event source: App
- Event table: Pqrs
- Data change type: Adds, Updates
- Condition: AND( [DepartamentoNotificado] = True, [_THISROW_BEFORE].[DepartamentoNotificado] <> True)
- Process steps: 2
  1. Ejecutar Script (Call a script — enviarCorreoPQR)
     - Apps Script Project: Notificar_Departamento
     - Function Name: enviarCorreoPQR
     - Return Value: false
     - Run asynchronously?: false
     - Function Parameters: [   {     "name": "correodpto",     "value": "[Gestor].[CorreoCorporativo]"   },   {     "name": "nombreGestor",     "value": "[Gestor].[NombreGestor]"   },   {     "name": "area",     "value": "[Departamento].[Departamento]"   },   {     "name": "descripcion",     "value": "[Descripcion]"   },   {     "name": "fecha",     "value": "NOW()"   },   {     "name": "ID_PQR",     "value": "[ID_Interno]"   },   {     "name": "prioridad",     "value": "[Prioridad_Solicitud]"   },   {     "name": "alertaVencimiento",     "value": "[AlertaVencimiento_Virtual]"   },   {     "name": "Estado_Pqr",     "value": "[Estado_Pqr]"   } ]
     - Inputs: []
  2. Cambiar estado a False (Set row values — sets DepartamentoNotificado, ContadorNotificacion, UltimaNotificacion)
     - Inputs: []
     - Set these column(s): [   {     "column": "DepartamentoNotificado",     "value": "False"   },   {     "column": "ContadorNotificacion",     "value": "[ContadorNotificacion]+1"   },   {     "column": "UltimaNotificacion",     "value": "NOW()"   } ]

### Bot_Radicacion_IDInterno

- Enabled: Yes
- Event source: App
- Event table: Pqrs
- Data change type: Adds
- Condition: —
- Process steps: 3
  1. Incrementar_Consecutivo (Run action on rows)
  2. Asignar número a la PQR (Run action on rows)
  3. Generar ID_PQR (Grouped actions)

### Todas las Pqr

- Enabled: Yes
- Event source: App
- Event table: Reportes
- Data change type: Adds
- Condition: AND([Tipo_Pqr]="Todos",[Tipo_Reporte]="Todos")
- Process steps: 2
  1. Crear Ruta Archivo (Set row values — sets Archivo_Excel)
     - Inputs: []
     - Set these column(s): [   {     "column": "Archivo_Excel",     "value": "CONCATENATE(\"Reportes/Reportes_Generados/\",\"Reporte_\", [Tipo_Reporte], \"_\", TEXT([Fecha_Inicio], \"YYYYMMDD\"),\".xlsx\")"   } ]
  2. Generar Perorte (Create a new file)
     - Disable Timestamp?: true
     - File Folder Path: "/Reportes/Reportes_Generados"
     - File Store: Default
     - Inputs: []
     - _extractionWarning: Some editor fields were omitted by the local metadata allowlist.

## Dependency Summary

App Intelligence discovered 1332 static relationships across 425 components.

| Component | Type | Uses | Used By |
|---|---|---:|---:|
| Pqrs | table | 0 | 97 |
| Pqr x mes (Pqrs) | slice | 54 | 4 |
| Pqrs x Años (Pqrs) | slice | 50 | 8 |
| GestionPqr | table | 0 | 56 |
| Pqrs.ID_PQR | column | 1 | 31 |
| GestionPqr.ID_PQR | column | 4 | 27 |
| Pqrs.Estado_Pqr | column | 2 | 28 |
| Gestores | table | 0 | 27 |
| Gestores_Solo_Lectura (Gestores) | slice | 21 | 0 |
| filtros (Filtros) | view | 20 | 1 |
| Departamentos | table | 0 | 20 |
| Filtros.Servicio | column | 2 | 18 |
| Pqrs.Tipo_Solicitud | column | 2 | 17 |
| Datos_Rm | table | 0 | 19 |
| Pqrs.Departamento | column | 4 | 14 |
| Pqrs.Servicio | column | 5 | 12 |
| Pqrs.Gestor | column | 4 | 13 |
| ArchivosPostPqr.ID_PQR | column | 3 | 14 |
| ArchivosPostPqr | table | 0 | 16 |
| Reportes | table | 0 | 16 |
| Ejecutar Script | task | 15 | 1 |
| GestionPqr.Gestor | column | 8 | 7 |
| Pqrs.Fecha_Creacion | column | 2 | 12 |
| Ejecutar Script | task | 13 | 1 |
| Pqrs.ID_Interno | column | 1 | 12 |
| Pqrs.NumeroInterno | column | 1 | 12 |
| Servicio | table | 0 | 13 |
| GestionPqr.Departamento | column | 5 | 8 |
| Noticias Publicadas (Noticias) | slice | 10 | 3 |
| Gestores.ID_Gestor | column | 2 | 10 |

### Unresolved References

- Actualizar campos Action - 1 (GestionPqr) → GestionPqr.TiempoRespuesta: Action sets column TiempoRespuesta (Set these columns[1])

## Analysis Scope

This document is generated from the captured Complete App Snapshot using local static analysis. Dynamic expressions, runtime behavior, deep links, external integrations, data-source behavior, and configuration not present in the snapshot may create additional relationships or impact.

---

Generated locally by AppSheet Toolkit. No cloud upload is required.