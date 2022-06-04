const maskedPhone = (phone: number | undefined) => {
  if (phone===undefined) {
    return phone;
  }
  const newPhone = phone.toString();
  const DDD = newPhone.slice(0, 2);
  const quintet = newPhone.slice(2, 6);
  const quartet = newPhone.slice(6, 10);
  return `(${DDD}) ${quintet}-${quartet}`;
};

export default maskedPhone;
