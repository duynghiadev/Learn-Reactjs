import _ from "lodash";

export function isDev() {
  const dev = process.env.NODE_ENV !== "production";
  return dev;
}

declare global {
  interface String {
    imageSrc(width: number, height?: number): string;

    staticImage(): string;

    toTitleCase(): string;

    buildQuery(data: any, prefixQuery: string): string;

    buildParams(data: any, prefixQuery: string): string;

    toFriendlyUrl(): string;

    textIndex(): Array<string>;

    toGuid(): string;

    log(message?: any, ...optionalParams: any[]): void;
  }

  interface Number {
    format(formatPatern?: any): string;

    formatFeetInch(): string;

    toFeetInch(): { feet: number; inches: number };
  }
}

// String.prototype.imageSrc = function (width: number, height?: number) {
//   const prefix = appSettings.serverInfo.nextJsAppURL;
//   if (width) {
//     height = height || (width / (16 / 9));
//     return `${prefix}/static/images/${width}/${height}/${this}`
//   }

//   return `/images/${this}`;
// }

String.prototype.staticImage = function () {
  if (!Boolean(this)) return "";

  const imageFileName = this.split("/").pop();
  return `/images/${imageFileName}`;
};

String.prototype.toTitleCase = function () {
  let str = this.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

// Number.prototype.format = function (formatPatern) {
//   const number = numeral(this || 0);
//   if (formatPatern)
//     return number.format(formatPatern)
//   return number.format();
// }

Number.prototype.formatFeetInch = function () {
  const centi = Number(this);
  const feet = Math.round(centi / 2.54 / 12);
  const inches = Math.round(centi / 2.54 - feet * 12);
  return `${feet}'${inches}"`;
};

// Number.prototype.toFeetInch = function () {
//   const centi = this;
//   let inches = centi / 2.54;
//   const feet = _.toInteger((inches / 12));
//   inches = Math.round(inches - (feet * 12));

//   return {
//     feet,
//     inches
//   }
// }

String.prototype.buildQuery = function (data: any, prefixQuery = "?") {
  // If the data is already a string, return it as-is
  if (typeof data === "string") return data;

  // Create a query array to hold the key/value pairs
  var query = [];

  // Loop through the data object
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      // Encode each key and value, concatenate them into a string, and push them to the array
      query.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key] || "")
      );
    }
  }

  // Join each item in the array with a `&` and return the resulting string
  return `${this}${prefixQuery}${query.join("&")}`;
};

// String.prototype.buildParams = function (data, prefixParams = ':') {
//   let str = this || '';
//   // If the data is already a string, return it as-is
//   if (typeof (data) === 'string')
//     return data;
//   // Create a query array to hold the key/value pairs
//   // Loop through the data object
//   for (var key in data)
//     str = str.replace(`${prefixParams}${key}`, (data[key] || ''))
//   // Join each item in the array with a `&` and return the resulting string
//   return str
// };

// if (typeof (document) !== "undefined") {
//   Storage.prototype.get = key => {
//     return JSON.parse((localStorage.getItem(key) || "null"));
//   }

//   Storage.prototype.set = (key, value) => {
//     return localStorage.setItem(key, JSON.stringify(value || '{}'));
//   }
// }

function changeAlias(alias: string, replaceString = "-") {
  var str = alias || "";
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ""
  );
  str = str.replace(/ + /g, "");
  str = str.replace(/ /g, replaceString);
  str = str.trim();
  return str;
}

// String.prototype.toFriendlyUrl = function () {
//   return changeAlias(this);
// }

// String.prototype.textIndex = function () {
//   return changeAlias(this).split('-');
// }

function createGuid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-4" +
    S4().substr(0, 3) +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  ).toLowerCase();
}

String.prototype.toGuid = function () {
  return createGuid();
};

String.prototype.log = function (message?: any, ...optionalParams: any[]) {
  return process.env.NODE_ENV && console.log(message, ...optionalParams);
};
