import customLocalStorage from "@/model/CustomLocalStorage"
import checkTypes from "@/model/CheckTypes"
import { getDocs, query, orderBy, startAfter, limit, setDoc, doc, collection } from 'firebase/firestore'

class DatabaseStorage
{
  isDataExistsAndNotExpiredLocal(key)
  {
    return customLocalStorage.getItem(key) && !customLocalStorage.isExpired(key);
  }

  saveToDatabase(database, collectionName, id, object)
  {
    return new Promise((resolve, reject) => {
      setDoc(doc(database, collectionName, id), {
        ...object
      }).then(() => {
        resolve(object)
      }).catch((err) => {
        reject(err)
      });
    })
  }

  readFromDatabase(database, collectionName, orderByKey = '', limitDoc = 10, cache = true, expire = '1h'){
    return new Promise((resolve, reject) => {
      let objs = [];

      const colec = collection(database, collectionName);
      let queryConfig;

      if(orderByKey != '')
      {
        queryConfig = query(colec, orderBy(orderByKey), startAfter(5), limit(limitDoc));
      }
      else
      {
        queryConfig = query(colec, startAfter(5), limit(limitDoc));
      }

      getDocs(queryConfig).then((prodDocs) => {
        prodDocs.forEach(prodDoc => {
          objs.push(prodDoc.data());
        })

        if(cache) { customLocalStorage.setItem('products', JSON.stringify(objs), expire); }
        resolve(objs);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  readFromLocalStorage(key, orderBy = ''){
    return orderBy != '' ? this.orderLocalStorage(key, orderBy) : 
      JSON.parse(customLocalStorage.getKey(key, 'value'));
  }

  orderLocalStorage(key, orderBy){
    let sorted = JSON.parse(customLocalStorage.getKey(key, 'value'));

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

export default new DatabaseStorage();