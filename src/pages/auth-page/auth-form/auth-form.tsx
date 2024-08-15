import React from "react";
import Typography from "@mui/material/Typography";
import Textfield from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from "react-hook-form";
import "./auth-form.css";
import { passwordValidation, loginValidation } from "./validation";

interface ILoginForm {
  login: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const { handleSubmit, control } = useForm<ILoginForm>();
  const { errors } = useFormState({ control });

  const onSubmit: SubmitHandler<ILoginForm> = (data) =>
    console.log("onSubmit", data);

  return (
    <div className="auth-form">
      <Typography variant="h4" gutterBottom={true} component="div">
        Login
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom={true}
        component="div"
        className="auth-form_subtitle"
      >
        To get access
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className="auth-form_form">
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field: { onChange, onBlur, value } }) => (
            <Textfield
              label="Nickname"
              size="small"
              margin="normal"
              className="auth-form_input"
              fullWidth={true}
              onChange={onChange}
              value={value}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            ></Textfield>
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field: { onChange, onBlur, value } }) => (
            <Textfield
              label="Password"
              type="password"
              size="small"
              margin="normal"
              className="auth-form_input"
              fullWidth={true}
              onChange={onChange}
              value={value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            ></Textfield>
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};
export default AuthForm;
