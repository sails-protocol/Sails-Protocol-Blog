# Máquinas de estados e invariantes económicos en la práctica

*Solo borrador. Publicación no aprobada. Season 5, article 29.*

## Pregunta

Una máquina de estados es útil porque una acción económica debe tener un significado preciso. Una operación no puede quedar simultáneamente completada y disputada por solicitudes concurrentes contradictorias.

## Límite y diseño

Modele las transiciones permitidas por separado de los efectos externos. Un participante autenticado solicita una transición, una autoridad persistente verifica precondiciones y solo se confirma un resultado válido. Las respuestas del proveedor y los reintentos del cliente son entradas, no pruebas automáticas de autorización.

## Fallo y evidencia

El diagrama representa una invariante ilustrativa, no la máquina de estados canónica de producción. El siguiente paso es comparar cada transición con definiciones del código y pruebas adversariales en un commit inmutable.

*Verificación de fuentes y referencias exactas de API pendientes.*
