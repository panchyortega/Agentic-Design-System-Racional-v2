# Button

Botón interactivo para acciones del usuario. Componente base del sistema — casi toda interacción en Racional pasa por alguna variante de Button.

## Variantes

| Variante | Cuándo usar |
|----------|-------------|
| `primary` | La acción principal de la pantalla. Una sola por sección. Dark-first: fondo blanco sobre superficies oscuras. |
| `secondary` | Acción alternativa o complementaria. Siempre oscuro, funciona en cualquier superficie. |
| `tertiary` | Acciones de menor peso visual. Fondo gris oscuro. |
| `outlined` | Acciones mínimas, cancelaciones, contextos con mucho peso visual. |

## Tamaños

| Size | px | Cuándo usar |
|------|-----|-------------|
| `xsmall` | 12px | Tablas, chips, badges con acción |
| `small` | 14px | Tarjetas, listas |
| `medium` | 16px | Estándar — la mayoría de los casos |
| `large` | 18px | Heroes, modales de confirmación, onboarding |

## Íconos

El Button acepta `iconLeft` y `iconRight` como `React.ReactNode`.

- **iconLeft** → refuerza la naturaleza de la acción (+ Agregar, ✓ Confirmar)
- **iconRight** → indica dirección o continuidad (Ver más →, Siguiente →)

No usar ambos simultáneamente sin justificación clara.

## Estados

- **default** → base interactivo
- **hover** → feedback visual sutil
- **pressed** → feedback táctil
- **disabled** → `disabled` prop. No interactivo, texto atenuado
- **loading** → `isLoading` prop. Reemplaza todo el contenido con un spinner. El botón queda deshabilitado automáticamente.

## Ejemplos

```tsx
// CTA principal
<Button variant="primary" label="Invertir ahora" />

// Con ícono izquierda
<Button variant="primary" label="Agregar" iconLeft={<PlusIcon />} />

// Con ícono derecha
<Button variant="secondary" label="Ver detalle" iconRight={<ArrowRightIcon />} />

// Loading
<Button variant="primary" label="Confirmar" isLoading={true} />

// Disabled
<Button variant="outlined" label="Cancelar" disabled={true} />

// Tamaño small dentro de una tarjeta
<Button variant="tertiary" size="small" label="Ver más" />
```

## Qué no hacer

- ❌ Múltiples `primary` en la misma sección → confunde la jerarquía
- ❌ Label muy largo (+5 palabras) → usar verbos cortos y directos
- ❌ Usar Button para navegación pura → usar Link
- ❌ Hardcodear colores o tamaños → todo viene de tokens

## Tokens usados

`--btn-primary-bg`, `--btn-primary-text`, `--btn-secondary-bg`, `--btn-secondary-text`, `--btn-terciary-bg`, `--btn-terciary-text`, `--btn-outlined-bg`, `--btn-outlined-border`, `--btn-outlined-text`, `--btn-disabled-text`, `--btn-disabled-border`, `--border-focus`, `--font-family-base`, `--font-weight-medium`, `--border-radius-full`, `--space-*`, `--font-size-*`
