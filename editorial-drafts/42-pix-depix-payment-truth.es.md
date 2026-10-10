# PIX y DePix: el comprobante no es la verdad del pago

*Season 7 / Temporada 7. Borrador editorial. Fuentes y revisión del CTO pendientes.*

## Pregunta

Un comprador sube un comprobante mientras el vendedor aún no recibe los fondos. El documento puede ser legítimo, falso, duplicado o corresponder a otra transferencia.

## Límite y decisión

Separe la afirmación del participante, la procedencia de la evidencia, la observación autenticada del proveedor y la transición autorizada de la operación. PIX es un medio de pago brasileño; DePix implica otro activo y contexto de liquidación. No suponga reglas idénticas de reversibilidad, plazos o verificación.

## Fallo y evidencia

Un atacante reutiliza un comprobante anterior en otra operación. El sistema no puede equiparar una imagen plausible con valor liquidado. Verifique identificadores del proveedor, monto, moneda, destinatario, vigencia y política de finalidad en el límite de autoridad adecuado.

*No production implementation or publication approval is asserted.*

## La evidencia no es la verdad del pago

La ruta OpenProof inspeccionada verifica quién firmó un archivo y si esa persona puede adjuntarlo a una Claim; no valida la liquidación de PIX o DePix. Un comprobante, archivo firmado o hash de almacenamiento puede ser auténtico y, aun así, engañoso económicamente. Toda afirmación de pago confirmado, irreversible o liquidado exige autoridad externa identificada, conciliación de identificadores y reglas aplicables de confirmación y reversión.

**Fallo:** se adjunta un comprobante PIX aparentemente legítimo, pero el pago externo no existe o se revierte. El protocolo debe conservar la procedencia de la evidencia sin tratarla como confirmación de pago. **Gate abierto:** inspeccionar los adaptadores PIX/DePix y sus callbacks autoritativos antes de afirmar conciliación automática.

### Source ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/proof.service.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/evidence-provider.ts

*Source-inspected; external payment verification, live tests, CTO review and publication pending.*
