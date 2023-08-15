import { Slider } from "@mui/material";
import Stack from '@mui/material/Stack';

const Service = ( { service } ) =>
{
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>
          {service.description.length > 120 ?
            `${ service.description.substring( 0, 120 ) }...` : service.description
          }
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum sapiente amet quae aut reprehenderit! Nulla assumenda harum magni laudantium.
        </p>

      </div>
    </div>
  );
};

export default Service;