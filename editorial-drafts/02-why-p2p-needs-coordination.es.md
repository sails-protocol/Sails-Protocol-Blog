# Por qué los mercados P2P necesitan una mejor coordinación

*Borrador editorial. Publicación no aprobada.*

Una operación P2P parece sencilla: alguien quiere comprar, otra persona quiere vender y ambas acuerdan un precio.

Pero el acuerdo es apenas el comienzo.

Imaginemos a un comprador que realizó una transferencia bancaria y a un vendedor que dice no haber recibido el pago. El comprador tiene un comprobante. El vendedor no encuentra el depósito. Ninguno puede saber qué ocurrió del otro lado mirando únicamente su propia pantalla.

Ahí es donde una plataforma ayuda. Ofrece un proceso compartido, define plazos, recibe evidencias, registra el estado de la operación y establece un mecanismo de disputas. Las plataformas P2P consolidadas han conseguido que estos mecanismos funcionen a escala. Resuelven problemas reales, no solo cuestiones de interfaz.

La pregunta interesante surge cuando esos mecanismos solo pueden utilizarse dentro de la plataforma que los ofrece.

Una billetera puede querer incorporar operaciones P2P sin convertirse en un marketplace completo. Otra aplicación puede necesitar grupos privados, distintos medios de pago o su propio modelo de reputación. Una tercera puede querer reutilizar reglas de coordinación sin renunciar a su interfaz. Reconstruir todo en cada producto duplica esfuerzos y, sobre todo, puede producir comportamientos incompatibles cuando algo falla.

Empezamos entonces a pensar en la coordinación como un problema en sí mismo.

Hay cinco preguntas que todo sistema de negociación debe responder. ¿Quién está autorizado a actuar? ¿Cuál es el estado válido de una operación? ¿Quién puede presentar una evidencia? ¿Qué cambia cuando comienza una disputa? ¿Y bajo qué condiciones una acción económica puede considerarse definitiva?

Estas preguntas están relacionadas. Verificar una identidad sirve de poco si luego alguien puede realizar una transición sin autorización. Una evidencia pierde valor si no está claro quién la presentó o qué límites se aplican. Y una operación completada no debería registrarse dos veces solo porque dos solicitudes llegaron al mismo tiempo.

Por eso, nuestro trabajo en Sails Protocol no consiste únicamente en conectar compradores y vendedores. Estamos explorando reglas e interfaces reutilizables para coordinar el ciclo de una operación, incluso cuando hay fallos, reintentos o desacuerdos.

Esto no elimina la necesidad de marketplaces, proveedores de pago, billeteras ni decisiones humanas. Cada aplicación seguirá tomando sus propias decisiones de producto. Los sistemas externos de pago seguirán siendo externos. Un protocolo no vuelve irreversible una transferencia bancaria ni garantiza que una declaración fuera de la blockchain sea verdadera.

El objetivo es más concreto: hacer que la capa de coordinación sea lo bastante explícita como para comprenderla, probarla e integrarla.

El primer lugar donde estamos poniendo a prueba este enfoque es el Sails P2P Trading SDK. Su estado de implementación y su preparación operativa deben evaluarse a partir del código y de evidencias aprobadas, no solo de las ideas de este artículo.

En el próximo texto veremos los componentes de la arquitectura y por qué distinguimos entre protocolo, núcleo semántico, nodos, SDKs y aplicaciones.

## Límite de evidencia y fallo

Autorización y estado duradero son responsabilidades concretas del servicio, no prueba de coordinación entre plataformas. **Fallo:** interpretar arquitectura o código inspeccionado como prueba de producción. Faltan pruebas del HEAD exacto y aprobación.

- [trade.service.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)

*Revisión técnica pendiente. Este artículo explica la motivación del diseño, no garantiza funcionalidades implementadas ni preparación para producción.*
