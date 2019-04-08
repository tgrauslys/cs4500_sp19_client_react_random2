import React from 'react'

const ServiceSearchFilter = ({ filter, handleSelection }) => {
    return (
        <div>
            {
                <div key={filter.id}>
                    {filter.type === "choiceAnswer" &&
                        <div>
                            <h5>{filter.question}</h5>
                            <form>
                                {(filter.choices.map(choice =>
                                    <div key={choice}><input type="radio" name={filter.id} value={choice} onChange={handleSelection} /> {choice}<br /></div>
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