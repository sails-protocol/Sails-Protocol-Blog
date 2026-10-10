# Agotamiento de recursos, límites de tasa y abuso de evidencias

*Season 6 / Temporada 6. Solo borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

Un JSON aparentemente pequeño puede causar análisis, hashing o almacenamiento costosos. Un participante malicioso puede explotar la diferencia entre solicitudes aceptadas y trabajo acotado.

## Límites y decisiones

Limite tamaño, profundidad, complejidad, cuotas acumuladas e intentos en el límite del servicio antes del trabajo costoso. Atribuya uso a actores autenticados e identificadores persistentes de prueba, no solo a contadores de proceso.

## Fallo y verificación

Las pruebas de límite deben mostrar aceptación en el valor exacto, rechazo una unidad por encima y cero efectos tras el rechazo. Los valores deben comprobarse con decisiones e implementación actuales antes de publicar.

*No verified implementation claim or permission to publish is implied by this draft.*

## Los descriptores no equivalen a evidencia almacenada

El esquema HTTP de disputas conserva `evidenceReferenceId` y el marcador explícito `externalReference: true`. Una URI sin procesar no se convierte automáticamente en referencia OpenProof vinculada a integridad: el servicio verifica formas excluyentes y exige declarar la referencia externa. La interfaz del proveedor separa bytes y metadatos de la autoridad de la prueba. Es un límite de confianza de entrada, no prueba de que todas las cuotas, tamaños, profundidades JSON o presupuestos acumulados se apliquen en producción.

**Prueba de abuso:** enviar descriptores enormes o anidados, referencias repetidas y URI externas que simulan ser medios verificados. Exigir enforcement exacto, rechazo sin efectos y contabilidad por alcance antes de afirmar protección completa.

### Source and verification status

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/evidence-descriptor-schema.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/evidence-provider.ts

*Source inspection only. No new quota test, production execution, CTO approval or publication.*
