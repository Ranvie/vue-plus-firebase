class CustomLocalStorage
{
  constructor(){

  }

  getItem(key){
    return localStorage.getItem(key);
  }

  getKey(key, name){
    return JSON.parse(localStorage.getItem(key))[name];
  }

  removeItem(key){
    localStorage.removeItem(key);
  }

  isExpired(key){
    let expireDate = new Date(this.getKey(key, 'expire')).toLocaleString('sv');
    let now = new Date().toLocaleString('sv');

    return now > expireDate;
  }

  setItem(key, value, expire){
    localStorage.setItem(key, JSON.stringify({ value: value, expire: this.expireDate(expire) }));
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
      case 'h': date.setHours(date.setHours() + unit);       break;
      case 'D': date.setHours(date.getHours() + unit*24);    break;
      case 'M': date.setMonth(date.getMonth() + unit);       break;
      case 'Y': date.getFullYear(date.setFullYear() + unit); break;
    }

    return date;
  }
}

export default new CustomLocalStorage;