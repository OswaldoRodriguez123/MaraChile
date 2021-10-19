import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import CartContextProvider from './contexts/CartContext';

function App() {
	return (
		<div>
			<CartContextProvider>
				<Main />
			</CartContextProvider>
		</div>
	);
}

export default App;
