import Step from "./components/Step";

const initialArray = ["Learn React", "Build Projects", "Get a Job"];

function App() {
	return (
		<div>
			<Step data={initialArray} />
		</div>
	);
}

export default App;
