import p from './Posts.module.scss';
import Post from './Post/Post';

const Posts = () => {
    return(
        <div className="profile-main__posts">
            {/* Tabs */}
            <Post message="hello"/>
        </div>
    );
}

export default Posts;