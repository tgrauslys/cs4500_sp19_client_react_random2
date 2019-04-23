import FAQAnswers from '../data/faqanswers.mock'


global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes("/api/faq-answer/byUser/1")) {
                return new Promise((resolve, reject) => {
                    resolve({
                        json: function() {
                            return FAQAnswers
                        }})
                })
            }
            else if (url.includes("/api/faq-answers")) {
                return new Promise((resolve, reject) => {
                    return FAQAnswers
                })
        }
    });