import type { FormatterProps } from '../types';

export function valueFormatter<R, SR>(props: FormatterProps<R, SR>) {
  try {
    return <>{props.row[props.column.key as keyof R]}</>;
  } catch {
    return null;
  }
}