import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const CustomSelect = ({ list = [], field, validate = {}, rest }) => {
  const methods = useFormContext();
  useEffect(() => {
    methods.register(field, validate);
  }, [field, validate]);
  return (
    <select
      value={methods.watch(field) || ""}
      onChange={(e) => {
        methods.clearErrors(field);
        methods.setValue(field, e.target.value);
      }}
      className="form-select"
      {...rest}
    >
      {list.map((item, index) => (
        <option key={`select-${index}`} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
