# Modelado de amenazas de un protocolo económico P2P

*Season 6 / Temporada 6. Solo borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

Comprador, vendedor, operador y proveedor pueden actuar de forma distinta al flujo ideal. El modelado comienza identificando quién puede mentir, desaparecer o perder acceso.

## Límites y decisiones

Separe fondos, claves de firma, afirmaciones de pago, evidencias y estado de la operación como activos con autoridades distintas. Evalúe identidad falsa, comprobantes falsificados, solicitudes duplicadas, nodos maliciosos y proveedores caídos. Una mitigación solo sirve cuando su límite de aplicación es explícito.

## Fallo y verificación

Esto es un marco de modelado, no una auditoría terminada. Antes de publicar garantías, vincule cada amenaza con código exacto, pruebas adversariales, riesgo residual y revisión técnica fechada.

*No verified implementation claim or permission to publish is implied by this draft.*

## Catálogo de amenazas frente a mitigación demostrada

El catálogo de Sails incluye ataques Sybil, liquidez falsa y exposición de credenciales, pero advierte que una mitigación documentada solo existe cuando hay evidencia de implementación y despliegue. También registra un límite de WebSocket: tokens de sesión con privilegios amplios en la URL pueden filtrarse a registros o historial; un token corto y restringido al handshake es una decisión de diseño, no una corrección desplegada en ese registro.

**Fallo:** una URL WebSocket registrada expone una credencial reutilizable. Tratarlo como riesgo documentado y exigir evidencia de corrección en el HEAD actual antes de afirmar credenciales acotadas.

### Source and maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md

*Historical evidence/source inspection only; no latest-head test or publication approval.*
