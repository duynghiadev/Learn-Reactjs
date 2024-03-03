var helpers: any = {};
helpers = {
  /**
   * Sets a cookie value for given key.
   * @param {string} key
   * @param {string} value
   * @param {Date} expireDate (optional). If not specified the cookie will expire at the end of session.
   * @param {string} path (optional)
   */
  setCookieValue(
    key: string | number | boolean,
    value: string | number | boolean,
    expireDate: { toUTCString: () => string },
    path: string,
    domain: string
  ) {
    var cookieValue = encodeURIComponent(key) + "=";

    if (value) {
      cookieValue = cookieValue + encodeURIComponent(value);
    }

    if (expireDate) {
      cookieValue = cookieValue + "; expires=" + expireDate.toUTCString();
    }

    if (path) {
      cookieValue = cookieValue + "; path=" + path;
    }

    if (domain) {
      cookieValue = cookieValue + "; domain=" + domain;
    }

    document.cookie = cookieValue;
  },
  _appPath: "/",
  _domain: "",
  _tokenCookieName: "Vastbit.AuthToken",
  setToken(authToken: any) {
    const date = new Date();
    // Get unix milliseconds at current time plus number of days
    date.setTime(+date + 365 * 86400000); //24 * 60 * 60 * 1000

    const expireDate = date;
    this.setCookieValue(
      this._tokenCookieName,
      authToken,
      expireDate,
      this._appPath,
      this._domain
    );
  },
  getToken() {
    return this.getCookieValue(this._tokenCookieName);
  },

  /**
   * Gets a cookie with given key.
   * @param {string} key
   * @returns {string} Cookie value or null
   */
  getCookieValue(key: string) {
    var equalities = document.cookie.split("; ");
    for (var i = 0; i < equalities.length; i++) {
      if (!equalities[i]) {
        continue;
      }

      var splitted = equalities[i].split("=");
      if (splitted.length != 2) {
        continue;
      }

      if (decodeURIComponent(splitted[0]) === key) {
        return decodeURIComponent(splitted[1] || "");
      }
    }

    return null;
  },

  /**
   * Deletes cookie for given key.
   * @param {string} key
   * @param {string} path (optional)
   */
  deleteCookie(key: string | number | boolean, path: string) {
    var cookieValue = encodeURIComponent(key) + "=";

    cookieValue =
      cookieValue +
      "; expires=" +
      new Date(new Date().getTime() - 86400000).toUTCString();

    if (path) {
      cookieValue = cookieValue + "; path=" + path;
    }

    document.cookie = cookieValue;
  },
  // decodeEntities(encodedString: string) {
  //   if (!Boolean(encodedString)) return "";

  //   var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  //   var translate = {
  //     nbsp: " ",
  //     amp: "&",
  //     quot: '"',
  //     lt: "<",
  //     gt: ">",
  //   };

  //   const results = encodedString
  //     .replace(translate_re, function (match: any, entity: string | number) {
  //       return translate[entity];
  //     })
  //     .replace(/&#(\d+);/gi, function (match: any, numStr: string) {
  //       var num = parseInt(numStr, 10);
  //       return String.fromCharCode(num);
  //     });

  //   return results;
  // },
  replaceWithParams(
    str: string,
    params: { [x: string]: any; hasOwnProperty: (arg0: string) => any },
    prefix = ":"
  ) {
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const element = params[key];
        str = str.replace(`${prefix}${key}`, element);
      }
    }
    return str;
  },
  // buildQuery(data: {
  //   [x: string]: string | number | boolean;
  //   hasOwnProperty: (arg0: string) => any;
  // }) {
  //   // If the data is already a string, return it as-is
  //   if (typeof data === "string") return data;

  //   // Create a query array to hold the key/value pairs
  //   var query = [];

  //   // Loop through the data object
  //   for (var key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       // Encode each key and value, concatenate them into a string, and push them to the array
  //       query.push(
  //         encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //       );
  //     }
  //   }

  //   // Join each item in the array with a `&` and return the resulting string
  //   return query.join("&");
  // },
};

export default helpers;
