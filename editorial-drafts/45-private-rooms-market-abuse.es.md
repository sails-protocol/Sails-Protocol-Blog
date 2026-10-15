# Salas privadas, ofertas públicas y abuso de mercado

*Season 7 / Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

## Pregunta

Una sala privada facilita la coordinación entre participantes conocidos, pero también puede ocultar condiciones abusivas, suplantación o visibilidad selectiva.

## Límite y decisión

Separe membresía, descubrimiento de ofertas, control de acceso y autorización económica. Administrar una sala no debe otorgar silenciosamente autoridad de firma sobre billeteras. Ofertas públicas y privadas pueden compartir reglas económicas, pero exponer metadatos distintos.

## Fallo y evidencia

Un miembro expulsado intenta aceptar una oferta en caché. El nodo debe verificar autorización actual y vigencia de la oferta, no confiar en la interfaz antigua. Privacidad y moderación siguen siendo decisiones de diseño.

*Este texto no afirma una implementación en producción ni autorización para publicar.*

## Límite de evidencia

El acceso a salas privadas no impide por sí solo colusión, Sybil o abuso de mercado. **Fallo:** confundir intención documentada con comportamiento verificado en producción. Faltan evidencia del HEAD exacto y aprobación.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)

## Prueba de fallo: acceso revocado y ofertas antiguas

Un moderador elimina a un participante mientras su navegador conserva una oferta en caché. El navegador envía la aceptación tras la revocación; otra cuenta controlada por la misma persona intenta regresar con otra identidad. La etiqueta de sala privada no demuestra membresía vigente, precio honesto ni identidad independiente.

**Alternativa:** el descubrimiento privado reduce exposición no deseada, pero también puede ocultar condiciones discriminatorias o manipulación coordinada. La política de acceso debe mantenerse separada de la autoridad sobre operaciones, y la moderación requiere vías de reclamación y auditoría.

**Siguiente prueba:** hacer competir revocación y aceptación en dos sesiones, repetir una oferta antigua y comprobar rechazo sin efecto económico. Revisar por separado las denuncias de abuso y los metadatos de sala visibles para terceros. Es una prueba propuesta, no evidencia de salas privadas desplegadas.
