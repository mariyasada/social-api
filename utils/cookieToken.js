const cookieToken = (user) => {
  const token = user.getJwtToken();
  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    // httpOnly: true,
    // secure: true,
    // sameSite: "none",
  };
  return { token, options };
};

module.exports = cookieToken;
