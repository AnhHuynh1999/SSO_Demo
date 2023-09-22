const isLogin = (req, res, next) => {
  console.log("check path name ", req.path);
  console.log("check req", req.isAuthenticated());
  if (req?.isAuthenticated()) {
    if (req.path === "/login") {
      res.redirect("/");
    }
    //req.isAuthenticated() will return true if user is logged in
    next();
  } else {
    if (req.path === "/login") {
      next();
    } else {
      res.redirect("/login");
    }
  }
};

module.exports = {
  isLogin,
};
