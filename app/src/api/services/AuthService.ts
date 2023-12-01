import { APIClient } from "@/api/APIClient";


export const AuthService = {

  getLoginURL(): string {
    const URLqueryParams = new URLSearchParams({
      login_success_redirect_url: `${ process.env.NEXT_PUBLIC_APP_URL }/login-success/`,
      login_failure_redirect_url: `${ process.env.NEXT_PUBLIC_APP_URL }/login-error/`,
    });
    return `${ process.env.NEXT_PUBLIC_API_URL }/google-auth/login/?${ URLqueryParams.toString() }`;
  },

  async logout(): Promise<void> {
    await APIClient.get("/logout/");
  },

};
