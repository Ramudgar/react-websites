import '../../assets/style/addJob.css'
function AddJob() {
    return (
        <>
            <div class="container card-0 justify-content-center ">
                <div class="card-body px-sm-4 px-0">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-10 col"><h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Request a Quote </h3><p class="mt-md-4  ml-md-0 ml-2 text-center text-sm-left"> Entrust with heigh professionalism we are offering pixel perfect web and mobile application development third party integration and solution to our.</p></div>
                    </div>
                    <div class="row justify-content-center round">
                        <div class="col-lg-10 col-md-12 ">
                            <div class="card shadow-lg card-1">
                                <div class="card-body inner-card">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-5 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="first-name">First Name</label>
                                                <input type="text" class="form-control" id="first-name" placeholder="Type your Name">

                                                </input>
                                            </div>
                                            <div class="form-group">
                                                <label for="Mobile-Number">Mobile Number</label>
                                                <input type="text" class="form-control" id="Mobile-Number" placeholder=""></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputEmail4">Project Type</label>
                                                <select class="form-control"><option>Web Design</option>
                                                    <option>Blockchain</option>
                                                    <option>ML</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="time">Maximum time for the project</label>
                                                <input type="text" class="form-control" id="time" placeholder=""></input>
                                            </div>
                                            <div class="form-group"><label for="skill">Required Skills</label>
                                                <input type="text" class="form-control" id="skill" placeholder=""></input>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="last-name">Last Name</label>
                                                <input type="text" class="form-control" id="last-name" placeholder=""></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="phone">Email</label>
                                                <input type="email" class="form-control" id="email" placeholder=""></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="Evaluate Budget">Evaluate Budget</label>
                                                <input type="text" class="form-control" id="Evaluate Budget" placeholder=""></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="Company-Name">Company Name</label>
                                                <input type="text" class="form-control" id="Company-Name" placeholder="">
                                                </input>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputEmail4">Country</label>
                                                <select class="form-control"> <option>India</option>
                                                    <option>China</option>
                                                    <option>UK</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row justify-content-center">
                                        <div class="col-md-12 col-lg-10 col-12">
                                            <div class="form-group files">
                                                <label class="my-auto">Upload Your File </label>
                                                <input id="file" type="file" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-12 col-lg-10 col-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea2">Message</label> <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="5">
                                                </textarea>
                                            </div>
                                            <div class="row justify-content-end mb-5">
                                                <div class="col-lg-4 col-auto ">
                                                    <button type="button" class="btn btn-primary btn-block">
                                                        <small class="font-weight-bold">Request a Quote</small></button>
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
export default AddJob;