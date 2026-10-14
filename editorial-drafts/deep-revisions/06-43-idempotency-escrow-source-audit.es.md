# Idempotencia y escrow: lo que el código realmente garantiza

*Material editorial respaldado por fuentes para los artículos 06, 08, 37 y 43. Borrador, sin aprobación para publicación.*

## Una solicitud que falla después de haber funcionado

Imagine a un comprador aceptando una oferta. El registro de la operación se confirma, pero falla la emisión posterior de un evento y la API devuelve un error. Reintentar no significa necesariamente iniciar una operación nueva. Tratar el error como prueba de ausencia de efectos puede crear una segunda operación.

En el código inspeccionado de Sails, `TradeService.createTrade()` llama a `withIdempotency()` con alcance `openp2p.trade.create`, identificación del participante, oferta e importe y una **clave de idempotencia opcional** proporcionada por el cliente. Sin esa clave, un reintento puede crear otra operación. Es una garantía delimitada, no una promesa universal de ejecución exactamente una vez.

La implementación común documenta fallos anteriores: persistencia exitosa seguida de error al registrar finalización; concurrencia al recuperar una reclamación fallida; y excepciones posteriores a la persistencia confundidas con ausencia de escritura. El diseño separa persistencia de acciones posteriores y contempla reclamación atómica y resultado desconocido. Esto describe el código, no una prueba nueva en producción.

## Escrow no implica un solo modelo de custodia

El proveedor WDK EVM de referencia declara que una única semilla guardada en el servidor controla tesorería y subcuentas de escrow. El código lo clasifica como **no apto para producción**. Una aprobación doble en la aplicación no convierte ese diseño en multisig on-chain.

El proveedor MULTISIG Bitcoin describe claves de comprador y vendedor mantenidas por los clientes, clave de árbitro en el servidor y recolección de firmas independientes sobre PSBT. El proveedor LIGHTNING_HODL basado en Arkade describe un flujo relacionado, pero limita explícitamente su alcance a testnet/mutinynet. Son límites de confianza y entornos de verificación diferentes.

## Consecuencia arquitectónica

Un artículo técnico debe identificar operación, proveedor, custodio de claves, umbral de firma, entorno y evidencia de verificación. 'No custodial', 'idempotente' y 'exactamente una vez' no son etiquetas globales aplicables a todo el protocolo.

## Siguiente pregunta

¿Qué proveedores, configuraciones y pruebas end-to-end están autorizados para Day 0? Esa decisión corresponde al CTO y al gate de lanzamiento, no a este artículo.

## Registro de fuentes

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/multisig.provider.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/lightning-hodl.provider.ts

**Madurez:** código fuente inspeccionado; verificación en ejecución pendiente. Revisión del CTO pendiente.
