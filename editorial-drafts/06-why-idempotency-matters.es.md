# Por qué importa la idempotencia en las operaciones P2P

*Borrador editorial. Publicación no aprobada.*

## La pregunta

Una persona pulsa Confirmar y la conexión falla. ¿La solicitud falló o el servidor completó la acción sin devolver la respuesta? Reintentar parece natural. En un flujo financiero, tratar cada intento como una acción nueva puede ser peligroso.

## Qué puede salir mal

La idempotencia significa que repetir la misma operación prevista no produce un efecto económico adicional. No consiste simplemente en ignorar solicitudes parecidas. El sistema debe identificar qué acción se repite, quién está autorizado y qué resultado registrado tiene autoridad.

## Dónde debe existir la garantía

Una clave de API o un identificador de solicitud ayuda, pero no lo resuelve todo. Imaginemos que un servicio registra una operación completada y cae antes de responder. Tras reiniciar, un reintento debe encontrar el resultado anterior y no aplicar la liquidación de nuevo. Eso exige estado duradero y un límite transaccional claro.

## Cómo abordamos el problema

En Sails P2P Trading SDK tratamos los reintentos como una cuestión de corrección económica. Nuestras revisiones incluyen escenarios con base de datos real, solicitudes concurrentes y pruebas de caída y recuperación. Las garantías exactas dependen de la operación, el adaptador y la evidencia aprobada para cada implementación. No llamaremos exactly-once a un flujo solo porque pasó una prueba unitaria.

## Leer a continuación

En el próximo artículo veremos un problema relacionado, pero distinto: ¿qué ocurre cuando dos solicitudes llegan al mismo tiempo, antes de que una pueda observar el resultado de la otra?

*Fuentes pendientes: enlazar commits inmutables, decisiones del CTO y pruebas antes de publicar.*
