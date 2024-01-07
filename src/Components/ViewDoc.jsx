import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './ViewDoc.css'

function ViewDoc() {

  const [docDetails, setDocDetails] = useState({})

  // const paramId = useParams()
  // console.log(paramId.id);

  //destructure

  const { id } = useParams()
  console.log(id);


  const base_url = 'https://doctor-appointment-backend-zfvv.onrender.com/doctors'

  const fetchDoc = async () => {
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setDocDetails(result.data)
  }

  console.log(docDetails);

  useEffect(() => {
    fetchDoc()
  }, [])

  return (
    <div className='maindiv'>
      <div className='doctors shadow'>
        <div className='details'>
          <div className=' rounded shadow p-4'>
            <h2 className='fw-bold mb-4'>{docDetails.hospital}</h2>
            <h4>{docDetails.name} ({docDetails.specialty})</h4>
            <h5 className='text-muted'>Phone : {docDetails.phone}</h5>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>Email : {docDetails.email}</p>
            <p style={{ fontWeight: 'bold' }}>Available Time : {docDetails.available_hours}</p>
            <p style={{ fontWeight: 'bold' }}>Location : {docDetails.address}</p>
            <p style={{ fontWeight: 'bold' }}>Available Days :</p>
            <div className='days text-muted' style={{ fontWeight: 'bold' }}>
              {docDetails.available_days &&
                docDetails.available_days.map((docDetails) => (
                  <p>{docDetails}  | </p>
                ))
              }
            </div>
          </div>
        </div>
        <hr />
        <div className='review'>
          <h4>Reviews :</h4>
          {docDetails.reviews && docDetails.reviews.map((docDetails) => (
            <div className='review'>
              <h5>{docDetails.patient_name}</h5>
              <p>Date : {docDetails.date}</p>
              <p className='text-muted'>Rating : <i class="fa-solid text-warning fa-star"></i> {docDetails.rating}</p>
              <p>{docDetails.comments}</p>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default ViewDoc
