
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignDocument from './pages/SignDocument'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sign/:documentId/:email" element={<SignDocument />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </div>
  )
}

export default App
