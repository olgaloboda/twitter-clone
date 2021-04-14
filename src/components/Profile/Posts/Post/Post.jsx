import p from './Post.module.scss';

const Post = (props) => {
    return(
       <section className='post'>
            <div className='post__img-wrapper'>
                <img src="" alt="" className="post__img" />
            </div>
            <div className='post__main'>
                <div className='post__header'>

                </div>
                <p className='post__content'>{props.message}</p> 
                <div className='post__footer'>
                    
                </div>
            </div> 
       </section>
    );
}

export default Post;