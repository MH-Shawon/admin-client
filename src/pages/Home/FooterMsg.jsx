import SocialApp from "../SociaApp/SocialApp";

import Form from "./Shared/Footer/Form";




const FooterMsg = () =>
{
  return (
    <footer>
      <section className="footer rounded-xl mt-1 bg-base-200 px-24  text-base-content">

        <div>

          <h4 className="text-xl font-extrabold">Get In Touch</h4>
          <div className="flex items-center">
            <div className="flex flex-col bg-gray-950 h-1 w-10"></div>
            <div className="flex flex-col bg-slate-400 h-0.5 items-end w-48"></div>
          </div>
          <div className="font-medium py-8">
            <p className="py-2">100 Main St.Blacktown NSW 2148, <br /> Australia</p>
            <p className="py-2">support@bold.com, info@youremail.com</p>
            <p className="py-2">+256-4516-556, +(257) 56812749</p>

          </div>
          <div className='flex'>
            <p className='font-bold'>Share: </p>
            <div className='pl-2'><SocialApp></SocialApp></div>
          </div>
        </div>
        
        <div className="w-full">
        <Form></Form>
        </div>
        </section>
      <div className=" px-24 text-end p-4 mt-8 bg-base-300 text-base-content" >
        <p>© AdminPanel 2023, Made with By Divergent Studio</p>
      </div>
    </ footer>
  );
};

export default FooterMsg;