import React from 'react'
import Provider from "../components/Provider/Provider";
import UserService from "../services/UserService"
import ReviewService from "../services/ReviewService"
import FAQAnswerService from "../services/FAQAnswerService"
class ProviderContainer extends React.Component {

    constructor(props) {
        super(props)
        this.userService = UserService.getInstance();
        this.reviewService = ReviewService.getInstance();
        this.faqAnswerService = FAQAnswerService.getInstance();
        this.providerId = this.props.props.match.params.id;
        this.state = {
            provider : {},
            reviews : [],
            ratingScores : [],
            FAQAnswers : [],

            reviewDescription : "",
            reviewRating : "",
            reviewUserFrom : "",

        }
    }


    componentDidMount() {
        this.userService.findUserById(this.providerId).then(provider => this.setState({provider: provider}));
        this.reviewService.findReviewsForUser(this.providerId).then(reviews => this.setState({reviews: reviews}));
        this.reviewService.findRatingScores(this.providerId).then(ratingScores => this.setState({ratingScores : ratingScores}));
        this.faqAnswerService.findFAQsByUserId(this.providerId).then(FAQAnswers => this.setState({FAQAnswers : FAQAnswers}));
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    submitReview(e) {
        let review = {}
        review["description"] = this.state.reviewDescription;
        review["rating"] = this.state.reviewRating;
        review["userTo"] = this.state.provider;
        this.userService.profile().then(user => review["userFrom"] = user);

        this.reviewService.createReview(review);
    }


    render () {
        return <Provider
                    provider={this.state.provider}
                    reviews={this.state.reviews}
                    ratings={this.state.ratingScores}
                    FAQAnswers={this.state.FAQAnswers}
                    handleChange={this.handleChange.bind(this)}
                    reviewDescription={this.state.reviewDescription}
                    reviewRating={this.state.reviewRating}
                    submitReview={this.submitReview.bind(this)}/>
    }
}
export default ProviderContainer