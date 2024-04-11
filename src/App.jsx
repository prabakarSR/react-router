import { Routes, Route, Link } from "react-router-dom"
import './index.css'
import All from "./Pages/All"
import Career from "./Pages/Career"
import Cyper from "./Pages/Cyper"
import Data from "./Pages/Data"
import Full from "./Pages/Full"


function App() {
  

  return (
    <>
    <div>
      <div className="nav">
        <Link className="link" to={'/'}>ALL</Link>
        <Link className="link" to={'/fullstack development'}>FULL STACK DEVELOPMENT</Link>
        <Link className="link" to={"/Data science"}>DATA SCIENCE</Link>
        <Link className="link" to={"/cyper security"}>CYPER SECURITY</Link>
          <Link className="link" to={"/career"}>CAREER</Link>
        </div>
      <div className="line"></div>
       <Routes>
      <Route Component={All} path="/" />
      <Route Component={Full} path="/fullstack development" />
      <Route Component={Data} path="/Data science" />
      <Route Component={Cyper} path="/cyper security" />
       <Route Component={Career} path="/career" />
    </Routes>
      </div>
      
    </>
  )
}

export default App
