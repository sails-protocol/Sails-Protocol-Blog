# Agotamiento de recursos, límites de tasa y abuso de evidencias

*Temporada 6. Borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

Un JSON aparentemente pequeño puede causar análisis, hashing o almacenamiento costosos. Un participante malicioso puede explotar la diferencia entre solicitudes aceptadas y trabajo acotado.

## Decisión: rechazar antes del trabajo costoso

Muchas solicitudes pequeñas pueden agotar recursos igual que una carga enorme. Los presupuestos deben abarcar bytes individuales, profundidad y complejidad, referencias por prueba, almacenamiento acumulado e intentos, atribuidos a identidades duraderas y no solo a contadores locales. El esquema de descriptores inspeccionado muestra `externalReference: true`, pero no demuestra por sí mismo esas cuotas. La exclusividad de punteros y el hash de medios OpenProof son controles distintos.

## Fallo: un puntero externo presentado como medio verificado

Un cliente envía una URI sin procesar como si fuera una referencia ligada a integridad. Aceptarla sin comprobar su tipo permite una afirmación falsa de procedencia. Otro fallo ocurre si se rechaza después de guardar bytes o emitir eventos. El gate editorial debe exigir aceptación en el límite, rechazo en +1 y cero efectos mediante la ruta real del servicio y el ledger duradero de cuotas.

## Fallo y verificación

Las pruebas de límite deben mostrar aceptación en el valor exacto, rechazo una unidad por encima y cero efectos tras el rechazo. Los valores deben comprobarse con decisiones e implementación actuales antes de publicar.

## Los descriptores no equivalen a evidencia almacenada

El esquema HTTP de disputas conserva `evidenceReferenceId` y el marcador explícito `externalReference: true`. Una URI sin procesar no se convierte automáticamente en referencia OpenProof vinculada a integridad: el servicio verifica formas excluyentes y exige declarar la referencia externa. La interfaz del proveedor separa bytes y metadatos de la autoridad de la prueba. Es un límite de confianza de entrada, no prueba de que todas las cuotas, tamaños, profundidades JSON o presupuestos acumulados se apliquen en producción.

**Prueba de abuso:** enviar descriptores enormes o anidados, referencias repetidas y URI externas que simulan ser medios verificados. Exigir enforcement exacto, rechazo sin efectos y contabilidad por alcance antes de afirmar protección completa.

**Límite específico de las fuentes:** el esquema Zod compartido conserva los campos, pero la exclusividad entre `uri` y `evidenceReferenceId` se aplica después en el servicio de disputas, no en el propio esquema. El contrato `store()`/`retrieve()` del proveedor cubre almacenamiento y hash del medio, no la autoridad de la firma de la prueba. Ninguna de esas fuentes, por sí sola, certifica la aplicación de cuotas de carga.

## Siguiente pregunta

¿Qué ámbitos de actor y de prueba responden por la cuota persistente cuando llegan solicitudes simultáneas a distintos procesos? ¿Qué pruebas en el commit exacto demuestran que una solicitud rechazada no deja evidencia almacenada ni cargos en el registro autoritativo de cuotas?

### Fuentes y estado de verificación

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/evidence-descriptor-schema.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/evidence-provider.ts

*Solo inspección de fuentes. Sin nuevas pruebas de cuotas, ejecución en producción, aprobación del CTO ni publicación.*

*Este borrador no acredita una implementación verificada ni autoriza su publicación.*
