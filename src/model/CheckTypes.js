class CheckTypes
{
  possibleTypes(value = '')
  {
    const intFormat = /^[0-9]+$/;
    const floatFormat = /^-?\d+(?:[.,]\d+)?$/;
    const boolFormat = /^(?:true|false|0|1)$/;
    const dateFormat = /^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})$/;

    let types = ['STRING'];

    if(intFormat.test(value)) { types.push('INT') }
    if(floatFormat.test(value)) { types.push('FLOAT') }
    if(boolFormat.test(value.toLowerCase())) { types.push('BOOLEAN') }
    if(dateFormat.test(value)) { types.push("DATE") }

    return types;
  }
}

export default new CheckTypes