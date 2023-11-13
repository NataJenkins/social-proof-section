import PropTypes from "prop-types";
import "./ReviewCard.scss";

export default function ReviewCard({ review }) {
    console.log(review);
    return (
        <div className="review-card">
            <div className="header">
                <div className="img-container">
                    <img src={review.img} alt="" />
                </div>
                <div className="title">
                    <h2 className="name">{review.name}</h2>
                    <p className="type">{review.type}</p>
                </div>
            </div>
            <p className="card-content">{review.content}</p>
        </div>
    );
}

ReviewCard.propTypes = {
    review: PropTypes.shape({
        content: PropTypes.string,
        img: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
    }),
};
