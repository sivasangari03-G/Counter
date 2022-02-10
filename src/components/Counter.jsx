import React, { useEffect, useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);


        useEffect(() => {
            const id = setInterval(() => {
                setCounter((value) => {
                    if (value < 10) {
                        return value + 1;
                    } else {
                        clearInterval(id)
                        return value;
                    }
                })
            }, 1000)
            return () => clearInterval(id)
        }, [])
    
	return (
		<>
            <h1>counter: {counter}</h1>
		</>
	);
};
