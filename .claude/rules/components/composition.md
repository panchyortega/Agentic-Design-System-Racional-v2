---
paths:
  - "libs/ui-react/src/components/**"
---

# Composición — Prefer Editing Over Creating

## Antes de crear un componente nuevo

1. Buscar en el codebase index si existe algo similar
2. Verificar si el componente existente puede extenderse con nuevas props o variantes
3. Evaluar si puede componerse de componentes existentes

## Crear uno nuevo SOLO cuando

- No existe ningún componente similar en el index
- El componente existente tiene una responsabilidad fundamentalmente distinta
- La composición resultaría demasiado compleja de mantener

## Ejemplo — Preferir editar

```tsx
// ✗ No crear PrimaryButton, SecondaryButton, TertiaryButton...
// ✓ Agregar variant prop a Button:
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'outlined-stocks' | 'outlined-brand';
```

## Para selección inteligente de componentes

Usar el skill `/ai-ds-composer` — lee la metadata del proyecto, aplica los criterios de selección de `aiHints`, verifica anti-patrones automáticamente, y flagea cuando genuinamente se necesita algo nuevo.
