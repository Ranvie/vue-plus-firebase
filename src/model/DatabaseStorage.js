import customLocalStorage from "@/model/CustomLocalStorage"
import sortList from "@/model/SortList"
import { getDocs, query, orderBy, startAfter, startAt, limit, setDoc, doc, collection, deleteDoc } from 'firebase/firestore'

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

  saveToLocalStorage(key, obj, expire){
    customLocalStorage.setItem(key, obj, expire);
  }

  deleteFromDatabase(database, collectionName, id)
  {
    return new Promise((resolve, reject) => {
      deleteDoc(doc(database, collectionName, id)).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      })
    });
  }

  deleteFromLocalStorage(key){
    localStorage.removeItem(key);
  }

  readFromDatabase(database, collectionName, orderByKey = '', limitDoc = 10, queryCursor = '', startFrom = ''){
    return new Promise((resolve, reject) => {
      let objs = [];
      const queryConfig = this.createQueryString(database, collectionName, orderByKey, limitDoc, queryCursor, startFrom);

      getDocs(queryConfig).then((prodDocs) => {
        prodDocs.forEach(prodDoc => {
          objs.push(prodDoc.data());
        })

        resolve(objs);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  createQueryString(database, collectionName, orderByKey = '', limitDoc = 10, queryCursor = '', startFrom)
  {
    const collec = collection(database, collectionName);

    if(orderByKey != '' && queryCursor != '' && startFrom == 'AFTER') { return query(collec, orderBy(orderByKey), startAfter(queryCursor), limit(limitDoc)); }
    if(orderByKey != '' && queryCursor != '' && startFrom == 'AT')    { return query(collec, orderBy(orderByKey), startAt(queryCursor), limit(limitDoc)); }
    if(orderByKey != '' && queryCursor == '') { return query(collec, orderBy(orderByKey), limit(limitDoc)); }
    
    return query(collec, limit(limitDoc));
  }

  readFromDatabaseCaching(database, collectionName, orderByKey = '', limitDoc = 10, queryCursor = '', startFrom = '', key, expire = '')
  {
    return new Promise((resolve, reject) => {
      this.readFromDatabase(database, collectionName, orderByKey, limitDoc, queryCursor, startFrom).then((found) => {
        customLocalStorage.setItem(key, found, expire);
        resolve(found);
      }).catch((err) => {
        reject(err);
      })
    });
  }

  readFromLocalStorage(key, orderBy = '', valuePath = 'value'){
    return orderBy != '' ? this.orderLocalStorage(key, orderBy, valuePath) : 
      JSON.parse(customLocalStorage.getKey(key, valuePath));
  }

  orderLocalStorage(key, orderBy, valuePath = 'value'){
    let data = customLocalStorage.getKey(key, valuePath);

    if(typeof(data) === 'string'){
      data = JSON.parse(data);
    }

    let sorted = sortList.sort(data, orderBy);

    return sorted;
  }
}

export default new DatabaseStorage();