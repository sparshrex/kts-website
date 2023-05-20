import React from "react";
import Frame4 from "../../assets/Frame 4.png";
import image from "../../assets/image 3.png";
import Footer from "../Foooter/Footer";
function MainSection() {
  return (
    <>
      <div>
        <p className="font-serif font-extrabold text-2xl  mt-[20rem]">
          Every bit counts
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          exercitationem numquam sint provident dolorum quis sit ad! Autem eos
          eveniet magnam alias dolor voluptatibus.
        </p>

        <div className="flex  flex-col justify-center items-center gap-3 sm:flex-row sm:justify-center sm:my-6 sm:ml-20 ">
          <div className=" h-[200px] w-[100px] flex-1">
            <img src={Frame4} alt="" />
            <p className=" font-mono text-2xl my-4">Programming</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              laudantium provident alias? Beatae nemo non corrupti ratione neque
              soluta minus?
            </p>
          </div>
          <div className=" h-[200px] w-[100px] flex-1">
            <img src={Frame4} alt="" />
            <p className=" font-mono text-2xl my-4">Programming</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              laudantium provident alias? Beatae nemo non corrupti ratione neque
              soluta minus?
            </p>
          </div>
          <div className=" h-[200px] w-[100px] flex-1 ">
            <img src={Frame4} alt="" />
            <p className=" font-mono text-2xl my-4">Programming</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              laudantium provident alias? Beatae nemo non corrupti ratione neque
              soluta minus?
            </p>
          </div>
          <div className=" h-[200px] w-[100px] flex-1">
            <img src={Frame4} alt="" />
            <p className=" font-mono text-2xl my-4">Programming</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              laudantium provident alias? Beatae nemo non corrupti ratione neque
              soluta minus?
            </p>
          </div>
        </div>

        <div className=" mx-3 my-5 sm:absolute sm:top-[110rem] sm:left-[60px] sm:mx-0 ">
          <p className="font-mono text-2xl font-bold">THE WORLD STREET</p>
          <div className=" ml-14 sm:flex sm:justify-center sm:items-center sm:gap-20 my-6 sm:ml-0">
            <p className="text-sm  text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore perspiciatis accusamus ducimus officiis animi autem
              voluptatibus minima atque eos. Quia eius facere impedit eaque modi
              et hic ipsa tempora nemo accusantium, labore voluptate ducimus
              laborum fugiat necessitatibus eos. Excepturi, hic.
            </p>
            <p className="text-sm  text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore perspiciatis accusamus ducimus officiis animi autem
              voluptatibus minima atque eos. Quia eius facere impedit eaque modi
              et hic ipsa tempora nemo accusantium, labore voluptate ducimus
              laborum fugiat necessitatibus eos. Excepturi, hic.
            </p>
            <p className="text-sm  text-justify mr-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore perspiciatis accusamus ducimus officiis animi autem
              voluptatibus minima atque eos. Quia eius facere impedit eaque modi
              et hic ipsa tempora nemo accusantium, labore voluptate ducimus
              laborum fugiat necessitatibus eos. Excepturi, hic.
            </p>
          </div>

          <div className=" sm:my-14 sm:mx-[25%] ">
            <img src={image} alt="" />
          </div>

          <div className=" ml-[-4rem]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
