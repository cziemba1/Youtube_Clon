import routes from "../routes";

/*------JOIN Controller------*/
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  console.log(req);
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password == password2) {
    res.redirect(routes.home);
  } else {
    res.status(400);
    res.render("home", { pageTitle: "Join" });
  }
};

/*------LOG IN Controller------*/
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Log In" });
};

export const postLogin = (req, res) => {
  res.render("home", { pageTitle: "Log in" });
};

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
