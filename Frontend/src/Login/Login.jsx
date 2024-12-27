import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
function login() {
   const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("12");
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        setIsPasswordMatch(false);
        console.log("Passwords do not match!");
        return;
      }
      setIsPasswordMatch(true);
      console.log("Form submitted successfully!", { username, password });
    };
  
    return (
      <div className="h-screen w-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20231027/pngtree-hexagonal-abstract-background-with-a-black-textured-surface-image_13704307.png')]  bg-cover bg-center bg-no-repeat')] bg-cover bg-center bg-no-repeat">
        {/* Login Desktop and tablet */}
        <div className="hidden md:flex h-full w-full justify-center items-center">
          <div className="bg-zinc-600 bg-opacity-30 w-[500px] h-[400px] rounded-3xl border-2 backdrop-blur-md">
            <div className="text-black flex flex-col h-full items-center">
              <div className="h-[40%] w-full flex justify-center items-center text-3xl">
                Login
              </div>
              <div className="h-full w-full flex flex-col items-center gap-4 p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                  <div className="mb-6">
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-gray-50 border focus:text-[15px] text-opacity-50 focus:text-opacity-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition duration-200"
                      placeholder="Your username"
                      required
                    />
                  </div>
  
                
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <div className="relative ">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`bg-gray-50 border ${
                          isPasswordMatch ? "border-gray-300" : ""
                        } text-gray-900  text-sm rounded-lg focus:text-[15px] text-opacity-50 focus:text-opacity-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="กรูณากรอกรหัสผ่าน"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 bottom-3   text-gray-500"
                      >
                        {showPassword ? (
                          <FaEye className=" text-[20px]" />
                        ) : (
                          <FaEyeSlash className=" text-[20px]" />
                        )}
                      </button>
                    </div>
                    {!isPasswordMatch && (
                      <p className="text-red-500 text-sm    ">
                        Passwords do not match!
                      </p>
                    )}
                  </div>
              
  
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        {/* Login Mobile */}
        <div className="md:hidden flex   flex-col h-full w-full overflow-hidden   bg-gradient-to-r from-blue-400 to-blue-800">
          <div className="h-[15%] w-full flex justify-center items-center ">
            <h1 className="text-[30px] font-bold ">Login</h1>
          </div>
          <div className="h-[85%] w-full flex flex-col justify-start pt-20 px-8 items-center bg-white text-black rounded-tl-[70px] rounded-tr-[70px]">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-6 w-full">
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium "
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-gray-50 border focus:text-[15px] text-opacity-50 focus:text-opacity-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition duration-200"
                      placeholder="Your username"
                      required
                    />
                  </div>
                
                  <div className="mb-6 w-full">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium "
                    >
                      Password
                    </label>
                    <div className="relative ">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`bg-gray-50 border ${
                          isPasswordMatch ? "border-gray-300" : ""
                        } text-gray-900  text-sm rounded-lg focus:text-[15px] text-opacity-50 focus:text-opacity-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="กรูณากรอกรหัสผ่าน"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 bottom-3   text-gray-500"
                      >
                        {showPassword ? (
                          <FaEye className=" text-[20px]" />
                        ) : (
                          <FaEyeSlash className=" text-[20px]" />
                        )}
                      </button>
                    </div>
                    {!isPasswordMatch && (
                      <p className="text-red-500 text-sm    ">
                        Passwords do not match!
                      </p>
                    )}
                  </div>
              
                   
            
  
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
  
                  </form>
  
          </div>
        </div>
      </div>
    );
  }


export default login