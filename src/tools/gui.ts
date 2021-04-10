import { GUI, GUIController } from 'dat.gui';
import { Stream } from './stream';
import { Store } from './stream/store';

/**
 * A normal dat.GUI requires you to create an object and populate it with
 * default values before using it. This AutoGUI will instead manage that
 * for you, changing the `add` APIs to include the default value first.
 *
 * TODO: stronger types
 * TODO: instead of patching, maybe extend GUI and add new "auto" APIs?
 */
export interface AutoAdd {
  auto: {
    <T>(
      value: T,
      name: string,
      min?: number,
      max?: number,
      step?: number
    ): GUIController;
    <T>(value: T, name: string, status: boolean): GUIController;
    <T>(value: T, name: string, items: string[]): GUIController;
    <T>(value: T, name: string, items: number[]): GUIController;
    <T>(value: T, name: string, items: Object[]): GUIController;
  };
  autoColor: {
    (value: string, name: string): GUIController;
  };
}
export class AutoGUI extends GUI {
  controllers: Record<string, GUIController> = {};
  constructor(public store: Record<string, unknown> = new Store()) {
    super();
  }

  auto<T>(
    value: T,
    name: string,
    min?: number,
    max?: number,
    step?: number
  ): Stream<T>;
  auto<T>(value: T, name: string, status: boolean): Stream<T>;
  auto<T>(value: T, name: string, items: string[]): Stream<T>;
  auto<T>(value: T, name: string, items: number[]): Stream<T>;
  auto<T>(value: T, name: string, items: Object[]): Stream<T>;
  auto<T>(defaultValue: T, name: string, ...args: unknown[]) {
    const streams = this.store.$ as Record<string, Stream<unknown>>;
    if (streams[name]) return streams[name];
    this.store[name] = defaultValue;
    this.controllers[name] = this.add(this.store, name, ...(args as any));
    const stream = streams[name] as Stream<T>;
    return stream;
  }
}

export function isGUIController(x: any): x is GUIController {
  return 'object' in x && 'property' in x;
}
