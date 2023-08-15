import flouride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const services =[
        {
            id:1,
            name: 'Flouride Treatment',
            description:'',
            img: flouride
        },
        {
            id:2,
            name: 'Cavity Filling',
            description:'',
            img: cavity
        },
        {
            id:3,
            name: 'Teeth Whitening',
            description:'',
            img: whitening
        }
        
    ];
    return (
        <div className='mt-8'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
            services.map(service => <Service
            key={Service.id}
            service={service}
            ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;