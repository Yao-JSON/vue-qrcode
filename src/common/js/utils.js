export function formatDate (time, fmt) {
  let date = new Date(time);
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  };
  let reg = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in reg) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = reg[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};
/*
* 解析url参数
* @example ?id=12345&a=b
* @return Object {id:12345,a:b}
* */

export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.map((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};

/*
*  数据存储
*  @param id
*  @param key
*  @param value
* */
export function saveToLoacl (id, key, value) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  localStorage.__seller__ = JSON.stringify(seller);
}
/*
*  数据读取
*  @param id
*  @param key
*  @param value
* */
export function loadFromLoacl(id, key, def) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
};

