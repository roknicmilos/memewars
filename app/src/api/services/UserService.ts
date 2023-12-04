import { User } from "@/api/models/User";


export const UserService = {

  mapURLQueryParamsToUser(params: URLSearchParams): User {
    this._validateUserURLQueryParams(params);
    return {
      token: params.get("token")!,
      id: parseInt(params.get("id")!),
      email: params.get("email")!,
      firstName: params.get("first_name")!,
      lastName: params.get("last_name")!,
      imageURL: params.get("image_url") || "",
    };
  },

  _validateUserURLQueryParams(params: URLSearchParams): void {
    const requiredParamKeys = [ "token", "email", "first_name", "last_name" ];
    requiredParamKeys.forEach(paramKey => {
      if (!params.has(paramKey)) {
        throw Error(`Missing URL query parameter "${ paramKey }"`);
      }
    });
  },

  saveUserToLocalStorage(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
  },

  getUserFromLocalStorage(): User {
    const jsonUser = localStorage.getItem("user");
    return jsonUser ? JSON.parse(jsonUser) : null;
  },

  deleteUserFromLocalStorage(): void {
    localStorage.removeItem("user");
  },

};
