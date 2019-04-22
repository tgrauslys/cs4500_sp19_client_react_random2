import React from 'react'
import Provider from "../components/Provider/Provider";

class ProviderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.userService = props.UserService;
        this.reviewService = props.ReviewService;
        this.faqAnswerService = props.FAQAnswerService;
        this.providerId = this.props.id;
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
        this.userService.findUserById(this.providerId).then(provider => this.setState({provider: provider})).catch();
        this.reviewService.findReviewsForUser(this.providerId).then(reviews => this.setState({reviews: reviews})).catch();
        this.reviewService.findRatingScores(this.providerId).then(ratingScores => this.setState({ratingScores : ratingScores})).catch();
        this.faqAnswerService.findFAQsByUserId(this.providerId).then(FAQAnswers => this.setState({FAQAnswers : FAQAnswers})).catch();
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    submitReview(e) {
        let review = {}
        review["description"] = this.state.reviewDescription;
        review["rating"] = this.state.reviewRating;
        this.userService.profile().then(user => {
            this.reviewService.createReview(review).then(reviewresponse => {
                console.log(reviewresponse);
                this.reviewService.linkUserFrom(reviewresponse.id, user.id).then( linkresponse => {
                        console.log(reviewresponse)
                        this.reviewService.linkUserTo(reviewresponse.id, this.providerId)
                }

                );
            })});
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