import PropTypes from "prop-types";
import "./ReviewCard.scss";
import Colton from "../../assets/image-colton.jpg";
import Irene from "../../assets/image-irene.jpg";
import Anne from "../../assets/image-anne.jpg";

export default function ReviewCard({ review }) {
    const getImage = (image) => {
        switch (image) {
            case "Colton":
                return Colton;
            case "Irene":
                return Irene;
            case "Anne":
                return Anne;

            default:
                return;
        }
    };
    console.log(review);
    return (
        <div className="review-card">
            <div className="header">
                <div className="img-container">
                    <img src={getImage(review.img)} alt="" />
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
