import { Dispatch, SetStateAction } from "react"
import { item } from "../types"

interface ITodoAdd {
    setTodo: Dispatch<SetStateAction<item[]>>
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TodoAdd = ({ setTodo }: ITodoAdd) => {
    return (
        <div className="container mx-auto px-4 pt-8">
            <form className="bg-white rounded-md p-3 my-8 flex gap-4 items-center">
                <span className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block"></span>
                <input type="text" placeholder="Create a new todo" className="w-full outline-none text-gray-500" />
            </form>
        </div>
    )
}

export default TodoAdd