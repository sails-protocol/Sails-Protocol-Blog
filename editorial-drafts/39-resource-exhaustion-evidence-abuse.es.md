# Agotamiento de recursos, límites de tasa y abuso de evidencias

*Season 6 / Temporada 6. Solo borrador editorial. Auditoría de fuentes y aprobación pendientes.*

## Pregunta

Un JSON aparentemente pequeño puede causar análisis, hashing o almacenamiento costosos. Un participante malicioso puede explotar la diferencia entre solicitudes aceptadas y trabajo acotado.

## Límites y decisiones

Limite tamaño, profundidad, complejidad, cuotas acumuladas e intentos en el límite del servicio antes del trabajo costoso. Atribuya uso a actores autenticados e identificadores persistentes de prueba, no solo a contadores de proceso.

## Fallo y verificación

Las pruebas de límite deben mostrar aceptación en el valor exacto, rechazo una unidad por encima y cero efectos tras el rechazo. Los valores deben comprobarse con decisiones e implementación actuales antes de publicar.

*No verified implementation claim or permission to publish is implied by this draft.*
