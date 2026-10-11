# OpenLiquidity: conectar mercados P2P fragmentados

*Borrador editorial. Temporada 4. Publicación no aprobada.*

## La pregunta

¿Mostrar ofertas de varios mercados significa liquidez compartida? No.

## Decisión y límite

OpenLiquidity es una dirección de coordinación. Descubrimiento y enrutamiento deben respetar activo, red, precio, disponibilidad y permisos. La evidencia de sustitución cubre invariantes seleccionadas, no un libro operativo entre mercados.

## Fallo y evidencia

Una oferta visible puede ser inaccesible por permisos o medio de pago. No anunciar profundidad ejecutable solo por visibilidad; hacen falta contrapartes reales y pruebas entre clientes.

## Flujo conceptual

```mermaid
flowchart LR
 A["Intención de diseño"] --> B["Integración delimitada"]
 B --> C["Verificación independiente"]
```

Equivalente textual: la propuesta pasa de la intención de diseño a una integración delimitada y luego a la verificación independiente. No es un informe de implementación.

*Pendiente: verificación en fuentes técnicas, citas específicas, revisión editorial y aprobación del responsable.*

## Alcance respaldado por fuente

Propiedades seleccionadas de sustitución no prueban liquidez compartida entre redes. **Fallo:** tratar diseño o API inspeccionada como preparación universal de producción. Faltan pruebas del HEAD exacto y aprobación.

- [PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md)
