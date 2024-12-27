import React, { useState } from "react";
import { useTheme } from "../ThemeContext"; // นำเข้า useTheme จาก ThemeContext
import { MdNotificationsNone,MdMenu } from "react-icons/md";
import { MdWbSunny, MdNightsStay } from "react-icons/md"; // เพิ่มการนำเข้า React Icons

function NavbarDesktop() {
  const { theme, toggleTheme } = useTheme(); // ดึงค่า theme และ toggleTheme จาก Context
  const [isOpenNonti, setisOpenNonti] = useState(false); // สถานะเปิด/ปิดของ Notification Dropdown
  const [isOpenMenu, setisOpenMenu] = useState(false); // สถานะเปิด/ปิดของ Notification Dropdown

  return (
    <div className="w-screen ">
      <div className="w-full">

        {/* Navbar Desktop And tablet */}
        <div className="hidden md:flex px-12 py-1  justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <div>Logo</div>
            <div>TEXT</div>
          </div>

          <div className=" flex items-center justify-between">
            <button className="btn btn-ghost">สุ่มคำศัพท์</button>
            <button className="btn btn-ghost">โหมดฝึกหัด</button>
            <button className="btn btn-ghost">เพื่อน</button>
            <button className="btn btn-ghost">คลังคำศัพท์</button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <MdWbSunny className="h-8 w-8 text-yellow-500" />
              ) : (
                <MdNightsStay className="h-7 w-7" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setisOpenNonti(!isOpenNonti)}
                className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdNotificationsNone className="text-2xl" />
              </button>

              <div
                className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-800 ${
                  isOpenNonti ? "block" : "hidden"
                }`}
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Item 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Item 2
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <img
                className="w-[40px] h-[40px] object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU50DDK-lHkuvSX0qND2Sc1NoVO_UIEjIBTA&s"
                alt="Profile"
              />
            </div>
          </div>
        </div>

                {/* Navbar Mobile */}
                <div className="flex md:hidden px-6 py-1  justify-between items-center">
          <div className="flex items-center justify-center ">
            <div>Logo</div>
          
          </div>

        

          <div className="flex items-center justify-center gap-2">
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <MdWbSunny className="h-8 w-8 text-yellow-500" />
              ) : (
                <MdNightsStay className="h-7 w-7" />
              )}
            </button>

            <div className="relative">
              <button
                   onClick={() => {
                    setisOpenNonti(!isOpenNonti);
                    setisOpenMenu(false);
                  }}
                className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdNotificationsNone className="text-3xl" />
              </button>

              <div
                className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-800 ${
                  isOpenNonti ? "block" : "hidden"
                }`}
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Item 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Item 2
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <button
                  onClick={() => {
                    setisOpenNonti(false);
                    setisOpenMenu(!isOpenMenu);
                  }}
                className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
           
              <MdMenu className="text-3xl" />
              </button>

              <div
                className={`absolute left-0  mt-2 min-w-max  rounded-lg shadow-lg bg-white dark:bg-gray-800 ${
                  isOpenMenu ? "block" : "hidden"
                }`}
              >
                <div className="py-2 w-[250px] flex flex-col justify-center items-center gap-2" >
                <div className="  w-[90%] flex justify-center items-center gap-2" >
                <button className="btn btn-ghost w-[50%]">สุ่มคำศัพท์</button>
                <button className="btn btn-ghost w-[50%] ">โหมดฝึกหัด</button>
                </div>
                <div className="  w-[90%] flex justify-center items-center gap-2">
                <button className="btn btn-ghost w-[50%]">เพื่อน</button>
                <button className="btn btn-ghost w-[50%]">คลังคำศัพท์</button>
                </div>
         
           
            
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-[40px] h-[40px] object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU50DDK-lHkuvSX0qND2Sc1NoVO_UIEjIBTA&s"
                alt="Profile"
              />
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default NavbarDesktop;
