import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Loading from '../Loding/Loding';
import '../MyTask/MyTask.css'

const Comment = ({ id }) => {
    // const { id } = useParams()
    // console.log(id);



    const url = `https://user-daly-task-server.vercel.app/comment`;
    const { data: comments = [], refetch, isLoading } = useQuery({
        queryKey: ['comment'],
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

    const commentHadale = (e ) => {
        e.preventDefault()
        const comment = e.target.comment.value;

        const addComment = { comment, idNo: id }
        // post data
        fetch(`https://user-daly-task-server.vercel.app/comment`, {
            method: 'POST',
            headers: {

                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addComment)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Add your task')
                // setLoad(false)
                refetch()
                
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    // const commentText = 

    const singleComment = comments.data.filter(commentSingle => commentSingle.idNo === id)

    console.log(singleComment);
    console.log(comments.data);
    return (
        <div >
            <div className="comment-area">

                <form onSubmit={commentHadale}>

                    <input type="text" name='comment' className='comment' placeholder='Comment ' />
                    <button className='bt-comment' type='submit'>Submit</button>
                </form>
            </div>
            {
                singleComment.map(text => <div key={text._id} className="show-comment">
                    <img src="https://monday.com/blog/wp-content/uploads/2022/08/pasted-image-0-3.jpg" alt="" />
                    <p className='comment-text'>{text.comment}</p>
                </div>)
            }

            <Toaster />

        </div>
    );
};

export default Comment;