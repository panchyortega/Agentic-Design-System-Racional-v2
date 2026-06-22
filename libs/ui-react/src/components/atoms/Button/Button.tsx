import { cva, type VariantProps } from 'class-variance-authority';
import styles from './Button.module.css';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outlined';
export type ButtonSize    = 'xsmall' | 'small' | 'medium' | 'large';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Button label */
  label: string;
  /** Icon rendered to the left of the label */
  iconLeft?: React.ReactNode;
  /** Icon rendered to the right of the label */
  iconRight?: React.ReactNode;
  /** Replaces content with a spinner — disables the button automatically */
  isLoading?: boolean;
  /** Disables the button */
  disabled?: boolean;
}

// ─── CVA ─────────────────────────────────────────────────────────────────────

const button = cva(styles.base, {
  variants: {
    variant: {
      primary:   styles.primary,
      secondary: styles.secondary,
      tertiary:  styles.tertiary,
      outlined:  styles.outlined,
    },
    size: {
      xsmall: styles.xsmall,
      small:  styles.small,
      medium: styles.medium,
      large:  styles.large,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size:    'medium',
  },
});

// ─── Loader ───────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <span className={styles.spinner} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="12" cy="12" r="10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="32"
          strokeDashoffset="12"
        />
      </svg>
    </span>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Button({
  variant = 'primary',
  size    = 'medium',
  label,
  iconLeft,
  iconRight,
  isLoading = false,
  disabled  = false,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      {...props}
      className={button({ variant, size, className })}
      disabled={isDisabled}
      aria-busy={isLoading}
      aria-label={isLoading ? `${label}, cargando` : undefined}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {iconLeft  && <span className={styles.iconLeft}  aria-hidden="true">{iconLeft}</span>}
          <span className={styles.label}>{label}</span>
          {iconRight && <span className={styles.iconRight} aria-hidden="true">{iconRight}</span>}
        </>
      )}
    </button>
  );
}

export default Button;
