import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store/store";

export const FooterSection = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.name);
  return (
    <footer className="w-full flex flex-col items-center">
      <div className="w-4/5 xl:w-11/12 mx-auto flex flex-col items-start gap-6 py-10">
        <h1 className="text-slate-800 text-2xl font-bold">Bandage</h1>
        <div className="flex flex-row text-sky-500 text-xl gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
      <div className="w-4/5 xl:w-11/12 mx-auto flex flex-col xl:flex-row items-start text-left gap-7 py-16">
        <div className="flex-[1]">
          <h3 className="footer-heading">Campany Info</h3>
          <p className="footer-p">About Us</p>
          <p className="footer-p">Carrier</p>
          <p className="footer-p">We are Hiring</p>
          <p className="footer-p">Blog</p>
        </div>
        <div className="flex-[1]">
          <h3 className="footer-heading">Legal</h3>
          <p className="footer-p">About Us</p>
          <p className="footer-p">Carrier</p>
          <p className="footer-p">We are Hiring</p>
          <p className="footer-p">Blog</p>
        </div>
        <div className="flex-[1]">
          <h3 className="footer-heading">Features</h3>
          <p className="footer-p">Business Marketing</p>
          <p className="footer-p">User Analytic</p>
          <p className="footer-p">Live Chat</p>
          <p className="footer-p">Unlimited Support</p>
        </div>
        <div className="flex-[1]">
          <h3 className="footer-heading">Resources</h3>
          <p className="footer-p">IOS & Android</p>
          <p className="footer-p">Watch a Demo</p>
          <p className="footer-p">Customers</p>
          <p className="footer-p">API</p>
        </div>
        <div className="w-full flex-[2]">
          <h3 className="footer-heading">Get In Touch</h3>
          <div className="flex w-full overflow-hidden rounded-md border border-gray-300">
            <input
              type="text"
              placeholder="Your Email"
              className="w-3/5 px-4 py-2 bg-gray-100 text-gray-600"
            />
            <button onClick={()=>{
              if(!user) {
                navigate("/singup")
              } 
            }} disabled={user !== ""} className="w-2/5 bg-sky-500 text-white px-4 py-4">
              Subscribe
            </button>
          </div>
          <p className="text-neutral-500 text-xs font-normal pt-2">Lore Imp sum dolor Amit</p>
        </div>
      </div>
      <div className="w-full flex justify-center bg-zinc-50">
              <p className="flex items-center max-xl:justify-center text-neutral-500 text-sm xl:text-lg font-bold w-4/5 h-24 xl:text-left ">Made With Love By <br className="xl:hidden"/>Finland All Right Reserved</p>
      </div>
    </footer>
  );
};