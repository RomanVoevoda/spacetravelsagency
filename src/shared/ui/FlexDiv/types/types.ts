import { ReactNode } from "react";

export interface DivProps {
  direction?: 'row' | 'row_reverse' | 'column' | 'column_reverse';
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'end';
  children?: ReactNode;
}