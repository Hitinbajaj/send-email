import { useState } from 'react';
import EmailForm from './components/EmailForm';
import LoaderModal from './components/LoaderModal';
import SuccessModal from './components/SuccessModal';
import ErrorModal from './components/Errormodal';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSendEmail = async (emailData) => {
    setLoading(true);
    try {
      emailData.text+="\n Thanks for subscribing !!"
      console.log(emailData);
      const response = await fetch('https://emailsender-black.vercel.app/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 800);
      } else {
        console.error('Failed to send email');
        setError(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <EmailForm onSend={handleSendEmail} />
      {loading && <LoaderModal />}
      {success && <SuccessModal onClose={() => setSuccess(false)} />}
      {error && <ErrorModal onClose={() => setError(false)} />}
    </div>
  );
};

export default App;
