# Integrar proveedores externos sin delegar la verdad económica

*Solo borrador. Publicación no aprobada. Temporada 5, artículo 34.*

## Pregunta

Un webhook del proveedor informa pago completado. ¿Debe la operación liberar inmediatamente el activo? No sin preguntar qué autentica el webhook, qué transacción identifica y si el pago es final según las reglas de ese medio.

## Límite y diseño

Un adaptador traduce observaciones externas a un contrato delimitado. Debe validar procedencia, manejar duplicados y desorden, preservar incertidumbres y rechazar autoridad que el proveedor no puede demostrar. El estado económico del protocolo debe seguir sus propias reglas verificadas de transición.

## Fallo y evidencia

Una suite de pruebas debe inyectar webhooks falsificados, estados antiguos, confirmaciones contradictorias y caídas del proveedor. El resultado esperado es rechazo seguro o un estado explícitamente pendiente, nunca una liquidación inventada. Las garantías específicas de cada proveedor requieren evidencia documentada.

*Verificación de fuentes y referencias exactas de API pendientes.*
