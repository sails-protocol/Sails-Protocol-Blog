# Reinicio, repetición y recuperación: guía de verificación

*Season 6 / Temporada 6. Solo borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

El servidor confirma una transición y cae antes de responder. El cliente reintenta. ¿La primera solicitud falló, tuvo éxito o produjo dos efectos?

## Límites y decisiones

Una prueba útil termina el proceso en puntos definidos cerca de la confirmación, efectos externos y respuesta. La recuperación debe derivar el resultado autorizado del estado persistente, no de la memoria del cliente. Repetir la misma solicitud no debe crear otra acción económica.

## Fallo y verificación

Un PASS solo con mocks es insuficiente. Documente base de datos, commit exacto, concurrencia, punto de interrupción y poscondiciones persistentes. La guía es propuesta hasta enlazar esas ejecuciones.

*No verified implementation claim or permission to publish is implied by this draft.*
