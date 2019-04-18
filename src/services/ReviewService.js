export default class ReviewService {
    static instance = null;
    static getInstance() {
        if(ReviewService.instance === null) {
            ReviewService.instance = new ReviewService()
        }
        return this.instance
    }


    findReviewsForUser = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/userto/${id}/reviews`)
            .then(response => response.json())

    findRatingScores = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/ratingscores/${id}`).then(response => response.json())


}