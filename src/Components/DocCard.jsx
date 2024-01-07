import React from 'react'
import './DocCard.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';
  

function DocCard({doctors}) {
    console.log(doctors);
  return (
    <div>
        <MDBCard className='my-4' style={{margin:'10px',padding:'10px',borderRadius:'10px',height:'260px'}}>
      <MDBCardBody>
        <MDBCardTitle>{doctors.hospital}</MDBCardTitle>
        <MDBCardText style={{fontWeight:'500'}}>{doctors.name}</MDBCardText>
        <MDBCardText className="mb-2 text-muted">{doctors.specialty}</MDBCardText>
        <MDBCardText><i class="fa-solid fa-star text-warning"></i>{doctors.rating}</MDBCardText>
        <Link to={`view/${doctors.id}`}>
        <MDBBtn rounded className='mx-2' color='secondary'>More Details</MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default DocCard