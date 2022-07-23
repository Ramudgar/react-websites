
import '../../assets/style/profile.css';
function EditJob() {

    return (
        <>
            <div className="container rounded bg-white mb-5 mt-5 p-3">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 ">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                    </div>
                    <div className="col-md-8 border-right">
                        <div className="p-3 border   shadow">
                            <div className="d-flex  justify-content-start  mb-3">
                                <h4 className="fs-4 fw-bold text-primary">Profile Settings</h4>
                            </div>
                            <div className="row mt-3 ">
                                <div className="col-md-6"><label for="name">Full Name</label>
                                    <input type="text" className="form-control" placeholder="enter your Name" id="name" />

                                </div>
                                <div className="col-md-6"><label for="mobile">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" id="mobile" />

                                </div>
                                <div className="col-md-6"><label className="labels">Country</label>
                                    <input type="text" className="form-control" placeholder="enter country" />

                                </div>
                                <div className="col-md-6"><label className="labels">city</label><input type="text" className="form-control" placeholder="enter city name" /></div>
                                <div className="col-md-6"><label className="labels">Zip code</label><input type="text" className="form-control" placeholder="enter zipcode" /></div>
                                <div className="col-md-6"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter state" /></div>

                                <div className="col-md-6"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" /></div>
                                <div className="col-md-6"><label className="labels">Institution Name</label><input type="text" className="form-control" placeholder="Institution name" /></div>
                                <div className="col-md-6"><label className="labels">Degree</label><input type="text" className="form-control" placeholder="Write your Degree types" /></div>
                                <div className="col-md-6"><label className="labels">Start Year</label><input type="text" className="form-control" placeholder="Enter start date" /></div>
                                <div className="col-md-6"><label className="labels">End Year</label><input type="text" className="form-control" placeholder="Enter end date" /></div>
                                <div className="col-md-6"><label className="labels">Experience include year/Area</label><input type="text" className="form-control" placeholder="experience with year" /></div> <br />
                                <div className="col-md-6"><label className="labels">Skills</label><input type="text" className="form-control" placeholder="Enter all skills you have" /></div>
                                <div className="col-md-6"><label className="labels">Languages</label><input type="text" className="form-control" placeholder="Enter all languages you understand" /></div>
                                <div className="col-md-6"><label className="labels">Websites</label><input type="text" className="form-control" placeholder="Enter your websites link" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" /></div>
                                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" placeholder="state" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label class="my-auto">Upload Image </label>
                                    <input id="file" type="file" class="form-control" /></div>
                            </div>



                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button">Save Profile</button></div>
                        </div>
                    </div>

                </div>
            </div>




        </>

    )
}

export default EditJob;