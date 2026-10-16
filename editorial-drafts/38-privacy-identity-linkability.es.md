# Privacidad, metadatos y vinculación de identidades

*Temporada 6. Solo borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

Un identificador portátil puede facilitar acceso entre aplicaciones y también correlacionar operaciones independientes. Portabilidad y privacidad no siempre van juntas.

## Límites y decisiones

Modele identificadores públicos, horarios, historial de ofertas, metadatos de evidencias, IDs de proveedores y registros. Prefiera minimizar datos, divulgación delimitada y retención clara. Firmar con una clave no significa revelar la misma identidad permanente a toda contraparte.

## Fallo y verificación

Una afirmación de privacidad exige rastrear flujos reales, almacenamiento y observabilidad de red. Este artículo no afirma anonimato de una implementación desplegada.

*Este borrador no acredita una implementación verificada ni autoriza su publicación.*

## Evidencia de fuente y límite de fallo

Los catálogos de amenazas y el diseño de identidad no prueban desvinculación ni privacidad desplegada. El siguiente gate requiere verificación operativa del HEAD exacto; esta fuente no autoriza lanzamiento.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)

## Prueba concreta de correlación de identidad

Una persona utiliza la misma identidad pública en dos aplicaciones independientes. Un observador combina horarios, importes recurrentes de ofertas, referencias de proveedores y un identificador estable para inferir que ambas actividades pertenecen a la misma persona. Ninguna aplicación publica su nombre legal, pero los metadatos combinados pueden revelar su comportamiento.

**Alternativa:** un identificador universal facilita la portabilidad de cuentas y la consulta de reputación, pero crea una clave persistente de seguimiento entre mercados. Identificadores distintos por servicio y divulgación selectiva reducen correlación, aunque complican recuperación, pruebas de disputas y portabilidad de reputación.

**Siguiente prueba:** enumerar campos que salen del cliente, nodo, WebSocket, registros y proveedor de evidencia; después intentar correlacionar dos operaciones usando solo datos observables. Medir retención y acceso a cada identificador. Es una auditoría de privacidad propuesta, no prueba de anonimato o imposibilidad de correlación en producción.
