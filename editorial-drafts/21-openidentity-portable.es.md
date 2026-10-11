# OpenIdentity: identidad sin dependencia de una plataforma

*Borrador editorial. Temporada 4. Publicación no aprobada.*

## La pregunta

La identidad puede demostrar control de una clave, pero ¿quién puede actuar en una operación?

## Decisión y límite

El modelo distingue al participante principal de la billetera o agente delegado. Autenticarse con desafío y respuesta no autoriza operaciones; cada transición debe comprobar participante y rol.

## Fallo y evidencia

Una firma válida del participante equivocado no debe liberar escrow. Probar el alcance delegado y la resistencia a replay en el HEAD exacto antes de afirmar portabilidad.

## Flujo conceptual

```mermaid
flowchart LR
 A["Intención de diseño"] --> B["Integración delimitada"]
 B --> C["Verificación independiente"]
```

Equivalente textual: la propuesta pasa de la intención de diseño a una integración delimitada y luego a la verificación independiente. No es un informe de implementación.

*Pendiente: verificación en fuentes técnicas, citas específicas, revisión editorial y aprobación del responsable.*

## Límite examinado, no certificación de producción

Los agentes delegados no son participantes económicos independientes. **Fallo:** confundir diseño documentado con comportamiento desplegado. Faltan pruebas de integración y ejecución del HEAD exacto.

- [RFC-001-participant-model.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md)
