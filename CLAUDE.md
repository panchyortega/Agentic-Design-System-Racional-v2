# Racional Design System — AI Instructions

## Contexto del proyecto

Design system agentic para Racional, una fintech chilena de inversiones.
Stack: React 18 + TypeScript (strict) + CSS Modules + CVA + W3C Design Tokens.

El sistema es dark-first — los componentes están diseñados principalmente para superficies oscuras.

## Estructura del monorepo

```
libs/tokens/          # Fuente de verdad de tokens (W3C format + Style Dictionary)
libs/ui-react/        # Componentes React
  src/components/     # Un directorio por componente (Atomic Design)
    atoms/
    molecules/
    organisms/
apps/docs/            # Documentación (Astro)
docs/                 # Planning y arquitectura
```

## Estructura de cada componente

```
ComponentName/
├── ComponentName.tsx          # Implementación React
├── ComponentName.metadata.ts  # Metadata queryable por IA
├── ComponentName.module.css   # Estilos usando design tokens
├── ComponentName.test.tsx     # Unit tests
├── ComponentName.docs.md      # Documentación humana
└── index.ts                   # Public exports
```

## Reglas que se cargan automáticamente por contexto

### Cuando trabajas en componentes (`libs/ui-react/src/components/**`)
- `.claude/rules/components/atomic-design.md` — jerarquía y selección
- `.claude/rules/components/composition.md` — prefer editing over creating
- `.claude/rules/components/metadata-system.md` — cómo leer y escribir metadata

### Cuando trabajas con el codebase index (`.ai/**`)
- `.claude/rules/codebase-index/query-optimization.md` — no re-leer archivos
- `.claude/rules/codebase-index/deep-tracing.md` — trazar hasta nodos terminales
- `.claude/rules/codebase-index/token-saving.md` — optimización de tokens

### Cuando trabajas con tokens (`libs/tokens/**`)
- `.claude/rules/tokens/governance.md` — reglas de uso de tokens

## Skills disponibles

- `/ai-component-metadata` — genera metadata estructurada para un componente
- `/ai-ds-composer` — selección inteligente de componentes existentes
- `/codebase-index` — regenera el mapa de relaciones del codebase

## Principios no negociables

1. **Ningún componente hardcodea valores** — todo usa tokens de `libs/tokens/`
2. **Prefer editing over creating** — antes de crear un componente nuevo, buscar si existe algo similar
3. **Metadata es obligatoria** — todo componente tiene `.metadata.ts` desde el primer día
4. **Los tokens son la cadena de decisión** — usar siempre la referencia semántica, no el primitivo directo
