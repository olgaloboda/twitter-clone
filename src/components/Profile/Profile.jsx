import p from './Profile.module.scss';
import Posts from './Posts/Posts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import Summary from './Summary/Summary';

const Profile = () => {
    return(
        <div>
            <article className="profile-main">
                <ProfileHeader />
                <Posts />
            </article>
            <Summary />
        </div>
    );
}

export default Profile;