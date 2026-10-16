# Adaptadores y límites de la billetera: WDK, BDK y firma externa

*Solo borrador. Publicación no aprobada. Season 5, article 30.*

## Pregunta

Una billetera puede mostrar la misma operación que otra aplicación sin compartir claves privadas. La pregunta relevante es qué componente puede solicitar una transacción y cuál puede autorizar la firma.

## Límite y diseño

WDK y BDK representan superficies distintas de integración y no deben tratarse como motores intercambiables de derivación, descubrimiento o firma. Un adaptador Sails debe describir redes admitidas, custodia de claves, derivación de direcciones, autoridad de firma y recuperación. Un SDK que coordina una operación no debe obtener acceso silencioso a la semilla.

## Fallo y evidencia

Un fallo realista es que un adaptador devuelva una dirección de una ruta de derivación inesperada o que una aplicación firme una transacción fuera del contexto autorizado. La compatibilidad exige vectores de prueba y comprobaciones reales de recuperación, no suposiciones por marca.

*Verificación de fuentes y referencias exactas de API pendientes.*

## Prueba de fallo: firma correcta para la operación equivocada

Un adaptador muestra una dirección aparentemente válida, pero pertenece a otra red o ruta de derivación. El usuario firma una transacción cuyo destino difiere del autorizado para la operación. Una firma válida demuestra consentimiento sobre los bytes, no que la aplicación representó correctamente la obligación económica. La recuperación también falla si una semilla importada genera direcciones distintas de las de la billetera original.

**Alternativa:** acoplar el producto a una billetera simplifica el soporte, pero reduce portabilidad; los adaptadores abstractos permiten elegir, aunque requieren contratos explícitos de red, derivación, firma y recuperación. Ninguna opción autoriza acceso implícito del SDK a la semilla.

**Siguiente prueba:** comparar vectores deterministas de derivación, rechazar destinos de otra red, alterar la salida propuesta tras la confirmación del usuario y restaurar en otra billetera. Registrar versiones y comportamiento real de firma. El registro de proveedores citado no demuestra compatibilidad WDK/BDK ni aislamiento de semillas en producción.

## Límite examinado en el código

El enrutamiento de proveedores no demuestra aislamiento de semillas ni compatibilidad de derivación. Un límite documentado no es prueba de ejecución del HEAD actual; hay que probar el fallo contra estado duradero antes de afirmar madurez.

- [escrow-providers.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
