import FAQAnswers from '../data/faqanswers.mock'
import mockUser from '../data/user.mock'
import pagedAnswers from '../data/pagedFAQAnswers.mock'
import FAQ from '../data/faq.mock'


global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes("/api/faq-answer/byUser/1")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function() {
                        return mockUser
                    }})
            })
        }
        else if (url.includes("/api/faq-answers")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return pagedAnswers
                    }
                })
            })
        } else if(url.includes("/api/faq-answer/byUser/1")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return FAQAnswers
                    }
                })
            })
        }
        else if(url.includes("/api/faq")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return FAQ
                    }
                })
            })
        }
        else if(url.includes("/api/users")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return mockUser
                    }
                })
            })
        }
    });