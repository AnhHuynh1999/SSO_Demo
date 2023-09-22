import { Fragment, useEffect } from "react";
import { useFormContext } from "react-hook-form";

const CustomInput = ({ filed, validate, ...rest }) => {
  const methods = useFormContext();
  const { error } = methods.getFieldState(filed, methods.formState);

  useEffect(() => {
    methods.register(filed, validate);
  }, [filed, validate]);

  return (
    <Fragment>
      <input
        value={methods.watch(filed) || ""}
        onChange={(e) => {
          methods.clearErrors(filed);
          methods.setValue(filed, e.target.value);
        }}
        {...rest}
      />
      {error && <span className="text-required">{error.message}</span>}
    </Fragment>
  );
};

export default CustomInput;
