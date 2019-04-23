import reviews from '../data/reviews.mock'
import ratingScores from '../data/ratingScores.mock'

global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes("/api/userto/1/reviews")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function() {
                        return reviews
                    }})
            })
        } else if (url.includes("/api/ratingScores/1")) {
            return new Promise((reolve, reject) => {
                resolve({
                    json: function () {
                        return ratingScores
                    }
                })
            })
        }
        else if (url.includes("/api/reviews")) {
            return new Promise((resolve, reject) => {
                return reviews
            })
        }
    });