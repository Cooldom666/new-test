
// Inside src/App.js
  
import React from "react";
import "./App.css";
  
function App() {
  return (
    <>
      <p className="title">Регистрация.</p>
  
      <form className="App">
        Имя
        <input type="text" name="name" />
        Email
        <input type= "email" email="email" />
        Пароль
        <input type= "password" Пароль="password" />
        <input type={"submit"} 
          style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
  
export default App;