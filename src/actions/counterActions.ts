// Константы типов действий (Action Types)
// В Redux используются строковые константы для определения типов действий
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// Определение типов для действий (Action Types)
interface IncrementAction {
	type: typeof INCREMENT;
}

interface DecrementAction {
	type: typeof DECREMENT;
}

interface ResetAction {
	type: typeof RESET;
}

// Объединенный тип для всех действий счетчика
export type CounterActionTypes =
	| IncrementAction
	| DecrementAction
	| ResetAction;

/**
 * Генераторы действий (Action Creators) - функции, создающие объекты действий
 * Документация: https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#action-creators
 */

// Увеличивает счетчик на 1
export const increment = (): IncrementAction => ({
	type: INCREMENT,
});

// Уменьшает счетчик на 1
export const decrement = (): DecrementAction => ({
	type: DECREMENT,
});

// Сбрасывает счетчик в 0
export const reset = (): ResetAction => ({
	type: RESET,
});
