import { BrowserRouter, Redirect, Switch, Route, Router } from 'react-router-dom'

import { Header } from '@/components/Header'
import { Home } from '@/pages'
import { StarIcon } from '@heroicons/react/solid'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="h-screen flex flex-col">
        <main className="container p-4 mb-20 mx-auto">
          <Header />
          <Route exact path="/" component={Home} />
        </main>

        <footer className="fixed bottom-0 flex flex-col w-full justify-center items-center bg-black text-white text-center text-sm p-1">
          <small className="flex flex-row items-center">
            <StarIcon className="h-2 w-2" />
            十萬塊的星之碎片製作出品 ver 0.1
            <StarIcon className="h-2 w-2" />
          </small>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
