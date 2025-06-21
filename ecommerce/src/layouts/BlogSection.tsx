import { BlogCard } from "../components/BlogCard";
import data from "../data";

export const BlogSection = () => {
  return (
    <div className="w-full flex flex-col items-center py-20 xl:py-36">
        <div className="max-xl:w-3/5">
            <p className="text-sky-500 text-lg font-bold">Practive Advice</p>
            <h3 className="text-slate-800 text-4xl xl:text-5xl font-bold py-2 xl:py-3">Featured Posts</h3>
            <p className="text-neutral-500 text-sm xl:text-lg font-normal">Problems trying to resolve the conflict between<br className="max-xl:hidden"/>the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-2 pt-20 xl:pt-28">
            {data.blogCard.map((card)=>(
                <BlogCard card={card}/>
            ))}
        </div>
    </div>
  )
}
