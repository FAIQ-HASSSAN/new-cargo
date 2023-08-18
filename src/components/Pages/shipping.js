import React,{useState,useEffect} from 'react'
import './css/shipping.css'
import Db from './db';

import {useTranslation, Trans } from 'react-i18next';
import { useNavigate} from 'react-router-dom';
import {useLocation } from "react-router-dom";
function Shipping() {

  const { t, i18n } = useTranslation();
  const location = useLocation();
  var updateddata=1;

  console.log('hello')
  const loc= location.state;
 console.log('returned data',loc);
updateddata = loc;
console.log('update',updateddata)

if(updateddata === 7){
  console.log('not null')
}
else{
  console.log('its null')
}

  const navigate = useNavigate();
  const dummyTableData = [
    {
      id: 5,
      pay: 'Pay',
      status: '-',
      label: 'Sample Label',
      receiver: 'Sample Receiver',
      orderNumber: '12345765675',
      country: 'Sample Country',
      count: 5,
      value: 100,
      date: '2023-07-24',
    },
    {
      id: 5,
      pay: 'Pay',
      status: '-',
      label: 'Sample Label',
      receiver: 'Sample Receiver',
      orderNumber: '12345765675',
      country: 'Sample Country',
      count: 5,
      value: 100,
      date: '2023-07-24',
    }
  ];


 


  const [selectedFile, setSelectedFile] = useState(null);


  const [tableData, setTableData] = useState(dummyTableData);

  const deleteRow = (index) => {
    // Create a copy of the table data array
    const updatedTableData = [...tableData];
    // Remove the row at the specified index
    updatedTableData.splice(index, 1);
    // Update the state with the updated table data
    setTableData(updatedTableData);
  };


  const handleFileUpload = (e, index) => {
    const file = e.target.files[0];
    setSelectedFile(file ? file.name : null);
    // Perform any operations with the selected file, e.g., upload to server
    console.log(`Selected File for Row ${index + 1}:`, file);
  };
  
const [status,setstatus]=useState('-');

    const statuscheck =(event)=>{
      setstatus(event.target.value)
    }

    
    const [editedRow, setEditedRow] = useState([{}]);
    var data1=[];
   
  
    //the data here will be an object since an object was
    
    // Function to handle editing a row
    const handleEditRow = (rowData) => {
      // Set the edited row data in the state
      setEditedRow(rowData);
      data1=rowData;
      console.log(editedRow)
      updateddata=7; 
      // Navigate to the edit shipping page
     navigate(`/editshippingrow/${rowData.id}`,{state:data1});
 
    };
    

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deletingRowIndex, setDeletingRowIndex] = useState(null);

  const handleDeleteRow = (index) => {
    setDeletingRowIndex(index);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    if (deletingRowIndex !== null) {
      deleteRow(deletingRowIndex);
    }
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setDeletingRowIndex(null);
    setShowDeleteConfirmation(false);
  };




  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const baseUrl = 'YOUR_BASE_URL';
      const url = `/api/GetOrder`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'text/plain',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setOrders(responseData);
          setTableData(responseData);
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);



  //fetch countries api


  const data2={
    name:'pakistan'
      }
    const [countryarray,setcountryarray]=useState([data2]);
    
      const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InRvZmlxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidG9maXFtYW1tYWRvdkBtYWlsLnJ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3lzdGVtIjoiOSIsImV4cCI6MTY5MjA0MDY3NywiaXNzIjoid3d3LnRlc3QuY29tIiwiYXVkIjoid3d3LnRlc3QuY29tIn0.uvgRY1X93Pwogp4PZCWBlthNyQsDl7QzF_gOoVwJD40'
    
    
      const fetchCountries = async () => {
       
        // Using fetch API
        fetch("/api/GetCountries", {
          method: "GET",
          headers: {
            Accept: "text/plain",
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }
            return response.json();
          })
          .then((data) => {
            console.log('data:',data)
            var dani = data;
            setcountryarray(data)
           
            console.log('countryarray:',countryarray)
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    
    
      };
      
      useEffect(() => {
        console.log('Updated countryarray:', countryarray);
      }, [countryarray]);
    
    useEffect(()=>{
    fetchCountries();
    },[])

  return (
    <div className='shipping'>
        <div className='l_container'>
              <Db/>
        </div>
        <div className="r-container">

{/* Section 1: Shipping */}
<div className="section">
  <h3><Trans i18nKey="description.shippingspart1">My Shipments:</Trans></h3>
  <form>
    <div className="form-group-row">
      <div className="form-group">
        <label><Trans i18nKey="description.shippingspart2">Country:</Trans></label>
        <select>
         
<option value="">Select Country</option>
{countryarray.map((country, index) => (  
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
          
        </select>
      </div>
      <div className="form-group">
        <label><Trans i18nKey="description.shippingspart3">Status:</Trans></label>
        <select value={status}  onChange={statuscheck}>
        <option value="-">Status</option>
          <option value="Warehouse">Warehouse</option>
          <option value="On cargo compnay">On cargo compnay</option>
          <option value="On the way">On the way </option>
          <option value="Destination">Destination</option>
          <option value="Customs">Customs</option>
          <option value="Ready to delivery">Ready to delivery</option>
          <option value="Not delivered">Not delivered</option>
          <option value="Delivered">Delivered</option>
          <option value="Error">Error</option>
         
        </select>
      </div>
    </div>
    
  </form>
</div>

{/* Section 2: Table */}
<div className="section table-section">
  <h3><Trans i18nKey="description.shippingspart4">Table:</Trans></h3>
  <div className='table-wrapper'>
  <table>
    <thead>
      <tr>
        <th><Trans i18nKey="description.shippingspart5">ID</Trans></th>
        <th><Trans i18nKey="description.shippingspart6">Pay/Paid</Trans></th>
        <th><Trans i18nKey="description.shippingspart7">Status</Trans></th>
        <th><Trans i18nKey="description.shippingspart8">Label</Trans></th>
        <th><Trans i18nKey="description.shippingspart9">Receiver</Trans></th>
        <th><Trans i18nKey="description.shippingspart10">Order Number</Trans></th>
        <th><Trans i18nKey="description.shippingspart11">Country</Trans></th>
        <th><Trans i18nKey="description.shippingspart12">Count</Trans></th>
        <th><Trans i18nKey="description.shippingspart13">Value</Trans></th>
        <th><Trans i18nKey="description.shippingspart14">Date</Trans></th>
        <th><Trans i18nKey="description.shippingspart15">Upload Invoice</Trans></th>
        <th><Trans i18nKey="description.shippingspart16">Edit</Trans></th>
        <th><Trans i18nKey="description.shippingspart17">Delete</Trans></th>
      </tr>
    </thead>
    <tbody>
    {tableData.map((row, index) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.pay}</td>
                    <td>{status}</td>
                    <td>{row.label}</td>
                    <td>{row.receiver}</td>
                    <td>{row.orderNumber}</td>
                    <td>{row.country}</td>
                    <td>{row.count}</td>
                    <td>{row.value}</td>
                    <td>{row.date}</td>
                    <td>
  {selectedFile ? (
    <span>{selectedFile}</span>
  ) : (
    <label htmlFor={`fileUpload_${index}`}>
      <input
        type="file"
        id={`fileUpload_${index}`}
        style={{ display: 'none' }}
        onChange={(e) => handleFileUpload(e, index)}
      />
      <button
        className="upload-button"
        onClick={() => {
          const fileInput = document.getElementById(`fileUpload_${index}`);
          if (fileInput) {
            fileInput.click();
          }
        }}
      >
        Choose File
      </button>
    </label>
  )}
</td>
                    <td>
                     <button onClick={() => handleEditRow(row)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteRow(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
    </tbody>

 


  </table>
  </div>
</div>
</div>
 {/* Confirmation Pop-up */}
      {showDeleteConfirmation && (
        <div className="confirmation-popup">
          <div className="confirmation-content">
            <p><Trans i18nKey="description.shippingspart18">Are you sure you want to delete this row?</Trans></p>
            <div className="confirmation-buttons">
              <button onClick={handleConfirmDelete}><Trans i18nKey="description.shippingspart19">Delete</Trans></button>
              <button onClick={handleCancelDelete}><Trans i18nKey="description.shippingspart20">Close</Trans></button>
            </div>
          </div>
        </div>
      )}
{/* 
{redirectToEdit && (
        <EditShippingRow
          rowData={editedRow}
          onSave={handleSaveEditedRow}
          onCancel={handleCancelEdit}
        />
      )} */}
    </div>
  )
}

export default Shipping