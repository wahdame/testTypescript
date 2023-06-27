import axios from "axios";
import todo from "../Modal";
import User from "../Modal";
import IFormRegister from "../Modal";

const params = {
  headers: {
    "Content-Type": "application/json",
    // "X-Parse-REST-API-Key": "qF8ToJVb9IyO0CIyMmMIhq9oEJSn0elU2GGP36Md",
    // "X-Parse-Application-Id": "ytJrRw26iXZDIDn7v5TGcojy8VSB11GvCumQ9aCP",
  },
};

export const fetchAllTodo = async () =>
  await axios.get<todo[]>("https://jsonplaceholder.typicode.com/todos");
export const Authentification = async (data: User) =>
  await axios.post<User>(
    "http://localhost:3030/authentication",
    { ...data, strategy: "local" },
    params
  );
export const Register = async (data: IFormRegister) =>
  await axios.post<IFormRegister>("http://localhost:3030/users/", data, params);

// export default {fetchAllTodo, Authentification};
