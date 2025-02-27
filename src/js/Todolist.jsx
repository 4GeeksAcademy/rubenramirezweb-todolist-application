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
			

			

				

				{/* <input
					type="text"
					onChange={(e) => setTareaInput(e.target.value)}
					value={tareaInput}
					onKeyDown={(e) => {
						if (e.key === "Enter" && tareaInput !== "") {
							setLista([...lista, tareaInput]);
							setTareaInput("");
						}
					}}
					placeholder="What do you need to do?" /> */}

				

				

			

		</div>
			
	);
};

export default Todolist;