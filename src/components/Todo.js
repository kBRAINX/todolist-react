import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


//  cette partie consiste a l'affichage des taches enregistre dans Form
export const Todo = ({tache, toggleComplete, deleteTache, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(tache.id)} className={`${tache.completed ? 'completed': ""}`}>{tache.tache}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(tache.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() =>deleteTache(tache.id)}/>
      </div>
    </div>
  )
}
