import React from 'react'

type Props = {
    params : {
        todoId : string,
        
    },children?: React.ReactNode,
}
const page = async (props:Props) => {
    //  console.log(props);{ params: { todoId: '1' }, searchParams: {} }
    // console.log(props.children); 
    const fetchTodo = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.todoId}`);
            const todo = await response.json();
                return todo;

    }
    const todo = await fetchTodo();
  return (
    <div className=' p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
        <p>
            #{todo.id}: {todo.title} 
        </p>
        <p>
            Completed : {todo.completed ? 'Yes' : 'No'}

        </p>
        <p className='border-t border-black mt-5 text-right' > By User: {todo.userId} </p>
    </div>
  )
}

export default page