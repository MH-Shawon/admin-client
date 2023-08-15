import auth from '../../../firebase.init'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';



const Login = () =>
{

  const [ signInWithGoogle, gUser, gLoading,
    gError, ] = useSignInWithGoogle( auth );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword( auth );
  const [token] = useToken(gUser || user) 
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const onSubmit = ( data ) =>
  {

    console.log( data, 'Login successfull!' );
    signInWithEmailAndPassword( data.email, data.password )
  }


  if ( loading || gLoading )
  {
    return <Loading></Loading>
  }

  let signInError;
  if ( gError || error )
  {
    signInError = <p className="text-red-500"><small>{gError?.message || error?.message}</small></p>
  }

  if ( token )
  {
    navigate( from, { replace: true } );
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>

          <form className='text-center' onSubmit={handleSubmit( onSubmit )}>

            <div className=" w-full text-center ">
              <label className="label">
                <span className="label-text font-semibold text-base pl-3">Email</span>

              </label>
              <input
                type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                {...register( "email", {
                  required: {
                    value: true,
                    message: 'Email is required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Please enter a valid email address.'
                  }
                } )} />
              <label className="label">
                {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

              </label>
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text font-semibold text-base pl-3">Password</span>

              </label>
              <input
                type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs"
                {...register( "password", {
                  required: {
                    value: true,
                    message: 'Password is required'
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.'
                  }
                } )} />
              <label className="label">
                {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                {errors.password?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

              </label>
            </div>


            <div className='-m-3 mt-2 mr-9' >
              {signInError}
            </div>
            <input className=' btn bg-gray-600 rounded font-bold p-2.5 m-2 text-white w-full max-w-xs' type="submit" value="Login" />

          </form>

          <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
            <Link rel="noopener noreferrer" to="/signup" className="hover:underline text-lime-300 text-lg gap-">  Sign up</Link>.
          </p>
          <div className="divider">OR</div>


          <button
            onClick={() => signInWithGoogle()}
            className=" btn btn-primary ml-3.5 text-black font-bold text-xl mr-3.5 border rounded-md focus:ri focus:ri dark:border-gray-400 bg-cyan-300 focus:ri">
            <GoogleIcon></GoogleIcon>
            Login with Google
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;