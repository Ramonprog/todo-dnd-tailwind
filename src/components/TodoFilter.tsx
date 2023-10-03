interface ITodoFilter {
    setFiler: (filter: string) => void
    filter: string
}


const TodoFilter = ({ setFiler, filter }: ITodoFilter) => {
    return (
        <div className='bg-white p-4 rounded-md flex justify-center gap-4  dark:bg-gray-800 dark:text-gray-200'>
            <button className={`${filter === 'all' ? 'text-blue-600' : ''} hover:text-blue-600`} onClick={() => setFiler('all')} >All</button>
            <button className={`${filter === 'active' ? 'text-blue-600' : ''} hover:text-blue-600`} onClick={() => setFiler('active')}>Active</button>
            <button className={`${filter === 'completed' ? 'text-blue-600' : ''} hover:text-blue-600`} onClick={() => setFiler('completed')}>Completed</button>
        </div>
    )
}

export default TodoFilter