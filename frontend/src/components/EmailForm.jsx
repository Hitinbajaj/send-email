/* eslint-disable react/prop-types */
import { useState } from 'react';
import Background from '../assets/pexels-shivam-mitra-2519550.jpg'
const EmailForm = ({ onSend }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend({ to, subject, text });
    setTo('');
    setSubject('');
    setText('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center " style={{backgroundImage: "url(" + Background + ")", backgroundSize: "cover"}}>
      <div>
        <div className="relative px-4  bg-white shadow-lg sm:rounded-3xl sm:p-7 bg-clip-padding bg-opacity-30 border border-gray-200 max-w-md mx-auto" style={{backdropFilter: "blur(20px)"}}>
            <h2 className="text-2xl font-semibold mb-4">Send Email</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="to" className="font-semibold py-1  block text-gray-700">To* </label>
                <input type="email" placeholder='Enter email' id="to" className="rounded-md border-2 py-1 px-2 form-input mt-1 block w-full" required value={to} onChange={(e) => setTo(e.target.value)} />
              </div>
              <div className="mb-2">
                <label htmlFor="subject" className="font-semibold py-1  block text-gray-700">Subject</label>
                <input type="text" placeholder='Enter subject' id="subject" className="rounded-md border-2 py-1 px-2 form-input mt-1 block w-full" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="text" className="font-semibold py-1 = block text-gray-700">Message </label>
                <textarea id="text" placeholder='Enter message...' className="rounded-md  min-h-32 min-w-full border-2 py-1 px-2 form-textarea mt-1 block w-full" value={text} onChange={(e) => setText(e.target.value)}></textarea>
              </div>
              <button type="submit" className="bg-black text-white px-2 py-2 rounded hover:bg-gray-800">Send Email</button>
            </form>
          </div>
        </div>
      </div>

  );
};

export default EmailForm;
