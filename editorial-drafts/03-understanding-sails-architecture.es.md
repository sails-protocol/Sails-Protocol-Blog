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

## Límite de evidencia: arquitectura e implementación

El documento de invariantes distingue principios arquitectónicos, obligaciones de implementación y evidencia ejecutable. Aquí importa: nombrar Sails Core y Sails Node define responsabilidades previstas, pero no demuestra que un nodo independiente ejecute todos los módulos. El repositorio inspeccionado contiene un servicio concreto de operaciones OpenP2P y un cliente SDK. Son puntos de implementación más acotados, no prueba automática de interoperabilidad entre Satsails Wallet, Sails Market y aplicaciones de terceros. Las afirmaciones públicas sobre despliegue y compatibilidad requieren contratos versionados, pruebas y evidencia operativa.

**Fallo a evitar:** alguien interpreta un diagrama de cinco capas como prueba de que todas pueden desplegarse por separado y están verificadas en producción. El diagrama distribuye responsabilidades; no es una matriz de lanzamientos.

### Fuentes y límites

- [Invariantes del protocolo](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
- [Servicio de operaciones](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Cliente OpenP2P del SDK](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)

*Código inspeccionado en revisión fijada; no implica aprobación del CTO ni verificación de producción.*


*Revisión técnica y factual pendiente. No publicar sin aprobación explícita.*
