import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Loading from '../Loding/Loding';
import '../MyTask/MyTask.css'
const CompletedTask = () => {

    const url = `https://user-daly-task-server.vercel.app/getTask`;
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

 



    const deleteData = (id) => {
        fetch(`https://user-daly-task-server.vercel.app/deleteTask/${id}`, {
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

    // 
    // update
    const completedNot = (id) => {
        fetch(`https://user-daly-task-server.vercel.app/updateTaskNot/${id}`, {
            method: 'PUT',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('completedNot your task ')
                refetch()
            })
    }


  


    if (isLoading) {
        return <Loading></Loading>
    }

    const completed = addProduct.data.filter(complet => complet.publish === true)

    return (
        <div>
            <div className="container mx-auto">
                <div className="card gap-5  grid  md:grid-cols-3 sm:grid-cols-1">
                    {
                        completed.map(task => <div key={task._id} className="single-card">
                            <img src={task.image} alt="" />
                            <h2>{task.name}</h2>
                            <p>{task.message}</p>
                            <div className="bt-area">
                                <button onClick={() => deleteData(task._id)}>Delete </button>
                                {/* <button><Link to={`/comment/${task._id}`}>Comment</Link> </button> */}
                                <button onClick={() => completedNot(task._id)}>Not Completed</button>
                            </div>
                            <div className="comment-area">
                                <Comment id={task._id}></Comment>
                                {/* <form onSubmit={commentHadale}>

                                    <input type="text" name='comment' className='comment' placeholder='Comment ' />
                                    <button className='bt-comment' onClick={() => completedNot(task._id)}>Submit</button>
                                </form>

                                <div className="show-comment">
                                    <img src="https://monday.com/blog/wp-content/uploads/2022/08/pasted-image-0-3.jpg" alt="" />
                                    <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, nihil!</p>
                                </div> */}
                            </div>
                        </div>)
                    }


                </div>
            </div>
            <Toaster />

        </div>
    );
};

export default CompletedTask;