import React from 'react'
import {Link} from "react-router-dom";

const FAQAnswers =
    ({faqAnswers, faqAnswer, selectFaqAnswer, updateForm, createFaqAnswer, updateFaqAnswer, deleteFAQAnswer})=>
        <div>
            <h3> FAQ Answers {faqAnswers.length}</h3>
            <table className="table">
                <tbody>
                <tr>
                    <td>
                        <input
                            className="question-answer-fld"
                            onChange = {e => updateForm(e)}
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
                                    onClick={() => selectFaqAnswer(faqAnswer.id)}>
                                Select
                                </button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>

export default FAQAnswers