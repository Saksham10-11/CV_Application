const validatePhone = (phone) => {
  let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);

  if (phone == null) {
    return "false";
  }

  if (regex.test(phone) == true) {
    return "true";
  } else {
    return "false";
  }
};

export default validatePhone;
