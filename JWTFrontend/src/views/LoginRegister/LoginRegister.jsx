import { FormProvider, useForm } from "react-hook-form";
import "./LoginRegister.scss";
import CustomInput from "../../components/CustomInput";
import { toast } from "react-toastify";
import { regexEmail, regexPhone } from "../../ulits/contants";
import { useNavigate } from "react-router-dom";
import userAction from "../../actions/userAction";
import authService from "../../sevices/authService";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";

const LoginRegister = () => {
  const navigate = useNavigate();
  const methodLogin = useForm();
  const methodRegister = useForm();
  const dispatch = useDispatch();

  const onRegister = async (values) => {
    try {
      await authService.register(values);
      toast.success("Đăng ký thành công");
      methodRegister.clearErrors();
      methodRegister.reset({});
      handleShowForm(true);
      handleShowForm(true, 2);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onLogin = async (values) => {
    try {
      dispatch(userAction.login(values));
      toast.success("Đăng nhập thành công");
      navigate("/users");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleShowForm = (isLogin, type) => {
    methodLogin.clearErrors();
    methodRegister.clearErrors();
    methodLogin.reset({});
    methodRegister.reset({});
    const container = document.querySelector(".container");
    if (!isLogin) {
      container.classList.add(`sign-up-mode${type || ""}`);
    } else {
      container.classList.remove(`sign-up-mode${type || ""}`);
    }
  };

  const handleSuccess = () => {};

  const handleFailure = () => {};

  return (
    <div id="login-register">
      <div className="container">
        <div className="signin-signup">
          <FormProvider {...methodLogin}>
            <form
              className="sign-in-form"
              onSubmit={methodLogin.handleSubmit(onLogin)}
            >
              <h2 className="title">Đăng nhập</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <CustomInput
                  type="text"
                  placeholder="Username"
                  field={"valueLogin"}
                  validate={{
                    required: "Bắt buộc nhập tên tài khoản",
                  }}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <CustomInput
                  type="password"
                  placeholder="Password"
                  field={"password"}
                  validate={{
                    required: "Bắt buộc nhập mật khẩu",
                  }}
                />
              </div>
              <button type="submit" className="btn">
                Đăng nhập
              </button>
              <p className="social-text">Hoặc đăng nhập bằng cách khác</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="account-text">
                Nếu không có tài khoản?{" "}
                <a
                  href="#"
                  id="sign-up-btn2"
                  onClick={() => handleShowForm(false, 2)}
                >
                  Đăng ký
                </a>{" "}
              </p>
            </form>
          </FormProvider>

          <FormProvider {...methodRegister}>
            <form
              className="sign-up-form"
              onSubmit={methodRegister.handleSubmit(onRegister)}
            >
              <h2 className="title">Đăng ký</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <CustomInput
                  type="text"
                  placeholder="Username"
                  field={"username"}
                />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <CustomInput
                  type="text"
                  placeholder="Email"
                  field={"email"}
                  validate={{
                    required: "Bắt buộc nhập email",
                    pattern: {
                      value: regexEmail,
                      message: "Email không đúng định dạng",
                    },
                  }}
                />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-phone"></i>
                <CustomInput
                  type="text"
                  placeholder="Phone"
                  field={"phone"}
                  validate={{
                    required: "Bắt buộc nhập số điện thoại",
                    pattern: {
                      value: regexPhone,
                      message: "Số điện thoại không đúng định dạng",
                    },
                  }}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <CustomInput
                  type="password"
                  placeholder="Password"
                  field={"password"}
                  validate={{
                    required: "Bắt buộc nhập mật khẩu",
                  }}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <CustomInput
                  type="password"
                  placeholder="Password"
                  field={"reenterPassword"}
                  validate={{
                    required: "Bắt buộc nhập mật khẩu",
                    validate: {
                      confirmPassword: (v) =>
                        methodRegister.watch("password") === v ||
                        "Mật khẩu không trùng khớp",
                    },
                  }}
                />
              </div>
              <button type="submit" className="btn">
                Đăng ký
              </button>
              <p className="social-text">Hoặc đăng nhập bằng cách khác</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <GoogleLogin
                  clientId={`${import.meta.env.VITE_APP_CLIENT_ID}`}
                  buttonText="Sign in with Google"
                  onSuccess={handleSuccess}
                  onFailure={handleFailure}
                  cookiePolicy="single_host_origin"
                />
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="account-text">
                Đã có tài khoản ?{" "}
                <a
                  href="#"
                  id="sign-up-btn2"
                  onClick={() => handleShowForm(true, 2)}
                >
                  Đăng nhập
                </a>{" "}
              </p>
            </form>
          </FormProvider>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Bạn đã có tài khoản</h3>
              <p>Để có thể đăng nhập bạn vào đây nè </p>
              <button className="btn" onClick={() => handleShowForm(true)}>
                Đăng nhập
              </button>
            </div>
            <img src="" alt="" className="image" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Đăng ký tài khoản</h3>
              <p>Để trở thành thành viên của tôi thì bạn vào đây nè </p>
              <button className="btn" onClick={() => handleShowForm(false)}>
                Đăng ký
              </button>
            </div>
            <img src="" alt="" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
