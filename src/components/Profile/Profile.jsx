import './Profile.scss';
import Posts from './Posts/Posts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import Summary from './Summary/Summary';
import StickyHeader from '../Main/StickyHeader/StickyHeader';

const Profile = () => {
    return(
        <div className="main-wrapper">
            <article className="main__feed-wrapper">
                <StickyHeader />
                <ProfileHeader />
                <Posts />
            </article>
            <article className="main__summary-wrapper">
                <Summary />
            </article>
        </div>
    );
}

export default Profile;