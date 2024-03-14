const checkAuth = () => {
  const TOKEN = localStorage.getItem("token");
  const PUBLIC_ROUTES = ["login"];

  const isPublicPage = PUBLIC_ROUTES.some((r) =>
    window.location.href.includes(r)
  );

  if (!TOKEN && !isPublicPage) {
    window.location.href = "/login";
    return;
  } else {
    return TOKEN;
  }
};

export default checkAuth;
