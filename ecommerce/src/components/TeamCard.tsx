import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

type Props = {
  picture: string;
};

export const TeamCard = ({ picture }: Props) => {
  return (
    <div className="flex flex-col flex-1 items-center gap-2 xl:gap-3 shadow-md">
      <div className="w-full h-60 xl:h-80 overflow-hidden">
        <img src={picture} alt="team member" className="w-full h-full object-cover rounded" />
      </div>
      <p className="text-slate-800 text-base xl:text-2xl font-bold pt-7">Username</p>
      <p className="text-neutral-500 text-sm xl:text-xl font-bold">Profession</p>
      <div className="flex flex-row text-sky-500 gap-5 xl:gap-7 pb-7">
        <FaFacebook size="24px" />
        <FaInstagram size="24px" />
        <FaTwitter size="24px" />
      </div>
    </div>
  );
};
