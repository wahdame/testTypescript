import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import IFormInput from "../../Modal";
import User from "../../Modal";
import { LoginRequest } from "../../Reducers/Login";
import { RootState } from "../../store";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthLayaout from "../../Layaout/authLay";
const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn: boolean = useSelector(
    (state: RootState) => state.auth.success
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: User) =>
    dispatch(LoginRequest(data));

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin/default");
    }
  }, [isLoggedIn]);

  return (
    <AuthLayaout>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
      </form>
      <hr />
      <span className="text-xs text-center text-xl flex justify-center font-semibold">
        Don't have account
      </span>
      <button
        onClick={() => {
          navigate("/signup");
        }}
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign Up
      </button>
    </AuthLayaout>
  );
}
