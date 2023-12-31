import { Item } from '../types'
import CheckIcon from './icons/CheckIcon'
import CrossIcon from './icons/CrossIcon'
import { Droppable, Draggable } from "@hello-pangea/dnd";
interface ITodoItem {
    todo: Item[]
    removeTodo: (id: number) => void
    updateTodo: (id: number, completed: boolean) => void
}



const TodoList = ({ todo, removeTodo, updateTodo }: ITodoItem) => {
    return (
        <Droppable droppableId="todos" >
            {
                (droppableProvided) => (
                    <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className='bg-white rounded-md px-4  dark:bg-gray-800'>
                        {todo.map((item, index) => (
                            <Draggable key={item.id} index={index} draggableId={`${item.id}`}>
                                {
                                    (draggableProvider) => (
                                        <article ref={draggableProvider.innerRef}
                                            {...draggableProvider.draggableProps}
                                            {...draggableProvider.dragHandleProps} className="flex gap-4 py-4 border-b-gray-400 border-b" >
                                            <button onClick={() => updateTodo(item.id, item.completed)} className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block flex place-items-center" >{item.completed ? <CheckIcon /> : null}
                                            </button>
                                            <p className={`grow text-gray-600  dark:text-gray-300 ${item.completed && 'line-through'}`}>{item.title}</p>
                                            <button className='ml-auto' onClick={() => removeTodo(item.id)}><CrossIcon /></button>
                                        </article>
                                    )
                                }

                            </Draggable>
                        ))
                        }

                        {droppableProvided.placeholder}
                    </div >
                )
            }


        </Droppable>
    )
}

export default TodoList