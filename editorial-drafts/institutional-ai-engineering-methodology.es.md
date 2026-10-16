# Ingeniería orientada por IA en Sails Protocol

*Borrador editorial institucional. No aprobado para publicación. Pendiente la auditoría de atribución de las fuentes de referencia.*

## Por qué documentamos el método

Sails Protocol no es solo un conjunto de módulos. Es un esfuerzo de ingeniería centrado en la coordinación económica bajo incertidumbre, donde una respuesta plausible no demuestra que el dinero, la identidad, la autorización o la liquidación estén seguros.

La asistencia de IA puede ayudar a inspeccionar código, proponer diseños, escribir pruebas, comparar alternativas y mantener documentación. Pero la confianza de un modelo de lenguaje no constituye una garantía de seguridad. Siguen siendo necesarias la autoridad humana para decidir, las evidencias reproducibles y las limitaciones claramente documentadas.

## Un flujo de trabajo organizado alrededor de las pruebas

El proyecto describe el trabajo mediante misiones definidas, alcance explícito, recopilación de evidencias, etapas de revisión y cambios controlados. Una presentación pública útil del método debe explicar:

1. **Descubrir y especificar:** identificar el fallo real del usuario o de la operación económica y el invariante que debe resistirlo.
2. **Diseñar con límites claros:** documentar quién controla las claves, el dinero, las transiciones de estado, las evidencias y los hechos de pagos externos.
3. **Implementar y verificar:** preferir cambios concretos en el código, persistencia real y pruebas de reinicio y concurrencia frente a explicaciones o éxitos basados únicamente en mocks.
4. **Cuestionar:** encargar a revisores o agentes que busquen contraejemplos, condiciones de carrera, confusiones de autoridad y supuestos sin respaldo.
5. **Gate del CTO y congelación:** registrar la decisión, el alcance exacto, las referencias inmutables, los hallazgos pendientes y lo que explícitamente *no* se ha aprobado.
6. **Publicar y aprender:** solo después de las aprobaciones humanas aplicables; revisar las decisiones cuando cambien las evidencias.

Estas etapas son una representación editorial de la metodología, no una afirmación de que todos los flujos o automatizaciones del proyecto estén implementados exactamente así.

## Qué pueden y qué no pueden decidir los agentes de IA

Un agente puede plantear una hipótesis, ejecutar una prueba autorizada, inspeccionar un PR e informar sobre evidencias. No debe convertir una afirmación sin revisar en garantía de producción, ocultar un hallazgo material, fusionar silenciosamente una rama protegida ni redefinir por sí solo una política económica.

**Ningún hallazgo material debajo de la alfombra** es una disciplina de escalamiento transparente. Una prueba fallida, un comportamiento incierto de un proveedor o un límite de autorización sin resolver permanece visible hasta que se resuelva o lo acepte explícitamente quien tenga autoridad para decidir.

## Ejemplo: carrera al completar una operación

Imaginemos dos solicitudes compitiendo por completar la misma operación mientras el servidor se reinicia. Un flujo asistido por IA podría proponer una transacción de base de datos, crear una prueba de fallo y repetición, inspeccionar el resultado y preparar un informe de revisión. La evidencia decisiva no es la narración del agente, sino la poscondición duradera observada bajo las condiciones de prueba definidas, revisada frente al invariante económico.

## Influencias intelectuales y autores

**Atribución pendiente.** El responsable del proyecto indica que los autores y obras que inspiraron el método Sails están registrados en GitHub. Antes de citarlos, recuperar e inspeccionar los documentos exactos, verificar nombres de autores y obras, distinguir inspiración directa de similitud general y citar los archivos pertinentes o publicaciones oficiales. No inventar respaldos ni insinuar que esos autores contribuyeron a Sails Protocol.

Estructura propuesta para cada influencia verificada:
- Autor y obra (título correcto, fecha y enlace primario).
- Idea que influyó en el método.
- Cómo la adaptó Sails, con un ejemplo concreto.
- En qué se diferencia deliberadamente Sails.
- Cita de la fuente de referencia y fecha de revisión.

## Verificación antes de publicar

- Identificar el documento canónico de metodología y las notas originales de autores e inspiraciones en el repositorio GitHub de Sails Protocol.
- Verificar los nombres reales de los roles de ingeniería, etapas y gates frente a revisiones inmutables.
- Añadir un ejemplo con evidencias exactas de PR, commit, CI y prueba de base de datos.
- Preparar versiones EN, PT-BR y ES y revisión lingüística independiente.
- Obtener aprobación factual del CTO y autorización de publicación del responsable.

*Este borrador es intencionalmente conservador respecto a fuentes no verificadas y no afirma que el sistema esté listo para producción.*
