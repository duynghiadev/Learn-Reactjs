import cookies from "next-cookies";
import { Cookies } from "react-cookie";
import redirectTo from "./redirectTo";
import authenticateSettings from "../fileSettings/authenticateSettings.json";
import appRoutes from "../routers/router";

function getAuthorizeRoutes() {
  const excepts = [appRoutes.login.path, appRoutes.forgotPassword.path];

  let authorizeRoutes = [];
  for (const routeField in appRoutes) {
    const _getKeyValue_ = (key: string) => (obj: Record<string, any>) =>
      obj[key];
    const route = _getKeyValue_(routeField)(appRoutes);
    if (!excepts.includes(route.path)) authorizeRoutes.push(route.path);
  }
  return authorizeRoutes;
}

export default async function handleAuthSSR(ctx: {
  pathname?: any;
  req: any;
  res?: any;
}) {
  const authorizeRoutes = getAuthorizeRoutes();
  let token = null;
  if (authorizeRoutes.includes(ctx.pathname)) {
    if (ctx.req) {
      const appCookie = cookies(ctx)[authenticateSettings.tokenName];
      token = appCookie;
    } else {
      const cookies = new Cookies();
      token = cookies.get(authenticateSettings.tokenName);
    }

    const isAthorized = Boolean(token);
    console.log("Authoraized Status :", isAthorized);
    // if (!isAthorized) redirectTo(appRoutes.login, { res: ctx.res });
  }
}
