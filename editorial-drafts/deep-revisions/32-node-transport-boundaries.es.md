# Transporte del nodo Sails: entrega no es liquidación

*Editorial deep-draft. Not approved for publication. Season 5 / Article 32 companion revision.*

## La pregunta

Alice envía una intención de operación firmada, pero Bob está desconectado. Un relay guarda el mensaje, otra ruta lo entrega dos veces y el cliente reconecta tras reiniciar el nodo. ¿Cómo mantener la operación coherente?

## El transporte es un límite sustituible

La capa propuesta de adaptadores del nodo Sails separa descubrimiento de peers, conexión, entrega, orden, reintentos y reconexión de la intención económica autenticada. **Pear** ofrece un ecosistema de aplicaciones y primitivas P2P; **Iroh** se centra en conexiones entre endpoints, con descubrimiento y ayuda de relays; **Nostr** utiliza eventos firmados distribuidos por relays. Sus propiedades de entrega y privacidad difieren. No se puede asumir sustitución directa sin pruebas.

El procesamiento económico debe validar el esquema, autenticar al participante y comprobar precondiciones contra estado persistente. Mensaje entregado no significa transición aceptada. Confirmación del relay no significa pago liquidado.

## Escenario de fallo

Bob recibe una intención por Nostr y la misma intención lógica por otro adaptador. Si cada llegada produce una acción económica nueva, se pueden duplicar efectos. El diseño exige identidad estable de intención, política explícita de repetición, transiciones idempotentes y resolución persistente de conflictos, independientemente de la ruta.

## Decisión de arquitectura

Los transportes sustituibles reducen dependencia y permiten distintos despliegues. El coste es ampliar pruebas de reconexión, vinculación de identidad, privacidad y entrega. Un adaptador no elimina diferencias: las hace explícitas.

## Evidencia y madurez

Este artículo describe una propuesta conceptual, **no** demuestra soporte de Pear, Iroh o Nostr en un nodo Sails publicado. Hay que verificar contratos en código, topología, persistencia y decisiones del CTO.

## Siguiente pregunta

Cuando el evento llega al nodo, ¿qué evidencia puede justificar una transición de pago? Consulte OpenProof y OpenSettlement.

## Upstream references to audit

- https://docs.pears.com/p2p/
- https://docs.iroh.computer/
- https://github.com/nostr-protocol/nips/blob/master/01.md
- Sails Node implementation source and approved transport contract: **pending**.
