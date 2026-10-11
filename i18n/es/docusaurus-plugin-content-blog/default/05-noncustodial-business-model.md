---
slug: season-2-05-noncustodial-business-model
title: "El modelo de negocio no custodial"
description: "Durante años, muchos modelos de negocio de billeteras dependieron de la custodia, los diferenciales de precio o el acceso privilegiado al flujo de órdenes."
tags: [protocol, editorial]
draft: false
---

## El cambio

Durante años, muchos modelos de negocio de billeteras dependieron de la custodia, los diferenciales de precio o el acceso privilegiado al flujo de órdenes. Una billetera también puede aportar valor al ayudar a encontrar contrapartes, entender condiciones, presentar pruebas y completar operaciones autorizadas. Las tarifas de software, coordinación y referencias son posibles, pero su estructura y la actividad real del operador influyen en la clasificación jurídica.

<!-- truncate -->

## La respuesta arquitectónica

Sails busca hacer visibles los límites comerciales y de seguridad: los usuarios conservan la autoridad de firma; las aplicaciones informan los cargos; los proveedores responden por su ejecución; y un estado de coordinación no se presenta falsamente como prueba de liquidación. Es una dirección de diseño que necesita evidencia de implementación, no una afirmación de que cualquier tarifa o integración esté fuera de la regulación.

## Un fallo que debemos probar

Una comisión oculta o una promesa de ejecución que la aplicación no controla puede crear conflictos de intereses.

## Ingresos sin custodiar saldos

Una interfaz no custodial puede cobrar por software útil, descubrimiento avanzado, flujos verificables o referencias transparentes. Estos ingresos no exigen mantener activos de clientes, pero pueden crear conflictos: un incentivo oculto distorsiona clasificaciones y un mercado supuestamente neutral puede favorecer a un proveedor. La transparencia de incentivos es un requisito de producto.

El modelo de Sails Market debe separar comisiones de protocolo, tarifas de interfaz, incentivos de proveedores y costes de red. Ninguna categoría determina por sí sola el régimen regulatorio. Importa la conducta efectiva, sobre todo quién controla la ejecución, mantiene valor o intermedia instrumentos regulados.

## Los ingresos deben ser comprensibles

Una comisión por operación completada, un incentivo de integración y una suscripción de herramientas profesionales son negocios distintos. Cada uno requiere transparencia sobre incentivos y sobre lo que controla el operador. Los ingresos sostenibles sin custodia no deberían depender de rutas ocultas ni de asumir el control de fondos ante excepciones.

## El problema de los incentivos

Un negocio que nunca custodia los saldos de sus clientes conserva incentivos que merecen atención. Puede ganar más cuando una orden llega a determinado proveedor, cuando una ruta añade pasos o cuando el usuario elige un producto afiliado. Nada de eso es automáticamente abusivo. El riesgo aparece cuando el usuario no puede ver el incentivo, comparar alternativas o verificar que la ejecución respetó las reglas anunciadas. Un modelo sostenible debe indicar quién paga cada comisión, cuándo se devenga, cómo afectan las devoluciones y disputas y si el operador puede cambiar condiciones después de iniciada la operación.

Imaginemos una billetera que muestra la cotización de un proveedor externo de swap. Si recibe un incentivo, el usuario debería saber si está incluido en el precio y si se consideraron otras rutas. Pensemos también en un mercado P2P que cobra por coordinación completada. El sistema debe distinguir un resultado económico confirmado de una notificación optimista; de otro modo, podría cobrar operaciones fallidas o sin resolver. Son preguntas comerciales y técnicas. En Sails, la contabilidad de comisiones y la autoridad sobre resultados duraderos necesitan evidencia propia antes de presentarse como funcionalidades entregadas.

## Una prueba práctica de transparencia de ingresos

Antes de confirmar una operación, el usuario debería poder responder cuatro preguntas: quién cobra la tarifa, qué acontecimiento la hace exigible, quién recibe una comisión de referencia y qué parte puede impugnarla o revertirla. Una tarifa porcentual sobre una operación no equivale necesariamente al costo de red, al margen del proveedor ni al incentivo de afiliación. Agrupar todos esos conceptos dificulta la comparación, incluso si la aplicación no custodia fondos.

Imaginemos un comercio que compara dos rutas para recibir stablecoins. La ruta A muestra una tarifa menor, pero paga una comisión mayor a la interfaz; la ruta B tiene un costo inicial más visible, aunque entrega un importe neto superior. Un producto útil debería comparar el resultado final del usuario y revelar los incentivos relevantes. Tampoco debería presentar una cotización como garantía de liquidación. El modelo resulta más defendible cuando la interfaz explica su remuneración sin depender exclusivamente de las declaraciones del proveedor y cuando una operación inconclusa no genera silenciosamente una tarifa por éxito. Es un estándar de producto propuesto, no una capacidad demostrada del Sails Market actual.

## Límite de la evidencia

Este es un modelo de incentivos propuesto. Las comisiones reales, las contrapartes y el control de fondos requieren verificación por integración.
