
import './StickyHeader.scss';

const StickyHeader = () => {
    return(
        <div className="sticky-header">
            <span className="sticky-header__icon-wrapper">
                <span className="sticky-header__icon">
                    <i className="fas fa-arrow-left"></i>
                </span>
            </span>
            <span className="sticky-header__text">
                <h2>Olga Loboda</h2>
                <h3 className="text--highlight">110 Tweets</h3>
            </span>
        </div>
    );
}

export default StickyHeader;