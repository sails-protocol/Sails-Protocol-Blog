# Liquidación entre redes y decisiones de enrutamiento de liquidez

*Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

## Pregunta

El comprador posee un activo en una red y el vendedor quiere recibir valor en otra. El enrutamiento puede conectar ambos, pero introduce fallos y costos distintos.

## Límite y decisión

Separe cotización, ejecución de swap, custodia de puentes o proveedores, política de confirmaciones y liquidación final. Sails puede coordinar flujos sin poseer liquidez, pero las garantías de rutas externas no deben atribuirse al protocolo.

## Fallo y evidencia

Un proveedor confirma la cotización, pero falla antes del swap. La recuperación debe conservar el último estado confirmado y mostrar el riesgo residual. No publique una matriz de redes admitidas sin verificar los adaptadores.

*No se afirma implementación en producción ni aprobación de publicación.*

## Límite comprobado en el código: mapear activos no crea un puente

El mapeo predeterminado de escrow inspeccionado es `BTC → MULTISIG`, `LN_BTC → LIGHTNING_HODL` y `USDT_ERC20 → WDK_USDT_EVM`. Son recomendaciones del código, **no** evidencia de aptitud para producción; el proveedor WDK declara expresamente que no es apto. Otros activos carecen de mapeo predeterminado real en este registro.

La construcción de comisiones también está declarada solo para MULTISIG. Varios proveedores no prueban swap atómico entre cadenas, finalidad compartida ni enrutamiento de liquidez desplegado. Verifique por separado puente externo, cotización, custodia y recuperación.

**Límite verificable para la revisión:** elegir un par concreto de activos del comprador y vendedor e identificar cotización, contraparte, transferencia de custodia, evidencia de liquidación en ambas redes y comportamiento tras fallo o reinicio. Si la evidencia solo muestra entradas de `DEFAULT_ESCROW_TYPE_FOR_ASSET`, clasificarla como *asignación de activo a proveedor*, no operación entre redes. Las [líneas 332–347 del registro](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts#L332-L347) solo respaldan la afirmación más limitada.

### Fuente primaria y revisión

- [Provider registry, custody metadata, default asset routing and fee capability](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
- [WDK custody](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [SAFE_GUARD_EVM verification limits](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts)

*Corrección editorial basada en fuentes; aprobación del CTO, verificación del despliegue y publicación en producción pendientes.*