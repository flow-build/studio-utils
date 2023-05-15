import { AnyPayload } from '../domains';
import { EmitEventFunction, TEventName } from '../events';

export type ButtonComponentProps = {
  eventEmit: EmitEventFunction;
  testId?: string;
  onClick?: CallableFunction;
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'large' | 'medium' | 'small';
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  fullWidth?: boolean;
  disabled?: boolean;
  eventName?: TEventName;
  eventPayload?: AnyPayload;
  className?: string;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};
