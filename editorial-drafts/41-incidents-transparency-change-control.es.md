# Revisión de incidentes, transparencia y control de cambios

*Temporada 6. Solo borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

Una caída no es solo una estadística de disponibilidad. Cambia lo que los usuarios pueden suponer sobre depósitos, retiros y liquidación externa.

## Límites y decisiones

Una revisión debe separar síntomas observados, causa confirmada, flujos afectados, mitigación, riesgos abiertos y hitos de recuperación. Un protocolo integrado a redes externas debe distinguir sus acciones de las del operador o la red.

## Fallo y verificación

No use la narrativa de un incidente como prueba de seguridad. Cite informes primarios y evidencias de mitigación; publique correcciones cuando cambie la comprensión.

*No se afirma que exista una implementación verificada ni autorización de publicación.*

## Límite de evidencia

Riesgo documentado no es incidente explotado ni corrección desplegada. **Fallo:** confundir intención documentada con comportamiento verificado en producción. Faltan evidencia del HEAD exacto y aprobación.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)

## Escenario: recuperación parcial anunciada como recuperación total

Tras un incidente en una red externa, el operador restablece depósitos, pero mantiene suspendida una vía de retiro o peg-out. Un aviso dice únicamente "red restablecida". El usuario puede suponer que todas las rutas son seguras, aunque solo se haya verificado una parte. El fallo de comunicación es distinto del fallo técnico.

**Alternativa:** un estado único y breve es fácil de distribuir, pero oculta riesgos específicos por operación. Una matriz de estado por flujo exige más mantenimiento y distingue recuperación observada, restricciones e incertidumbres. La comunicación pública no debe revelar secretos ni causas no confirmadas.

**Siguiente prueba:** crear una cronología simulada de incidente con recuperación parcial, informes contradictorios del proveedor y una corrección posterior. Exigir que cada actualización identifique operaciones afectadas, hora de evidencia, riesgos pendientes, responsable y siguiente verificación. Comparar el comunicado con el estado verificado de cada flujo. Es un ejercicio editorial, no una afirmación sobre un incidente actual.
