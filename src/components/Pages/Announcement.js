import React ,{useState}from 'react'
import './css/announcement.css'
import Db from './db'
import {Trans } from 'react-i18next';
function Announcement() {



  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
 
  const announcements = [
    {
      id: 1,
      title: 'Important Update',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in tellus id sem sollicitudin congue. Ut euismod quis magna ut aliquet. In ultricies velit eu tincidunt aliquam. Nam nec augue. Vestibulum euismod tortor mauris, at tristique velit ultricies ac. Aenean eu lectus nec turpis posuere tincidunt. Donec vestibulum lacus et dui iaculis iaculis vitae ac erat. Cras nec arcu at magna aliquet faucibus non eu leo. Integer et efficitur elit, vel vestibulum massa. Vivamus mattis urna ac sem malesuada, sit amet convallis tortor fermentum.`,
    },
    // Add more announcements here
  ];


  const [showMore, setShowMore] = useState({});

  const toggleDescription = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className='announcement'>
 <div className='le_container'>
        <Db/>
 </div>
 
 <div className="ri-container">
        {/* Section 1: Announcement */}
        <div className="section">
          <h2><Trans i18nKey="description.announcementpart1">Announcements</Trans></h2>
          <div className="announcement-list">
            
          {announcements.map((announcement) => (
              <div className="announcement-item" key={announcement.id}>
                <div className="announcement-header">
                  <h4>{date}</h4>
                  <h4>{announcement.title}</h4>
                </div>
                <p
                  className={`announcement-description ${
                    showMore[announcement.id] ? 'show' : ''
                  }`}
                >
                  {announcement.description}
                </p>
                {!showMore[announcement.id] && (
                  <button
                    className="read-more-button"
                    onClick={() => toggleDescription(announcement.id)}
                  >
                    Read More
                  </button>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>


    </div>
  )
}

export default Announcement