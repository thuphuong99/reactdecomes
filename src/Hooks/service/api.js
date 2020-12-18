import axios from 'axios';

const getDatUsers = async (page) => {
//3 user tren 1 trang 
const perPage = 3 ;
//https://reqres.in/api/users?page=1&per_page=2
 const url= `https://reqres.in/api/users?page=${page}&per_page=${perPage}`
 const response = await axios.get(url);
 const data = await response.status === 200 ? response.data :[];
 return data;

}
export const api = {
    getDatUsers
}