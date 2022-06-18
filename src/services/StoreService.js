class StoreService {
  _apiStore = 'https://fakestoreapi.com/products';

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Cold not fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
  } 

  getAllProducts = () => {
    return this.getResource(`${this._apiStore}?limit=12`);
  }

  getProduct = (id) => {
    return this.getResource(`${this._apiStore}/${id}`);
  }
}

export default StoreService;