import React from 'react';
import Styles from './CustomersComp.module.css';
import customerImg from '../../assets/customer.jpg'
function CustomersComp() {
  return (
    <>
      <div className={Styles.customers}>
        <h2>Customers List</h2>

        <table className="bg-dange">
          <thead>
            <tr>
              <th>
                <h2>Customer</h2>
              </th>
              <th>
                <h2>Order</h2>
              </th>
              <th>
                <h2>Total</h2>
              </th>
              <th>
                <h3>chat</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='bg-danger'>
                
              </td>
              <td>4 items</td>
              <td>12,00$</td>
              <td>12,00$</td>
            </tr>
            <tr>
              <td>Ahmed Mohamed</td>
              <td>4 items</td>
              <td>12,00$</td>
              <td>12,00$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomersComp
