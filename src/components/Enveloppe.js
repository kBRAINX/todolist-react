import React, {useState} from 'react'
import { Form } from './Form'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
import { EditForm } from './EditForm';

uuidv4();

//cette page represente l'enveloppe ie le corps de notre page 
export const Enveloppe = () => {
        //declaration de variable et enregistrement des donnees du tableau avec des statuts
        const [todos, setTodos] = useState([]);

        const addTodo = todo => {
                setTodos([...todos, {id: uuidv4(), tache: todo, completed: false, isEditing: false}])
                console.log(todos)
        }

        //recuperation de l'id des taches cree et effectue la verification de si elle est completee
        const toggleComplete = id => {
                setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
        }

        //suppression des taches enregistrer
        const deleteTache = id => {
                setTodos(todos.filter(todo => todo.id !== id))
        }

        //selection de la tache a modifier
        const editTodo = id => {
                setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
        }

        //modification de la tache enregistrer
        const editTache = (tache, id) => {
                setTodos(todos.map(todo => todo.id === id ? {...todo, tache, isEditing: !todo.isEditing} : todo))
        }

  return (
    <div className='todo-container'>
        <h1>Ma Todo List</h1>
        <Form addTodo={addTodo} />
        {todos.map((todo, index) => (
                todo.isEditing ? (
                        <EditForm editTodo={editTache} tache={todo}/>
                ) : (
                        <Todo tache={todo} key={index} toggleComplete={toggleComplete} deleteTache={deleteTache} editTodo={editTodo}/>
                )
        ))}
    </div>
  )
}
