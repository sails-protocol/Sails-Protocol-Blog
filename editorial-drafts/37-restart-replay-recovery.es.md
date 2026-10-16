# Reinicio, repetición y recuperación: guía de verificación

*Temporada 6. Borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

El servidor confirma una transición y cae antes de responder. El cliente reintenta. ¿La primera solicitud falló, tuvo éxito o produjo dos efectos?

## Límites y decisiones

Una prueba útil termina el proceso en puntos definidos cerca de la confirmación, efectos externos y respuesta. La recuperación debe derivar el resultado autorizado del estado persistente, no de la memoria del cliente. Repetir la misma solicitud no debe crear otra acción económica.

## Fallo y verificación

Un PASS solo con mocks es insuficiente. Documente base de datos, commit exacto, concurrencia, punto de interrupción y poscondiciones persistentes. La guía es propuesta hasta enlazar esas ejecuciones.

## Evidencia de conformidad: la recuperación no es uniforme

El registro de Recovery/Reconciliation Conformance informa que la automatización M9 (incluidos C4, C8, C13–14, C18 y barridos de reorganización) se limita a MULTISIG. Documenta expresamente la falta de recuperación automática equivalente para LIGHTNING_HODL, WDK_USDT_EVM y SAFE_GUARD_EVM como pendiente, no como capacidad resuelta. La decisión abierta es qué redes deben mantenerse y qué obligaciones de recuperación tendrá cada una.

**Fallo:** el proceso cae durante una liberación fuera de MULTISIG. Un método funcional del proveedor no demuestra recuperación duradera tras reinicio. La afirmación editorial debe identificar la red y el alcance de la evidencia.

**Límite adicional:** detectar una divergencia entre el estado registrado y el resultado externo no significa poder reconstruir o completar una operación interrumpida. La verificación de correspondencia y la recuperación tras un fallo son obligaciones distintas que requieren evidencias propias para cada red.

### Registro de evidencias

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md

*Registro histórico de evidencias e inspección del código. Despliegue actual, revisión del CTO y publicación aún sin verificar.*

*Este borrador no acredita una implementación verificada ni autoriza su publicación.*
