import '../../assets/style/addJob.css';
function EditJob() {
    return (
        <>
            <div class="container card-0 justify-content-center ">
                <div class="card-body px-sm-4 px-0">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-10 col"><h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Add Job </h3><p class="mt-md-4  ml-md-0 ml-2 text-center text-sm-left"> "We are very pride to offer a job to the needy tallented enthuastic in a startup Company"</p></div>
                    </div>
                    <div class="row justify-content-center round">
                        <div class="col-lg-10 col-md-12 ">
                            <div class="card shadow-lg card-1">
                                <div class="card-body inner-card">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-5 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="title">Job Title</label>
                                                <input type="text" class="form-control" id="title" placeholder="enter job title">

                                                </input>
                                            </div>
                                           
                                            <div class="form-group">
                                                <label for="inputEmail4">Job Type</label>
                                                <select class="form-control"><option>FullTIme</option>
                                                    <option>PartTime</option>
                                                    <option>Contract</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="time">Duration</label>
                                                <input type="text" class="form-control" id="time" placeholder="Time Duration"></input>
                                            </div>
                                            <div class="form-group"><label for="skill">Required Skills</label>
                                                <input type="text" class="form-control" id="skill" placeholder="skills"></input>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="salary">Salary</label>
                                                <input type="text" class="form-control" id="salary" placeholder="slary"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="date">Date of Posting</label>
                                                <input type="text" class="form-control" id="date" placeholder="date of posting"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="date">Deadline</label>
                                                <input type="text" class="form-control" id="date" placeholder="deadline"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="Evaluate Budget">Max Positions</label>
                                                <input type="number" class="form-control" id="Evaluate Budget" placeholder="max postiions"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="applicants">Max Applicants</label>
                                                <input type="number" class="form-control" id="applicants" placeholder="max applicants">
                                                </input>
                                            </div>
                                           
                                        </div>
                                    </div>

                                    <div class="row justify-content-center">
                                        <div class="col-md-12 col-lg-10 col-12">
                                            <div class="form-group files">
                                                <label class="my-auto">Upload Image </label>
                                                <input id="file" type="file" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-12 col-lg-10 col-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea2" >Add Description</label> <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5" placeholder='Add Description here.....'>
                                                </textarea>
                                            </div>
                                            <div class="row justify-content-end mb-5">
                                                <div class="col-lg-4 col-auto ">
                                                    <button type="button" class="btn btn-primary btn-block">
                                                        <small class="font-weight-bold">Edit job</small></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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