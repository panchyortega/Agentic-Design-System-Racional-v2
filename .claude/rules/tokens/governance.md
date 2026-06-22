---
paths:
  - "libs/ui-react/src/**"
  - "libs/tokens/**"
---

# Governance de Tokens — Reglas de Uso

## Regla fundamental

Ningún componente hardcodea valores de color, espaciado, tipografía o border-radius.
Todo referencia tokens de `libs/tokens/`.

## Cadena de referencia correcta

```
Componente → Token semántico → Token primitivo
```

Siempre usar el token semántico, nunca el primitivo directamente en componentes:

```css
/* ✓ Correcto */
color: var(--content-primary);
background: var(--background-stocks);

/* ✗ Incorrecto — bypasea la capa semántica */
color: var(--color-gray-black);
background: var(--color-violet-500);

/* ✗ Incorrecto — hardcodeado */
color: #000000;
background: #7E4DFF;
```

## Severidades de violación

| Nivel | Qué detecta | Acción |
|-------|-------------|--------|
| **Critical** | Hex hardcodeados, tokens que no existen | Must fix |
| **Warning** | Token primitivo usado donde corresponde semántico, jerarquía de foreground incorrecta | Should fix |
| **Info** | Elevation disproportionate, background layer mismatch | Nice to fix |

## Jerarquía de content (foreground)

```
content-primary    → texto principal, body copy
content-secondary  → texto secundario
content-tertiary   → texto terciario
content-placeholder → placeholders de inputs
content-disabled   → elementos deshabilitados
```

Usar `content-placeholder` en body copy es una violación de jerarquía — Warning.

## Sistema dark-first

El design system de Racional es dark-first.
`--btn-primary-bg` es blanco porque va sobre fondos oscuros — no es un error.
Al construir componentes, verificar que se ven correctos en `[data-theme="dark"]` primero.
