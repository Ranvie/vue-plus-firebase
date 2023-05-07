import checkTypes from "@/model/CheckTypes"

class SortList
{
  sort(list, orderBy){
    let sorted = list;

    sorted.sort((a, b) => {
      if(this.isNumber(a[orderBy])) {
        return this.evaluateHigher(Number.parseFloat(a[orderBy]), Number.parseFloat(b[orderBy]));
      }

      return a[orderBy].localeCompare(b[orderBy], 'sv');
    });

    return sorted;
  }

  isNumber(value){
    return checkTypes.possibleTypes(value).includes('INT') ||
      checkTypes.possibleTypes(value).includes('FLOAT');
  }

  evaluateHigher(a, b){
    if(a > b) {return 1;}
    if(a < b) {return -1;}

    return 0;
  }
}

export default new SortList;