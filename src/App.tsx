import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter"
import ChatPage from "./Components/ChatPage"
import { data } from "./Components/Data"

const App = () => {
  return (
    <BrowserRouter>
      <ChatPage />
    </BrowserRouter>
  )
}

export default App