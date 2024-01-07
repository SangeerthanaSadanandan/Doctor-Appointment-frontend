import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import DocCard from './DocCard'

function AllRest() {

  const base_url='https://doctor-appointment-backend-zfvv.onrender.com/doctors'

  const [AllRestData,setAllRestData] = useState([])


  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);
    setAllRestData(result.data)
  }

  console.log(AllRestData);
  

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Row>
        {
          AllRestData.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <DocCard doctors={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default AllRest