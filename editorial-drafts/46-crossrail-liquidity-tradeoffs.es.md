# Liquidación entre redes y decisiones de enrutamiento de liquidez

*Season 7 / Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

## Pregunta

El comprador posee un activo en una red y el vendedor quiere recibir valor en otra. El enrutamiento puede conectar ambos, pero introduce fallos y costos distintos.

## Límite y decisión

Separe cotización, ejecución de swap, custodia de puentes o proveedores, política de confirmaciones y liquidación final. Sails puede coordinar flujos sin poseer liquidez, pero las garantías de rutas externas no deben atribuirse al protocolo.

## Fallo y evidencia

Un proveedor confirma la cotización, pero falla antes del swap. La recuperación debe conservar el último estado confirmado y mostrar el riesgo residual. No publique una matriz de redes admitidas sin verificar los adaptadores.

*No production implementation or publication approval is asserted.*
