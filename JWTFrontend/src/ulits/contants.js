export const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const regexPhone =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const mapSelectCustom = (list = [], label = "name", value = "id") => {
  return list.map((item) => ({
    ...item,
    label: item[label],
    value: item[value],
  }));
};

export const listSex = [
  {
    label: "Nam",
    value: 1,
  },
  {
    label: "Nữ",
    value: 0,
  },
  {
    label: "Khác",
    value: 2,
  },
];
