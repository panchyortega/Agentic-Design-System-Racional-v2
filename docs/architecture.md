# Racional Design System — Arquitectura

## Estructura del monorepo

```
racional-design-system/
├── libs/
│   ├── tokens/       # Design tokens (W3C format + Style Dictionary v4)
│   └── ui-react/     # React component library
├── apps/
│   └── docs/         # Sitio de documentación (Astro 5 + MDX)
└── docs/             # Planning y arquitectura (este directorio)
```

## Stack

| Capa | Tecnología |
|------|-----------|
| Tokens | W3C Design Tokens + Style Dictionary v4 |
| Componentes | React 18 + TypeScript (strict) + CSS Modules + CVA |
| Testing | Vitest + Testing Library |
| Documentación | Astro 5 + MDX + Shiki |
| Quality | ESLint 9 + Prettier + Husky + Commitlint |

## Estructura de cada componente

```
ComponentName/
├── ComponentName.tsx          # Implementación React
├── ComponentName.metadata.ts  # Metadata queryable por IA (agentic layer)
├── ComponentName.module.css   # Estilos usando design tokens
├── ComponentName.test.tsx     # Unit tests
├── ComponentName.docs.md      # Documentación humana
└── index.ts                   # Public exports
```

## Infraestructura agentic (a implementar)

1. **Codebase Index** — mapa de relaciones entre componentes (formato TOON)
2. **Component Metadata** — documentación machine-readable por componente
3. **Query Protocols** — CLAUDE.md + reglas en .claude/rules/
4. **Token Auditor** — governance: existencia + intención de los tokens

## Decisiones de diseño

- Los tokens son la fuente de verdad. Ningún componente hardcodea valores.
- Cada componente tiene metadata para IA Y documentación para humanos — son propósitos distintos.
- El sistema debe poder auditarse a sí mismo.
