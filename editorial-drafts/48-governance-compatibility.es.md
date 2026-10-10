# Gobernanza de protocolo abierto y compatibilidad a lo largo del tiempo

*Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

## Pregunta

Un protocolo evoluciona mientras aplicaciones y nodos se actualizan a ritmos distintos. Un cambio aparentemente menor puede redefinir el significado económico de un campo.

## Decisión: la compatibilidad debe identificar la propiedad exacta

Un número de versión no sustituye un contrato económico. Un cliente puede decodificar un mensaje y aun así interpretar de otra forma una comisión, un resultado de liquidación o una condición de autorización. Una afirmación de compatibilidad debe identificar esquema o ruleset, par de implementaciones, operación, red y pruebas que fallarían si cambiara la semántica. La constitución de invariantes distingue principios arquitectónicos, obligaciones aplicables y evidencia ejecutable.

## Fallo: conformidad del álgebra convertida en promesa universal

El registro inspeccionado demuestra una propiedad delimitada del evaluador de condiciones, pero dice que el ruleset publicado **no** compone condiciones. Presentarlo como conformidad integral de composición excedería la prueba. La sustitución de proveedores también respalda propiedades seleccionadas, no interoperabilidad universal. La gobernanza debe publicar tanto lo comprobado como lo no probado, con migraciones para cambios de significado económico.


## Límite y decisión

La gobernanza debe distinguir propuestas, política revisada, implementación, verificación y despliegue. La compatibilidad exige esquemas versionados, reglas de ruptura, migraciones y retirada transparente. Una decisión congelada por el CTO no equivale a consenso universal.

## Fallo y evidencia

Un cliente interpreta una nueva denominación de comisión como la anterior. Aunque ambos compilen, el resultado puede ser económicamente incorrecto. Publique contratos versionados y pruebas de migración antes de afirmar compatibilidad.

*No se afirma implementación en producción ni aprobación de publicación.*

## Gobernanza es jerarquía de afirmaciones, no sello de lanzamiento

El documento de invariantes distingue leyes arquitectónicas, obligaciones concretas de implementación y evidencia ejecutable cuando procede. El registro de conformidad del álgebra de condiciones demuestra una propiedad delimitada, pero señala que el ruleset publicado no compone condiciones. La evidencia de sustitución de proveedores también respalda propiedades seleccionadas, no K3 completo ni interoperabilidad universal. Publicar una versión o superar un harness no certifica todo el protocolo.

**Gate de compatibilidad:** indicar identidad exacta del ruleset, versión del protocolo/SDK, red, implementación independiente y vector falsable. Mantener una migración cuando cambie la semántica; no convertir un PASS específico en compatibilidad universal.

### Source and maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/CONDITION_ALGEBRA_CONFORMANCE_EVIDENCE.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md

*Historical evidence/source inspection only; no latest-head test or publication approval.*
