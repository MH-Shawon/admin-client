// import React from 'react';
import doctor  from '../../../assets/images/doctor-small.png'
import appointment  from '../../../assets/images/appointment.png'
const Banner = () => {
    return (
      <div style={{
        background:`url(${appointment})`
      }} className=" hero min-h-full rounded-xl mt-1 ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
          
          <img src={doctor} className="max-w-sm rounded-lg shadow-2xl " />
          
          <div className='text-white'>
              <h1 className="text-xl font-semibold pr-16"> I'M LUCY DOE </h1>
              <h3 className='font-medium'>DENTIST</h3>
              
          </div>
      </div>
  </div>
    );
};

export default Banner;