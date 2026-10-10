# Contratos de protocolo, esquemas y compatibilidad entre versiones

*Solo borrador. Publicación no aprobada. Season 5, article 31.*

## Pregunta

Un cliente y un nodo pueden funcionar correctamente por separado y aun así discrepar sobre el significado de un campo. La discrepancia se vuelve peligrosa cuando el campo afecta monto, activo, identidad o autoridad de liquidación.

## Límite y diseño

Los esquemas son contratos ejecutables solo cuando la validación se aplica en el límite relevante. El versionado debe distinguir metadatos adicionales de cambios en el significado económico. Los campos críticos desconocidos no deben ignorarse silenciosamente y un cliente no puede suponer que un nodo nuevo conserva cualquier contrato económico anterior.

## Fallo y evidencia

Las afirmaciones de compatibilidad requieren pruebas con fixtures entre versiones y políticas de migración precisas. Los nombres de paquetes, versiones de esquemas y matrices de soporte deben comprobarse en el código antes de publicar una tabla.

*Verificación de fuentes y referencias exactas de API pendientes.*
