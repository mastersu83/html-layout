import { FC } from "react";
import classes from "./Form.module.scss";
import { ArrowIcon, FBIcon, GoogleIcon, VKIcon } from "../common";
import { FieldValues, useForm } from "react-hook-form";

interface FormPropsTypes {
  createAccount: boolean;
  setFormContent: () => void;
}

export const Form: FC<FormPropsTypes> = ({ createAccount, setFormContent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ email: string; password: string }>();

  const onSubmit = (e: FieldValues) => {
    console.log(e);
  };

  console.log(errors);

  return (
    <div className={classes.form__wrapper}>
      <div className={classes.goBackArrow}>
        <ArrowIcon />
      </div>
      <span className={classes.form__title}>
        {createAccount ? "ВОЙТИ" : "БЕСПЛАТНАЯ РЕГИСТРАЦИЯ"}
      </span>
      <div className={classes.form__error}>
        {errors?.password && (
          <span>{errors?.password?.message || "Error"}</span>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form__inner}>
        <input
          {...register("email", {
            required: true,
          })}
          className={classes.form__input}
          type="email"
          placeholder="E-mail"
        />
        <div className={classes.form__error}>
          {errors?.email && <span>{errors?.email?.message || "Error"}</span>}
        </div>
        <input
          {...register("password", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: "Слишком короткий пароль",
            },
          })}
          className={classes.form__input}
          type="password"
          placeholder="Пароль"
        />
        {createAccount && (
          <button type="button" className={classes.form__restore}>
            ВОССТАНОВИТЬ ПАРОЛЬ
          </button>
        )}
        <button
          type="submit"
          className={`${classes.form__button} ${
            isValid ? classes.activeBtn : ""
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
