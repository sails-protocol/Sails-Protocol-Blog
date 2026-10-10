# Recuperación tras fallos y el significado de exactly-once

*Borrador editorial. Publicación no aprobada.*

## La pregunta

El momento más difícil de un flujo distribuido puede ser el que nadie ve: un proceso se detiene después de hacer algo importante, pero antes de informar que tuvo éxito.

## Qué puede salir mal

Imaginemos que un servicio registra la finalización de una operación, aplica un efecto y pierde energía. Al reiniciar debe decidir si continúa, reintenta o devuelve el resultado anterior. Una recuperación descuidada puede perder una acción o aplicarla dos veces. La expresión exactly-once suena tranquilizadora, pero oculta una pregunta importante: ¿exactamente una vez dentro de qué límite del sistema?

## Dónde debe existir la garantía

Una transacción de base de datos puede hacer atómicos cambios relacionados en el estado local. No incorpora automáticamente a un banco, una blockchain o un proveedor externo a la misma transacción. Los efectos externos necesitan su propio modelo de conciliación, idempotencia y fallos. No debemos confundir atomicidad local con finalidad universal de extremo a extremo.

## Cómo abordamos el problema

En Sails, los escenarios de caída y recuperación forman parte de las evidencias de ingeniería que buscamos para las transiciones económicas. Queremos pruebas que detengan un proceso en puntos importantes, lo reinicien con estado duradero y comprueben que los invariantes siguen siendo válidos. Una afirmación sobre exactly-once debe identificar la operación, el límite de persistencia y la evidencia que la respalda.

## Leer a continuación

En el próximo artículo pasaremos del comportamiento de los procesos a las personas y los permisos: saber quién es alguien no significa saber qué puede hacer.

*Fuentes pendientes: enlazar commits inmutables, decisiones del CTO y pruebas antes de publicar.*
