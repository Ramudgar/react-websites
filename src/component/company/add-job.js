import axios from 'axios';
import { useState } from 'react';
import '../../assets/style/addJob.css';
function AddJob() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState("");
    const [location, setLocation] = useState("");
    const [maxPositions, setMaxPositions] = useState("");
    const [maxApplicants, setmaxApplicants] = useState("");
    const [jobType, setJobType] = useState("");
    const [skills, setSkills] = useState("");
    const [duration, setDuration] = useState("");
    const [dateOfPosting, setDateOfPosting] = useState("");
    const [deadline, setDeadline] = useState("");
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");
    const addJob = (e) => {
        try {
            e.preventDefault();
            // const data = {
            //     title: title,
            //     description: description,
            //     salary: salary,
            //     location: location,
            //     maxPositions: maxPositions,
            //     maxApplicants: maxApplicants,
            //     jobType: jobType,
            //     skills: skills,
            //     duration: duration,
            //     dateOfPosting: dateOfPosting,
            //     deadline: deadline,
            //     image: image
            // }

            const data = new FormData();
            data.append('title', title);
            data.append('description', description);
            data.append('salary', salary);
            data.append('location', location);
            data.append('maxPositions', maxPositions);
            data.append('maxApplicants', maxApplicants);
            data.append('jobType', jobType);
            data.append('skills', skills);
            data.append('duration', duration);
            data.append('dateOfPosting', dateOfPosting);
            data.append('deadline', deadline);
            data.append('image', image);


            const config = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }

            }
            console.log(config)
            axios.post('http://localhost:5000/jobs/create', data, config).then(res => {
                console.log(res)
                if (res.data.success === true) {
                    alert("Job added successfully");
                    setMessage("Job added successfully");
                }
                else {
                    alert("Job addition failed");
                    setMessage("Job addition failed");
                }
            }
            )
        }
        catch (err) {
            console.log(err);
        }

    }




    return (
        <>
            <div class="container card-0 justify-content-center ">
                <p>{message}</p>
                <div class="card-body px-sm-4 px-0">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-10 col"><h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Add Job </h3><p class="mt-md-4  ml-md-0 ml-2 text-center text-sm-left"> "We are very pride to offer a job to the needy tallented enthuastic in a startup Company"</p></div>
                    </div>
                    <div class="row justify-content-center round">
                        <div class="col-lg-10 col-md-12 ">
                            <div class="card shadow-lg card-1">


                                <div class="card-body inner-card">
                                    <form method='post' encType='multipart/form-data'>
                                    <div class="row justify-content-center">
                                        <div class="col-lg-5 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                
                                                <label for="title">Job Title</label>
                                                <input type="text" class="form-control" id="title" placeholder="enter job title" onChange={(e) => { setTitle(e.target.value) }}>

                                                </input>
                                            </div>
                                               
                                            <div class="form-group">
                                                <label for="inputEmail4">Job Type</label>
                                                <select class="form-control" onClick={(e) => { setJobType(e.target.value) }}>
                                                    <option>FullTIme</option>
                                                    <option>PartTime</option>
                                                    <option>Contract</option>
                                                </select>
                                            </div>
                                          
                                            <div class="form-group">
                                                <label for="time">Duration</label>
                                                <input type="text" class="form-control" id="time" placeholder="Time Duration" onChange={(e) => { setDuration(e.target.value) }}></input>
                                            </div>
                                            
                                            <div class="form-group"><label for="skill">Required Skills</label>
                                                <input type="text" class="form-control" id="skill" placeholder="skills" onChange={(e) => { setSkills(e.target.value) }}></input>
                                            </div>
                                           
                                            <div class="form-group">
                                                <label for="location">Location</label>
                                                <input type="text" class="form-control" id="location" placeholder="enter your location" onChange={(e) => { setLocation(e.target.value) }}></input>
                                            </div>
                                        </div>

                                        <div class="col-lg-5 col-md-6 col-sm-12">
                                            
                                            <div class="form-group">
                                                <label for="salary">Salary</label>
                                                <input type="text" class="form-control" id="salary" placeholder="slary" onChange={(e) => { setSalary(e.target.value) }}></input>
                                            </div>
                                          
                                            <div class="form-group">
                                                <label for="date">Date of Posting</label>
                                                <input type="text" class="form-control" id="date" placeholder="date of posting" onChange={(e) => { setDateOfPosting(e.target.value) }}></input>
                                            </div>
                                            
                                            <div class="form-group">
                                                <label for="date">Deadline</label>
                                                <input type="text" class="form-control" id="date" placeholder="deadline" onChange={(e) => { setDeadline(e.target.value) }}></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="Evaluate Budget">Max Positions</label>
                                                <input type="number" class="form-control" id="Evaluate Budget" placeholder="max postiions" onChange={(e) => { setMaxPositions(e.target.value) }}></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="applicants">Max Applicants </label>
                                                <input type="number" class="form-control" id="applicants" placeholder="max applicants" onChange={(e) => { setmaxApplicants(e.target.value) }}>
                                                </input>
                                            </div>

                                        </div>
                                    </div>

                                    {/* <div class="row justify-content-center">
                                        <div class="col-md-12 col-lg-10 col-12">
                                            <div class="form-group files">
                                                <form  encType='multipart/form-data'>
                                                <label class="my-auto">Upload Image </label>
                                                <input id="file" type="file" class="form-control" onChange={(e)=>setImage(e.target.files[0])}/> </form>
                                            </div>
                                        </div>
                                    </div> */}
                                        <p>{image}</p>
                                        <div className="form-group">
                <label>Job Image</label>
                <input
                  type="file"
                  className="form-control"
                  onClick={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </div>

                                    <div class="row justify-content-center">
                                        <div class="col-md-12 col-lg-10 col-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea2" > Description</label> <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5" placeholder='Add Description here.....' onChange={(e) => { setDescription(e.target.value) }}>
                                                </textarea>
                                            </div>
                                            <div class="row justify-content-end mb-5">
                                                <div class="col-lg-4 col-auto ">
                                                    <button type="submit" class="btn btn-primary btn-block" onClick={addJob}>
                                                        <small class="font-weight-bold">Add job</small></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
export default AddJob;