import { FormProvider, useForm } from "react-hook-form";
import "./LoginRegister.scss";
import CustomInput from "../../components/CustomInput";
import { toast } from "react-toastify";
import { regexEmail } from "../../ulits/contants";

const LoginRegister = () => {
  const methodLogin = useForm();
  const methodRegister = useForm();

  const onHandleButton = (signUp) => {
    methodLogin.clearErrors();
    methodRegister.clearErrors();
    methodLogin.reset({})
    methodRegister.reset({});
    const container = document.getElementById("container");
    if (signUp) {
      container.classList.add("right-panel-active");
    } else {
      container.classList.remove("right-panel-active");
    }
  };

  const onRegister = async (values) => {
    try {
      console.log("check registration", values);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onLogin = async (values) => {
    try {
      console.log("check login", values);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div id="login-register">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <FormProvider {...methodRegister}>
            <form onSubmit={methodRegister.handleSubmit(onRegister)}>
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <CustomInput
                filed={"username"}
                type="text"
                placeholder="Name"
                validate={{
                  required: "Bắt buộc nhập tên tài khoản",
                }}
              />
              <CustomInput
                filed={"email"}
                type="text"
                placeholder="Email"
                validate={{
                  required: "Bắt buộc nhập email",
                  pattern: {
                    value: regexEmail,
                    message: "Email không đúng định dạng",
                  },
                }}
              />
              <CustomInput
                filed={"password"}
                type="password"
                placeholder="Password"
                validate={{
                  required: "Bắt buộc nhập mật khẩu",
                }}
              />
              <button type="submit">Sign Up</button>
            </form>
          </FormProvider>
        </div>
        <div className="form-container sign-in-container">
          <FormProvider {...methodLogin}>
            <form onSubmit={methodLogin.handleSubmit(onLogin)}>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <CustomInput
                filed={"valueLogin"}
                type="text"
                placeholder="Email"
                validate={{
                  required: "Bắt buộc nhập email",
                }}
              />
              <CustomInput
                filed={"password"}
                type="password"
                placeholder="Password"
                validate={{
                  required: "Bắt buộc nhập mật khẩu",
                }}
              />
              <a href="#">Forgot your password?</a>
              <button type="submit">Sign In</button>
            </form>
          </FormProvider>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => onHandleButton(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => onHandleButton(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
