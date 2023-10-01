import { item } from '../types'
import CrossIcon from './icons/CrossIcon'

interface ITodoItem {
    todo: item[]
}



const TodoList = ({ todo }: ITodoItem) => {
    return (
        <div className='bg-white rounded-md px-4 '>
            {todo.map(item => (

                <article key={item.id} className="flex gap-4 py-4 border-b-gray-400 border-b">
                    <button className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block"></button>
                    <p className="text-gray-500 grow">{item.title}</p>
                    <button className='ml-auto'><CrossIcon /></button>
                </article>
            ))}
        </div>
    )
}

export default TodoList