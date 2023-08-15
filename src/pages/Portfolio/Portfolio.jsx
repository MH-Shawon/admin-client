import { Link } from "react-router-dom";
import All from "./All";


const Portfolio = () =>
{
    return (
        <div className="mt-8 rounded-xl bg-slate-200 px-24 py-10">
            <h4 className="text-xl font-extrabold">Portfolios</h4>
            <div className="flex items-center">
                <div className="flex flex-col bg-gray-950 h-1 w-10"></div>
                <div className="flex flex-col bg-slate-400 h-0.5 items-end w-48"></div>
            </div>
            <ul className=" mt-2 menu-vertical lg:menu-horizontal ">

                <div className="flex font-bold ">
                    <li className=""><Link to='all'>All</Link></li>
                    <li className="pl-3"><Link to='marketing'>Marketing</Link></li>
                    <li className="pl-3"><Link to='web'>Web</Link></li>
                    <li className="pl-3"><Link to='graphics'>Graphics</Link></li>
                </div>
                
            </ul>
         <All></All>
         
        </div>


    );
};

export default Portfolio;