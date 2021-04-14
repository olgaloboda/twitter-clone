import './ProfileHeader.scss';

const ProfileHeader = () => {
    return(
        <div className="profile-header">
            <div className="profile-header__img-wrapper">
                <div className="placeholder"></div>
                {/* <img src="https://video-images.vice.com/articles/58ee4e1dc897256240ffb96d/lede/1492013215589-32852135814_b29e52d79f_o.jpeg" alt="" className="profile-header__background-img"/>Background image */}
            </div>
            <div className="profile-header__main-wrapper">
                <div className="profile-header__profile-stripe">
                    <div className="profile-header__profile-img-wrapper">
                        <div className="profile-header__profile-img"></div>
                    </div>
                    <button className="btn--outline">Edit profile</button>
                </div>
                <div className="profile-header__profile-desc">
                    <h2>Olga Loboda</h2>
                    <h3 className="text--highlight">@_olgaloboda</h3>
                </div>
                <div className="profile-header__profile-desc">
                    <p>PhD candidate at UCL (recommender systems in museums) | Trying to bring my weird ideas to life | <img src="https://abs-0.twimg.com/emoji/v2/svg/1f1fa-1f1e6.svg" alt="" className="emoji-icon"/></p>
                </div>
                <div className="profile-header__profile-desc">
                    <span className="desc">
                        <span className="desc__icon"><i className="fas fa-map-marker-alt"></i></span>
                        <span className="text--highlight">localhost</span>
                    </span>
                    <span className="desc">
                        <span className="desc__icon"><i className="fas fa-link"></i></span>
                        <a href="http://olgaloboda.com">olgaloboda.com</a>
                    </span>
                    <span className="desc">
                        <span className="desc__icon"><i className="fas fa-calendar-alt"></i></span>
                        <span className="text--highlight">Joined October 2017</span>
                    </span>
                </div>
                <div className="profile-header__profile-desc">
                    <span className="stats">
                        <span className="stats__number">432</span> <span className="text--highlight">following</span>
                    </span>
                    <span className="stats">
                        <span className="stats__number">146</span> <span className="text--highlight">followers</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;