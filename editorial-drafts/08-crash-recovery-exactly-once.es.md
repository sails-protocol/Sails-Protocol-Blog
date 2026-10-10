# Recuperación tras fallos y el significado de exactly-once

*Borrador editorial. Publicación no aprobada.*

## La pregunta

El momento más difícil de un flujo distribuido puede ser el que nadie ve: un proceso se detiene después de hacer algo importante, pero antes de informar que tuvo éxito.

## Qué puede salir mal

Imaginemos que un servicio registra la finalización de una operación, aplica un efecto y pierde energía. Al reiniciar debe decidir si continúa, reintenta o devuelve el resultado anterior. Una recuperación descuidada puede perder una acción o aplicarla dos veces. La expresión exactly-once suena tranquilizadora, pero oculta una pregunta importante: ¿exactamente una vez dentro de qué límite del sistema?

## Dónde debe existir la garantía

Una transacción de base de datos puede hacer atómicos cambios relacionados en el estado local. No incorpora automáticamente a un banco, una blockchain o un proveedor externo a la misma transacción. Los efectos externos necesitan su propio modelo de conciliación, idempotencia y fallos. No debemos confundir atomicidad local con finalidad universal de extremo a extremo.

## Cómo abordamos el problema

En Sails, los escenarios de caída y recuperación forman parte de las evidencias de ingeniería que buscamos para las transiciones económicas. Queremos pruebas que detengan un proceso en puntos importantes, lo reinicien con estado duradero y comprueben que los invariantes siguen siendo válidos. Una afirmación sobre exactly-once debe identificar la operación, el límite de persistencia y la evidencia que la respalda.

## Persistencia duradera, respuesta perdida y reintento

El módulo común de idempotencia inspeccionado distingue la creación duradera de las acciones posteriores y documenta ventanas de fallo anteriores: la escritura en la base funciona, pero falla el registro de finalización; dos reintentos compiten por recuperar una operación; o una excepción posterior a la persistencia se confunde con ausencia de efecto. El servicio de operaciones pasa funciones separadas de persistencia y acciones posteriores a `withIdempotency()`. Un resultado UNKNOWN exige reconciliación, no repetir efectos externos a ciegas.

**Escenario adversarial:** la operación existe, pero falla la publicación del evento. Devolver error no deshace la operación. Reintentar con la misma clave debe respetar el protocolo delimitado de idempotencia; sin clave puede duplicarla. La atomicidad de la base tampoco garantiza ejecución única en un banco, cadena o proveedor externo.

**Siguiente pregunta:** ¿qué pruebas de reinicio con Postgres real, SHA exacto, evidencia de outbox y recibos de proveedores demuestran la recuperación de cada operación?

### Source ledger and maturity

- [SDK method](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [HTTP route](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Trade service](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Common idempotency mechanism](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts)

*Source-inspected only. No new runtime verification, CTO approval or publication authorization.*

## Leer a continuación

En el próximo artículo pasaremos del comportamiento de los procesos a las personas y los permisos: saber quién es alguien no significa saber qué puede hacer.


