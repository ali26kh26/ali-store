import http from "./httpService";

export const editUser = (data) => {
  return http.post("/user/register", data);
};
