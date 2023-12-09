export const logout = () => {
  // Clear localStorage
  localStorage.removeItem("currentUser");

  // Clear cookies
  document.cookie =
    "dreamHomeAccessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  // your logout logic here
};
