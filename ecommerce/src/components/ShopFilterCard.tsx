import { useNavigate } from "react-router-dom";

type Props = {
    item: {
      url: string,
      text: string,
      description: string,
      path: string,
    };
}

export const ShopFilterCard = ({item}: Props) => {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate(item.path)} className="w-80 xl:w-56 h-80 xl:h-56 relative flex items-center justify-center">
        <img src={item.url} alt="" className="w-full h-full object-cover" />     
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white bg-neutral-800 bg-opacity-25">
            <h3 className="text-xl font-bold">{item.text}</h3>
            <p className="text-sm">{item.description}</p>
        </div>
    </button>
  )
}
