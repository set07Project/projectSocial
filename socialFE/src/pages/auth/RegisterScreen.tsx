import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterScreen = () => {

 
  const Schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm : yup.string().oneOf([yup.ref("password")])
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });


  const onHandleSubmit = handleSubmit(async (data: any) => {
    const {userName, email, password} = data;
    console.log( {userName, email, password})

    reset()
  })

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <form className="w-[350px]" onSubmit={onHandleSubmit}>
        <div className="flex flex-col border px-3 bg-white rounded-[10px]">
          <div className="font-black mt-[10px] uppercase">Register Screen</div>
          <div className="text-[13px] font-semibold mt-3">
            UserName
            <div className="border max-w-[400px] h-[40px] border-black flex items-center rounded-[5px]">
              <input
                type="text"
                placeholder="userName"
                className="w-full placeholder:pl-[5px] pl-[10px] h-[30px] outline-none" {...register("userName")}
              />
            </div>
           {errors.userName?.message &&  <div className="flex justify-end text-[10px] text-red-600">
              UserName Error
            </div>}
          </div>
          <div className="text-[13px] font-semibold mt-3">
            Email
            <div className="border max-w-[400px] h-[40px] border-black flex items-center rounded-[5px]">
              <input
                type="text"
                placeholder="Email"
                className="w-full h-[30px] outline-none placeholder:pl-[5px] pl-[10px]" {...register("email")}
              />
            </div>
           {errors.email?.message &&  <div className="flex justify-end text-[10px] text-red-600">
              Email Error
            </div>}
          </div>
          <div className="text-[13px] font-semibold mt-3">
            Password
            <div className="border max-w-[400px] h-[40px] border-black flex items-center rounded-[5px]">
              <input
                type="text"
                placeholder="Password"
                className="w-full h-[30px] outline-none placeholder:pl-[5px] pl-[10px]" {...register("password")}
              />
            </div>
            {errors.password?.message && <div className="flex justify-end text-[10px] text-red-600">
              Password Error
            </div>}
          </div>
          <div className="text-[13px] font-semibold mt-3">
            Cofirm Password
            <div className="border max-w-[400px] h-[40px] border-black flex items-center rounded-[5px]">
              <input
                type="text"
                placeholder="Cofirm"
                className="placeholder:pl-[15px] pl-[15px] w-full h-[30px] outline-none" {...register("confirm")}
              />
            </div>
           {errors.confirm?.message &&  <div className="flex justify-end text-[10px] text-red-600">
              Password must match!
            </div>}
          </div>
          <button type="submit" className="px-[10px] py-[10px] flex items-center justify-center bg-red-500 font-bold rounded-md mt-[10px]">
            Register
          </button>
          <hr className="mt-[10px] text-[red] h-[2px] w-full" />
          <div className="flex justify-center items-center text-[12px] font-bold text-[gray] mt-[10px]">
            Already Have an Account?
          </div>
          <div className="flex justify-center items-center text-[red] text-[12px]">
            Sign in Here
          </div>
          <div className="mt-[10px]"></div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
