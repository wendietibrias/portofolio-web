import socialicon from "@/constants/socialicon";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 py-6">
          <p className="text-white text-center font-semibold text-[13px]">Created by <span className="font-bold text-blue-500">Wendi</span></p>
          <div className="flex justify-center items-center text-white mt-2 gap-x-2">
            {socialicon.map((item,idx) => (
               <Link key={idx} href={item.path} className="hover:text-blue-500">
                    <i className={`${item.icon} text-2xl`}></i>
                </Link>
            ))}
          </div>
        </footer>
    )
}

export default Footer;