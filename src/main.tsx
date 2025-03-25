import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import store from './store';
import './index.css';

/**
 * Точка входа в React приложение
 *
 * Provider - компонент из react-redux, который делает Redux store доступным
 * для всех вложенных компонентов, подключенных к Redux
 * Документация: https://react-redux.js.org/api/provider
 *
 * StrictMode - инструмент для выявления потенциальных проблем в приложении
 * Документация: https://react.dev/reference/react/StrictMode
 */

// Находим корневой элемент DOM и создаем React корень
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

// Рендеринг приложения
root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
