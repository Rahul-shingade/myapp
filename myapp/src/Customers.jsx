import React, { Component } from 'react';
import "./index.css";

class Customers extends Component {
    state = {
        pageTitle: "Customer Data",
        count: 99,
        customers: [
            {
                id: 1,
                name: "vijay",
                phone: "123456890",
                address: { city: "New Delhi" },
            },
            {
                id: 2,
                name: "Sujith",
                // phone: "9820149090",
                address: { city: "Bangalore" },
            },
            { id: 3, name: "mahesh", phone: "889000921", address: { city: "London" } },
            { id: 4, name: "aamir khan", phone: "552967601", address: { city: "indore" } },
            { id: 5, name: "John", phone: "781566778", address: { city: "surath" } },
        ]
    }
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}
                </h2>
                <button type="button" class="btn btn-primary" onClick={this.ChangeCount}>
                    Customers Count is <span class="badge text-bg-secondary">{this.state.count}</span>
                </button>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((cust) => {
                            return (
                                <tr key={cust.id}>
                                    <td>{cust.id}</td>
                                    <td className={this.customersNameStyle(cust.name)}>{cust.name}</td>
                                    <td>{
                                        cust.phone ? cust.phone : (
                                            <div className="bg-warning p-1 text-center">
                                                Not Available
                                            </div>
                                        )
                                    }</td>
                                    <td>{cust.address.city}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
    ChangeCount = () => {
        this.setState({ count: 100 });
    };
    customersNameStyle = (custName) => {
        if (custName.startsWith("S")) return "green-highlight border-left";
        else if (custName.startsWith("J")) return "red-highlight border-right";
        else return "";
        };
       
}


export default Customers;