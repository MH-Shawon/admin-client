import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import people4 from '../../assets/images/people1.png'
import people5 from '../../assets/images/people2.png'
import people6 from '../../assets/images/people3.png'
import PhotoCard from './PhotoCard'

const All = () => {

    const photoCards =[
        {
            id:1,
           
            img: people1 
        },
        {
            id:2,
            
            img: people2 
        },
        {
            id:3,
           
            img: people3 
        },
        {
            id:4,
           
            img: people4 
        },
        {
            id:5,
           img: people5 
        },
        {
            id:6,
           img: people6 
        }
    ];
    return (
        <div className='mt-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    photoCards.map(photocard=><PhotoCard
                    key={PhotoCard.id}
                    photocard={photocard}
                    ></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default All;