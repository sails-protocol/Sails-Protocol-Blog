# OpenSettlement: coordinar distintos medios de pago

*Borrador editorial. Temporada 4. Publicación no aprobada.*

## La pregunta

¿Puede un mismo flujo liquidar Bitcoin multisig, un pago Lightning retenido y un token EVM con idénticas reglas de finalidad? No. Cada red tiene autoridad externa y ventanas de fallo distintas.

## Decisión y límite

El registro inspeccionado incluye rutas MULTISIG, LIGHTNING_HODL, WDK_USDT_EVM y SAFE_GUARD_EVM. Su madurez no es equivalente: la ruta WDK_USDT_EVM con custodia en el servidor no es apta para producción, y SAFE_GUARD_EVM necesita evidencia en vivo con RPC financiado y bundler. La evidencia registrada de recuperación y conciliación cubre escenarios MULTISIG específicos, no todas las redes. La coordinación OpenSettlement debe mantener estas diferencias y no reducirlas a un único estado Liquidado.

## Fallo y evidencia

Un proveedor agota el tiempo después de transmitir una operación. Repetir el efecto económico sin conciliar puede duplicarlo; suponer un fallo puede bloquear la operación. La evidencia de recuperación solo cubre la red probada. Una garantía entre redes exige recibos independientes, pruebas de reinicio del HEAD exacto y verificación del vínculo con el destino.

## Siguiente pregunta

¿Qué red demuestra finalidad, recuperación y vínculo con el destino ante un fallo real del proveedor?

## Flujo conceptual

```mermaid
flowchart LR
 A["Intención de diseño"] --> B["Integración delimitada"]
 B --> C["Verificación independiente"]
```

Equivalente textual: la propuesta pasa de la intención de diseño a una integración delimitada y luego a la verificación independiente. No es un informe de implementación.

*Pendiente: verificación en fuentes técnicas, citas específicas, revisión editorial y aprobación del responsable.*

## Escenario de fallo: un timeout no equivale a reversión

Un coordinador transmite una liberación en una red y pierde la respuesta del proveedor. Otro worker observa un timeout y repite el efecto económico antes de reconciliar la transacción original. Puede producirse una liberación duplicada o un resultado local contradictorio si la autorización y las observaciones del proveedor no se vinculan a la misma intención duradera. Las reglas de confirmación de multisig Bitcoin no se pueden trasladar automáticamente a Lightning hold o a un contrato EVM.

**Decisión arquitectónica:** un indicador genérico de liquidación es sencillo, pero borra finalidad, recuperación y autoridad específicas de cada red. Los estados explícitos del proveedor y la reconciliación añaden complejidad, pero conservan la incertidumbre.

**Siguiente prueba:** inyectar un timeout tras la transmisión, reiniciar dos workers y repetir la solicitud de liberación. Exigir una sola transición autorizada, vinculación al destino y resultado del proveedor observado de manera independiente para la red probada. El registro y la conformidad histórica limitada a MULTISIG no prueban seguridad entre redes ni aptitud para producción de WDK_USDT_EVM o SAFE_GUARD_EVM.

## Límite examinado en el código

El registro enumera redes con distinta autoridad y madurez; no todas son aptas para producción. Un límite documentado no es prueba de ejecución del HEAD actual; hay que probar el fallo contra estado duradero antes de afirmar madurez.

- [escrow-providers.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
