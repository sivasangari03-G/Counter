import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { StartAndEnd } from "./components/StartAndEnd";

function App() {
	const [show, setShow] = useState(false);
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(0);

	const handleStartTime = () => {
		setShow(!show);
	};

	return (
		<div className="App">
			<StartAndEnd handleStartTime={handleStartTime} start={start} end={end} setStart={setStart} setEnd={setEnd} />
			{show ? <Counter start={start} end={end} /> : <h1>no counter</h1>}
		</div>
	);
}

export default App;
