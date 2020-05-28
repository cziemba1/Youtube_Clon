export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Log In" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
