import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterReducer';

/**
 * Создание Redux store с помощью configureStore из Redux Toolkit
 * configureStore предоставляет улучшенную настройку по сравнению с createStore:
 * - Автоматически настраивает Redux DevTools
 * - Добавляет middleware по умолчанию (включая redux-thunk)
 * - Включает проверки ошибок в режиме разработки
 *
 * Документация: https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
	reducer: {
		// Объект со всеми редьюсерами приложения
		counter: counterReducer,
		// Здесь можно добавить другие редьюсеры
	},
	// Дополнительная конфигурация может включать middleware, devTools и др.
});

/**
 * Извлечение типов из store для использования в TypeScript
 *
 * RootState - тип для всего состояния приложения
 * AppDispatch - тип для dispatch-функции
 *
 * Документация по типизации: https://redux-toolkit.js.org/tutorials/typescript
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
