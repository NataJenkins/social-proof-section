import PropTypes from "prop-types";
import Star from "../../assets/icon-star.svg";
import "./stars.scss";

export default function StarsCard({ text }) {
    return (
        <div className="stars-card-container">
            <span>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
            </span>
            <p>{text}</p>
        </div>
    );
}

StarsCard.propTypes = {
    text: PropTypes.string,
};
