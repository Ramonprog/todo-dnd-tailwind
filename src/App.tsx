/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import Header from './components/Header'
import TodoAdd from './components/TodoAdd'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'


function App() {

  const initialStateTodos = [
    { id: 1, title: 'go to the gym', completed: false },
    { id: 2, title: 'buy groceries', completed: true },
    { id: 3, title: 'read a book', completed: false },
    { id: 4, title: 'clean the house', completed: true },
    { id: 5, title: 'write a report', completed: false }
  ]

  const [todo, setTodo] = useState(initialStateTodos)

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
      <Header />
      <TodoAdd setTodo={setTodo} />

      <main className="container mx-auto px-4">
        <TodoList todo={todo} />
      </main>

      <section className="container mx-auto px-4 mt-8">
        <TodoFilter />
      </section>

      <footer className="text-center mt-8">Drag and drop to reorder list</footer>
    </div>
  )
}

export default App
