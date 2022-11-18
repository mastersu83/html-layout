import { useState } from "react";
import classes from "./Main.module.scss";
import { Form } from "../Form/Form";

export const Main = () => {
  const [formContent, setFormContent] = useState(true);

  const formContentToggle = () => {
    setFormContent(!formContent);
  };

  return (
    <div className={classes.main}>
      <div className={classes.overlay} />
      <Form createAccount={formContent} setFormContent={formContentToggle} />
    </div>
  );
};
