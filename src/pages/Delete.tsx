import { useReducer } from "react";
import { CustomerReducer, initialState as customerInitialState } from "../reducer/CustomerReducer.ts";
import { ItemReducer, initialItemState } from "../reducer/ItemReducer.ts";

export function Delete() {
    const [customers, customerDispatch] = useReducer(CustomerReducer, customerInitialState);
    const [items, itemDispatch] = useReducer(ItemReducer, initialItemState);

    function handleDeleteCustomer(email) {
        customerDispatch({ type: 'DELETE_CUSTOMER', payload: {email: email } });
    }

    function handleDeleteItem(itemCode) {
        itemDispatch({ type: 'DELETE_ITEM', payload: { code: itemCode } });
    }

    return (
    <div className="grid grid-cols-2 gap-6 p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
        {/* Customers Section */}
                <section>
                    <h1 className="text-xl font-bold text-gray-700 mb-4">Delete Customers</h1>
                    <table className="w-full border-collapse mt-6">
                        <thead>
                        <tr>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Address</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Phone</th>
                            <th className="border p-2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td className="border p-2">{customer.name}</td>
                                <td className="border p-2">{customer.address}</td>
                                <td className="border p-2">{customer.email}</td>
                                <td className="border p-2">{customer.phone}</td>
                                <td className="border p-2">
                                    <button
                                        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                        onClick={() => handleDeleteCustomer(customer.email)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </div>
            {/* Items Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <section>
                    <h1 className="text-xl font-bold text-gray-700 mb-4">Delete Items</h1>
                    <table className="w-full border-collapse mt-6">
                        <thead>
                        <tr>
                            <th className="border p-2">Code</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Qty</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td className="border p-2">{item.code}</td>
                                <td className="border p-2">{item.name}</td>
                                <td className="border p-2">{item.quantity}</td>
                                <td className="border p-2">{item.price}</td>
                                <td className="border p-2">
                                    <button
                                        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                        onClick={() => handleDeleteItem(item.code)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}
