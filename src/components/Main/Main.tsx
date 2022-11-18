import classes from "./Main.module.scss";
import { Form } from "../Form/Form";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("login");
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.overlay} />
      <Routes>
        <Route path="/login" element={<Form createAccount />} />
        <Route path="/registration" element={<Form />} />
      </Routes>
    </div>
  );
};
