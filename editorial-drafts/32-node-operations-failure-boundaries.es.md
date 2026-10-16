# Operar un nodo Sails: responsabilidades y límites de fallo

*Solo borrador. Publicación no aprobada. Season 5, article 32.*

## Pregunta

Un nodo que se reinicia a mitad de una operación no puede depender de lo que estaba en memoria. Sus responsabilidades deben recuperarse desde estado persistente y observaciones externas verificadas.

## Límite y diseño

Una implementación de nodo puede aplicar autorización, validez de transiciones, resistencia a repetición y efectos persistentes. Los operadores también deben gestionar secretos, base de datos, copias de seguridad, migraciones, monitoreo e incidentes. Nada de eso convierte al nodo en custodio de la billetera del usuario por defecto.

## Fallo y evidencia

Un ejercicio de reinicio debe interrumpir la operación entre la confirmación persistente y la respuesta al cliente, y luego comprobar que repetirla no duplica efectos económicos. Los requisitos de despliegue y la topología admitida deben verificarse antes de convertir esto en un manual operativo.

*Verificación de fuentes y referencias exactas de API pendientes.*

## Prueba de fallo: reinicio entre commit y respuesta

Un nodo confirma una transición en PostgreSQL y se detiene antes de responder. El cliente reconecta y repite la solicitud. Si el nodo depende de indicadores en memoria, puede ejecutarla otra vez; si supone que la primera llamada falló, puede crear un segundo efecto externo. Workers simultáneos y una respuesta retrasada del proveedor aumentan la incertidumbre.

**Alternativa:** la coordinación local al proceso es sencilla, pero no garantiza autoridad duradera entre workers. Las comprobaciones atómicas en la base de datos y la reconciliación específica de cada red añaden complejidad operativa y permiten probar la recuperación. Las copias de seguridad y migraciones deben preservar el significado económico del estado, no solo las filas.

**Siguiente prueba:** detener un worker tras el commit duradero, repetir la operación en otro y reiniciar con una respuesta retrasada del proveedor. Inspeccionar estado, eventos, recibos y efectos duplicados. La evidencia existente de recuperación MULTISIG es limitada y no demuestra preparación operativa entre redes.

## Evidencia de fuente y límite de fallo

La recuperación registrada cubre escenarios MULTISIG específicos, no todas las redes. El siguiente gate requiere verificación operativa del HEAD exacto; esta fuente no autoriza lanzamiento.

- [RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md)
