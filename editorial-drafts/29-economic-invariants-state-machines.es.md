# Máquinas de estados e invariantes económicos en la práctica

*Solo borrador. Publicación no aprobada. Temporada 5, artículo 29.*

## Pregunta

Una máquina de estados es útil porque una acción económica debe tener un significado preciso. Una operación no puede quedar simultáneamente completada y disputada por solicitudes concurrentes contradictorias.

## Límite y diseño

Modele las transiciones permitidas por separado de los efectos externos. Un participante autenticado solicita una transición, una autoridad persistente verifica precondiciones y solo se confirma un resultado válido. Las respuestas del proveedor y los reintentos del cliente son entradas, no pruebas automáticas de autorización.

## Fallo y evidencia

El diagrama representa una invariante ilustrativa, no la máquina de estados canónica de producción. El siguiente paso es comparar cada transición con definiciones del código y pruebas adversariales en un commit inmutable.

## Decisión: hacer duraderas las transiciones terminales

El servicio de operaciones inspeccionado protege estados terminales frente a sobrescrituras manuales mediante `MANUAL_TRADE_TRANSITIONS`. Es un límite concreto del código, no prueba de atomicidad de todos los efectos económicos distribuidos. El participante debe estar autorizado, la transición debe ser válida para el estado persistido y las solicitudes concurrentes no pueden producir resultados terminales incompatibles. Las invariantes definen obligaciones más amplias; cada implementación requiere pruebas propias.

## Fallo: una solicitud tardía reescribe la historia

Dos solicitudes compiten: una completa la operación y otra intenta disputarla o cancelarla desde un estado obsoleto. Comprobar antes de escribir sin control duradero de concurrencia puede hacer que ambas crean haber triunfado. La aceptación requiere transacciones reales de Postgres, workers concurrentes, inspección de la fila final y eventos, seguida de reinicio y replay. Inspeccionar el código no certifica el HEAD actual.

## Evidencia y siguiente pregunta

- [Servicio de operaciones](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Invariantes del protocolo](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)

*Inspección de fuente, no nueva conformidad ejecutada.* ¿Qué transiciones cuentan con prueba de concurrencia y reinicio en el SHA exacto?
