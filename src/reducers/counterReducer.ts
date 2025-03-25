import {
	INCREMENT,
	DECREMENT,
	RESET,
	CounterActionTypes,
} from '../actions/counterActions';

// Определение типа состояния для счетчика
interface CounterState {
	count: number;
}

// Начальное состояние счетчика
const initialState: CounterState = {
	count: 0,
};

/**
 * Редьюсер счетчика - чистая функция, которая принимает предыдущее состояние и действие,
 * и возвращает новое состояние.
 * Документация: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
 *
 * @param state - Текущее состояние (по умолчанию initialState)
 * @param action - Действие для обработки
 * @returns Новое состояние
 */
const counterReducer = (
	state = initialState,
	action: CounterActionTypes
): CounterState => {
	switch (action.type) {
		case INCREMENT:
			// Создаем новый объект состояния с увеличенным значением счетчика
			return {
				...state, // Копируем все существующие свойства
				count: state.count + 1, // Обновляем только нужное свойство
			};
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		case RESET:
			return {
				...state,
				count: 0,
			};
		default:
			// Если действие не распознано, возвращаем исходное состояние
			return state;
	}
};

export default counterReducer;
