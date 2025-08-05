import React from "react";
import { BiAlarm } from "react-icons/bi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { useState } from "react";

type Card = {
    picture: string;
    text1: string;
    text2: string;
    time: string;
    interaction: string;
}

type Props = {
    card: Card;
}

export const BlogCard = ({card}: Props) => {

    const [selected,setSelected] = useState<string>("Google");

    const navItems = ["Google", "Trending", "New"];
    
    const onClick = (item: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setSelected(item);
    };

  return (
    <div className="shadow-md">
        <div className="relative">
            <img className="w-full h-full object-cover" src={card.picture} alt=""/>
            <p className="bg-red-500 text-white text-lg font-bold absolute top-4 left-4 py-1 px-2 rounded-md">NEW</p>
        </div>
        <div className="flex flex-col p-8 items-start gap-4">
            <nav className="flex flex-row gap-3">
                {navItems.map((item) => (
                <a
                    key={item}
                    href="#"
                    onClick={onClick(item)}
                    className={`text-base font-normal ${
                    selected === item ? "text-blue-300" : "text-neutral-500"
                    }`}
                >
                    {item}
                </a>
                ))}
            </nav>
            <h3 className="text-slate-800 text-lg xl:text-2xl font-normal text-left">{card.text1.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                    <br/>
                </React.Fragment>
            ))}</h3>
            <p className="text-neutral-500 text-sm xl:text-lg font-normal text-left">{card.text2.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                    <br/>
                </React.Fragment>
            ))}</p>
            <div className="flex flex-row w-full justify-between">
                <p className="font-normal text-xs xl:text-base items-center flex flex-row gap-1"><BiAlarm className="text-sky-500 text-base xl:text-xl"/> {card.time}</p>
                <p className="font-normal text-xs xl:text-base items-center flex flex-row gap-1"><AiOutlineAreaChart className="text-emerald-700 text-base xl:text-xl"/> {card.interaction} comments</p>
            </div>
            <a href="https://www.linkedin.com/in/devfurkang/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 text-sm xl:text-lg font-bold flex flex-row items-center gap-2">Stay Tuned <FiBell className="text-sky-500"/></a >
        </div>
    </div>
  )
}
