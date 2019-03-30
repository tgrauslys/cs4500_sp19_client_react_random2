import React from 'react'
import {Link} from "react-router-dom";




const FAQAnswers =
    ({faqAnswers, faqAnswer, totalPages, selectFAQAnswer, updateAnswer,  updateQuestion, createFaqAnswer, updateFaqAnswer, deleteFAQAnswer, selectPage})=>
        <div>
            <h3> FAQ Answers {faqAnswers.length}</h3>
            <table className="table">
                <tbody>
                <tr>
                    <td>
                        <input
                            className="question-fld"
                            onChange = {e => updateQuestion(e)}
                            value={faqAnswer.question}></input>
                        <input
                            className="answer-fld"
                            onChange={e => updateAnswer(e)}
                            value={faqAnswer.answer}></input>
                        <button
                            className="create-faq-answer-btn"
                            onClick={createFaqAnswer}>+</button>
                        <button
                            className="update-faq-answer-btn"
                            onClick={updateFaqAnswer}>Update</button>
                    </td>
                </tr>
                {
                    faqAnswers.map(faqAnswer =>
                        <tr key={faqAnswer.id}>
                            <td>{faqAnswer.question}</td>
                            <td>
                                <Link to={`/admin/faq-answers/${faqAnswer.id}`}>
                                    {faqAnswer.answer}
                                </Link>
                            </td>
                            <td>
                                <a class="btn btn-danger btn-lg active" role="button" aria-pressed="true"
                                   onClick={() =>
                                       deleteFAQAnswer(faqAnswer.id)}
                                >X</a>

                            <button className="select-faq-answer-btn"
                                    onClick={() => selectFAQAnswer(faqAnswer.id)}>
                                Select
                                </button>
                            </td>
                        </tr>
                    )
                }
                {
                    createPaginationRow(totalPages, selectPage)
                }

                </tbody>
            </table>
        </div>

{
    var createPaginationRow;
    createPaginationRow = (numPages, navFunction) => {
        let row = [];
        for (let i = 0; i < numPages + 1; i++) {
            row.push(<a role="button" class="btn btn-primary btn-lg active" onClick={() => navFunction(i - 1)}> i </a>)
        }
        return <tr>
            {
                row.map(cell =>
                    <td>cell</td>)
            }
        </tr>
    }
}


export default FAQAnswers