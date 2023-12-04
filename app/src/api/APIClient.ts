import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { UserService } from "@/api/services/UserService";


export const APIClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

APIClient.interceptors.request.use(
  config => prepareRequest(config),
  error => Promise.reject(error)
);

APIClient.interceptors.response.use(
  (response) => response,
  error => handleResponseError(error)
);

export const prepareRequest = async (config: AxiosRequestConfig): Promise<any> => {
  const user = UserService.getUserFromLocalStorage();
  const authorizationHeaders = user ? { Authorization: `Bearer ${ user.token }` } : {};
  return {
    ...config,
    headers: {
      ...authorizationHeaders
    }
  };
};

export const handleResponseError = async (error: any): Promise<AxiosResponse> => {
  if (error.response.status === 401 && UserService.getUserFromLocalStorage()) {
    const originalRequest = error.config;
    originalRequest._retry = true;
    UserService.deleteUserFromLocalStorage();
    // TODO: refresh user in Header component since
    //  it will stay the same after this even if "user"
    //  is removed from local storage
    return APIClient(originalRequest);
  }
  return Promise.reject(error);
};
