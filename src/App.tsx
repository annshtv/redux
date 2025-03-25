import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './actions/counterActions';
import { RootState, AppDispatch } from './store'; // Import RootState and AppDispatch types
import './App.css';

/**
 * Пользовательский хук для типизированного доступа к dispatch
 * Документация: https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
 */
const useAppDispatch = () => useDispatch<AppDispatch>();

function App() {
	// useSelector позволяет извлекать данные из состояния Redux store
	// Документация: https://react-redux.js.org/api/hooks#useselector
	const count = useSelector((state: RootState) => state.counter.count);

	// Типизированный dispatch с помощью пользовательского хука
	const dispatch = useAppDispatch();

	return (
		<div className='App'>
			<h1>Счетчик Redux (с хуками)</h1>
			<div className='counter'>
				<h2>{count}</h2>
				<div className='buttons'>
					{/* Диспетчеризация действий при нажатии кнопок */}
					<button onClick={() => dispatch(increment())}>+</button>
					<button onClick={() => dispatch(decrement())}>-</button>
					<button onClick={() => dispatch(reset())}>Сбросить</button>
				</div>
			</div>
		</div>
	);
}

export default App;
