import Axios from 'axios'



const fetchProduct = async ()=>{
    const options = {
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com'
        }
      };
    const response = await Axios.request(options);
    return response?.data ?? []
}

export {
    fetchProduct
}