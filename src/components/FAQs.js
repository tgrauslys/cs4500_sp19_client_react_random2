import React from 'react'

const FAQs = ({faqs,
               faq,
               selectFAQ,
               createFAQ,
               deleteFAQ,
               updateFAQ,
               updateForm}) =>
            <div>
                <h3>Frequently Asked Questions</h3>
                <table className="table">
                    <tr>
                        <th> Question </th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>
                            <input
                                onChange={e => updateForm(e)}
                                value={faq.question}></input>
                            <button
                                className="btn btn-primary"
                                onClick={createFAQ}>Add</button>
                            <button
                                className="btn btn-primary"
                                onClick={updateFAQ}>Update</button>
                        </td>

                    </tr>

                    {
                        faqs
                            .map(faq =>
                                <tr key={faq.id}>
                                    <Link to={`/admin/faqs/${faq.id}`}>
                                        <td>{faq.question}</td>
                                    </Link>
                                    <td>
                                        <a className="btn btn-danger btn-lg active" role="button"
                                           onClick{() => deleteFAQ(faq.id)}
                                        >X</a>
                                    </td>
                                    <Link to={`/admin/faqs/${faq.id}`}>
                                        <button type="button" className="btn btn-warning">Edit</button>
                                    </Link>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>




export default FAQs