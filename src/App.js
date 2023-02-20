import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/navBar/NavBar";
import { AUTH_Context } from "./context";
import "./styles/App.css"


/* 

[] - вынести все фильтры в боковую панель и закрепить, добавить глобалиные стили 
[] - стили для коментов поста
[] - страница About
[+] - валидация формы
[+] - отправлять данные при регистрации на почту 
[+] - после регистрации перекидывать на логин
[+] - рефактор createNewUser
[+] - страница Login/ Registration
[+] - чекбокс для инфинит скрола
[+] - страница Error
[+] - скрывать страницы при поиске
[+] - кнопка для скролла в начало страницы
*/


function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [authUsers, setAuthUser] = useState([{ mail: "user@.com", username: "user", password: "user" }])


  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (localStorage.getItem("usersData")) {
      setAuthUser(JSON.parse(localStorage.getItem("usersData")))
    }
  }, [])




  return (
    <AUTH_Context.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      authUsers,
      setAuthUser,
    }}>
      <BrowserRouter >
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AUTH_Context.Provider>
  )
}

export default App;


