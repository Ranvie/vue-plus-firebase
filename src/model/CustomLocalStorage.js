import objectUtils from "./ObjectUtils";

class CustomLocalStorage
{
  constructor(){

  }

  getItem(key){
    return localStorage.getItem(key);
  }

  getKey(key, keyPath){
    let data = JSON.parse(localStorage.getItem(key));

    return objectUtils.getKeyValue(data, keyPath);
  }

  removeItem(key){
    localStorage.removeItem(key);
  }

  isExpired(key){
    let expireDate = new Date(this.getKey(key, 'expire')).toLocaleString('sv');
    let now = new Date().toLocaleString('sv');

    return now > expireDate;
  }

  setItem(key, obj, expire = ''){
    localStorage.setItem(key, JSON.stringify({ value: obj, expire: this.expireDate(expire) }));
  }

  expireDate(expire){
    expire = expire.split(/(\D+|\d+)/g).filter(value => value != '');

    return this.parseToDateFromNow(expire[0], expire[1]).toLocaleString('sv');
  }

  parseToDateFromNow(unit, modifier){
    let date = new Date();
    unit = Number.parseInt(unit);

    switch(modifier){
      case 's': date.setSeconds(date.getSeconds() + unit);   break;
      case 'm': date.setMinutes(date.getMinutes() + unit);   break;
      case 'h': date.setHours(date.getHours() + unit);       break;
      case 'D': date.setHours(date.getHours() + unit*24);    break;
      case 'M': date.setMonth(date.getMonth() + unit);       break;
      case 'Y': date.setFullYear(date.getFullYear() + unit); break;
    }

    return date;
  }
}

export default new CustomLocalStorage;