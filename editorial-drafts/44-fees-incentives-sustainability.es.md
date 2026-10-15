# Comisiones, incentivos y sostenibilidad económica

*Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

## Pregunta

Un protocolo de operaciones necesita que operadores y participantes mantengan incentivos sin convertir las comisiones en control oculto de fondos.

## Límite y decisión

Separe política de comisiones del protocolo, costos de red, cargos de proveedores, reembolsos y ingresos de la aplicación. Un porcentaje solo tiene sentido con denominación, pagador, redondeo, momento del cobro y reglas para cancelaciones y disputas.

## Fallo y evidencia

Un reintento no debe cobrar dos veces la misma comisión. Las invariantes requieren evidencia persistente y política económica actual aprobada por el CTO. Este texto no afirma una tasa vigente en producción.

*No se afirma implementación en producción ni aprobación de publicación.*

## Límite comprobado en el código: las comisiones dependen de la red

El registro de proveedores separa explícitamente la capacidad de liquidación de la capacidad de cobro de comisiones del protocolo. El conjunto `FEE_COLLECTION_CAPABLE_RAILS` contiene únicamente `MULTISIG` en el código inspeccionado. Es un límite de activación, no prueba de que las otras redes cobren la misma comisión.

Antes de describir una comisión universal, verifique versión de política, denominación, redondeo, beneficiario, construcción de la transacción, reintentos, disputas y autorización de despliegue. Una política publicada no implica cobro efectivo en una red no apta.

### Fuente primaria y revisión

- [Provider registry, custody metadata, default asset routing and fee capability](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
- [WDK custody](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [SAFE_GUARD_EVM verification limits](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/safe-guard-evm.provider.ts)

*Corrección editorial basada en fuentes; aprobación del CTO, verificación del despliegue y publicación en producción pendientes.*
