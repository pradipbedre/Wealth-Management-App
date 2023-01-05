import Cookie from "js-cookie";

export const removeCookie = (cookiename) => {
  return Cookie.remove(cookiename);
};

export const setCookie = (cookiename, cookievalue) => {
  return Cookie.set(cookiename, cookievalue, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export const getCookie = (cookiename) => {
  return Cookie.get(cookiename);
};
