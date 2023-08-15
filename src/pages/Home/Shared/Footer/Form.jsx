
import MsgButton from '../../MsgButton';
import './Form.css'
import Verify from './Verify';
const Form = () =>
{
    return (
        <form>
            <div className='flex flex-wrap w-full  pt-20'>

                <div className=' w-full flex flex-wrap'>
                    <div style={{
                        paddingRight:"5px",
                        width:"50%"
                    }}>
                    <input
                        type="name"
                        name="name"
                        class="name-field"
                        id="name"
                        placeholder="Name Here*"
                        autoComplete='off'
                    />
                    </div>
                    <div style={{
                        paddingRight:"5px",
                        width:"50%"
                    }}>
                    <input
                        name="email"
                        class='email'
                        id="email"
                        placeholder="Email Here*"
                        required />
                    </div>
                    
                    
                </div>
                <input
                    type="msg"
                    name="msg"
                    class='msg'
                    id="email"
                    placeholder="Message Here*"
                /></div>
            
            <div className='flex justify-between'>
            <Verify></Verify>
                <div className='pt-12'>
                <MsgButton></MsgButton>
                </div>
            </div>
        </form>
    );
};

export default Form;