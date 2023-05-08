class Paginate
{
  createSublist(list, offset, limit)
  {
    let sublist = [];
    let count = 0;

    for(let index = offset; index < list.length && count < limit; index++)
    {
      sublist.push(list[index]);
      count++;
    }

    return sublist;
  }
}

export default new Paginate;