---
paths:
  - "libs/ui-react/src/components/**"
---

# Sistema de Metadata — Cómo Leer y Escribir

## Estructura del archivo .metadata.ts

Todo componente tiene un `.metadata.ts` co-ubicado. Tiene dos partes:

### Header (para descubrimiento rápido)
```ts
export const ComponentMetadata = {
  component: {
    name: "",
    category: "", // atoms | molecules | organisms
    description: "",
    type: "",     // interactive | display | container | input
    path: ""
  },
  // ...
}
```
Leer el header primero para saber si el componente es relevante. Si no aplica, no leer el resto.

### Body (intención y uso)
Las secciones críticas para decisiones de la IA, en orden de importancia:

1. `usage.antiPatterns` — qué NO hacer (scenario + reason + alternative)
2. `aiHints.selectionCriteria` — cuándo usar cada variante exactamente
3. `variants.purpose` — para qué sirve cada variante
4. `usage.useCases` — cuándo usar el componente
5. `behavior.states` — estados y comportamiento

## Al generar metadata

Usar el skill `/ai-component-metadata`.

Cada antiPattern DEBE tener:
- `scenario` — qué situación concreta
- `reason` — por qué está mal
- `alternative` — qué hacer en cambio

Los ejemplos deben ser snippets copy-pasteable, no descripciones.

## Prioridad

La metadata es obligatoria desde el primer commit de un componente.
Sin metadata, el codebase index no puede razonar correctamente sobre el componente.
