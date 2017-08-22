export const serializeObjectToQuery = (obj, prefix) => {
  let str = [];

  for(const p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];

      str.push((v !== null && typeof v === "object") ?
        serializeObjectToQuery(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
};
