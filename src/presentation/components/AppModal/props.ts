import {PropsWithChildren} from 'react';

export type AppModalProps = PropsWithChildren<{
  open: boolean;
  close(): void;
}>;
