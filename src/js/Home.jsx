import React from "react";
import ListaDeTareas from "./components/ListaDeTareas";


//create your first component
function Todolist() {


	return (

		<div className="container">
			<h1>Todolist</h1>
			<div className="tareas-listas">
				<ListaDeTareas />
			</div>
		</div>
			
	);
};

export default Todolist;