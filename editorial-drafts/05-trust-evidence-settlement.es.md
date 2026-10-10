# Confianza, evidencias y liquidación en los mercados P2P

*Borrador editorial. Publicación no aprobada.*

## Un comprobante no cuenta toda la historia

Un comprador envía un comprobante de pago. ¿Demuestra que el vendedor recibió el dinero? No necesariamente. Puede ser auténtico, pero corresponder a otra operación. Puede estar incompleto. El pago puede seguir pendiente. Las evidencias ayudan a participantes y revisores a analizar una disputa, pero no representan automáticamente la verdad de un sistema externo de pagos.

## Identidad, procedencia y límites

Antes de preguntar si una evidencia es convincente, el sistema necesita saber quién la presentó, a qué operación o prueba pertenece y qué límites se aplican. Hemos estado definiendo límites explícitos de recursos para gestionar evidencias y tratando su procedencia autenticada como parte del modelo. Esto ayuda a evitar abusos y costos inesperados, además de conservar un historial útil para auditoría.

## La liquidación exige un modelo de autoridad

Una operación puede incluir una transferencia on-chain, una billetera, un proveedor de pagos o una transferencia bancaria. Estos sistemas no comparten las mismas reglas de finalidad. Por eso la capa de coordinación debe distinguir entre un evento observado y una transición económica autorizada. Estamos trabajando en las condiciones para estados finales, reintentos y recuperación tras fallos, incluida la prevención de efectos duplicados. Nada de esto significa que el protocolo controle fondos externos o pueda revertir pagos.

## Por qué insistimos en probar los fallos

Las afirmaciones más importantes sobre un flujo financiero deben resistir preguntas incómodas. ¿Qué pasa si dos solicitudes de finalización llegan al mismo tiempo? ¿Si el servicio se reinicia entre registrar una acción y aplicar su efecto? ¿Si un proveedor deja de estar disponible? Utilizamos estos escenarios en las revisiones para exigir evidencias en lugar de confiar en diagramas optimistas. Cuando un escenario sigue sin resolverse, también debe quedar claro en nuestra comunicación pública.

*Revisión técnica y factual pendiente. No publicar sin aprobación explícita.*
