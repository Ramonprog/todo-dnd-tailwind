/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoAdd from './components/TodoAdd'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import { Item } from './types'
import TodoComputed from './components/TodoComputed'
import { DragDropContext } from "@hello-pangea/dnd";


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const reorder = (list: Todo[], startIndex: number, endIndex: number) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {

  const initialStateTodos: Todo[] = JSON.parse(localStorage.getItem('todo') || '[]');

  const [todo, setTodo] = useState(initialStateTodos)
  const [count, setCount] = useState(0)
  const [filter, setFiler] = useState('all')

  const filterTodo = todo.filter(item => {
    if (filter === 'completed') return item.completed === true
    if (filter === 'active') return item.completed === false
    return item
  })

  const createTodo = (title: string) => {
    const newTodo: Item = {
      id: todo.length + 1,
      title,
      completed: false
    }

    setTodo([...todo, newTodo])
  }

  const removeTodo = (id: number) => {
    setTodo(prev => prev.filter(item => item.id !== id))
  }

  const updateTodo = (id: number, completed: boolean) => {
    setTodo(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  }

  const clearCompleted = () => {
    setTodo(todo.filter(item => item.completed === false))
  }

  useEffect(() => {
    setCount(todo.filter(item => item.completed === false).length)
  }, [todo])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodo((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300  dark:bg-gray-950 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />
      <TodoAdd createTodo={createTodo} />

      <main className="container mx-auto px-4 md:max-w-xl">
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList todo={filterTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </DragDropContext>
      </main>

      <section className="container mx-auto px-4 mt-8  md:max-w-xl">
        <TodoFilter filter={filter} setFiler={setFiler} />
      </section>
      <section className="container mx-auto px-4 mt-8  md:max-w-xl">

        <TodoComputed counter={count} clearCompleted={clearCompleted} />
      </section>

      <footer className="text-center mt-8 dark:text-gray-400 ">Drag and drop to reorder list</footer>
    </div>
  )
}

export default App
