import { stopwatch, delta } from '../lib/stream/time';
import { documentHasFocus, keyboard } from '../lib/stream/dom';
import { not } from 'ramda';
import { log, stream } from '../lib/stream';
import { AutoGUI } from '../lib/gui';

export const gui = new AutoGUI();
gui.domElement.parentElement!.style.zIndex = Number.MAX_SAFE_INTEGER.toString();

// documentHasFocus.map(not).map(log('pause'));

// set up a clock which stops without focus
export const pause = stream.of(true);
export const clock = stopwatch(pause);
export const dt = delta(clock).map(dt => dt / 1000);

stream.on(documentFocus => {
  if (!documentFocus) {
    pause(true);
  }
}, documentHasFocus);

// track input
export const keys = keyboard(document);

export const blit = (
  destinationArray: any[],
  sourceArray: any[],
  origin = [0, 0],
  value: any
) => {
  return destinationArray.map((row: any[], rowIndex: number) => {
    return row.map((column: any, colIndex: number) => {
      const setValue =
        sourceArray[rowIndex - origin[0]] &&
        sourceArray[rowIndex - origin[0]][colIndex - origin[1]];

      if (setValue) {
        if (value !== undefined) {
          return value;
        }
        return setValue;
      }
      return column;
    });
  });
};

export const sample = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
