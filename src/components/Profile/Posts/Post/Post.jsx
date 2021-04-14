import './Post.scss';

const Post = (props) => {
    return(
       <section className="post">
            <div className="post__img-wrapper">
                <div className="post__img"></div>
            </div>
            <div className="post__main">
                <div className="post__header">
                    <div>
                        <h4 className="post__username">Olga Loboda</h4>
                        <span className="text--highlight">@_olgaloboda</span>
                        <span className="text--highlight"> • </span>
                        <span className="text--highlight">Apr 13</span>
                    </div>
                    <button className="btn--icon"><i className="fas fa-ellipsis-h"></i></button>
                </div>
                <p className="post__content">{props.message}</p> 
                <div className="post__footer">
                    <span className="text--highlight">
                        <i className="far fa-comment"></i>
                    </span>
                    <span className="text--highlight">
                        <i className="fas fa-retweet"></i>
                        <span className="post__stats">17</span>
                    </span>
                    <span className="text--highlight">
                        <i className="far fa-heart"></i>
                        <span className="post__stats">10</span>
                    </span>
                    <span className="text--highlight">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="text--highlight">
                        <i className="fas fa-signal"></i>
                    </span>
                </div>
            </div> 
       </section>
    );
}

export default Post;