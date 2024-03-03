import cookies from "next-cookies";
import authenticateSettings from "../fileSettings/authenticateSettings.json";
import jwtDecode from "jwt-decode";

const ssrCookieHelpers = {
  getCookies(ctx: {
    req?: { headers: { cookie?: string | undefined } } | undefined;
  }) {
    const cookieObject = cookies(ctx);
    let cookiesResults = {};
    return cookiesResults;
  },

  getAuthCookies(ctx: {
    req?: { headers: { cookie?: string | undefined } } | undefined;
  }) {
    const cookieObject = cookies(ctx);
    let cookiesResults: any = {};

    if (cookieObject[authenticateSettings.tokenName]) {
      cookiesResults[authenticateSettings.tokenName] =
        cookieObject[authenticateSettings.tokenName];
      cookiesResults[authenticateSettings.authHeaderName] =
        cookieObject[authenticateSettings.tokenName];
    }

    return cookiesResults;
  },

  getTokenPayload(ctx: any) {
    return jwtDecode(this.getAuthCookies(ctx)[authenticateSettings.tokenName]);
  },
};
export default ssrCookieHelpers;
