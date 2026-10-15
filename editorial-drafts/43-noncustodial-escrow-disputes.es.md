# Escrow no custodial y autoridad de disputas

*Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

## Pregunta

El vendedor bloquea un activo y el comprador afirma haber pagado. ¿Quién puede liberar el activo cuando sus versiones entran en conflicto?

## Límite y decisión

Distinga custodia de claves, control del bloqueo, decisión de la disputa y ejecución de la liberación. Una afirmación de no custodia debe describir script, firmas y recuperación reales, no limitarse a decir que la plataforma no guarda la semilla.

## Fallo y evidencia

Una operación disputada alcanza el plazo mientras el árbitro no está disponible. El comportamiento seguro depende de la política concreta de escrow y plazos; un diagrama genérico no prueba recuperabilidad. Verifique redes admitidas y escenarios adversariales en el código.

*No se afirma implementación en producción ni aprobación de publicación.*

## Límite comprobado en el código: la custodia depende del proveedor

El registro distingue MULTISIG Bitcoin (claves de comprador y vendedor en el cliente y clave de árbitro en el servidor), LIGHTNING_HODL mediante Arkade (firmas de clientes, alcance documentado de testnet), SAFE_GUARD_EVM (claves de clientes y árbitro respaldado por KMS, sin prueba end-to-end acreditada con Sepolia financiada y bundler) y WDK_USDT_EVM (semilla única en el servidor, expresamente no apto para producción). La existencia de escrow no prueba custodia independiente ni aptitud para producción.

La aprobación doble en la aplicación no es multisig criptográfico. Evalúe cada escrow según titular de claves, umbral de firmas, red, plazo, configuración y pruebas reales de recuperación.

### Fuente primaria y revisión

- [Provider registry, custody metadata, default asset routing and fee capability](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
- [WDK custody](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [SAFE_GUARD_EVM verification limits](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts)

*Corrección editorial basada en fuentes; aprobación del CTO, verificación del despliegue y publicación en producción pendientes.*
