---
slug: season-2-02-software-is-not-custody
title: "El software no es custodia"
description: "La prueba arquitectónica no se limita a decir que el protocolo no toca los saldos."
tags: [protocol, editorial]
draft: false
---

## La respuesta arquitectónica

La prueba arquitectónica no se limita a decir que el protocolo no toca los saldos. Debemos identificar quién puede iniciar o redirigir transferencias, conservar claves, decidir la ejecución, elegir contrapartes, cobrar tarifas, resolver disputas y operar cada nodo. Sails debe documentar esas facultades por integración. Proveer software puede ser muy distinto de operar un servicio financiero regulado, pero las funciones reales y la jurisdicción determinan la clasificación.

<!-- truncate -->

## Un árbol de decisiones, no un eslogan

La primera pregunta es si la entidad solo publica código o también opera un servicio. Después viene la autoridad: ¿puede redirigir fondos, aprobar transferencias sin el usuario o decidir qué órdenes se ejecutan? Luego, el producto: compraventa al contado, transmisión de dinero y derivados no son categorías intercambiables. Por último, hay que examinar la jurisdicción y el operador efectivo. El proveedor de software, el desarrollador de billeteras, el operador del mercado y el proveedor de liquidación pueden tener obligaciones distintas aunque utilicen el mismo SDK abierto. El análisis jurídico debe describir a cada actor, no asignar una sola etiqueta a todo el ecosistema.

## Otro regulador, una pregunta más delimitada

Una posición condicional del personal de la CFTC de 2026 sobre determinadas actividades de la billetera Phantom muestra por qué las conclusiones regulatorias dependen del operador, del producto y de las condiciones concretas. No crea una exención universal para el software sin custodia. La transmisión de dinero bajo FinCEN, las funciones de mercado bajo CFTC y las obligaciones estatales son cuestiones diferentes. El diseño de Sails no puede utilizar la posición de otro operador como prueba de su propia situación jurídica.

## Siga la autoridad, no la etiqueta

Un producto puede llamarse no custodial mientras su operador conserva una clave de recuperación, puede redirigir transacciones o controla discrecionalmente la liquidación. A la inversa, un usuario puede autorizar una transferencia mediante una interfaz que nunca recibe sus activos. La auditoría debe identificar quién firma, quién puede detener una operación, quién cambia su destino, quién cobra comisiones y qué ocurre cuando falla la infraestructura. Estas respuestas importan más que el nombre del SDK.

Para Sails, la afirmación editorial debe ser precisa: la arquitectura busca coordinar operaciones P2P sin custodiar saldos. Determinar si una implementación concreta cumple esa promesa requiere pruebas técnicas y análisis jurídico.

## Tres productos que parecen iguales en pantalla

Imaginemos tres aplicaciones con el mismo botón de envío. En la primera, el usuario firma localmente una transacción cuyo destino puede comprobar. En la segunda, un servidor recibe instrucciones, elige la ruta y mueve activos bajo su autoridad. En la tercera, un mercado nunca conserva fondos de clientes, pero opera infraestructura que determina qué operaciones pueden completarse. La interfaz puede parecer idéntica. La distribución del poder económico y la responsabilidad jurídica no lo es.

La posesión de claves privadas importa, pero no agota el análisis. También cuentan los privilegios administrativos, los mecanismos de recuperación, la capacidad de actualizar contratos, la sustitución de destinatarios y los proveedores externos. Un SDK sin custodia puede integrarse en una aplicación que presta servicios regulados por separado.

## Convertir una afirmación arquitectónica en evidencia

Una revisión rigurosa documentaría cada flujo: quién inicia, quién firma, quién recibe, quién fija comisiones, quién puede cancelar, qué entidad presta el servicio y qué ocurre ante un fallo. Los caminos excepcionales son decisivos. Si una disputa, una caída o una actualización concede control unilateral al operador, la descripción debe reflejarlo.

Para Sails, un mapa de autoridad por integración debería ser tan importante como el código. La propuesta no consiste en cambiar el nombre de la intermediación financiera. Consiste en hacer verificables los límites del poder de cada participante.

## Fuentes y límites de verificación

*Estas fuentes aportan contexto regulatorio, no una auditoría del despliegue de Sails ni asesoramiento jurídico. Las afirmaciones sobre cierres empresariales, motivaciones de Tether o disponibilidad en producción requieren pruebas específicas.*

### Documento primario de contexto jurídico

- [FinCEN FIN-2014-R002](https://www.fincen.gov/resources/statutes-regulations/administrative-rulings/application-fincens-regulations-virtual)

La orientación de FinCEN sobre software es una referencia jurídica limitada, no una decisión sobre operadores o integraciones de Sails.

- [Posición condicional del personal de la CFTC sobre Phantom (2026)](https://www.cftc.gov/PressRoom/PressReleases/9197-26)
