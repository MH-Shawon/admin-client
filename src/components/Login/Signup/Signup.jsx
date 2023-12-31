import GoogleIcon from '@mui/icons-material/Google';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';



const SignUp = () =>
{

    const [ signInWithGoogle, googleUser, googleLoading, googleError ] = useSignInWithGoogle( auth );

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword( auth );

    const [ updateProfile, updating, updateError ] = useUpdateProfile( auth );
    
    const [ token ] = useToken( user || googleUser );

    const navigate = useNavigate()


    if ( loading || googleLoading || updating )
    {
        return <Loading></Loading>
    }

    let signInError;

    if ( error || googleError || updateError )
    {
        signInError = <p className='text-red-500'><small>{error?.message || googleError?.message || updateError?.message}</small></p>
    }

    if ( token )
    {
        
        navigate('/home')
    }



    const onSubmit = async data =>
    {
        await createUserWithEmailAndPassword( data.email, data.password );
        await updateProfile( { displayName: data.name } );

    }

    return (
        <div className='flex mt-8 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit( onSubmit )}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register( "name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                } )}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register( "email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                } )}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register( "password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                } )}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}

                        <input className='btn  bg-gray-600 rounded font-bold p-2.5 m-2 text-white w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>
                    <p className="px-6 text-cyan-500 text-sm text-center">Don't have an account yet?
                        <Link rel="noopener noreferrer" to="/login" className="hover:underline text-lime-300 text-lg "> Login</Link>
                    </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className=" btn btn-primary ml-3.5 text-black font-bold text-xl mr-3.5 border rounded-md focus:ri focus:ri dark:border-gray-400 bg-cyan-300 focus:ri">
                        <GoogleIcon></GoogleIcon>Login with Google
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SignUp;