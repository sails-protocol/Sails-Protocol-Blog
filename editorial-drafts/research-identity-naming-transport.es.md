# Identidad, nombres y transporte P2P: Spaces, Pubky, Nostr, Pear e Iroh

*Nota de investigación editorial para el Day 0. No aprobada para publicación. No afirma que todas las tecnologías estén integradas.*

## La pregunta

¿Cómo puede una aplicación P2P encontrar y autenticar a una contraparte, conectarse con ella, intercambiar mensajes y seguir aplicando las reglas económicas correctas cuando falla la red o un participante miente?

La respuesta exige separar **nombres**, **identidad**, **descubrimiento**, **transporte**, **replicación de datos** y **autorización económica**. Son funciones distintas.

## Mapa tecnológico (orientado a fuentes primarias)

| Tecnología | Función principal relevante | Qué no demuestra |
| --- | --- | --- |
| Spaces Protocol | Nombres soberanos anclados en Bitcoin y resolución fuera de la cadena, incluidos identificadores verificables | Resolver un nombre no autoriza por sí mismo una operación ni demuestra su liquidación |
| Pubky | Identidad basada en clave pública, datos portables y consulta mediante homeservers; conceptos de descubrimiento PKARR/DHT | Un perfil público o registro en homeserver no demuestra la finalidad de un pago |
| Nostr | Eventos firmados y publicación/suscripción mediante relays, con autoría basada en clave pública | Un evento firmado no demuestra la veracidad de su contenido ni la finalidad económica |
| Pear y módulos P2P subyacentes | Entorno de ejecución/distribución de aplicaciones P2P; descubrimiento HyperDHT/Hyperswarm, replicación Hypercore y módulos relacionados | La replicación o el descubrimiento de pares no constituye consenso económico |
| Iroh | Conexiones directas basadas en endpoints, con descubrimiento y respaldo mediante relay, incluido transporte cifrado | Una conexión cifrada autentica un endpoint del canal, no el derecho del usuario a mover fondos |

## Límites propuestos para Sails

**Vinculación de identidad:** decidir si una clave pública Nostr, una clave Pubky o un identificador Spaces es un alias, un principal de autenticación o simplemente un puntero descubrible. Definir reglas explícitas de desafío/respuesta y rotación/recuperación de claves. Un nombre visible nunca debe convertirse silenciosamente en autoridad de autorización.

**Independencia del transporte:** tratar las primitivas Pear/P2P, Iroh y los relays Nostr como opciones distintas con semánticas diferentes de entrega, metadatos, funcionamiento sin conexión y repetición. No suponer que una sustituye directamente a otra. La intención de operación validada, la autorización y el estado duradero del protocolo no deben depender de que una conexión de transporte permanezca activa.

**Estado económico:** las declaraciones de proveedores de pago, los mensajes firmados y las pruebas de nombres son entradas. Un nodo o implementación de Sails debe aplicar sus propios invariantes de operación, idempotencia, procedencia, escrow y liquidación. Evitar afirmar que la capa de transporte puede hacer irreversible un pago fuera de la cadena.

## Ejemplo adversarial concreto

Alice resuelve el identificador Spaces de Bob a una clave y envía una intención de operación firmada por un transporte. Un relay malicioso duplica o retrasa el mensaje mientras Bob rota sus claves. La aplicación debe establecer qué clave estaba autorizada en el momento relevante, rechazar acciones económicas repetidas y distinguir la entrega correcta del mensaje de una transición de operación confirmada. Cambiar de transporte no corrige una regla de autorización incorrecta.

## Preguntas de investigación para auditar la implementación

1. ¿Qué métodos de identidad están implementados, son experimentales o figuran solo en la hoja de ruta del código de Sails Protocol?
2. ¿Existe una vinculación canónica entre identidad y participante con prueba de posesión, caducidad y semántica de rotación?
3. ¿Qué transportes están desplegados, son opcionales, propuestos o incompatibles con las restricciones actuales del SDK/runtime?
4. ¿Cómo sobreviven los mensajes al funcionamiento sin conexión, el reordenamiento, la entrega duplicada y el reinicio del servidor?
5. ¿Qué datos y metadatos son visibles para relays, homeservers, pares de red y observadores?
6. ¿Puede sustituirse o volver a vincularse un identificador verificado después de iniciarse una operación? ¿Qué clave tiene autoridad?
7. ¿Qué evidencias muestran que el mismo invariante económico se conserva entre distintas opciones de transporte?

## Fuentes primarias para la auditoría factual

- Spaces: https://spacesprotocol.org/ (nombres anclados en Bitcoin y resolución fuera de la cadena)
- Pubky: https://pubky.org/explore/pubky-protocol/homeserver/ (homeservers, PKARR y limitaciones actuales de los datos públicos)
- Nostr: https://github.com/nostr-protocol/nips/blob/master/01.md (eventos firmados y relays WebSocket)
- Pear/P2P: https://docs.pears.com/p2p/ (entorno de ejecución frente a primitivas modulares de descubrimiento/replicación)
- Iroh: https://www.iroh.computer/blog/the-road-to-iroh-1-0 (alcance centrado en conexiones); https://docs.iroh.computer/deployment/security-privacy (compromisos de privacidad de los relays)

Las fuentes anteriores explican proyectos externos, **no prueban que Sails haya implementado una integración**. Antes de publicar, verificar commits exactos de Sails, decisiones arquitectónicas y revisión técnica. Preparar versiones naturales EN/PT-BR/ES, un diagrama específico de los límites y un equivalente textual accesible.

## Ubicación editorial

Mantener la base de siete temporadas. Añadir este material como **dosier de investigación transversal** que contribuya a:
- Temporada 2, artículo 09 (identidad frente a autorización), artículo 13 (nodos no confiables);
- Temporada 4, artículo 21 (OpenIdentity);
- Temporada 5, artículo 30 (límites de carteras y firmas), artículo 34 (proveedores externos);
- Temporada 6, artículo 38 (privacidad y posibilidad de vincular identidades).

Si se acepta el dosier como artículo independiente, registrar un ajuste de alcance explícito y aprobado en lugar de modificar silenciosamente la base de 48 temas.

*NO MATERIAL FINDING UNDER THE RUG.*
