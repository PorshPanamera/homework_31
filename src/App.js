import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const Errors = {};

    if (!name) {
      Errors.name = "Пожалуйста введите своё имя";
    }

    const emailProp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      Errors.email = "Пожалуйста введите свою электронную почту";
    } else if (!emailProp.test(email)) {
      Errors.email = "Ошибка: Неправильный формат электронной почты";
    }

    const phoneProp = /^\d{12}$/;
    if (!phone) {
      Errors.phone = "Пожалуйста введите свой номер телефона";
    } else if (!phoneProp.test(phone)) {
      Errors.phone =
        "Ошибка: Номер телефона не должен включать в себя буквы и должен состоять из 12 цифр. Например: 380505550505";
    }

    return Errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert("Ваша форма успешно отправлена");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div id="form-style">
      <h1>Форма</h1>
      <form id="form-components-style" onSubmit={handleSubmit}>
        <div className="m-buttom">
          <label>Имя: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div className="m-buttom">
          <label>Електронная почта: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div className="m-buttom">
          <label>Телефон: </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="380505550505"
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;
