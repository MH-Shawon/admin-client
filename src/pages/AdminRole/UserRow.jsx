import React from 'react';
import { toast } from 'react-toastify';


const UserRow = ( { user, index } ) =>
{
    const { email, role } = user;
    console.log(user)

    const makeAdmin = () =>
    {

        fetch( `http://localhost:5000/user/admin/${ email }`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
            }
        } )
        .then( res =>{ 
            if(res.status === 403){
                toast.error('Failed to make an Admin')
            }
            return res.json()} )
            .then( data =>
            {
               if( data.modifiedCount > 0){
                // refetch();
                toast.success(`Successfilly made an admin`);
            }
            } )
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='text-center text-basenpm '>{email}</td>
            <td>
                { <button onClick={makeAdmin} className='btn btn-outline btn-success'>Make Admin</button>
                }
                </td>
                
            <td><button className='btn btn-outline btn-error'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;