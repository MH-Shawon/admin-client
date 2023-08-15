import doctor from '../../../assets/images/doctor.png'
import SocialApp from '../../SociaApp/SocialApp';
import Services from '../Services';



const About = () =>
{
  return (

    <section className='px-24'>
    <div className="hero min-h-max mt-8">
      <div className="hero-content flex-col lg:flex-row">
        <img src={doctor} className="max-w-sm rounded-lg shadow-2xl" />
        <div className='pl-16'>
          <h1 className="text-xl font-bold">About Me</h1>
          <div className="flex items-center">
            <div className="flex flex-col bg-gray-950 h-1 w-10"></div>
            <div className="flex flex-col bg-slate-400 h-0.5 items-end w-28"></div>
            </div>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <div className='flex'>
        <p className='font-bold'>Share: </p>
        <div className='pl-2'><SocialApp></SocialApp></div>
        </div>
          
        </div>
        </div>
    </div>
    <Services></Services>
    </section>
  );
};

export default About;