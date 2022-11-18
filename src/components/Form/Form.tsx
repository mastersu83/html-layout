import { ChangeEvent, FC, FormEvent, useState } from "react";
import classes from "./Form.module.scss";
import { ArrowIcon, FBIcon, GoogleIcon, VKIcon } from "../common";

interface FormPropsTypes {
  createAccount: boolean;
  setFormContent: () => void;
}

export const Form: FC<FormPropsTypes> = ({ createAccount, setFormContent }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {} = e;
    console.log(inputs);
  };

  // console.log(inputs);
  return (
    <div className={classes.form__wrapper}>
      <div className={classes.goBackArrow}>
        <ArrowIcon />
      </div>
      <span className={classes.form__title}>
        {createAccount ? "ВОЙТИ" : "БЕСПЛАТНАЯ РЕГИСТРАЦИЯ"}
      </span>
      <form onSubmit={onSubmit} className={classes.form__inner}>
        <input
          onChange={onChange}
          name="email"
          className={classes.form__input}
          type="email"
          placeholder="E-mail"
          value={inputs.email}
          required
        />
        <input
          onChange={onChange}
          name="password"
          className={classes.form__input}
          type="password"
          placeholder="Пароль"
          value={inputs.password}
          required
        />
        {createAccount && (
          <button type="button" className={classes.form__restore}>
            ВОССТАНОВИТЬ ПАРОЛЬ
          </button>
        )}
        <button
          disabled={inputs.email.length === 0 || inputs.password.length < 5}
          type="submit"
          className={`${classes.form__button} ${
            inputs.email.length && inputs.password.length > 4
              ? classes.activeBtn
              : ""
          }`}
        >
          {createAccount ? "ВОЙТИ" : "СОЗДАТЬ АККАУНТ"}
        </button>
      </form>
      <div className={classes.social}>
        <a href="https://www.facebook.com/">
          <button className={`${classes.social__btn} ${classes.social__fb}`}>
            <FBIcon />
          </button>
        </a>
        <a href="https://www.google.ru/">
          <button
            className={`${classes.social__btn} ${classes.social__google}`}
          >
            <GoogleIcon />
          </button>
        </a>
        <a href="https://vk.com/">
          <button className={`${classes.social__btn} ${classes.social__vk}`}>
            <VKIcon />
          </button>
        </a>
      </div>
      <button onClick={setFormContent} className={classes.createAccount}>
        {createAccount ? "СОЗДАТЬ АККАУНТ" : "У МЕНЯ УЖЕ ЕСТЬ АККАУНТ"}
      </button>
      {!createAccount && (
        <div className={classes.agreement}>
          Регистрируясь, ты соглашаешься с условиями
          <br />
          <a className={classes.agreement} href="/">
            Лицензионного соглашения
          </a>
          <br />и{" "}
          <a className={classes.agreement} href="/">
            Положения о защите персональных данных
          </a>
        </div>
      )}
    </div>
  );
};
