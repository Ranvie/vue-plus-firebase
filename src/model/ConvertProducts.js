import sortList from "@/model/SortList";

class ConvertProducts
{
  getProductList(productsRead, orderBy)
  {
    let aux = [];
    let prods = [];

    productsRead.forEach(element => {
      if(typeof(element.products) == "string")
      {
        aux = JSON.parse(element.products);
      }
      else
      {
        aux = element.products;
      }

      prods = aux;
    }); // TODO: Sum all products readed into a single list;

    return sortList.sort(prods, orderBy);
  }
}

export default new ConvertProducts;