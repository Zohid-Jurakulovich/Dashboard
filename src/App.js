import Sidebar from './Components/Sidebar/Sidebar';
import Stats from './Components/Stats/Stats';
import './App.css';

function App() {
	return (
		<>
			<div className='page'>
				<Sidebar />
				<Stats />
			</div>
		</>
	);
}

export default App;
