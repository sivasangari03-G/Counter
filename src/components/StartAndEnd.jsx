import React from 'react'

export const StartAndEnd = ({ handleStartTime,start,end,setStart,setEnd }) => {
	return (
		<>
			<div>
				<input
					type="text"
					placeholder="start"
					value={start}
					onChange={(e) => setStart(+e.currentTarget.value)}
				/>
				<input
					type="text"
					placeholder="end"
					value={end}
					onChange={(e) => setEnd(+e.currentTarget.value)}
				/>
			</div>
			<div>
                <button onClick={handleStartTime}>start Timer</button>
			</div>
		</>
	);
};
