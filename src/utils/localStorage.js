// write three functions we want for the localStorage and we export them right away
export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user)); //because we only can store JSON in the localStorage (send user object to server)
};

//when user logs out we want to remove the user from localStorage
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
//if the user is in the localStorage we parse the result and if not we want to return null (get user object data from server)
export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null; //When the user is not logged yet or when the user is logged out then the user object is null.
  return user;
};
