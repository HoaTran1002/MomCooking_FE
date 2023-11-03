// import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import { PublicRoute } from './routes/Routes'
import { IPramsRoute } from './routes/routes.interface'
function App() {

  return (
    <Routes>
        {
          PublicRoute.map((r:IPramsRoute,index:number)=>(
            <Route key={index} path={r.path} element={r.element} />
          ))
        }
    </Routes>
  )
}

export default App
