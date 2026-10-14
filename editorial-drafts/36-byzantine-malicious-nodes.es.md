# Nodos bizantinos y maliciosos: qué debemos asumir

*Temporada 6. Borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

Un nodo puede estar en línea y ser deshonesto. Comprobar disponibilidad no demuestra que sus estados, firmas u observaciones externas sean correctos.

## Límites y decisiones

Distinga participante malicioso, operador comprometido y nodos en colusión. Pregunte qué transiciones pueden verificarse independientemente, qué hechos dependen de proveedores y dónde el protocolo debe fallar de forma segura. Varios nodos no demuestran por sí solos tolerancia bizantina.

## Fallo y verificación

Este tema pertenece a la preparación adversarial. Toda afirmación de resiliencia bizantina exige modelo de fallos, topología de prueba y evidencias más allá de diagramas.

## La verificabilidad independiente sigue pendiente

La investigación Durable Protocol Truth identifica una propiedad material ausente: un verificador independiente todavía no puede demostrar toda la relación Authority firmada → Outcome → DestinationBinding sin confiar en asociaciones mantenidas por el operador. El informe sitúa la mayor brecha entre Outcome y DestinationBinding, incluso en MULTISIG, y registra ausencia de exportación de hechos por participantes. Es una brecha de diseño y evidencia, no prueba de un ataque explotado.

**Pregunta adversarial:** si un operador modifica la asociación en su base o retiene evidencias, ¿qué artefacto exportable y vinculado criptográficamente permite a otro nodo verificar el destino autorizado? La evidencia no justifica afirmar resistencia bizantina universal.

### Registro de evidencias

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md

*Registro histórico de evidencias e inspección del código. Despliegue actual, revisión del CTO y publicación aún sin verificar.*

*Este borrador no acredita una implementación verificada ni autoriza su publicación.*
