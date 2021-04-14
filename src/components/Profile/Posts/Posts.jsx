import './Posts.scss';
import Post from './Post/Post';

const Posts = () => {
    return(
        <div className="posts">
            <div className="posts__tabs-wrapper" role="tablist">
                <ul className="posts__tabs">
                    <li className="posts__tab posts__tab--active text--highlight">Tweets</li>
                    <li className="posts__tab text--highlight">Tweets &amp; replies</li>
                    <li className="posts__tab text--highlight">Media</li>
                    <li className="posts__tab text--highlight">Likes</li>
                </ul>
            </div>
            <Post message="hello"/>
        </div>
    );
}

export default Posts;