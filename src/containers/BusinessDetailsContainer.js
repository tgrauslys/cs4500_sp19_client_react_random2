import React from 'react'

import BusinessDetails from "../components/BusinessDetails";
class BusinessDetailsContainer extends React.Component {
    constructor(props) {
        super(props)
        //this.businessService = this.props.service
        this.state = {
            business: {
                name: 'Example',
                yearFounded: '2000',
                numEmployees: '20',
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
    updateForm = e =>
        this.setState({
            quote: {
                id: this.state.quote.id,
                jobTitle: e.target.value
            }
        })
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
    render() {
        return (
            <div>
                <BusinessDetails
                    // updateBusiness={this.updateBusiness}
                    // deleteBusiness={this.deleteBusiness}
                    // createBusiness={this.createBusiness}
                    // updateForm={this.updateForm}
                    updateForm={""}
                    business={this.state.business} />
            </div>
        )
    }
}
export default BusinessDetailsContainer