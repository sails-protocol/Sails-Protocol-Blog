# Satsails Wallet y Sails Market: dos aplicaciones, un protocolo

*Season 7 / Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

## Pregunta

Una billetera y un mercado web pueden mostrar la misma oferta con interfaces y entornos de firma distintos. No deben inventar realidades económicas contradictorias.

## Límite y decisión

Sails Protocol define contratos de coordinación; el Trading SDK es una superficie de integración; Satsails Wallet y Sails Market son aplicaciones. Market no debe exigir liquidez propia aislada ni asumir custodia solo para mostrar una operación.

## Fallo y evidencia

Si dos aplicaciones muestran estados distintos tras reconectar, la autoridad económica debe ser explícita y la reconciliación comprobable. Es un objetivo arquitectónico, no prueba de interoperabilidad desplegada.

*Este texto no afirma una implementación en producción ni autorización para publicar.*

## Límite de evidencia

La semántica económica compartida requiere pruebas entre clientes, no solo un nombre de protocolo. **Fallo:** confundir intención documentada con comportamiento verificado en producción. Faltan evidencia del HEAD exacto y aprobación.

- [PROTOCOL_INVARIANTS.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
