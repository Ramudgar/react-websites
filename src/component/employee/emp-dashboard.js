import {Link} from 'react-router-dom'


function EmpDashboard() {

    return (
        <><div className="container">
            <div class="container">
                <div class="card p-3 ">
                    <div class=" d-flex flex-column ms-auto align-items-center mt-3">
                       <div> <img src="https://www.acquire.com/wp-content/uploads/2019/01/Acquire-Logo-1.png" alt="Acquire" class="img-fluid rounded-circle" ></img></div>
                       <div>Hi,Ram</div>
                    </div>

                    <div class="card-body m-3 ">
                        <div class="row ">
                            <div class="col-md-3 my-3  ">
                                <div class="card bg-primary" style={{height:120, width:240}} >
                                    <div class="card-body ">
                                        <div class=" text-white text-center ">
                                            <h5>Total Jobs</h5><br/>
                                            <span className='rounded-circle bg-warning p-3 text-dark'>99</span>

                                        </div>
                                    </div>
                                </div></div>

                            <div class="col-md-3 my-3 ">
                                <div class="card bg-info"style={{height:120, width:240}}>
                                    <div class="card-body ">
                                    <div class=" text-white text-center ">
                                            <h5>Total Applicant</h5><br/>
                                            <span className='rounded-circle bg-warning p-3 text-dark'>99</span>

                                        </div>
                                    </div>
                                </div></div>
                            <div class="col-md-3 my-3 ">
                                <div class="card bg-success"style={{height:120, width:250}}>
                                    <div class="card-body ">
                                    <div class=" text-white text-center ">
                                            <h5>Accepted Applicant</h5><br/>
                                            <span className='rounded-circle bg-warning p-3 text-dark'>99</span>

                                        </div>
                                    </div>
                                </div></div>
                            <div class="col-md-3 my-3 ">
                                <div class="card bg-warning"style={{height:120, width:240}}>
                                    <div class="card-body ">
                                    <div class=" text-white text-center ">
                                            <h5>Total Jobs</h5><br/>
                                            <span className='rounded-circle bg-info p-3 text-dark'>99</span>

                                        </div>
                                    </div>
                                </div></div>
                        
                        </div></div>
                </div>
            </div>



            <div id="topnavbar mt-2">
                <div className="d-flex align-items-center mb-3 mt-3 px-md-3 px-2">
                    <span className="text-uppercase fs13 fw-bolder pe-3">search<span className="ps-1">by</span>
                    </span>
                    <form className="example d-flex align-items-center">
                        <input type="text" placeholder="Type in Company Name Or Mid id" name="search"></input>
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
                <div className="table-responsive px-2">
                    <table className="table table-borderless">
                        <thead>
                            <tr className="m-2 ">
                                <th scope="col" className='fs-6'>Applicant<span>ID</span></th>
                                <th scope="col" className='fs-6'>Applicant Name</th>
                                <th scope="col" className='fs-6'>Job Title</th>
                                <th scope="col" className='fs-6'>Applied Date</th>
                                <th scope="col" className='fs-6 '>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="bg-blight">235</span></td>
                                <td><span className="bg-bdark">ABC<span className="ps-1">LOANS</span></span></td>
                                <td><span className="bg-blight">1343</span></td>
                                <td><span className="bg-bdark">Faster<span>Trading</span></span></td>
                                <td><span><Link to="" className='btn btn-primary'>Accept </Link></span>  <span><Link to="" className='btn btn-danger'>Reject </Link></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex align-items-center justify-content-between px-3 mt-3">
                    <div className="bg-bdark fs13"> <span>Page</span> <input className="input-10 text-center" type="text" value="1"></input> <span><span className="px-1">of</span>1</span> </div>
                    <div className="d-flex justify-content-end bg-bdark fs13"> <span className="pe-1">Show</span> <input className="input-10" type="number" value="25"></input> <span className="ps-2"><span className="pe-2">/</span>Page</span> </div>
                </div>
            </div>

        </div>

        </>
    )
}
export default EmpDashboard;
