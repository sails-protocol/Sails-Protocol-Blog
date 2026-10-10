# Satsails Wallet y Sails Market: dos aplicaciones, un protocolo

*Season 7 / Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

## Pregunta

Una billetera y un mercado web pueden mostrar la misma oferta con interfaces y entornos de firma distintos. No deben inventar realidades económicas contradictorias.

## Límite y decisión

Sails Protocol define contratos de coordinación; el Trading SDK es una superficie de integración; Satsails Wallet y Sails Market son aplicaciones. Market no debe exigir liquidez propia aislada ni asumir custodia solo para mostrar una operación.

## Fallo y evidencia

Si dos aplicaciones muestran estados distintos tras reconectar, la autoridad económica debe ser explícita y la reconciliación comprobable. Es un objetivo arquitectónico, no prueba de interoperabilidad desplegada.

*No production implementation or publication approval is asserted.*
