import React from 'react'
import {Link} from 'react-router-dom'

const FAQAnswerDetails =
    ({faqAnswers, faqAnswer, updateFormAnswer, selectFAQAnswer, navigateBack, editAnswer}) =>

        <div>
            <h3>FAQ Answer Details</h3>
            <select
                value={faqAnswer.id}
                className="form-control">
                {
                    faqAnswers
                        .map(faqAnswer =>
                            <option
                                value={faqAnswer.id}
                                key={faqAnswer.id}>
                                {faqAnswer.id}
                            </option>
                        )
                }
            </select>
            <label>FAQ Answer Question</label><br/>
            <input
                className="form-control"
                value={faqAnswer.question}/>
            <label>FAQ Answer Answer</label><br/>
            <input
                onChange={e => updateFormAnswer(e)}
                className="form-control"
                value={faqAnswer.answer}/>
            <br></br>
            <td>
                <a role="button" class="btn btn-danger btn-lg active"
                   onClick={() => navigateBack()}>Cancel</a>
            </td>

            <td>
                <a role="button" class="btn btn-warning btn-lg"
                   onClick={() => editAnswer()}>Edit</a>
            </td>
        </div>


export default FAQAnswerDetails