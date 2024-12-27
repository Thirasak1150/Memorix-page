import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WelcomeMywebsite.css";
function WelcomeMywebsite() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(""); // เก็บข้อความที่กำลังพิมพ์
  const [isDeleting, setIsDeleting] = useState(false); // สำหรับการลบข้อความ

  const sentences = [
    "สุ่มสร้างคำศัพท์ใหม่ๆ ด้วยเทคโนโลยี AI ",
    "ได้เรียนรู้คำศัพท์ที่ไม่ซ้ำใคร!",
    "พร้อมสนุกไปกับโหมดเกมกับเพื่อน",
    "ทบทวนในโหมดฝึกฝนได้ในที่เดียว",
  ];

  useEffect(() => {
    const currentSentence = sentences[index];
    const typingSpeed = isDeleting ? 5 : 20; // ความเร็วในการพิมพ์หรือลบ

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // เพิ่มตัวอักษร
        setText((prev) => currentSentence.substring(0, prev.length + 1));
        if (text === currentSentence) {
          setTimeout(() => setIsDeleting(true), 2000); // รอสักพักก่อนลบ
        }
      } else {
        // ลบตัวอักษร
        setText((prev) => prev.substring(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % sentences.length); // ไปยังประโยคถัดไป
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);
  return (
    <div className="h-screen w-full overflow-hidden text-white bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20231027/pngtree-hexagonal-abstract-background-with-a-black-textured-surface-image_13704307.png')]  bg-cover bg-center bg-no-repeat">
      {/* desktop ui */}
      <div className=" backdrop-blur-[10px]  h-full w-full">
        <div className=" h-full w-full hidden lg:flex  justify-center items-center  gap-10">
          <div className="  w-[50%] ">
            <div className=" flex  justify-start items-center gap-4 px-2 ">
              <div className=" font-bold    ">
                <h1 className="text-[60px] text-yellow-500">
                  ฝึกคำศัพท์ภาษาอังกฤษ
                </h1>
                <div className="text-[30px] text-yellow-100 from-yellow-200 via-yellow-300 to-yellow-100 ">
                  {text}
                  <span className="animate-pulse text-white">|</span>{" "}
                  {/* เคอร์เซอร์กระพริบ */}
                </div>
                <div className="text-[20px] text-gray-300 mt-2  ">
                  <p>
                    คุณเคยรู้สึกเบื่อกับการเรียนรู้คำศัพท์ที่ซ้ำซากและน่าเบื่อไหม?
                    เรามีทางออกที่สนุกและน่าตื่นเต้นสำหรับคุณ! ด้วยเทคโนโลยี AI
                    ที่สุ่มสร้างคำศัพท์ใหม่ๆ ทุกวัน
                    คุณจะได้เรียนรู้คำศัพท์ที่ไม่ซ้ำ
                    พร้อมสนุกไปกับโหมดเกมที่แข่งขันกับเพื่อนหรือทบ
                    ทวนในโหมดฝึกฝนได้ในที่เดียว
                    ลองเลยวันนี้แล้วเปลี่ยนการเรียนรู้ให้สนุกกว่าเดิม!
                  </p>
                </div>
                <div className="mt-16 w-full flex justify-center items-center">
                  <Link
                    to={"/Login"}
                    className="btn btn-outline btn-warning w-[400px] shadow-2xl transition-all duration-500 hover:shadow-sm shadow-yellow-300"
                  >
                    เริ่มเลย
                  </Link>
                  <button className="btn w-[200px] btn-primary ml-6 shadow-2xl transition-all duration-500 hover:shadow-sm shadow-purple-400">
                    Primary
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[30%]">
            <div className="absolute inset-3 w-[400px] h-[400px] rounded-full animate-glow bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 blur-xl opacity-75"></div>
            <img
              className="relative object-cover w-[400px] h-[400px] rounded-full"
              src="../../public/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>

        {/* mobile and tablet ui */}

        <div className=" h-full w-full flex flex-col lg:hidden  justify-start py-10 items-center  gap-4">
        <div className=" h-[20%]">
        <div className="relative h-full w-full ">
            <div className="absolute inset-3  w-[200px] flex justify-center items-center h-[200px] rounded-full animate-glow bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 blur-xl opacity-75"></div>
            <img
              className="relative object-cover w-[200px] h-[200px] rounded-full"
              src="../../public/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="  h-[50%] mt-[60px] w-full  ">
            <div className=" flex  justify-center items-center gap-4 px-2 ">
              <div className=" font-bold  text-center   ">
                <h1 className="text-[32px]  md:text-[60px] text-yellow-500">
                  ฝึกคำศัพท์ภาษาอังกฤษ
                </h1>
                <div className="text-[20px] md:text-[20px] text-yellow-100 my-3">
    <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-100 text-transparent bg-clip-text">
        {text}
    </span>
    <span className="animate-pulse text-white">|</span>{" "}
    {/* เคอร์เซอร์กระพริบ */}
</div>

                <div className="text-[20px] md:text-[20px] bg text-gray-300 mt-2 w-full  flex justify-center items-center    ">
                  <p className="w-[80%] md:w-[80%]  text-start ">
                  
เคยรู้สึกเบื่อกับการเรียนรู้คำศัพท์ที่ซ้ำซากไหม? 
ลองใช้เทคโนโลยี AI ที่สุ่มคำศัพท์ใหม่ทุกวัน! 
พร้อมสนุกกับโหมดเกมแข่งขันกับเพื่อน 
หรือทบทวนคำศัพท์ในโหมดฝึกฝนได้ในที่เดียว 
เปลี่ยนการเรียนรู้ให้สนุกขึ้นวันนี้!
                  </p>
                </div>
                <div className="mt-16 md:mt-14 w-full flex flex-col md:flex-row justify-center items-center gap-8">
                <button className="btn w-[200px] btn-primary  shadow-2xl transition-all duration-500 hover:shadow-sm shadow-purple-400">
                    Primary
                  </button>
                  <Link
                    to={"/Login"}
                    className="btn btn-outline btn-warning w-[200px] md:w-[400px] shadow-2xl transition-all duration-500 hover:shadow-sm shadow-yellow-300"
                  >
                    เริ่มเลย
                  </Link>
                
                </div>
            
              </div>
            </div>
          </div>

     

          
        </div>
      </div>
    </div>
  );
}

export default WelcomeMywebsite;
