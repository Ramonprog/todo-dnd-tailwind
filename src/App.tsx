import CrossIcon from './components/icons/CrossIcon'
import MoonIcon from './components/icons/MoonIcon'

function App() {

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
          <button>
            <MoonIcon color='#000' />
          </button>
        </div>
        <form className="bg-white rounded-md p-3 my-8 flex gap-4 items-center">
          <span className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block"></span>
          <input type="text" placeholder="Create a new todo" className="w-full outline-none text-gray-500" />
        </form>
      </header>
      <main className="container mx-auto px-4">
        <div className='bg-white rounded-md px-4 '>
          <article className="flex gap-4 py-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block"></button>
            <p className="text-gray-500 grow">Complete online javascript curse</p>
            <button className='ml-auto'> <CrossIcon /></button>
          </article>
          <article className="flex gap-4 py-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block"></button>
            <p className="text-gray-500 grow">Complete online javascript curse</p>
            <button className='ml-auto'> <CrossIcon /></button>
          </article>    <article className="flex gap-4 py-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 border-zinc-300 w-5 h-5 inline-block"></button>
            <p className="text-gray-500 grow">Complete online javascript curse</p>
            <button className='ml-auto'> <CrossIcon /></button>
          </article>

          <section className='py-4 px-4 flex justify-between'>
            <span className='text-gray-400'>5 items left</span>
            <button className='text-gray-400'>clear completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4 mt-8">
        <div className='bg-white p-4 rounded-md flex justify-center gap-4'>
          <button className='hover:text-blue-600' >All</button>
          <button className='hover:text-blue-600'>Active</button>
          <button className='hover:text-blue-600'>Completed</button>
        </div>
      </section>

      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  )
}

export default App
