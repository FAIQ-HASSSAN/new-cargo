import React from "react";
import Form from '../Form'
import Footer from "../Footer";
import { useTranslation,Trans } from 'react-i18next';
import './css/contact.css'
export const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Trans>  </Trans>
     <Form/>
     <div  className="Footer">
     <Footer faqID={'/'} supportID={'/contact'}/>
     </div>
    </div>
  );
};
