export * from 'redux-saga-routines';

declare module 'redux-saga-routines' {
	export function createRoutineCreator(stages: string[], separator?: string): createRoutine;

	export const defaultRoutineStages = ['TRIGGER', 'REQUEST', 'SUCCESS', 'FAILURE', 'FULFILL'];
}
