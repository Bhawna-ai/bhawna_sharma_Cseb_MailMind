import React from 'react';
import EmailList from '../components/email/EmailList';
import EmailDetail from '../components/email/EmailDetail';
import { useMailContext } from '../context/MailContext';

const Drafts: React.FC = () => {
  const { selectedEmail } = useMailContext();
  
  return (
    <div className="h-[calc(100vh-130px)]">
      {selectedEmail ? (
        <EmailDetail />
      ) : (
        <EmailList folder="drafts" />
      )}
    </div>
  );
};

export default Drafts;