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

*Revisión técnica y factual pendiente. No publicar sin aprobación explícita.*
