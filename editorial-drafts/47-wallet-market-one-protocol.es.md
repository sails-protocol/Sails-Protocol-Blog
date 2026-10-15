# Satsails Wallet y Sails Market: dos aplicaciones, un protocolo

*Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

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

## Prueba de fallo: dos interfaces, autoridades contradictorias

Una billetera muestra una operación pendiente mientras el mercado web indica completada tras recibir un evento fuera de orden. La persona intenta liberar los fondos de nuevo desde la billetera. Compartir el nombre del protocolo no demuestra estado duradero común, misma clave de idempotencia ni permisos de firma equivalentes.

**Alternativa:** cada aplicación puede ofrecer su propia experiencia, pero las transiciones económicas deben permanecer vinculadas a la misma autoridad de nodo verificada. Un backend compartido simplifica reconciliación y crea dependencia operativa; varios nodos exigen pruebas más fuertes de verificabilidad independiente y resolución de conflictos.

**Vector de reconciliación:** registrar identificador canónico, decisión de autoridad, resultado persistente y referencia de liquidación externa de una operación. Entregar los mismos eventos a billetera y mercado en órdenes distintas, incluida una finalización duplicada tras reconectar. Comparar las interfaces con una instantánea autoritativa consultada de nuevo e intentar una segunda liberación. El resultado exigido es convergencia **sin un segundo efecto económico**; compartir SDK no lo demuestra. La prueba sigue propuesta, no ejecutada.

**Siguiente prueba:** abrir la misma operación en billetera y mercado, desconectar un cliente, entregar eventos duplicados y desordenados y reconectar. Verificar resultado autoritativo idéntico y ausencia de segunda liberación. Es un escenario de aceptación de interoperabilidad, no prueba de que ambas aplicaciones ya interoperan.

