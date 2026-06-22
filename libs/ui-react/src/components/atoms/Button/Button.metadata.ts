// =============================================================================
// Button — Component Metadata
// AI-queryable. Machine-readable. Source of truth for component contracts.
// Auto-populated with ai-component-metadata skill — do not edit manually.
// =============================================================================

export const ButtonMetadata = {

  // ─── Header (for fast discovery) ──────────────────────────────────────────
  component: {
    name:        'Button',
    category:    'atoms',
    description: 'Botón interactivo para acciones del usuario. Variantes visuales para distintos niveles de jerarquía. Soporta íconos a izquierda y derecha, estado de carga y estado deshabilitado.',
    type:        'interactive',
    path:        'libs/ui-react/src/components/atoms/Button/Button.tsx',
  },

  // ─── Usage ────────────────────────────────────────────────────────────────
  usage: {
    useCases: [
      'primary-call-to-action',
      'form-submission',
      'destructive-action',
      'secondary-action',
      'navigation-trigger',
    ],

    commonPatterns: [
      {
        name:        'primary-cta',
        description: 'Acción principal de una pantalla o sección',
        composition: `<Button variant="primary" label="Invertir ahora" />`,
      },
      {
        name:        'with-left-icon',
        description: 'Botón con ícono a la izquierda para reforzar la acción',
        composition: `<Button variant="primary" label="Agregar" iconLeft={<PlusIcon />} />`,
      },
      {
        name:        'with-right-icon',
        description: 'Botón con ícono a la derecha para indicar navegación o dirección',
        composition: `<Button variant="secondary" label="Ver detalle" iconRight={<ArrowRightIcon />} />`,
      },
      {
        name:        'loading-state',
        description: 'Estado de carga mientras se procesa una acción',
        composition: `<Button variant="primary" label="Confirmar" isLoading={true} />`,
      },
    ],

    antiPatterns: [
      {
        scenario:    'Múltiples botones primary en la misma sección',
        reason:      'Crea confusión visual de jerarquía — el usuario no sabe cuál es la acción principal',
        alternative: 'Un solo primary, el resto secondary, tertiary u outlined',
      },
      {
        scenario:    'Usar Button para navegación simple sin acción',
        reason:      'Los botones indican acciones, no navegación. Confunde la semántica HTML y la IA del usuario',
        alternative: 'Usar un componente Link para navegación pura',
      },
      {
        scenario:    'Texto de label muy largo (más de 4-5 palabras)',
        reason:      'Los botones deben ser concisos y orientados a la acción',
        alternative: 'Usar verbos cortos: "Confirmar", "Invertir", "Cancelar", "Ver más"',
      },
      {
        scenario:    'Mostrar iconLeft e iconRight simultáneamente sin justificación',
        reason:      'Sobrecarga visual — los íconos deben reforzar la acción, no decorar',
        alternative: 'Usar solo el ícono que aporta más claridad semántica',
      },
    ],
  },

  // ─── Variants ─────────────────────────────────────────────────────────────
  variants: {
    variant: {
      options:  ['primary', 'secondary', 'tertiary', 'outlined'],
      default:  'primary',
      purpose: {
        primary:   'Acción principal de la pantalla o sección. Alta prominencia visual. Dark-first: fondo blanco sobre superficies oscuras.',
        secondary: 'Acción alternativa o complementaria. Siempre fondo oscuro, alto contraste en cualquier superficie.',
        tertiary:  'Acción de menor jerarquía. Fondo gris oscuro, peso visual más bajo.',
        outlined:  'Acción mínima o contextual. Fondo transparente, solo borde y texto.',
      },
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large'],
      default: 'medium',
      purpose: {
        xsmall: 'Contextos muy densos — tablas, chips, badges con acción. 12px.',
        small:  'Acciones secundarias en tarjetas o listas. 14px.',
        medium: 'Tamaño estándar para la mayoría de los casos. 16px.',
        large:  'CTAs principales en heroes o modales. 18px.',
      },
    },
  },

  // ─── Behavior ─────────────────────────────────────────────────────────────
  behavior: {
    states: {
      default:  'Estado base — interactivo',
      hover:    'Fondo ligeramente más claro u oscuro según variante',
      pressed:  'Fondo más pronunciado que hover — feedback táctil',
      disabled: 'No interactivo. Borde sutil, texto atenuado. No usar opacity general.',
      loading:  'El contenido (label e íconos) desaparece — reemplazado por spinner centrado. El botón queda deshabilitado automáticamente.',
    },
    interactions: {
      focusVisible: 'Outline de 2px con border-focus token al navegar con teclado',
      ariaLoading:  'aria-busy=true cuando isLoading. aria-label incluye ", cargando"',
    },
  },

  // ─── Props ────────────────────────────────────────────────────────────────
  props: {
    label:     { type: 'string',          required: true,  description: 'Texto del botón' },
    variant:   { type: 'ButtonVariant',   required: false, default: 'primary' },
    size:      { type: 'ButtonSize',      required: false, default: 'medium' },
    iconLeft:  { type: 'React.ReactNode', required: false, description: 'Ícono a la izquierda del label' },
    iconRight: { type: 'React.ReactNode', required: false, description: 'Ícono a la derecha del label' },
    isLoading: { type: 'boolean',         required: false, default: false },
    disabled:  { type: 'boolean',         required: false, default: false },
  },

  // ─── Accessibility ────────────────────────────────────────────────────────
  accessibility: {
    role:            'button (nativo)',
    keyboardSupport: 'Space y Enter nativos del browser',
    screenReader:    'Anuncia el label. En loading anuncia ", cargando" vía aria-label',
    wcag:            'AA',
    notes: [
      'Siempre proveer un label descriptivo — no solo íconos',
      'El spinner tiene aria-hidden="true" — el aria-label del botón comunica el estado',
    ],
  },

  // ─── AI Hints ─────────────────────────────────────────────────────────────
  aiHints: {
    priority: 'high',
    keywords: ['button', 'cta', 'acción', 'submit', 'confirmar', 'invertir', 'cancelar'],
    context:  'Usar para cualquier acción del usuario. Elegir variante según jerarquía visual de la pantalla.',
    selectionCriteria: {
      usePrimary:   'La acción más importante que el usuario debe tomar en esta pantalla o sección',
      useSecondary: 'Acción alternativa o de igual importancia que primary — cuando necesitas dos CTAs claros',
      useTertiary:  'Acción de soporte, opción adicional o acción menos prioritaria',
      useOutlined:  'Acción mínima, cancelación, o cuando el contexto visual ya tiene mucho peso',
      useSmall:     'Dentro de tarjetas, listas o componentes densos',
      useLarge:     'En heroes, modales de confirmación o pantallas de onboarding',
      useIconLeft:  'El ícono refuerza la naturaleza de la acción (ej: + Agregar, ✓ Confirmar)',
      useIconRight: 'El ícono indica dirección o continuidad (ej: Ver más →, Siguiente →)',
      useLoading:   'Mientras se procesa una operación asíncrona — reemplaza al default automáticamente',
    },
  },

} as const;
