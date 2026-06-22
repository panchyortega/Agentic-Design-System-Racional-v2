import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {

  // ─── Render ──────────────────────────────────────────────────────────────

  it('renders the label', () => {
    render(<Button label="Invertir ahora" />);
    expect(screen.getByText('Invertir ahora')).toBeInTheDocument();
  });

  it('renders as a button element', () => {
    render(<Button label="Confirmar" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // ─── Variants ────────────────────────────────────────────────────────────

  it.each(['primary', 'secondary', 'tertiary', 'outlined'] as const)(
    'renders variant %s without errors',
    (variant) => {
      render(<Button label="Test" variant={variant} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    }
  );

  // ─── Sizes ───────────────────────────────────────────────────────────────

  it.each(['xsmall', 'small', 'medium', 'large'] as const)(
    'renders size %s without errors',
    (size) => {
      render(<Button label="Test" size={size} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    }
  );

  // ─── Icons ───────────────────────────────────────────────────────────────

  it('renders iconLeft when provided', () => {
    render(<Button label="Agregar" iconLeft={<span data-testid="icon-left">+</span>} />);
    expect(screen.getByTestId('icon-left')).toBeInTheDocument();
  });

  it('renders iconRight when provided', () => {
    render(<Button label="Ver más" iconRight={<span data-testid="icon-right">→</span>} />);
    expect(screen.getByTestId('icon-right')).toBeInTheDocument();
  });

  // ─── Disabled ────────────────────────────────────────────────────────────

  it('is disabled when disabled prop is true', () => {
    render(<Button label="Cancelar" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('does not trigger onClick when disabled', async () => {
    const onClick = vi.fn();
    render(<Button label="Cancelar" disabled onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  // ─── Loading ─────────────────────────────────────────────────────────────

  it('hides label when isLoading is true', () => {
    render(<Button label="Confirmar" isLoading />);
    expect(screen.queryByText('Confirmar')).not.toBeInTheDocument();
  });

  it('is disabled automatically when isLoading is true', () => {
    render(<Button label="Confirmar" isLoading />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('sets aria-busy when isLoading is true', () => {
    render(<Button label="Confirmar" isLoading />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('does not trigger onClick when loading', async () => {
    const onClick = vi.fn();
    render(<Button label="Confirmar" isLoading onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  // ─── Interaction ─────────────────────────────────────────────────────────

  it('triggers onClick when clicked in default state', async () => {
    const onClick = vi.fn();
    render(<Button label="Confirmar" onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

});
