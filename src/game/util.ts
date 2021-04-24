import { stopwatch, delta } from '../lib/stream/time';
import { documentHasFocus, keyboard } from '../lib/stream/dom';
import { not } from 'ramda';
import { log } from '../lib/stream';
import { AutoGUI } from '../lib/gui';

export const gui = new AutoGUI();
gui.domElement.parentElement!.style.zIndex = Number.MAX_SAFE_INTEGER.toString();

// set up a clock which stops without focus
const pause = documentHasFocus.map(not).map(log('pause'));
export const clock = stopwatch(pause);
export const dt = delta(clock).map(dt => dt / 1000);

// track input
export const keys = keyboard(document);

export const blit = (
  destinationArray: any[],
  sourceArray: any[],
  origin = [0, 0]
) => {
  return destinationArray.map((row: any[], rowIndex: number) => {
    return row.map((column: any, colIndex: number) => {
      return (
        (sourceArray[rowIndex - origin[0]] &&
          sourceArray[rowIndex - origin[0]][colIndex - origin[1]]) ||
        column
      );
    });
  });
};
