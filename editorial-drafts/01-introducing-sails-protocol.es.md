# Presentamos Sails Protocol

*Borrador editorial. Publicación no aprobada.*

¿Por qué negociar directamente con otra persona todavía requiere tanta coordinación detrás de escena?

Un comprador y un vendedor pueden acordar un precio en pocos minutos. Completar la operación es otra cosa. Tienen que definir cómo se realizará el pago, cuándo se liberará un activo, qué se considera una prueba válida y qué ocurre si las partes no están de acuerdo. Cada decisión implica sus propios riesgos.

Las plataformas P2P llevan años simplificando esta experiencia. Muchas reúnen ofertas, reputación, resolución de disputas y pagos en un mismo lugar. Esa comodidad importa. Pero durante nuestro trabajo apareció una pregunta una y otra vez: ¿cuánta de esa coordinación tiene que pertenecer a una sola plataforma?

De esa pregunta nació Sails Protocol.

Estamos explorando una forma modular de coordinar actividades económicas entre pares. La intención no es reemplazar cada marketplace o billetera por otro destino. Queremos que las aplicaciones puedan incorporar capacidades de coordinación y construir sus propias experiencias.

Esa diferencia orientó la arquitectura. Sails Protocol es el protocolo de coordinación. Sails Core contiene sus reglas semánticas. Sails Node es una implementación del protocolo. Sails P2P Trading SDK es nuestro primer producto enfocado en integrar flujos de negociación. Sails Market se está planificando como una aplicación web de referencia, no como el protocolo en sí.

Estos nombres no son intercambiables. Una billetera que integra un SDK sigue siendo una billetera. Un marketplace sigue siendo responsable de su producto y de la experiencia de sus usuarios. El protocolo es la capa que estamos construyendo para ayudar a esos sistemas a coordinarse.

También aprendimos que un diseño debe responder a lo que ocurre cuando algo falla. ¿Qué pasa si se repite una solicitud? ¿Si dos procesos intentan completar la misma operación al mismo tiempo? ¿Si un servicio se interrumpe entre dos pasos? ¿Si una prueba llega tarde o supera los límites permitidos? No son preguntas para dejar hasta después del lanzamiento. Forman parte de definir el comportamiento del sistema.

Por eso, el trabajo en el primer SDK incluye límites explícitos para identidad, evidencias, estado económico y liquidación. Algunos ya están implementados y probados. Otros siguen pendientes de validaciones técnicas. Vamos a explicar cada capacidad según su estado real, sin presentar una hoja de ruta como una red terminada.

Este blog seguirá el mismo método que utilizamos para construir: hacer preguntas, evaluar alternativas, explicar decisiones y revisarlas cuando aparezca nueva evidencia.

En el próximo artículo veremos por qué los mercados P2P necesitan coordinación y qué hacen bien las plataformas que ya existen.

*Revisión técnica pendiente. Las afirmaciones sobre implementación y madurez deben verificarse con el repositorio y la evidencia aprobada por el CTO antes de publicar.*

## Límite de evidencia y fallo

Visión, obligaciones y evidencia ejecutable tienen madurez distinta. **Fallo:** interpretar arquitectura o código inspeccionado como prueba de producción. Faltan pruebas del HEAD exacto y aprobación.

- [PROTOCOL_INVARIANTS.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
