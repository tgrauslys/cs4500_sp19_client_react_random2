import React from 'react';
import Provider from './Provider';
import TestRenderer from 'react-test-renderer';
import user from '../../data/user.mock.json'
import reviews from '../../data/reviews.mock.json'
import ratingScores from '../../data/ratingScores.mock.json'
import FAQAnswers from '../../data/faqanswers.mock.json'


test('Render provider profile page', () => {
    const testRenderer = TestRenderer.create(
        <Provider
            provider={user}
            reviews={reviews}
            ratings={ratingScores}
            FAQAnswers={FAQAnswers}
            reviewDescription={""}
            reviewRating={1}

        />)

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const ratingWidths = testInstance.findAllByProps({class: "progress"});

    //check 100% of ratings are 5 stars
    expect(ratingWidths).toBeDefined();
    expect(ratingWidths.length).toBe(5);
    expect(ratingWidths[0].props.children.props["style"]["width"]).toBe("100%");

    //others are 0%
    expect(ratingWidths[1].props.children.props["style"]["width"]).toBe("0%");
    expect(ratingWidths[2].props.children.props["style"]["width"]).toBe("0%");
    expect(ratingWidths[3].props.children.props["style"]["width"]).toBe("0%");
    expect(ratingWidths[4].props.children.props["style"]["width"]).toBe("0%");

    

})
