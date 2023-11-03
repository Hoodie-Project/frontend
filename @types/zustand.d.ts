declare module 'myPersist' {
  import { StateCreator } from 'zustand';
  import { PersistOptions } from 'zustand/middleware';

  export type TMyPersist<T> = (
    config: StateCreator<T>,
    options: PersistOptions<T, Partial<T>>,
  ) => StateCreator<T>;
}
