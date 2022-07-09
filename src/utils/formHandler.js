export  const formChangeHandler = (e, form , setForm) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};