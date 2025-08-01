type Props = {
    img: string;
}

export const ShopFilterCard = ({img}: Props) => {
  return (
    <div className="w-80 xl:w-56 h-80 xl:h-56 relative flex items-center justify-center">
        <img src={img} alt="" className="w-full h-full object-cover" />     
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white bg-neutral-800 bg-opacity-25">
            <h3 className="text-xl font-bold">CLOTHS</h3>
            <p className="text-sm">5 Items</p>
        </div>
    </div>
  )
}
