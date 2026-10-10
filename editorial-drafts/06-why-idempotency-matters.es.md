# Por qué importa la idempotencia en las operaciones P2P

*Borrador editorial. Publicación no aprobada.*

## La pregunta

Una persona pulsa Confirmar y la conexión falla. ¿La solicitud falló o el servidor completó la acción sin devolver la respuesta? Reintentar parece natural. En un flujo financiero, tratar cada intento como una acción nueva puede ser peligroso.

## Qué puede salir mal

La idempotencia significa que repetir la misma operación prevista no produce un efecto económico adicional. No consiste simplemente en ignorar solicitudes parecidas. El sistema debe identificar qué acción se repite, quién está autorizado y qué resultado registrado tiene autoridad.

## Dónde debe existir la garantía

Una clave de API o un identificador de solicitud ayuda, pero no lo resuelve todo. Imaginemos que un servicio registra una operación completada y cae antes de responder. Tras reiniciar, un reintento debe encontrar el resultado anterior y no aplicar la liquidación de nuevo. Eso exige estado duradero y un límite transaccional claro.

## Cómo abordamos el problema

En Sails P2P Trading SDK tratamos los reintentos como una cuestión de corrección económica. Nuestras revisiones incluyen escenarios con base de datos real, solicitudes concurrentes y pruebas de caída y recuperación. Las garantías exactas dependen de la operación, el adaptador y la evidencia aprobada para cada implementación. No llamaremos exactly-once a un flujo solo porque pasó una prueba unitaria.

## Leer a continuación

En el próximo artículo veremos un problema relacionado, pero distinto: ¿qué ocurre cuando dos solicitudes llegan al mismo tiempo, antes de que una pueda observar el resultado de la otra?

*Fuentes pendientes: enlazar commits inmutables, decisiones del CTO y pruebas antes de publicar.*

## Contrato concreto en el SDK de Sails

El método `OpenP2P.trade(offerId, amount, idempotencyKey?)` del SDK inspeccionado envía la clave opcional a `POST /v1/openp2p/trades`. La ruta valida una clave no vacía de hasta 200 caracteres y la pasa, junto con el participante autenticado, a `TradeService.createTrade()`. El servicio delimita el intento por el alcance `openp2p.trade.create`, el participante y los datos de oferta e importe. **Sin la clave, un reintento puede crear otra operación**; el propio SDK indica generar una clave por aceptación lógica y reutilizarla en los reintentos de esa aceptación. Una nueva aceptación deliberada requiere una clave nueva.

**Escenario adversarial:** la operación se persiste, pero la respuesta caduca. La interfaz genera otra clave para cada reintento. Bajo este contrato, el servidor no puede reconocerlos como el mismo intento. **Límite:** se inspeccionó el código, pero no se certificó el comportamiento de todas las aplicaciones ni las pruebas de reinicio con Postgres.

**Siguiente pregunta:** ¿qué aplicaciones conservan la clave del intento lógico tras reinicios y trabajo sin conexión?

### Source ledger and maturity

- [SDK method](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [HTTP route](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Trade service](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Common idempotency mechanism](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts)

*Source-inspected only. No new runtime verification, CTO approval or publication authorization.*
