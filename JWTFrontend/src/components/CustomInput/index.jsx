import { Fragment, useEffect } from "react";
import { useFormContext } from "react-hook-form";

const CustomInput = ({ field, validate, ...rest }) => {
  const methods = useFormContext();
  const { error } = methods.getFieldState(field, methods.formState);

  useEffect(() => {
    methods.register(field, validate);
  }, [field, validate]);

  // const password_show_hide = () => {
  //   var x = document.getElementById("password");
  //   var show_eye = document.getElementById("show_eye");
  //   var hide_eye = document.getElementById("hide_eye");
  //   hide_eye.classList.remove("d-none");
  //   if (x.type === "password") {
  //     x.type = "text";
  //     show_eye.style.display = "none";
  //     hide_eye.style.display = "block";
  //   } else {
  //     x.type = "password";
  //     show_eye.style.display = "block";
  //     hide_eye.style.display = "none";
  //   }
  // };

  return (
    <Fragment>
      <input
        value={methods.watch(field) || ""}
        onChange={(e) => {
          methods.clearErrors(field);
          methods.setValue(field, e.target.value);
        }}
        {...rest}
      />
      {error && <span className="text-required">{error.message}</span>}
    </Fragment>
  );
};

export default CustomInput;
