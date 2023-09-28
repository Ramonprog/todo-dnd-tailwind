function App() {

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-200">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
          <button>
            Lua
          </button>
        </div>
        <form className="bg-white rounded-md p-3 my-8 flex gap-4 items-center">
          <span className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block"></span>
          <input type="text" placeholder="Create a new todo" className="w-full outline-none text-gray-500" />
        </form>
      </header>
      <main className="container mx-auto px-4">
        <div className='bg-white rounded-md px-4'>
          <article className="">
            <button className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block"></button>
            <p className="text-gray-500">Complete online javascript curse</p>
            <button>Exis</button>
          </article>
          <article className="">
            <button>Circulo</button>
            <p>Complete online javascript curse</p>
            <button>Exis</button>
          </article>
          <article className="">
            <button>Circulo</button>
            <p>Complete online javascript curse</p>
            <button>Exis</button>
          </article>
          <section>
            <span>5 items left</span>
            <button>clear completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <p className="text-center">Drag and drop to reorder list</p>
    </div>
  )
}

export default App
