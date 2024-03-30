import React, {useState} from 'react'

export const EditForm = ({editTodo, tache}) => {
  //declaration de variables pour la recuperation du contenu du formulaire
  const [value, setValue] = useState(tache.tache)

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, tache.id);
    setValue("")
  }

  //formulaire d'enregistrement des taches 
  return (
<form onSubmit={handleSubmit}>
    <input type="text" id="taskInput" value={value} onChange={(e) => setValue(e.target.value)}></input>
    <button>Modifier</button>
  </form>
  )
}

