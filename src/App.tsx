import {
	useCallback 
} from 'react';
import {
	Button
} from './components/Button/Button';

function App() {
	const handleClickButton = useCallback(() => {
		// eslint-disable=next-line
		console.log('Button has been clicked');
	}, []);

	return (
		<>
			<Button
				onClick={handleClickButton}
				label="Simple button"
			/>
			<Button
				onClick={handleClickButton}
				label="Simple button"
			/>
		</>
	);
}

export default App;
