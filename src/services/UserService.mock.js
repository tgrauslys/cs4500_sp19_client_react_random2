import mockProvider from '../data/provider.mock'
import mockUser from '../data/user.mock'
import FAQAnswers from "../data/faqanswers.mock";
import reviews from "../data/reviews.mock";
import ratingScores from "../data/ratingScores.mock";

global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes("/api/users/1")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function() {
                        return mockProvider
                    }})
            })
        }
        else if(url.includes("/api/profile")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function() {
                        return mockUser
                    }
                }
            )
            })}