import React from 'react';
import '../MyTask/MyTask.css'
const CompletedTask = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="card gap-5  grid  md:grid-cols-3 sm:grid-cols-1">
                    <div className="single-card">
                        <img src="https://monday.com/blog/wp-content/uploads/2022/08/pasted-image-0-3.jpg" alt="" />
                        <h2>Amit paul web developer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus autem maiores fugiat est reprehenderit repellendus eius adipisci repudiandae quae. maiores fugiat est reprehenderit repellendus eius adipisci repudiandae quae.</p>
                        <div className="bt-area">
                            <button>Delete </button>
                            <button>Not Completed</button>
                        </div>
                        <div className="comment-area">
                            <form>

                                <input type="text" name='comment' className='comment' placeholder='Comment ' />
                                <button className='bt-comment' type='submit'>Submit</button>
                            </form>

                            <div className="show-comment">
                                <img src="https://monday.com/blog/wp-content/uploads/2022/08/pasted-image-0-3.jpg" alt="" />
                                <p className='comment-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, nihil!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CompletedTask;