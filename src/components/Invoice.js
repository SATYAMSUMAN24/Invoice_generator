import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Invoice.css';

const Invoice = () => {
  const invoiceRef = useRef();

  const generatePDF = () => {
    const input = invoiceRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("invoice.pdf");
      });
  };

  return (
    <div className="invoice-container">
      <div className="invoice" ref={invoiceRef}>
        <div className="header">
          <div className="company-details">
            <h2>Sals Force2</h2>
            <p>123 Anywhere St., Any City, INDIA 12356</p>
            <p>Tell: +123-456-7890</p>
            <p>Email: 123@gmail.com</p>
          </div>
          <div className="invoice-title">
            <h1>INVOICE</h1>
          </div>
        </div>
        <div className="invoice-info">
          <div className="info">
            <p>Invoice No: 0123456</p>
            <p>Date: 26 Jan, 2025</p>
            <p>Time: 14:00</p>
          </div>
          <div className="bill-to">
            <p>Bill to:</p>
            <p>Lic & Co.</p>
            <p>123 Anywhere St.,</p>
            <p>Any City, INDIA 12345</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Logo Design</td>
              <td>$200</td>
              <td>1</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Advertising Design</td>
              <td>$500</td>
              <td>3</td>
              <td>$1500</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Poster Design</td>
              <td>$500</td>
              <td>1</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Brochure Design</td>
              <td>$200</td>
              <td>2</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Content Writer</td>
              <td>$500</td>
              <td>2</td>
              <td>$1000</td>
            </tr>
          </tbody>
        </table>
        <div className="total">
          <p>Total: $3600</p>
        </div>
        <div className="bank-details">
          <p><strong>Bank Name:</strong> HDFC NAVI, MUMBAI, INDIA, 12345</p>
          <p><strong>Bank Account:</strong> 0123 4567 8901</p>
        </div>
        <div className="footer">
          <p>If you have any question please contact: hdfchelp@site.com</p>
          <p>Thank You</p>
        </div>
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default Invoice;