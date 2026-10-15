# OpenAgents: coordinación económica para agentes de IA

*Editorial draft / rascunho editorial / borrador editorial. Season 4. Not approved for publication.*

## La pregunta

¿Puede un agente de IA negociar sin convertirse en dueño independiente de los fondos?

## Decisión y límite

El RFC trata a los agentes como delegados, no como principales económicos independientes. OpenAgents necesita alcance, revocación, límites y autoridad responsable; la salida del modelo no autoriza liquidación.

## Fallo y evidencia

Un agente puede proponer una operación tras vencer su mandato. El nodo debe rechazarla antes de efectos económicos; probar autorización en la revisión exacta. No se afirma un agente autónomo desplegado.

## Flujo conceptual

```mermaid
flowchart LR
 A[Design intent] --> B[Bounded integration]
 B --> C[Independent verification]
```

Equivalente textual: la intención de diseño pasa a una integración delimitada y a verificación independiente. No demuestra un despliegue.

*Pendientes: verificación de fuentes, referencias específicas, revisión editorial y aprobación de la persona responsable.*

## Límite examinado en el código

Un agente delegado no adquiere autoridad económica independiente. Un límite documentado no es prueba de ejecución del HEAD actual; hay que probar el fallo contra estado duradero antes de afirmar madurez.

- [RFC-001-participant-model.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md)
