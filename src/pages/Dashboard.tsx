import {useContext, useReducer} from "react";
import "../style/Dashboard.css"
import {Customer} from "../model/Customer.ts";
import {CustomerContext} from "../component/CustomerProvider.tsx";
export function Dashboard() {

    const [customers] =useContext(CustomerContext);
    return (
        <div className=" md-8">
            <h1 className="text-3xl font-medium text-green-500 mb-6 text-my">Dashboard</h1>
            <div  className="p-6 grid grid-cols-2" >
                {/* left  */}
                <div>
                    <h1 className="text-3xl font-medium text-green-500 mb-6">Customer</h1>
                    <table className=" table-auto border cellPadding-8 marginTop-20px w-full">
                        <thead>
                        <tr className="border">
                            <th className="table-css">Name</th>
                            <th className="table-css">Address</th>
                            <th className="table-css">Email</th>
                            <th className="table-css">Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer:Customer) => (
                            <tr key={customer.email}>
                                <td className="table-css">{customer.name}</td>
                                <td className="table-css">{customer.address}</td>
                                <td className="table-css">{customer.email}</td>
                                <td className="table-css">{customer.phone}</td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            <div >
                <div className="p-5">
                    <h1 className="text-3xl font-medium text-green-500 mb-6">Item</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {customers.map((customer) => (
                            <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                                <p>{customer.name}</p>
                                <p>{customer.address}</p>
                                <p>{customer.email}</p>
                                <p>{customer.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
