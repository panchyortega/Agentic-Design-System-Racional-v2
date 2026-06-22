# Skills — Instrucciones de instalación

Los skills de Cristian Morales son la capa ejecutable del sistema agentic.
Instalar con Claude Code (no con Claude chat).

## Instalación

```bash
# Instalar los tres skills del sistema
npx giorris-claude-skills install codebase-index
npx giorris-claude-skills install ai-component-metadata
npx giorris-claude-skills install ai-ds-composer
```

## Cuándo usar cada uno

### `/codebase-index`
Correr después de agregar o eliminar componentes.
Genera `.ai/relationships/component-usage.toon` y `.ai/relationships/data-flow.toon`.
Commitear el output junto al código.

### `/ai-component-metadata`
Correr cuando se crea un componente nuevo.
Genera el archivo `.metadata.ts` a partir de la implementación y documentación existente.

### `/ai-ds-composer`
Usar cuando necesitas seleccionar el componente correcto para una tarea.
Lee el index y la metadata, aplica los criterios de selección, verifica anti-patrones.

## Fuente

Repo de Cristian Morales: github.com/cris-achiardi/claude-skills
Documentación: giorris.dev/skills
