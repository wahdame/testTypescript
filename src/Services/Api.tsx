import axios from "axios";

interface todo {
  userId: number;
  id: number;
  title: string;
  completed: string;
}
const axiosInstance = axios.create();
axiosInstance.interceptors.response.use((res) => {
  console.log("res.data", typeof res.data);
  return res.data;
});

const fetchAllTodo = async () =>
  await axios.get<todo[]>("https://jsonplaceholder.typicode.com/todos");

export default fetchAllTodo;
