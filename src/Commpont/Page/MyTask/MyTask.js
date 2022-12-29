import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loading from '../Loding/Loding';
import './MyTask.css'
const MyTask = () => {

    const url = `http://localhost:5000/getTask`;
    const { data: addProduct = [], refetch, isLoading } = useQuery({
        queryKey: ['addProduct'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            });
            const data = await res.json();
            return data
        }
    })

    // filter

    if (isLoading) {
        return <Loading></Loading>
    }

    // update
    const completed = (id) => {
        fetch(`http://localhost:5000/updateTask/${id}`, {
            method: 'PUT',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('completed your task')
                refetch()
            })
    }

    // delete data 
    const deleteData = (id) => {

        fetch(`http://localhost:5000/deleteTask/${id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(data.message)

                refetch()
            })
    }


   

  
    const completedNot = addProduct.data.filter(complet => complet.publish === false)

    console.log(completedNot);

    return (
        <div>
            <div className="container mx-auto">
                <div className="card gap-5  grid  md:grid-cols-3 sm:grid-cols-1">
                    {
                        completedNot.map(task =>
                            <div key={task._id} className="single-card">
                                <img src={task.image} alt="" />
                                <h2>{task.name}</h2>
                                <p>{task.message}</p>
                                <div className="bt-area">
                                    <button><Link to={`/updateData/${task._id}`}>Update  </Link></button>
                                    
                                    <button onClick={() => deleteData(task._id)}>Delete </button>
                                    <button onClick={() => completed(task._id)}>Completed</button>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
            <Toaster />

        </div>
    );
};

export default MyTask;