import { RiCheckFill } from 'react-icons/ri';

type Props = {
    IsOn : boolean;
    Data : {
        type : string;
        month : number,
        year : number,
    };
}

export const PricingCard = ({IsOn, Data}: Props) => {
  return (
    <div className={`w-[clamp(335px,23vw,436px)] h-[clamp(724px,60vw,940px)] flex flex-col justify-center items-center rounded-xl gap-10 ${Data.type == "STANDARD" ? "bg-slate-800 text-white" : "bg-white border-2 border-sky-500"}`}>
        <h3 className={`text-2xl xl:text-3xl font-bold ${Data.type == "STANDARD" ? "text-white" : "text-slate-800"}`}>{Data.type}</h3>
        <p>Organize across all apps by hand</p>
        <div className='flex flex-row items-center justify-center text-sky-500 gap-3'>
            <p className='text-40 xl:text-6xl font-bold'>{IsOn ? Data.year : Data.month}</p>
            <div className='flex flex-col items-start'>
                <p className='text-2xl xl:text-3xl font-bold'>$</p>
                <p className='text-sm xl:text-lg font-bold'>{IsOn ? "Per Year" : "Per Month"}</p>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <p className='pricingcard-p'><RiCheckFill className="text-white size-10 bg-green-500 rounded-full"/> Unlimited product</p>
            <p className='pricingcard-p'><RiCheckFill className="text-white size-10 bg-green-500 rounded-full"/> Unlimited product</p>
            <p className='pricingcard-p'><RiCheckFill className="text-white size-10 bg-green-500 rounded-full"/> Unlimited product</p>
            <p className='pricingcard-p'><RiCheckFill className="text-white size-10 bg-gray-400 rounded-full"/> 1GB Cloud storage</p>
            <p className='pricingcard-p'><RiCheckFill className="text-white size-10 bg-gray-400 rounded-full"/> Email and community <br/>support</p>
        </div>
        <button className='w-[clamp(248px,15vw,328px)] h-[clamp(52px,5vw,70px)] bg-sky-500 text-white rounded-md'>Try for free</button>
    </div>
  )
}
