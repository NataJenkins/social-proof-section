import "./App.scss";
import StarsCard from "./components/Stars-card/StarsCard";
import ReviewCard from "./components/ReviewCard/ReviewCard";

function App() {
    const reviews = [
        {
            img: "./public/images/image-colton.jpg",
            name: "Colton Smith",
            type: "Verified Buyer",
            content:
                "“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”",
        },
        {
            img: "./public/images/image-irene.jpg",
            name: "Irene Roberts",
            type: "Verified Buyer",
            content:
                "“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”",
        },
        {
            img: "./public/images/image-anne.jpg",
            name: "Anne Wallace",
            type: "Verified Buyer",
            content:
                "“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”",
        },
    ];

    return (
        <main>
            <div className="container">
                <div className="content">
                    <div className="top">
                        <div className="header">
                            <h1>10,000+ of our users love our products.</h1>
                            <p>
                                We only provide great products combined with
                                excellent customer service. See what our
                                satisfied customers are saying about our
                                services.
                            </p>
                        </div>
                        <div className="stars">
                            <StarsCard text="Rated 5 Stars in Reviews" />
                            <StarsCard text="Rated 5 Stars in Report Guru" />
                            <StarsCard text="Rated 5 Stars in BestTech" />
                        </div>
                    </div>
                    <div className="bottom">
                        {reviews.map((review, i) => (
                            <ReviewCard review={review} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
