import mockProvider from '../data/provider.mock'
import mockUser from '../data/user.mock'
import FAQAnswers from "../data/faqanswers.mock";
import reviews from "../data/reviews.mock";
import ratingScores from "../data/ratingScores.mock";
import jest;

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
                    })
                    }
                    else if (url.includes("/api/userto/1/reviews")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function() {
                        return reviews
                    }})
            })
        } else if (url.includes("/api/ratingscores/1")) {
                    return new Promise((resolve, reject) => {
                    resolve({
                    json: function () {
                    return ratingScores
                    }})
                    })
        }
                    else if (url.includes("/api/reviews")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return reviews
                    }
                })
            })
        }
        else if (url.includes("/api/faq-answer/byUser/1")) {
                    return new Promise((resolve, reject) => {
                    resolve({
                    json: function() {
                    return FAQAnswers
                    }})
                    })
                    }
                    else if (url.includes("/api/faq-answers")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return FAQAnswers
                    }
                })
            })
        }

    });