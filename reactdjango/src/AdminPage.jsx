import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import NavBar from './NavBar';

import pfwLogo from './assets/logo/fwLogo.png';

const AddMemberButton = () => {
  const storedPermissionsJSON = localStorage.getItem('permissionList');

  if (storedPermissionsJSON.includes('myapi.add_members') === true) {
    return (
      <button
        type="button"
        className="btn btn-warning btn-md"
        data-toggle="modal"
        data-target="#myModal"
      >
        Add Member
      </button>
    );
  } else return null;
};

const AdminPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [status, setStatus] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/getdata/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/addmembers/', {
        name,
        email,
        designation,
        status,
        country,
      });

      window.location.reload();

      setName('');
      setEmail('');
      setDesignation('');
      setStatus('');
      setCountry('');
    } catch (error) {
      console.error('Error adding member:', error);
      setErrorMessage('Failed to add member. Please try again.');
    }
  };

  const handlePDFGeneration = async () => {

   // console.log("JSON.stringify(data):  "+ JSON.stringify(data));
    try {
      const response = await axios.post(
        'http://localhost:8000/api/generate_pdf/',
        {
          data: JSON.stringify(data),
        },
        {
          responseType: 'blob',
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'user_list.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <>
      <NavBar logo={pfwLogo} />

      <section className="banner" style={{ marginBottom: '0', height: '300px' }}>
        <span className="bannerSpan"></span>
      </section>

      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h2 style={{ flex: 1, marginTop: '20px' }}>List of Members</h2>
          <div style={{ flex: 0, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <AddMemberButton />
            
            <button type="button" style={{marginLeft: '4px'}} className="btn btn-warning btn-md" onClick={handlePDFGeneration}>
              Generate PDF
            </button>

          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name} </td>
                <td> {item.email}</td>
                <td> {item.designation}</td>
                <td> {item.country}</td>
                <td> {item.status} </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Add Members</h4>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div>
                    <label>Designation:</label>
                    <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
                  </div>
                  <div>
                    <label>Status:</label>
                    <input type="number" value={status} onChange={(e) => setStatus(e.target.value)} required />
                  </div>
                  <div>
                    <label>Country:</label>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
                  </div>
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  <button type="submit">Add Member</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
