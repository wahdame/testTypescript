import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import IFormRegister from "../../Modal";
import User from "../../Modal";
import { RootState } from "../../store";
import AuthLayaout from "../../Layaout/authLay";
import { SignupRequest } from "../../Reducers/Signup";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn: boolean = useSelector(
    (state: RootState) => state.signup.success
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>();
  const onSubmit: SubmitHandler<IFormRegister> = (data: User) =>
    dispatch(SignupRequest(data));

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <AuthLayaout>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign Up to your account
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-left">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            type="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name"
            {...register("username", { required: true, maxLength: 50 })}
          />
          {errors.username && (
            <span className="text-xs text-left text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="text-left">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            {...register("email", { required: true, maxLength: 50 })}
          />
          {errors.email && (
            <span className="text-xs text-left text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="text-left">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            {...register("password", { required: true, maxLength: 20 })}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.password && (
            <span className="text-xs text-left text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="text-left">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Rôle
          </label>
          <select
            id="role"
            {...register("role", { required: true, maxLength: 20 })}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Admin</option>
            <option>User</option>
          </select>

          {errors.role && (
            <span className="text-xs text-left text-red-600">
              This field is required
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
      </form>
      <hr />
      <span className="text-xs text-center text-xl flex justify-center font-semibold">
        Already have account ?
      </span>
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign In
      </button>
    </AuthLayaout>
  );
}
