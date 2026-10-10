# Evidencias, procedencia y límites de recursos

*Borrador editorial. Publicación no aprobada.*

## La pregunta

Una captura de pantalla puede ayudar a explicar una disputa, pero antes el sistema debe responder preguntas más básicas: quién la subió, a qué prueba pertenece, cuánto ocupa y si puede ingresar al flujo.

## El dilema detrás

Sin límites, las evidencias se convierten en una superficie de ataque. Un atacante puede enviar archivos demasiado grandes, demasiadas referencias o datos muy anidados para consumir recursos antes de cualquier revisión humana. Los límites deben aplicarse antes del procesamiento costoso, no solo describirse en una API.

## Nuestra dirección

En el trabajo con OpenProof definimos políticas para evidencias inline y referencias almacenadas por proveedores, incluida la procedencia autenticada y las cuotas acumuladas. Una decisión de política no equivale a una aplicación completa en todas las rutas y proveedores. Publicaremos valores exactos solo con versión, alcance y estado de implementación verificado.

## Qué necesitamos verificar

Una evidencia tampoco se convierte en verdad por decreto. Una carga válida demuestra que un actor autorizado presentó datos dentro de ciertos límites. Determinar si esos datos prueban un pago, un acuerdo o una conducta indebida sigue siendo una cuestión distinta para el proceso de verificación y disputa.

## Diagrama conceptual

```mermaid
flowchart TD
  A[Autor autenticado] --> B{Datos dentro de límites?}
  B -->|No| C[Rechazar antes de procesar]
  B -->|Sí| D[Asociar evidencia con prueba]
  D --> E[Evaluar evidencia por separado]
```

Este diagrama ilustra un principio de diseño, no un comportamiento de ejecución verificado.

*Referencias técnicas y aprobación pendientes.*
