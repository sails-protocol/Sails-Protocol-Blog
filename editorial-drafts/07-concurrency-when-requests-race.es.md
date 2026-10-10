# Concurrencia: cuando dos solicitudes compiten por la misma operación

*Borrador editorial. Publicación no aprobada.*

## La pregunta

Imaginemos dos procesos atendiendo la misma operación casi al mismo tiempo. Cada uno lee un estado aparentemente válido. Cada uno decide que puede continuar. Sin un límite de autoridad confiable, ambos pueden intentar producir un efecto económico.

## Qué puede salir mal

La concurrencia no es solo una cuestión de rendimiento. En operaciones P2P puede determinar si una finalización, reclamación o liberación se aplica una o dos veces. Una comprobación realizada antes de escribir puede quedar obsoleta. La transacción de base de datos, y no el orden aparente del código, debe establecer qué transición ganó.

## Dónde debe existir la garantía

Existen herramientas distintas para distintas carreras: restricciones, actualizaciones transaccionales, bloqueos y operaciones compare-and-set bien delimitadas. Ninguna es correcta automáticamente en todos los casos. La pregunta útil es qué invariante debe sobrevivir a dos solicitudes simultáneas y dónde se garantiza.

## Cómo abordamos el problema

Nuestro trabajo en Sails incluye revisiones explícitas de concurrencia y reinicio para transiciones económicas. Utilizamos pruebas con persistencia real porque los mocks pueden ocultar comportamientos de aislamiento y orden que importan. Esto describe nuestro método de validación, no significa que todos los adaptadores hayan superado todos los escenarios.

## Leer a continuación

El próximo artículo conecta este tema con la recuperación: si un proceso cae a mitad de un flujo, ¿qué debe seguir siendo cierto cuando vuelva?

*Fuentes pendientes: enlazar commits inmutables, decisiones del CTO y pruebas antes de publicar.*

## Límite comprobado en el código

El servicio restringe cambios manuales de estado mediante `MANUAL_TRADE_TRANSITIONS`: PENDING puede pasar a ACTIVE o CANCELLED, ACTIVE puede pasar a CANCELLED y los estados terminales no admiten reescrituras manuales arbitrarias. El código describe el fallo anterior: una operación completada o disputada podía sobrescribirse como CANCELLED después de mover fondos en escrow. La corrección protege el historial, pero no demuestra liquidación serializable ante toda carrera entre proveedores.

**Siguiente prueba:** dos participantes autenticados compitiendo por la misma transición, un evento de escrow concurrente y reinicio con Postgres real. Sin evidencia del SHA exacto, no hay PASS.

### Primary source / maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts

*Source inspection only; no new live test, CTO approval or publication authorization.*
