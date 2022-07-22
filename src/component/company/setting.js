function Setting(){
    return(
        <>
            <div className="container justify-content-center mb-5 ">
                
        <div className="container col-sm-9 shadow  p-5 ">
        <h2 className="text-center text-primary">Setting</h2>
                    <div className="card-body col-sm-10 justify-content-center m-5 p-5 shadow">
                        <h2 className="text-center text-success">Change password</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Old Password</label>
                                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter old password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">New Password</label>
                                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter new password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter confirm password" />
                            </div>
                            <button type="submit" className="btn btn-primary m-3 ">Submit</button>
                        </form>
                    </div >
{/* delete account with danger zone */}

                    <div className="card-body col-sm-10 justify-content-center m-5 p-5 shadow"> 
                        <h2 className="text-center text-danger">Delete account</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Password</label>
                                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" />
                               < button type="submit" className="btn btn-danger m-3 ">Delete</button>
                               </div>
                        </form>
                        </div>

                            

                    
                </div>    
                </div>   
        </>
    )
}
export default Setting;