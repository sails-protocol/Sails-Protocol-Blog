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

## Escenario de fallo: un agente supera un mandato revocado

Una persona delega en un agente la facultad de proponer operaciones por debajo de un límite. El agente prepara una propuesta, pero la persona revoca el mandato antes de enviarla. Un mensaje retrasado llega después de la revocación y solicita liberar escrow, o cambia el destino conservando una firma válida. La salida del modelo y la posesión de una clave no sustituyen la autorización vigente del participante.

**Alternativa:** los permisos permanentes amplios reducen pasos, pero concentran riesgo económico. Mandatos delimitados, expiración, confirmación explícita y comprobación de revocación exigen más pasos y permiten verificar la responsabilidad. El principal sigue siendo el actor económico.

**Siguiente prueba:** hacer competir revocación y envío, superar un límite delegado, repetir una solicitud firmada y cambiar su destino. Comprobar rechazo en el HEAD exacto antes de cambios duraderos de estado o efectos económicos externos. El RFC de participantes documenta roles, no demuestra un agente autónomo de negociación desplegado.

## Límite examinado en el código

Un agente delegado no adquiere autoridad económica independiente. Un límite documentado no es prueba de ejecución del HEAD actual; hay que probar el fallo contra estado duradero antes de afirmar madurez.

- [RFC-001-participant-model.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md)
