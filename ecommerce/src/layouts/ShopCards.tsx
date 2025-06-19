import Card1 from "../assets/shopcard1.png";
import Card2 from "../assets/shopcard2.png";
import Card3 from "../assets/shopcard3.png";
import Card4 from "../assets/shopcard4.png";
import Card5 from "../assets/shopcardmob1.png";

export const ShopCards = () => {
  return (
    <div className="w-full h-full bg-zinc-50 flex flex-col items-center py-28">
        <h1 className="text-slate-800 font-bold text-3xl pb-3">EDITOR'S PICK</h1>
        <p className="text-neutral-500 font-normal text-lg pb-16">Problems trying to resolve <br className="block xl:hidden"/>the conflict between</p>
        <div className="w-3/4 flex flex-col xl:flex-row gap-10 items-center">
            <div className="flex-grow relative">
                <img className="hidden xl:block" src={Card1} alt=""/>
                <img className="block xl:hidden" src={Card5} alt=""/>
                <a className="absolute z-10 left-[6%] bottom-[6%] w-40 xl:w-56 h-12 xl:h-16 bg-white flex items-center justify-center font-bold text-xl text-slate-800" href="#">MEN</a>
            </div>
            <div className="flex flex-grow  gap-10 flex-col xl:flex-row justify-between">
                <div className="flex-grow relative">
                    <img className="flex-grow" src={Card2} alt=""/>
                    <a className="absolute z-10 left-[6%] bottom-[6%] w-40 xl:w-44 h-12 xl:h-16 bg-white flex items-center justify-center font-bold text-xl text-slate-800" href="#">WOMEN</a>
                </div>
                <div className="flex flex-grow flex-col gap-5 justify-between">
                    <div className="flex-grow relative">
                        <img className="flex-grow" src={Card3} alt="" />
                        <a className="absolute z-10 left-[6%] bottom-[6%] w-40 xl:w-56 h-12 xl:h-16 bg-white flex items-center justify-center font-bold text-xl text-slate-800" href="#">ACCESSORIES</a>
                    </div>
                    <div className="flex-grow relative">
                        <img className="flex-grow" src={Card4} alt="" />
                        <a className="absolute z-10 left-[6%] bottom-[6%] w-40 xl:w-40 h-12 xl:h-16 bg-white flex items-center justify-center font-bold text-xl text-slate-800" href="#">KIDS</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
