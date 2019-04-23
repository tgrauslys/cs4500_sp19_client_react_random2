import React from 'react'

import BusinessDetails from "../components/BusinessDetails";

class BusinessDetailsContainer extends React.Component {
    constructor(props) {
        super(props)
        //this.businessService = this.props.service
        this.stateFieldNames = ['name',
            'yearFounded',
            'employees',
            'email',
            'street',
            'city',
            'state',
            'zip',
            'paymentMethods',
            'facebook',
            'instagram',
            'twitter']
        this.state = {
            business: {
                name: 'Example',
                yearFounded: '2000',
                employees: '20',
                email: 'an email',
                street: 'a street',
                city: 'a city',
                state: 'a state',
                zip: 'a zip',
                paymentMethods: 'some payment methods',
                facebook: 'a facebook link',
                instagram: 'an instagram link',
                twitter: 'a twitter link'
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    /*    componentDidMount() {
            this.findAllQuotes()
        }
        findAllBusinesses = () =>
            this.businessService
                .findAllBusinesses()
                .then(quotes => {
                        this.setState({
                            quotes: quotes
                        })
                    }
                )

        createBusiness = () =>
            this.quoteService
                .createQuote(this.state.quote)
                .then(this.findAllBusinesses)
        deleteBusiness = id =>
            this.quoteService
                .deleteQuote(id)
                .then(this.findAllBusinesses)
        updateBusiness = () =>
            this.quoteService
                .updateBusiness(this.state.business)
                .then(this.findAllBusinesses())*/
    handleChange(e) {
        let change = {business: {}}

        this.stateFieldNames.forEach(fieldName => {
            if (fieldName === e.target.id){
                change["business"][e.target.id] = e.target.value
            } else {
                change["business"][fieldName] = this.state.business[fieldName]
            }
        })
        this.setState(change)
    }

    render() {
        return (
            <div>
                <BusinessDetails
                    // updateBusiness={this.updateBusiness}
                    // deleteBusiness={this.deleteBusiness}
                    // createBusiness={this.createBusiness}
                    // updateForm={this.updateForm}
                    handleChange={this.handleChange}
                    business={this.state.business}/>
            </div>
        )
    }
}

export default BusinessDetailsContainer