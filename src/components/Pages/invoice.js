import React,{useState} from 'react'
import './css/invoice.css'
import Db from './db';
import { Trans } from 'react-i18next';
function Invoice() {
 
   const [selectedBank, setSelectedBank] = useState(null);
  const [isCardSelectionOpen, setIsCardSelectionOpen] = useState(false);

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
  };

  // Sample data for the bank cards (replace with your actual data)
  const bankCards = [
    {
      id: 1,
      bankName: 'Bank 1',
      logoUrl: '../../assets/brand1.png',
    },
    {
      id: 2,
      bankName: 'Bank 2',
      logoUrl: '/path-to-bank-2-logo.png',
    },
  ];

  const handleBankCardClick = (bankId) => {
    console.log('Selected Bank ID:', bankId);
  };

  const toggleCardSelection = () => {
    setIsCardSelectionOpen((prevState) => !prevState);
  };

  return (
    <div className="invoice_page">
          <div className='leftcontainer'>
            <Db/>
          </div>
        
          <div className="rightcontainer">
        <div className={`section ${isCardSelectionOpen ? 'open' : ''}`}>
          <h2 onClick={toggleCardSelection}><Trans i18nKey="description.invoicepart1">Card Selection</Trans></h2>
          <div className="card-container">
            {bankCards.map((bank) => (
              <div
                key={bank.id}
                className='bank-card'
                onClick={() => handleBankCardClick(bank.id)}
              >
                <img src={bank.logoUrl} alt={bank.bankName} />
                <p>{bank.bankName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
  </div>
  )
}

export default Invoice