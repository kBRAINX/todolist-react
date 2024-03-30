import React, {useState} from 'react'

export const Form = ({addTodo}) => {
  //declaration de variables pour la recuperation du contenu du formulaire
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue("")
  }

  //formulaire d'enregistrement des taches 
  return (
<form onSubmit={handleSubmit}>
    <input type="text" id="taskInput" value={value} placeholder="Ajouter une tâche..." onChange={(e) => setValue(e.target.value)}></input>
    <button>Ajouter</button>
  </form>
  )
}

