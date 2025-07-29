import { useNavigate } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { FooterSection } from "../layouts/FooterSection"
import { useEffect, useState } from "react";

export const Order = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [step, setStep] = useState<1 | 2>(1);

    useEffect(() => {
        if(!token) {
            navigate("/login");
        }
    }, [token, navigate]);
    
  return (
    <div className="w-full flex flex-col items-center">
        <NavBar />
        <div>
            <div>
                <div>
                    <h3><span>1.</span> Adres Bilgileri</h3>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
        <FooterSection />
    </div>
  )
}
