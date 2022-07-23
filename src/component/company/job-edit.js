import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/style/addJob.css';
function EditJob() {

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


    // const data = new FormData();
    // data.append('title', title);
    // data.append('description', description);
    // data.append('salary', salary);
    // data.append('location', location);
    // data.append('maxPositions', maxPositions);
    // data.append('maxApplicants', maxApplicants);
    // data.append('jobType', jobType);
    // data.append('skills', skills);
    // data.append('duration', duration);
    // data.append('dateOfPosting', dateOfPosting);
    // data.append('deadline', deadline);
    // data.append('image', image);


    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }

    }

    const { idd } = useParams(); // jobs id
    console.log(idd);
    useEffect(() => {
        axios.get('http://localhost:5000/jobs/getById/' + idd, config)
            .then(response => {
                console.log(response);
                setTitle(response.data.data.title);
                setDescription(response.data.data.description);
                setSalary(response.data.data.salary);
                setLocation(response.data.data.location);
                setMaxPositions(response.data.data.maxPositions);
                setmaxApplicants(response.data.data.maxApplicants);
                setJobType(response.data.data.jobType);
                setSkills(response.data.data.skills);
                setDuration(response.data.data.duration);
                setDateOfPosting(response.data.data.dateOfPosting);
                setDeadline(response.data.data.deadline);
                setImage(response.data.jobs.image);

            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    const updateJob = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            description: description,
            salary: salary,
            location: location,
            maxPositions: maxPositions,
            maxApplicants: maxApplicants,
            jobType: jobType,
            skills: skills,
            duration: duration,
            dateOfPosting: dateOfPosting,
            deadline: deadline,
            image: image

        }
        axios.put("http://localhost:5000/jobs/update/" + idd, data, config)
            .then(response => {
                console.log(response)
                //// if condition redirect
            })
            .catch(e => {
                console.log(e)
            })
    }










    return (
        <>
            <div class="container card-0 justify-content-center ">
                <p>{message}</p>
                <div class="card-body px-sm-4 px-0">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-10 col"><h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Edit Job </h3><p class="mt-md-4  ml-md-0 ml-2 text-center text-sm-left"> "We are very pride to offer a job to the needy tallented enthuastic in a startup Company"</p></div>
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
                                                    <input type="text" class="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }}>

                                                    </input>
                                                </div>

                                                <div class="form-group">
                                                    <label for="inputEmail4">Job Type</label>
                                                    <select class="form-control" onClick={(e) => { setJobType(e.target.value) }} value={jobType}>
                                                        <option>FullTIme</option>
                                                        <option>PartTime</option>
                                                        <option>Contract</option>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label for="time">Duration</label>
                                                    <input type="text" class="form-control" id="time" value={duration}
                                                        onChange={(e) => { setDuration(e.target.value) }}></input>
                                                </div>

                                                <div class="form-group"><label for="skill">Required Skills</label>
                                                    <input type="text" class="form-control" id="skill" value={skills} onChange={(e) => { setSkills(e.target.value) }}></input>
                                                </div>

                                                <div class="form-group">
                                                    <label for="location">Location</label>
                                                    <input type="text" class="form-control" id="location" value={location} onChange={(e) => { setLocation(e.target.value) }}></input>
                                                </div>
                                            </div>

                                            <div class="col-lg-5 col-md-6 col-sm-12">

                                                <div class="form-group">
                                                    <label for="salary">Salary</label>
                                                    <input type="text" class="form-control" id="salary" value={salary} onChange={(e) => { setSalary(e.target.value) }}></input>
                                                </div>

                                                <div class="form-group">
                                                    <label for="date">Date of Posting</label>
                                                    <input type="text" class="form-control" id="date" value={dateOfPosting} onChange={(e) => { setDateOfPosting(e.target.value) }}></input>
                                                </div>

                                                <div class="form-group">
                                                    <label for="date">Deadline</label>
                                                    <input type="text" class="form-control" id="date" value={deadline} onChange={(e) => { setDeadline(e.target.value) }}></input>
                                                </div>
                                                <div class="form-group">
                                                    <label for="Evaluate Budget">Max Positions</label>
                                                    <input type="number" class="form-control" id="Evaluate Budget" value={maxPositions} onChange={(e) => { setMaxPositions(e.target.value) }}></input>
                                                </div>
                                                <div class="form-group">
                                                    <label for="applicants">Max Applicants </label>
                                                    <input type="number" class="form-control" id="applicants" value={maxApplicants} onChange={(e) => { setmaxApplicants(e.target.value) }}>
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
                                                className="form-control" value={image}
                                                onClick={(e) => {
                                                    setImage(e.target.files[0]);
                                                }}
                                            />
                                        </div>

                                        <div class="row justify-content-center">
                                            <div class="col-md-12 col-lg-10 col-12">
                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea2" > Description</label> <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5" value={description} onChange={(e) => { setDescription(e.target.value) }}>
                                                    </textarea>
                                                </div>
                                                <div class="row justify-content-end mb-5">
                                                    <div class="col-lg-4 col-auto ">
                                                        <button type="submit" class="btn btn-primary btn-block" onClick={updateJob}>
                                                            <small class="font-weight-bold">Update job</small></button>
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
export default EditJob;