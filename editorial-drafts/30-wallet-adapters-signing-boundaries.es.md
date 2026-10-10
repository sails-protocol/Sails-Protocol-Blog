# Adaptadores y límites de la billetera: WDK, BDK y firma externa

*Solo borrador. Publicación no aprobada. Season 5, article 30.*

## Pregunta

Una billetera puede mostrar la misma operación que otra aplicación sin compartir claves privadas. La pregunta relevante es qué componente puede solicitar una transacción y cuál puede autorizar la firma.

## Límite y diseño

WDK y BDK representan superficies distintas de integración y no deben tratarse como motores intercambiables de derivación, descubrimiento o firma. Un adaptador Sails debe describir redes admitidas, custodia de claves, derivación de direcciones, autoridad de firma y recuperación. Un SDK que coordina una operación no debe obtener acceso silencioso a la semilla.

## Fallo y evidencia

Un fallo realista es que un adaptador devuelva una dirección de una ruta de derivación inesperada o que una aplicación firme una transacción fuera del contexto autorizado. La compatibilidad exige vectores de prueba y comprobaciones reales de recuperación, no suposiciones por marca.

*Verificación de fuentes y referencias exactas de API pendientes.*
