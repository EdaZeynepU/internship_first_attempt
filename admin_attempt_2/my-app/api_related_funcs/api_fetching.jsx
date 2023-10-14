import { setUserData } from '@/redux/features/userData';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
  });
  
async function getPosts() {
    const response = await api.get('/users');
    return response.data;
}  


export const fetchData  = () => async (dispatch) => {
  console.log("fetch data içi")
    try {
      const res = await getPosts();
      dispatch(setUserData(res[0])); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

