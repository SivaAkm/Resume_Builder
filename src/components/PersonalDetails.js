
import './style.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
    const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });


  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.name.endsWith('.vm')) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
    } else {
      alert('Please upload a .vm file only!');
    }
    setAlert({ show: false, message: '', type: '' }); // clear alert on change
  };

  const handleUpload = () => {
    if (!file) return alert('No file selected.');

    // Here you can upload to backend using FormData if needed
    const formData = new FormData();
    formData.append('file', file);

    console.log('Uploading:', file);

    // You can use fetch/axios to send `formData` to server here
  };

  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    fileName ?  onSubmitPersonalDetails() : setAlert({ show: true, message: 'Please upload a .vm file!', type: 'error' });
    ;
   
    // You can navigate or store this data
  };

  const onSubmitPersonalDetails = () =>{
    navigate("/PDFviewer")
  }
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Personal Details</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="2"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">Professional Summary</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="4"
            ></textarea>
          </div>
          <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border">
      <h2 className="text-xl font-bold mb-4">Upload .vm File</h2>

      <input
        type="file"
        accept=".vm"
        onChange={handleFileChange}
        className="mb-4"
      />

      {fileName && (
        <div className="text-green-600 mb-2">Selected: {fileName}</div>
      )}
 {alert.show && (
        <div
          className={`mb-4 px-4 py-2 rounded ${
            alert.type === 'success'
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}
        >
          {alert.message}
        </div>
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload
      </button>
    </div>
          <button
            type="submit" 
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-all duration-300"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>

  );
};

export default PersonalDetails;


