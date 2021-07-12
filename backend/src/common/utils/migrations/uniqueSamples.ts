import { shuffle, random } from 'lodash';
// shuffle an array and slice random part of it
export const uniqueSamples = (array: string[], length: number) => shuffle(array).slice(0, random(length));
