export default class ReviewService {
    static instance = null;

    static getInstance() {
        if (ReviewService.instance === null) {
            ReviewService.instance = new ReviewService()
        }
        return this.instance
    }


    findReviewsForUser = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/userto/${id}/reviews`)
            .then(response => response.json())

    findRatingScores = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/ratingscores/${id}`).then(response => response.json())


    createReview = review =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/review`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(review), // body data type must match "Content-Type" header
        }).then(response => response.json());

    linkUserTo = (reviewId, userId) => fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/review/${reviewId}/userto/${userId}`,
        {method: 'post'});

    linkUserFrom = (reviewId, userId) => fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/review/${reviewId}/userfrom/${userId}`,
        {method: 'post'});
}


