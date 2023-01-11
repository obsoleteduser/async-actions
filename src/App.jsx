
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { AddPage } from './pages/AddPage'
import { Customers } from './pages/Customers'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Customers></Customers>}></Route>
          <Route path='/add' element={<AddPage></AddPage>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
