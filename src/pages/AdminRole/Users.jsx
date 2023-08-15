import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';
import { useQuery } from 'react-query';
import Loading from '../../components/Shared/Loading/Loading';


const Users = () =>
{


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr className='text-white text-lg'>
                            <th>No.</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map( ( user, index ) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow> )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;