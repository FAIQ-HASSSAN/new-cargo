import React from 'react'
import Questions from '../Questions'
import Footer from '../Footer'
import './css/FAQ.css'
import Db from './db'
import { MenuSquare } from 'lucide-react'
function FAQ() {
  return (
    <div className='faq_page'>
      <div className='faq_container'>
        <div className='f_lc'>
          <div className='faq_log'><MenuSquare/></div>
              <Db/>
        </div>
         <div className='f_rc'>
        <Questions/>
        </div>
        </div>
        <div className='dani'></div>
        <div className='foot'>
        <Footer />
        </div>
    </div>
  )
}

export default FAQ