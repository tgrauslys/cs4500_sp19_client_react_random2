import React from 'react'
import Provider from "../components/Provider/Provider";
import mockProvider from "../data/provider.mock"
class ProviderContainer extends React.Component {

    constructor(props) {
        super(props)
        this.userService = props.userService;
        this.reviewService = props.reviewService;
        this.faqAnswerService = props.faqAnswerService;
        this.providerId = props.providerId;
        this.state = {
            provider : mockProvider,
            reviews : [],
            ratingScores : [],
            FAQAnswers : []
        }
    }


    componentDidMount() {
        this.userService.findUserById(this.providerId).then(provider => this.setState({provider: provider}));
        this.reviewService.findReviewsForUser(this.providerId).then(reviews => this.setState({reviews: reviews}));
        this.reviewService.findRatingScores(this.providerId).then(ratingScores => this.setState({ratingScores : ratingScores}));
        this.faqAnswerService.findFAQsByUserId(this.providerId).then(FAQAnswers => this.setState({FAQAnswers : FAQAnswers}));
    }


    render () {
        return <Provider
                    provider={this.state.provider}
                    reviews={this.state.reviews}
                    ratings={this.state.ratingScores}
                    FAQAnswers={this.state.FAQAnswers}/>
    }
}
export default ProviderContainer