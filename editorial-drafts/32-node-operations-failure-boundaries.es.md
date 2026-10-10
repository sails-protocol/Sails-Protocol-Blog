# Operar un nodo Sails: responsabilidades y límites de fallo

*Solo borrador. Publicación no aprobada. Season 5, article 32.*

## Pregunta

Un nodo que se reinicia a mitad de una operación no puede depender de lo que estaba en memoria. Sus responsabilidades deben recuperarse desde estado persistente y observaciones externas verificadas.

## Límite y diseño

Una implementación de nodo puede aplicar autorización, validez de transiciones, resistencia a repetición y efectos persistentes. Los operadores también deben gestionar secretos, base de datos, copias de seguridad, migraciones, monitoreo e incidentes. Nada de eso convierte al nodo en custodio de la billetera del usuario por defecto.

## Fallo y evidencia

Un ejercicio de reinicio debe interrumpir la operación entre la confirmación persistente y la respuesta al cliente, y luego comprobar que repetirla no duplica efectos económicos. Los requisitos de despliegue y la topología admitida deben verificarse antes de convertir esto en un manual operativo.

*Verificación de fuentes y referencias exactas de API pendientes.*
