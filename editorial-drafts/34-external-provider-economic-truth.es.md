# Integrar proveedores externos sin delegar la verdad económica

*Solo borrador. Publicación no aprobada. Temporada 5, artículo 34.*

## Pregunta

Un webhook del proveedor informa pago completado. ¿Debe la operación liberar inmediatamente el activo? No sin preguntar qué autentica el webhook, qué transacción identifica y si el pago es final según las reglas de ese medio.

## Límite y diseño

Un adaptador traduce observaciones externas a un contrato delimitado. Debe validar procedencia, manejar duplicados y desorden, preservar incertidumbres y rechazar autoridad que el proveedor no puede demostrar. El estado económico del protocolo debe seguir sus propias reglas verificadas de transición.

## Fallo y evidencia

Una suite de pruebas debe inyectar webhooks falsificados, estados antiguos, confirmaciones contradictorias y caídas del proveedor. El resultado esperado es rechazo seguro o un estado explícitamente pendiente, nunca una liquidación inventada. Las garantías específicas de cada proveedor requieren evidencia documentada.

## Decisión: una observación acotada no es autoridad de liquidación

El `bounded-rpc.ts` inspeccionado distingue peticiones HTTP propias, acotadas con AbortController, de llamadas JSON-RPC de ethers con timeout nativo. El reintento es opt-in: una transmisión con efectos económicos no debe repetirse automáticamente solo porque expiró la respuesta. El envío pudo haberse realizado, dejando un resultado **UNKNOWN**. El adaptador debe reconciliar recibos verificables y autoridad duradera, sin inventar éxito ni fallo.

## Fallo: timeout después del envío

La transacción llega al proveedor, pero se pierde la respuesta. Reintentar ingenuamente puede repetir el efecto; declarar fracaso puede ignorar un efecto real. Ambos son inseguros sin deduplicación o reconciliación específica de la red. La evidencia de sustitución respalda semánticas seleccionadas, no equivalencia universal.

## Evidencia y siguiente pregunta

- [RPC acotado y reglas de reintento](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/bounded-rpc.ts)
- [Evidencia de sustitución de proveedores](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md)

*Solo inspección de fuente.* ¿Qué redes tienen prueba de reconciliación tras timeout en el HEAD exacto?
