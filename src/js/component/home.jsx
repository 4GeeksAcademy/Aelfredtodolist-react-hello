import React, { useState } from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My To-Do List</h1>
			
			<ul>
				<li>
					<input type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="What do you need to get done today?"></input>
				</li>
				
				{todos.map((item, index) => (
					<li key={index}>
						{item} {" "}
						<i className="fa-solid fa-xmark float-end"
						onClick={() => setTodos(todos.filter(
							(t, currentIndex) => index != currentIndex)) }></i>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	)
};

export default Home;
