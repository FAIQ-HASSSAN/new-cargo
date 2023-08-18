import React ,{useState}from 'react'
import './css/Support.css'
import Db from './db'
import { Trans } from 'react-i18next';
function Support() {
  

    const [ticketData, setTicketData] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDescriptionModal, setShowDescriptionModal] = useState(false);
    const [popupData, setPopupData] = useState({ unit: '', subject: '', description: '', file: null });
  
    // Function to handle opening/closing the ticket creation modal
    const toggleCreateModal = () => {
        setPopupData({ unit: '', subject: '', description: '', file: null });
      setShowCreateModal(!showCreateModal);
    };
  
    // Function to handle opening/closing the ticket description modal
    const toggleDescriptionModal = () => {
      setShowDescriptionModal(!showDescriptionModal);
    };
  
    // Function to handle creating a new ticket
    const handleCreateTicket = () => {
        const newTicket = {
          id: ticketData.length + 1,
          creationDate: new Date().toLocaleString(),
          ...popupData,
          status: 'Pending',
        };
      
        setTicketData([...ticketData, newTicket]);
        toggleCreateModal(); // Close the ticket creation modal after creating the ticket
        setPopupData({ unit: '', subject: '', description: '', file: null });
      };
    // Function to handle selecting a subject from the table
    const handleSubjectClick = (subject) => {
      // Find the corresponding ticket based on the subject
      const selectedTicket = ticketData.find((ticket) => ticket.subject === subject);
  
      // Show the description in the modal
      setPopupData(selectedTicket);
      toggleDescriptionModal();
    };

  return (
    <div className='support'>

        <div className='sl_container'>
             <Db/>
        </div>
        <div className="sr_container">
        {/* Section 1: Ticket Creation */}
        <div className="section ticket-creation-section">
          <h3><Trans i18nKey="description.supportpart1">Create Ticket:</Trans></h3>
          <button onClick={toggleCreateModal}><Trans i18nKey="description.supportpart2">Create Ticket</Trans></button>
          {showCreateModal && (
           <div className='modal-overlay'>
            <div className="ticket-popup">
              <h4><Trans i18nKey="description.supportpart3">Create New Ticket</Trans></h4>
              <form>
              <div className="form-group">
  <label>
    <Trans i18nKey="description.supportpart4">Unit:</Trans>
  </label>
  <select
    value={popupData.unit}
    onChange={(e) => setPopupData({ ...popupData, unit: e.target.value })}
  >
    <option value="operation">Operation</option>
    <option value="sales">Sales</option>
    <option value="finance">Finance</option>
  </select>
</div>
                <div className="form-group">
                  <label><Trans i18nKey="description.supportpart5">Subject:</Trans></label>
                  <input
                    type="text"
                    value={popupData.subject}
                    placeholder='ID or Order Number'
                    onChange={(e) => setPopupData({ ...popupData, subject: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label><Trans i18nKey="description.supportpart6">Description:</Trans></label>
                  <textarea
                    value={popupData.description}
                    onChange={(e) => setPopupData({ ...popupData, description: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label><Trans i18nKey="description.supportpart7">Upload File:</Trans></label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPopupData({ ...popupData, file: e.target.files[0] })}
                  />
                </div>
                <button type="button" onClick={handleCreateTicket}>
                  <Trans i18nKey="description.supportpart8">Create Ticket</Trans>
                </button>
                <button type="button" onClick={toggleCreateModal}>
                  <Trans i18nKey="description.supportpart9">Close </Trans>
                </button>
              </form>
            </div>
        
        </div>
        )}
        </div>

        {/* Section 2: Ticket List */}
        <div className="section ticket-list-section">
          <h3><Trans i18nKey="description.supportpart10">Tickets List</Trans></h3>
          <table>
            <thead>
              <tr>
                <th><Trans i18nKey="description.supportpart11">ID</Trans></th>
                <th><Trans i18nKey="description.supportpart12">Creation Date</Trans></th>
                <th><Trans i18nKey="description.supportpart13">Subject</Trans></th>
                <th><Trans i18nKey="description.supportpart14">Status</Trans></th>
              </tr>
            </thead>
            <tbody>
              {ticketData.map((ticket) => (
                <tr key={ticket.id} onClick={() => handleSubjectClick(ticket.subject)}>
                  <td>{ticket.id}</td>
                  <td>{ticket.creationDate}</td>
                  <td>{ticket.subject}</td>
                  <td>{ticket.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
      
 {/* Ticket Description Modal */}
 {showDescriptionModal && (
        <div className="modal-overlay">
          <div className="modal-content">
          
      <h4>{popupData.subject}</h4>
      <p>{popupData.description}</p>
      <button className="modal-close" onClick={toggleDescriptionModal}>
        <Trans i18nKey="description.supportpart15">close</Trans>
      </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Support