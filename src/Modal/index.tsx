export default interface todo {
  userId: number;
  id: number;
  title: string;
  completed: string;
}
export default interface User {
  email: string;
  password: string;
}

export default interface IFormInput {
  email: string;
  password: string;
}

export default interface IFormRegister {
  email: string;
  password: string;
  username: string;
  role: "admin" | "user";
}
