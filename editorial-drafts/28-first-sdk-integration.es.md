# Primera integración: de instalar el SDK a una operación P2P segura

*Solo borrador. Publicación no aprobada. Season 5, article 28.*

## Pregunta

Una integración no termina cuando el SDK se importa sin errores. Imagine un comprador que confirma un pago, pierde la conexión y vuelve a pulsar el botón. La aplicación no puede convertir ese segundo intento en un segundo efecto económico.

## Límite y diseño

La integración necesita responsabilidades distintas: la interfaz presenta la operación; la identidad autentica al actor; el SDK envía una intención delimitada; el nodo aplica estado y autoridad; la billetera firma solo lo autorizado por el usuario; el medio externo aporta sus propias evidencias de liquidación. Ninguna capa debe atribuirse todas esas funciones.

## Fallo y evidencia

Una primera prueba útil debe repetir la misma intención, hacer competir dos acciones, reiniciar el proceso antes de la confirmación y verificar el resultado persistido. Hasta comprobar firmas de API, adaptadores admitidos y pruebas reproducibles en el repositorio, esto es una guía de diseño de integración, no un tutorial listo para copiar y ejecutar.

*Verificación de fuentes y referencias exactas de API pendientes.*

## Alcance respaldado por fuente

El SDK expone una clave opcional de idempotencia; el cliente debe conservarla entre reintentos. **Fallo:** tratar una API inspeccionada como garantía universal de producción. Faltan pruebas del HEAD exacto y aprobación.

- [openp2p.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
