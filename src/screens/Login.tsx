import React from "react";

function Login() {
  return (
    <div className="h-full w-full flex flex-row justify-start bg-[#DBAD34]">
      <div className="image h-[800px] w-[862px]">
        <img
          src="https://hoangviettravel.vn/wp-content/uploads/2020/02/du-lich-tokyo-20-min.jpg"
          alt="login"
          className="h-full w-full rounded-bl-[40px] rounded-tr-[40px] object-cover"
        />
      </div>
      <div className="form flex flex-col h-full w-full flex-1 items-center justify-center">
        <div> Đăng nhập</div>
        <div>Hoặc bạn không có tài khoản?</div>
        <div>Đăng ký tại đây</div>
        
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Email"
            className="border-2 border-black rounded-md p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black rounded-md p-2"
          />
          <button className="bg-black text-white rounded-md p-2">Đăng nhập</button>
        </form>



      </div>
    </div>
  );
}

export default Login;
