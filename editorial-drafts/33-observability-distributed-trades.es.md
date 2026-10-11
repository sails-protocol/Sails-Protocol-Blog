# Observabilidad, semántica de errores y depuración de operaciones distribuidas

*Solo borrador. Publicación no aprobada. Season 5, article 33.*

## Pregunta

Cuando una operación parece bloqueada, un panel que solo muestra error no basta. Necesitamos saber qué transición se intentó, quién estaba autorizado, qué persistió y si respondió un proveedor externo.

## Límite y diseño

Identificadores de correlación, errores estructurados, registros persistentes de eventos y métricas delimitadas pueden permitir diagnosticar un flujo distribuido. Pero la observabilidad no debe filtrar semillas, credenciales de pago, evidencias sensibles ni datos personales innecesarios.

## Fallo y evidencia

Un ejercicio eficaz sigue una operación por cliente, SDK, nodo, base de datos y proveedor, identificando el último estado confirmado y las incógnitas. Hasta inspeccionar los esquemas de eventos y la instrumentación real, estos son criterios de diseño, no afirmaciones sobre telemetría desplegada.

*Verificación de fuentes y referencias exactas de API pendientes.*

## Evidencia de fuente y límite de fallo

Las trazas operativas no son prueba independiente del vínculo entre resultado y destino. El siguiente gate requiere verificación operativa del HEAD exacto; esta fuente no autoriza lanzamiento.

- [DURABLE_PROTOCOL_TRUTH_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md)
