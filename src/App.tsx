/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import Header from './components/Header'
import TodoAdd from './components/TodoAdd'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import { Item } from './types'


function App() {

  const initialStateTodos = [
    { id: 1, title: 'go to the gym', completed: false },
    { id: 2, title: 'buy groceries', completed: true },
    { id: 3, title: 'read a book', completed: false },
    { id: 4, title: 'clean the house', completed: true },
    { id: 5, title: 'write a report', completed: false }
  ]

  const [todo, setTodo] = useState(initialStateTodos)

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

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
      <Header />
      <TodoAdd createTodo={createTodo} />

      <main className="container mx-auto px-4">
        <TodoList todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
      </main>

      <section className="container mx-auto px-4 mt-8">
        <TodoFilter />
      </section>

      <footer className="text-center mt-8">Drag and drop to reorder list</footer>
    </div>
  )
}

export default App
