---
paths:
  - "libs/ui-react/src/components/**"
---

# Atomic Design — Jerarquía y Selección de Componentes

## Niveles

| Nivel | Dónde | Descripción |
|-------|-------|-------------|
| Atom | `components/atoms/` | Unidad mínima. No depende de otros componentes del DS. Ej: Button, Icon, Tag |
| Molecule | `components/molecules/` | Combinación de átomos. Ej: InputField (Label + Input + ErrorText) |
| Organism | `components/organisms/` | Secciones complejas. Combinación de moléculas y átomos |

## Lógica de selección

Al construir UI, seguir este orden:
1. Buscar en el codebase index si existe un componente que resuelva la necesidad
2. Si existe — usarlo. Si necesita una variante nueva — extenderlo con props
3. Si no existe — buscar si puede componerse de existentes
4. Solo si ninguna opción aplica — crear uno nuevo

## Reglas de dependencia

- Los átomos NO pueden importar moléculas ni organismos
- Las moléculas pueden importar átomos
- Los organismos pueden importar moléculas y átomos
- Ningún componente importa directamente desde otro componente del mismo nivel sin justificación

## Identificar átomos en el codebase index

Los componentes con `uses[0]` son nodos terminales — átomos.
Al trazar dependencias, detenerse en `uses[0]`.
