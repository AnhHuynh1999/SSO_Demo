export const customMapSelect = (list = [], label = "name", value = "id") => {
  return list.map((item) => ({
    ...item,
    label: item[label],
    value: item[value],
  }));
};
