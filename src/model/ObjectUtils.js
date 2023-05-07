class ObjectUtils
{
  getKeyValue(obj, keyPath = "")
  {
    if(keyPath === "") { return obj; }

    let keys = keyPath.split(/\[([\d]+)\]|\./).filter(element => element != undefined && element != '');
    
    let data = obj[keys[0]];
    let skipFirstKey = true;

    for(let key of keys)
    {
      if(skipFirstKey)  { skipFirstKey = false; continue; }
      if(data === undefined) { break; }

      data = data[key];
    }

    return data;
  }
}

export default new ObjectUtils;