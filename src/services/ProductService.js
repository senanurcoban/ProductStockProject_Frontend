import axios from "axios"
export default class ProductService{

    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }
    getByProductName(Name){
        return axios.get("http://localhost:8080/api/products/getByProductName?Name="+ Name)
    }
}