# Racional Design System v2

Design system agentic para Racional — construido siguiendo el approach de Cristian Morales en "Towards an Agentic Design System".

## Estructura

```
├── libs/tokens/      # Design tokens (W3C + Style Dictionary)
├── libs/ui-react/    # Componentes React
├── apps/docs/        # Sitio de documentación
└── docs/             # Planning y arquitectura
```

## Primeros pasos

```bash
npm install
npm run build
```

## Stack

- Tokens: W3C Design Tokens + Style Dictionary v4
- Componentes: React 18 + TypeScript (strict) + CSS Modules + CVA
- Testing: Vitest + Testing Library
- Docs: Astro 5 + MDX

## Principios

1. Los tokens son la fuente de verdad — ningún componente hardcodea valores
2. Cada componente tiene metadata para IA y documentación para humanos
3. El sistema puede auditarse a sí mismo
4. Las decisiones de diseño están encodificadas, no solo documentadas
