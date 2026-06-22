---
paths:
  - ".ai/**"
---

# Query Optimization — Cómo Leer el Codebase Index

## Reglas obligatorias

**1. Check context first**
Antes de leer cualquier archivo, verificar si el dato ya existe de tool calls anteriores en esta conversación. No re-leer lo que ya está en contexto.

**2. Never re-read relationship files**
Si `component-usage.toon` fue cargado en esta sesión, usar esos datos.
No volver a leerlo aunque hayan pasado varios turnos.

**3. Follow-up questions must be cheap**
Las preguntas de seguimiento deben razonar sobre datos en caché.
No disparar nuevas lecturas de archivos para Q3, Q4, Q5...

## Por qué importa

Sin estas reglas: el costo de preguntas de seguimiento varía de 0 a 36.000 tokens.
Con estas reglas: 0.04% de varianza — comportamiento completamente determinístico.

## Cómo cargar el index

Al inicio de una sesión que requiera análisis del codebase:
1. Leer `.ai/relationships/component-usage.toon`
2. Leer `.ai/relationships/data-flow.toon`
3. Usar esos datos para todas las preguntas siguientes
