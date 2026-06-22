---
paths:
  - ".ai/**"
---

# Deep Dependency Tracing

Al trazar átomos o cualquier componente de nivel hoja, seguir las cadenas de dependencia hasta los nodos terminales.

## Algoritmo

```
Para cada componente en la lista de imports:
  1. Leer su campo uses[] en component-usage.toon
  2. Si uses[] no está vacío → recursear en cada dependencia
  3. Si uses[0] → nodo terminal, detenerse aquí
  4. Filtrar resultados por categoría si es necesario
```

## Ejemplo

```
✗ Wrong: Stopping at First Level
  CopyButton uses[1]: Tooltip
  ← Si te detienes acá, reportas Tooltip como "no usado"

✓ Correct: Tracing to Leaf Nodes
  CopyButton uses[1]: Tooltip
    → Tooltip uses[0]: ← Nodo terminal — ENCONTRADO y EN USO
```

## Por qué importa

Sin deep tracing, componentes activos aparecen como "no usados".
Actuar sobre ese reporte puede romper funcionalidad en producción.

## Slot components

Al contar instancias, NO recursear dentro de componentes que solo contienen `<slot />` o su equivalente en React (`{children}`).
El contenido sloteado ya fue contado en el componente padre — contarlo de nuevo genera phantom instances.
