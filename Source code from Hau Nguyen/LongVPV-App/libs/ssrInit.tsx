import ssrCookieHelpers from "./ssrCookieHelpers"

export async function init(ctx: any, serverHandle: Function, clientHandle: Function, allowRunInApp = true) {
  if (ctx.req) {
    let __cookies = {
      ...ssrCookieHelpers.getCookies(ctx),
      ...ssrCookieHelpers.getAuthCookies(ctx)
    };

    if (allowRunInApp) {

    }

    const params = {
      ...ctx.query.params,
      ...ctx.query.query
    }

    return await serverHandle(params || {}, __cookies);
  }

  if (allowRunInApp) {

  }

  return await clientHandle(ctx.query)
}