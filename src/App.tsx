/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoAdd from './components/TodoAdd'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import { Item } from './types'
import TodoComputed from './components/TodoComputed'


function App() {

  const initialStateTodos = [
    { id: 1, title: 'go to the gym', completed: false },
    { id: 2, title: 'buy groceries', completed: true },
    { id: 3, title: 'read a book', completed: false },
    { id: 4, title: 'clean the house', completed: true },
    { id: 5, title: 'write a report', completed: false }
  ]

  const [todo, setTodo] = useState(initialStateTodos)
  const [count, setCount] = useState(0)
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
      <TodoComputed counter={count} clearCompleted={clearCompleted} />

      <footer className="text-center mt-8">Drag and drop to reorder list</footer>
    </div>
  )
}

export default App
