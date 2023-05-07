import sortList from "@/model/SortList";

class ConvertProducts
{
  getProductList(productsRead, orderBy)
  {
    let aux = [];
    let prods = [];

    productsRead.forEach(element => {
      aux = JSON.parse(element.products);
      prods = aux;
    }); // TODO: Sum all products readed into a single list;

    return sortList.sort(prods, orderBy);
  }
}

export default new ConvertProducts;