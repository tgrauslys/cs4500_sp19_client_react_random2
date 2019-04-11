import React from 'react'

const ServiceSearchFilter = ({ question, handleSelection }) => {
    return (
        <div>
            {
                <div key={question.id}>
                    {question.type === "choiceAnswer" &&
                        <div>
                            <h5>{question.question}</h5>
                            <form>
                                {(question.choices.map(choice =>
                                    <div key={choice}><input type="radio" name={question.id} value={choice} onChange={handleSelection} /> {choice}<br /></div>
                                ))}
                            </form>
                            <br />
                        </div>}
                </div>
            }
        </div>
    )

}

export default ServiceSearchFilter