# @racional/tokens

Design tokens para el Design System de Racional en formato W3C Design Tokens, compilados via Style Dictionary v4.

## Estructura

```
src/
├── primitive.color.json      # Colores base (paletas completas)
├── primitive.dimension.json  # Espaciado, tipografía, border-radius
├── semantic.json             # Tokens semánticos (light + dark)
└── component.button.json     # Tokens de componente: Button
```

## Tres capas de tokens

### 1. Primitivos
Los valores literales. No se usan directamente en componentes.
```json
{ "color": { "violet": { "500": { "$value": "#7E4DFF" } } } }
```

### 2. Semánticos
El significado de cada valor — contexto de uso.
```json
{ "semantic": { "dark": { "background": { "stocks": { "$value": "{color.violet.500}" } } } } }
```

### 3. Componente
Tokens específicos por componente, referencian semánticos o primitivos.
```json
{ "component": { "button": { "primary": { "background": { "$value": "{color.gray.white}" } } } } }
```

## Por qué W3C format

- Agnóstico a plataforma — Style Dictionary compila a CSS, React Native, o lo que necesites
- Las referencias `{color.violet.500}` hacen explícita la cadena de decisión
- Fuente de verdad única — el token auditor puede verificar contra estos archivos

## Compilar

```bash
npm run build   # genera dist/tokens.css y dist/tokens.js
npm run dev     # watch mode
```
