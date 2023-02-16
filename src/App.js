import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/navBar/NavBar";
import { AUTH_Context } from "./context";
import "./styles/App.css"


/* 
[] - вынести все фильтры в боковую панель и закрепить
[+] - чекбокс для инфинит скрола
[] - страница About
[] - страница Error
[+] - скрывать страницы при поиске
[] - кнопка для скролла в начало страницы
[] - стили для коментов поста
*/


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AUTH_Context.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
    }}>
      <BrowserRouter >
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AUTH_Context.Provider>
  )
}

export default App;


