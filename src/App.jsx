import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Welcome from "./pages/Welcome"
import UserInfo from "./pages/UserInfo"
import { UserContext, UserProvider } from "./context/UserContext"
import Counter from "./pages/Counter"
import Posts from "./pages/Posts"


function App() {

  return (
    <UserProvider >
    <Routes>
      <Route path="/*" element={<ErrorPage />}/>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome name='Flan' age={20} city='casa'/>} />
      <Route path="/user-info" element={<UserInfo name='Flan' age={20} city='casa' email='email@demo.com' id={1} role='teacher'
       />}/>
       <Route path="/counter" element={<Counter />}/>
       <Route path="/posts" element={<Posts />}/>
    </Routes>
    </UserProvider>
  )
}

export default App
