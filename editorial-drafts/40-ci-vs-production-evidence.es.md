# De CI a producción: lo que no demuestra una prueba aprobada

*Season 6 / Temporada 6. Solo borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

Una pipeline verde indica que ciertas pruebas pasaron en una revisión concreta. No demuestra comportamiento del proveedor, correspondencia con el despliegue ni liquidación de un pago real.

## Límites y decisiones

Mantenga cadena de evidencia: requisito, invariante, commit, entorno, resultado, artefacto y observación operativa. Distinga pruebas simuladas de validación real de base de datos y proveedor.

## Fallo y verificación

La publicación debe declarar alcance y puntos ciegos. Una prueba aprobada demuestra esa prueba, no seguridad universal ni preparación para producción.

*No verified implementation claim or permission to publish is implied by this draft.*

## Qué demuestran realmente los registros de evidencia

Recovery/Reconciliation Conformance distingue pruebas reutilizadas y recuperación limitada a MULTISIG de automatización entre redes aún no demostrada. Durable Protocol Truth es expresamente una investigación y documenta brechas de verificabilidad independiente, no aprobación de una propiedad en producción. Un resultado de CI, una investigación, una prueba de conformidad y un recibo real del proveedor responden a preguntas distintas; ninguno sustituye a los demás.

**Regla de revisión:** cada afirmación requiere commit exacto, entorno, red, inyección de fallo, resultado y pendientes. Si hubo mocks, indique qué propiedades dependían de ellos; si la investigación encontró una brecha, consérvela en la declaración de madurez.

### Evidence ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md

*Historical evidence record and source inspection; latest deployment, CTO review and publication remain unverified.*
