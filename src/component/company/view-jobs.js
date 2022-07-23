import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/style/view-jobs.css';

function ViewJobs() {


  const [details, setDetails] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios.get("http://localhost:5000/jobs/getByUser", config).then((res) => {
      let job=res.data.jobs;
      setDetails(job);
    });
  }, []);

  

// call api to delete job by id

const {idd} = useParams(); // jobs id
  const deleteJob = (id) => {
    axios.delete("http://localhost:5000/jobs/deleteById/" + id, config).then((res) => {
      window.location.reload();
    }
    ).catch((err) => {
      console.log(err);
    }
    );
  }

  const editJob=(id)=>{
    window.location.replace('editJob');
  }





  return (
    <>
      <div class="container mt-5 mb-5 p-5 pt-3">

        <table class="table table-borderless table-responsive card-1 p-4 pb-5">
          <thead>
            <tr class="border-bottom  ">
              <th>
                <span class="ml-2 fw-semibold">Job Id</span>
              </th>
              <th>
                <span class="ml-2 fw-semibold">Job Description</span>
              </th>
              <th>
                <span class="ml-2 fw-semibold">Job Type</span>
              </th>
              <th>
                <span class="ml-2 fw-semibold">posted date</span>
              </th>
              <th>
                <span class="ml-2 fw-semibold">deadline</span>
              </th>
             
              <th>
                <span class="ml-2 fw-semibold">Location</span>
              </th>
              <th>
                <span class="ml-4 fw-semibold">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
          {details.map((singleData)=>
  ( 
  <tr class="border-bottom">
  <td>
    <div class="p-2">
      <span class="d-block font-weight-bold"></span>
      <small>{singleData._id}</small>
    </div>
  </td>
  <td>
    <div class="p-2 d-flex flex-row align-items-center mb-2">
      <img src={`http://localhost:5000/${singleData.image}`} width="40" class="rounded-circle" />
      <div class="d-flex flex-column ml-2">
        <span class="d-block font-weight-bold">{singleData.title}</span>
        <small class="text-muted">{singleData.description}</small>
      </div>
    </div>
    
  </td>
  <td>
    <div class="p-2">
      <span class="font-weight-bold">{singleData.jobType}</span>
    </div>
  </td>
  <td>
    <div class="p-2">
      <span class="font-weight-bold">{singleData.dateOfPosting}</span>
    </div>
  </td>
  <td>
    <div class="p-2">
      <span class="font-weight-bold">{singleData.deadline}</span>
    </div>
  </td>
  <td>
    <div class="p-2 d-flex flex-column">
      <span>{singleData.location}</span>
      
    </div>
  </td>
  <td>
    <div class="p-2 icons">
     <span className='btn'  onClick={()=>editJob(singleData._id)}><i class="fas fa-edit text-primary" ></i></span> 
     <span className='btn' onClick={()=>deleteJob(singleData._id)}>  <i class="fas fa-trash-alt text-danger"  ></i></span> 
        
    </div>
  </td>
</tr>
  ))};
          </tbody>
        </table>
      </div>
    </>
  )
}
export default ViewJobs;