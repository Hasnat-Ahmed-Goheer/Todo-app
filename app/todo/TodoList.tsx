import { Todo } from '@/typings';
import Link from 'next/link';
import React from 'react'

const  TodoList = async () => {

    const fetchTodo = async () => {  
         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
         const todo : Todo[] = await response.json();
        //  console.log(todo);
            return todo;
    }
 const todo = await fetchTodo();
  return (
    <>
    {todo.map((td) => {
        return <p key={td.id}>
          <Link href={`/todo/${td.id}`}>{td.title}:{td.userId}</Link>
          </p>
    })}
    </>
  )
}

export default TodoList;