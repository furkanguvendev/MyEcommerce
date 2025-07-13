import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { loginUser } from "../store/actions/userActions";
import { AxiosError } from "axios";
import loginbg from "../assets/loginbg.jpg";

type LoginFormInputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await axiosInstance.post("/login", data);
      const user = response.data;

      // Redux'a user bilgilerini gönder
      dispatch(loginUser(user));

      // Token'ı localStorage ya da sessionStorage'a kaydet
      if (rememberMe) {
        localStorage.setItem("token", user.token);
      } else {
        sessionStorage.setItem("token", user.token);
      }

      navigate("/");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;

      const errorMessage =
        error.response?.data?.message || "Sunucu hatası oluştu";

      console.error("Login error:", error);
      alert("Giriş başarısız: " + errorMessage);
    }
  };

  const onChange = () => {
    setRememberMe(!rememberMe);
  }

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${loginbg})` }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-lg w-[90%] max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">LOGIN</h2>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-500"
            {...register("email", {
              required: "Email Adresinizi Giriniz",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Geçerli bir email adresi giriniz",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-500"
            {...register("password", {
              required: "Şifrenizi Giriniz",
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={onChange}
          />
          <label htmlFor="rememberMe" className="text-sm">
            Oturum açık kalsın
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Giriş Yap
        </button>

        <hr className="my-4" />

        <p className="text-center">
          Hesabın yok mu?{" "}
          <a href="/singup" className="text-blue-800 underline">
            Kayıt ol
          </a>
        </p>
      </form>
      <button onClick={() => console.log(rememberMe)}>
        yazdır
      </button>
    </div>
  );
};
