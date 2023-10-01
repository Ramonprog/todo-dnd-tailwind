/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from "react"

interface ITodoAdd {
    createTodo: (title: string) => void
}


const TodoAdd = ({ createTodo }: ITodoAdd) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!title.trim()) return setTitle('')


        createTodo(title)
        setTitle('')

    }

    return (
        <div className="container mx-auto px-4 pt-8">
            <form onSubmit={handleSubmit} className="bg-white rounded-md p-3 my-8 flex gap-4 items-center">
                <span className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block"></span>
                <input type="text" placeholder="Create a new todo" className="w-full outline-none text-gray-500" value={title} onChange={e => setTitle(e.target.value)} />
            </form>
        </div>
    )
}

export default TodoAdd