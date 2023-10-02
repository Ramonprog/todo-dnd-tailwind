import React from 'react'

interface ITodoCoumputed {
    counter: number;
    clearCompleted: () => void
}

const TodoComputed = ({ counter, clearCompleted }: ITodoCoumputed) => {
    return (
        <section className='py-4 px-4 flex justify-between'>
            <span className='text-gray-400'>{counter} items left</span>
            <button className='text-gray-400' onClick={clearCompleted}>clear completed</button>
        </section>
    )
}

export default TodoComputed