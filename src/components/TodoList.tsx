import { Item } from '../types'
import CheckIcon from './icons/CheckIcon'
import CrossIcon from './icons/CrossIcon'

interface ITodoItem {
    todo: Item[]
    removeTodo: (id: number) => void
}



const TodoList = ({ todo, removeTodo }: ITodoItem) => {
    return (
        <div className='bg-white rounded-md px-4 '>
            {todo.map(item => (

                <article key={item.id} className="flex gap-4 py-4 border-b-gray-400 border-b" >
                    <button className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block flex place-items-center">{item.completed ? <CheckIcon /> : null}
                    </button>
                    <p className={`grow text-gray-600 ${item.completed && 'line-through'}`}>{item.title}</p>
                    <button className='ml-auto' onClick={() => removeTodo(item.id)}><CrossIcon /></button>
                </article>
            ))
            }
        </div >
    )
}

export default TodoList