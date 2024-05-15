/* eslint-disable */
export const handleSubmit = function (e, mutate) {
  e.preventDefault();
  mutate();
};

export const handleChange = function (e, set) {
  const { name, value } = e.target;
  set(function (prevState) {
    return { ...prevState, [name]: value };
  });
};
