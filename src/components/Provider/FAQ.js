import React from 'react'
const FAQ = ({faq}) =>
    <div>
        <h5>{faq.question}</h5>
        <p>{faq.answer}</p>
        <hr/>
    </div>

export default FAQ