export const currentAge = () => {
  const today = new Date();
  const bday = new Date("1996/01/18");
  let age = today.getFullYear() - bday.getFullYear();
  const m = today.getMonth() - bday.getMonth();
  if (m < 0 || (m === 0 && today.getDay() < bday.getDay())) {
    age--;
  }
  return age;
};
