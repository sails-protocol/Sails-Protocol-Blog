# Entender la arquitectura de Sails

*Borrador editorial. Publicación no aprobada.*

## Un protocolo no es una aplicación

Esta distinción importa cuando queremos que distintos productos compartan reglas de coordinación sin compartir interfaz, modelo de negocio ni control sobre los fondos de los usuarios. Sails Protocol define el modelo de coordinación. Sails Core es el núcleo semántico puro, donde reside el significado de las transiciones. Sails Node implementa el protocolo y ofrece capacidades de ejecución. Los SDK ponen flujos específicos a disposición de los desarrolladores. Las aplicaciones deciden cómo interactúan las personas con ellos.

## ¿Por qué separar las capas?

Imaginemos una billetera que quiere ofrecer operaciones P2P y un marketplace web que necesita salas privadas. Ambos pueden requerir reglas para el ciclo de una operación, autorización y gestión de evidencias, pero sus interfaces y canales de distribución son distintos. Si esas reglas viven dentro de una sola aplicación, la otra tendrá que reconstruirlas. Cuando se definen de forma independiente, cada integración puede centrarse en su experiencia sin perder una referencia común de las reglas económicas.

## Qué representa el primer SDK

Sails P2P Trading SDK es el primer módulo en el que nos concentramos. Eso no significa que todos los módulos previstos ya estén disponibles. Sails Market es una aplicación web de referencia planificada para consumir capacidades del protocolo y servicios externos; Satsails Wallet es una integración de billetera independiente. Ninguna de las dos es el protocolo. También exploramos módulos de identidad, reputación, pruebas y liquidación, pero debemos explicar por separado la madurez de cada uno.

## Arquitectura como división de responsabilidades

Un diagrama ordenado ayuda, pero no demuestra que el sistema funcione. Las preguntas importantes son prácticas: ¿quién puede cambiar el estado de una operación?, ¿qué operación de base de datos tiene autoridad?, ¿qué sobrevive a una caída?, ¿qué nunca debe repetirse? Utilizamos estas preguntas para comprobar que la separación de capas sea real y no solamente visual. En los próximos artículos exploraremos las respuestas, incluso cuando todavía falten evidencias.

*Revisión técnica y factual pendiente. No publicar sin aprobación explícita.*
