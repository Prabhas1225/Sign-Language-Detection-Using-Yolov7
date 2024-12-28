import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../../components/common/Navbar'
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "American Sign Language Detection ",
  description: "A sign language detection app using next.js and flask",
};

export const navItems = [
//   {
//       title: "Home",
//       link: "/",
//   },
//   {
//       title: "About YOLO",
//       link: "/About_YOLO",
//   },
//   {
//       title: "About CNN",
//       link: "/About_CNN",
//   },
//   {
//       title: "Comparison",
//       link: "/Comparision",
//   }
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body>
      
      <main className="bg-gradient-to-r from-[#D8D8D8] to-gray-800">
        <div className="flex justify-between ">


            <div>
                <Link href={'/'}>
                    <div className={'h-full w-32 relative'}>
                        <Image src={""} alt={"logo"} fill={true} className={"object-contain"}/>
                    </div>

                </Link>
            </div>
            <div className="relative flex items-center gap-x-12 pl-4 pr-12 text-sm text-white z-0 h-16">

                {
                    navItems.map((navItem, i) => {
                        return <Link key={i} className={"group w-24"} href={navItem.link}>
                            <div
                                className="relative py-3 rounded-lg group font-semibold group-hover:font-bold group-active:font-bold group-focus:font-bold">
                                {navItem.title}
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>

    </main>

        {children} 
     
        </body>
    </html>
  );
}
