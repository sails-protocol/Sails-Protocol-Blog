# Presentamos Sails P2P Trading SDK

*Borrador editorial. Publicación no aprobada.*

## Empezar por un flujo real

Un protocolo puede prometer muchas cosas sobre el papel. Elegimos concentrar el primer SDK en un problema concreto: coordinar el ciclo de una operación P2P. Eso implica ofertas, participantes, etapas de pago, evidencias, disputas y condiciones para llegar a un estado final. Cada paso debe tener sentido incluso cuando las solicitudes llegan fuera de orden o se repiten.

## La parte difícil no es el camino ideal

En una demostración, el comprador paga, el vendedor confirma y la operación termina. En un sistema real, el cliente puede perder la conexión después de enviar una solicitud. Dos procesos pueden intentar la misma acción. Un proveedor puede responder lentamente. Una disputa puede aportar evidencias que necesitan revisión. Tratamos la idempotencia, la concurrencia, los reinicios y los límites de autoridad como cuestiones centrales de ingeniería, no como detalles opcionales.

## Un SDK facilita la integración, no ofrece garantías automáticas

El SDK busca permitir que distintas aplicaciones integren flujos de negociación sin reescribir todas las reglas de coordinación. Pero cada integración todavía necesita configuración correcta, actores autenticados, almacenamiento confiable y adaptadores adecuados. Que un paquete compile no demuestra su comportamiento económico ante caídas, concurrencia o fallos externos. Por eso nuestro proceso exige evidencias reproducibles y revisiones explícitas.

## Qué viene después

El primer SDK es el punto de partida de una familia modular más amplia, no una prueba de que toda esa familia ya existe. A medida que avance la implementación, publicaremos ejemplos concretos, interfaces compatibles, evidencias de pruebas y limitaciones conocidas. Hasta entonces, este artículo explica la dirección del producto sin declarar que esté listo para producción.

## Qué ofrece realmente la integración inspeccionada

En la revisión fijada, el cliente OpenP2P del SDK expone `trade(offerId, amount, idempotencyKey?)`. La clave es opcional, pero tiene consecuencias económicas: omitirla puede crear otra operación tras perderse una respuesta. La ruta HTTP valida la clave proporcionada y envía el contexto del participante autenticado al servicio, que delimita el intento por acción, participante, oferta e importe. Es un contrato concreto, no prueba de que todas las billeteras conserven la clave durante reintentos sin conexión.

**Fallo:** la aplicación genera una clave nueva cada vez que se pulsa Reintentar. El servidor interpreta intentos nuevos, no la repetición de la aceptación original. **Decisión:** persistir y reutilizar la clave de la misma aceptación lógica; generar otra solo para una aceptación realmente nueva.

### Fuentes y nivel de verificación

- [Cliente OpenP2P del SDK](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [Ruta HTTP de operaciones](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Servicio de operaciones](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)

*Inspección del código en revisión fijada; sin nueva prueba de cliente/reinicio ni aprobación de publicación.*


*Revisión técnica y factual pendiente. No publicar sin aprobación explícita.*
