# OpenIdentity: los nombres no son autorización

*Editorial deep-draft. Not approved for publication. Season 4 / Article 21 companion revision. Do not promote over the original article before review.*

## La pregunta

Alice quiere operar con Bob. Encuentra un nombre conocido, una clave pública y un mensaje firmado. ¿Cuál demuestra que Bob puede autorizar una acción económica concreta?

Un nombre ayuda a encontrar a alguien. Una clave pública permite verificar una firma. Ninguno demuestra por sí solo que su titular controla una cuenta, participa en esa operación o puede liberar un escrow.

## La identidad tiene capas

El límite propuesto de OpenIdentity separa cinco pasos:

1. **Identificador:** nombre, clave o referencia presentada.
2. **Resolución:** vínculo actual entre nombre y clave, con origen y vigencia definidos.
3. **Prueba de posesión:** desafío firmado con nonce, destinatario, acción y caducidad.
4. **Vínculo de participante:** asociación explícita y persistente entre clave verificada y participante o cuenta Sails.
5. **Autorización:** decisión independiente sobre quién puede ejecutar una transición en esa operación.

Confundir estos pasos permite que una firma válida autorice al actor equivocado, la operación equivocada o una acción tras la revocación.

## Dónde encajan las tecnologías

**Pubky** explora identidad basada en claves públicas y publicación portátil de datos. Su descubrimiento puede ayudar a encontrar perfiles, pero no autoriza operaciones.

**Nostr** utiliza eventos firmados y relays. El relay entrega mensajes; no verifica su verdad económica. El autor de un evento no es automáticamente quien puede liberar activos.

**Spaces Protocol** ofrece nombres anclados en Bitcoin. Un nombre legible facilita el descubrimiento, pero OpenIdentity debe definir resolución confiable, vínculo de identidad y política de cambio de claves.

Son **posibles integraciones**, no afirmaciones de que todas funcionen actualmente en Sails.

## Fallo: la identidad cambia durante la operación

Bob abre una operación cuando la aplicación de Alice resuelve su nombre a la clave K1. Después, el nombre apunta a K2. Un atacante reenvía por un relay una confirmación antigua firmada con K1.

El diseño debe decidir si la operación permanece vinculada a K1, pasa a K2 o exige una rotación autorizada. También debe impedir repeticiones y comprobar autorización en cada transición. Ni el nombre ni el transporte toman esa decisión.

## Decisión y evidencia

La identidad portátil permite compartir contexto entre billeteras y mercados. A cambio, exige resolver correlación de identidades, recuperación y rotación de claves. No debemos prometer anonimato ni interoperabilidad sin verificar código y pruebas.

**Madurez:** propuesta arquitectónica conceptual. Auditoría de fuentes pendiente. No se afirma que Pubky, Nostr o Spaces estén integrados en producción.

## Siguiente pregunta

Tras verificar quién firmó, ¿cómo gestionamos entrega, orden y mensajes repetidos? Corresponde al transporte del nodo Sails, no a OpenIdentity.

## Primary references to verify

- https://spacesprotocol.org/
- https://pubky.org/
- https://github.com/nostr-protocol/nips/blob/master/01.md
- Sails Protocol exact source commit and identity policy: **pending**.
