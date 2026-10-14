# Modelado de amenazas de un protocolo económico P2P

*Temporada 6. Borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

Comprador, vendedor, operador y proveedor pueden actuar de forma distinta al flujo ideal. El modelado comienza identificando quién puede mentir, desaparecer o perder acceso.

## Decisión: identificar al atacante y el punto de control

Una amenaza no está mitigada solo porque figure en el catálogo. Cada escenario requiere identificar atacante, activo en riesgo, límite de confianza, código que aplica la protección e incertidumbre residual. En WebSocket, un límite HTTP no controla automáticamente los mensajes tras el upgrade. El modelo de amenazas registra un limitador por participante como mejora de instancia única, no garantía distribuida. También documenta el riesgo de un token de sesión con privilegios amplios en la URL. Son límites distintos y requieren pruebas distintas.

## Fallo: seguridad que solo existe en el diagrama

Si varias conexiones o nodos pueden eludir un contador local, la afirmación sobre límites debe precisar ese alcance. Si una URL de sesión llega a registros, un token válido puede filtrarse pese a las firmas correctas en otros flujos. El documento recoge hallazgos históricos; comprobar su estado en el HEAD actual exige otra revisión.

## Catálogo de amenazas frente a mitigación demostrada

El catálogo de Sails incluye ataques Sybil, liquidez falsa y exposición de credenciales, pero advierte que una mitigación documentada solo existe cuando hay evidencia de implementación y despliegue. También registra un límite de WebSocket: tokens de sesión con privilegios amplios en la URL pueden filtrarse a registros o historial; un token corto y restringido al handshake es una decisión de diseño, no una corrección desplegada en ese registro.

**Fallo:** una URL WebSocket registrada expone una credencial reutilizable. Tratarlo como riesgo documentado y exigir evidencia de corrección en el HEAD actual antes de afirmar credenciales acotadas.

**Precisión del estado de las fuentes:** el registro de amenazas marca la ausencia original de límite en `SEND_MESSAGE` como **resuelta el 15/08/2026** mediante un contador de ventana fija por participante, local al proceso (valor predeterminado documentado de 20 mensajes/10 segundos). Eso no demuestra control entre instancias. La exposición de un token de sesión completo en la URL WebSocket es un riesgo residual distinto; el token corto y limitado al WS sigue siendo una propuesta en ese registro. Ninguna observación verifica por sí sola la configuración actualmente desplegada.

## Siguiente pregunta

¿Qué evidencias del commit exacto muestran si las credenciales WebSocket tienen alcance restringido y si los límites de mensajes se mantienen entre procesos y reconexiones, sin confundir una propuesta arquitectónica con un control desplegado?

### Fuente y madurez de la evidencia

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md

*Solo registro histórico de evidencias e inspección de fuentes; sin pruebas del HEAD actual ni aprobación para publicar.*

*Este borrador no acredita una implementación verificada ni autoriza su publicación.*
