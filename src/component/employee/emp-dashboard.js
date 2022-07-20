function EmpDashboard() {

    return (
        <>
            <div class="col-md-9">
                <div class="card card2 p-3">
                    <div class="hello d-flex justify-content-end align-items-center mt-3">
                        <span>Hi,Frank Jack</span>
                    </div>
                    <div class="d-flex flex-row gap-3">
                        <div class="card cardchild mt-3 p-2 px-3 py-3">
                            <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                <div class="d-flex flex-column"><span class="type">Minimal</span><span class="number">132</span></div>
                                <div class="d-flex flex-column"><img src="https://i.imgur.com/Slxu74c.png" class="logo1" height="40" width="40" /><span class="percentage">45%</span></div>
                            </div>
                        </div>
                        <div class="card cardchild mt-3 p-2 px-3 py-3">
                            <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                <div class="d-flex flex-column">
                                    <span class="type">Mild</span>
                                    <span class="number">120</span>
                                </div>
                                <div class="d-flex flex-column">
                                    <img src="https://i.imgur.com/7SEdq7z.png" class="logo2" height="40" width="40" />
                                    <span class="percentage2">25%</span>
                                </div>
                            </div>
                        </div>

                        <div class="card cardchild mt-3 p-2 px-3 py-3">
                            <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                <div class="d-flex flex-column">
                                    <span class="type">Moderate</span>
                                    <span class="number">25</span></div>
                                <div class="d-flex flex-column">
                                    <img src="https://i.imgur.com/xvUzRjK.png" class="logo3" height="40" width="40" />
                                    <span class="percentage3">17%</span>
                                </div>
                            </div>
                        </div>
                        <div class="card cardchild mt-3 p-2 px-3 py-3">
                            <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                <div class="d-flex flex-column">
                                    <span class="type">Severe</span>
                                    <span class="number">5</span></div>
                                <div class="d-flex flex-column">
                                    <img src=" https://i.imgur.com/iLU5F9A.png" class="logo4" height="40" width="40" />
                                    <span class="percentage4">13%</span>
                                </div> </div> </div> </div>

                
            
            <div id="topnavbar">
            <div className="d-flex align-items-center mb-3 px-md-3 px-2">
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
                        <tr>
                            <th scope="col">COMPANY<span>ID</span></th>
                            <th scope="col">COMPANY</th>
                            <th scope="col">MID</th>
                            <th scope="col">BANK<span className="ps-1">NAME</span></th>
                            <th scope="col">CUR</th>
                            <th className="text-center" scope="col">3DS</th>
                            <th className="text-center" scope="col">ACTIVE</th>
                            <th className="text-center" scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="bg-blight">235</span></td>
                            <td><span className="bg-bdark">ABC<span className="ps-1">LOANS</span></span></td>
                            <td><span className="bg-blight">1343</span></td>
                            <td><span className="bg-bdark">Faster<span>Trading</span></span></td>
                            <td><span className="bg-bdark">GBP</span></td>
                            <td className="text-center px-0"><span className="fas fa-check"></span></td>
                            <td className="text-center"><span className="fas fa-check"></span></td>
                            <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                        </tr>
                        <tr>
                            <td><span className="bg-blight">236</span></td>
                            <td><span className="bg-bdark">BCE<span className="ps-1">LOANS</span></span></td>
                            <td><span className="bg-blight">1298</span></td>
                            <td><span className="bg-bdark">Secure<span>Trading</span></span></td>
                            <td><span className="bg-bdark">GBP</span></td>
                            <td className="text-center px-0"><span className="fas fa-check"></span></td>
                            <td className="text-center"><span className="fas fa-check"></span></td>
                            <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                        </tr>
                        <tr>
                            <td><span className="bg-blight">237</span></td>
                            <td><span className="bg-bdark">CDE<span className="ps-1">LOANS</span></span></td>
                            <td><span className="bg-blight">1313</span></td>
                            <td><span className="bg-bdark">Secure<span>Trading</span></span></td>
                            <td><span className="bg-bdark">GBP</span></td>
                            <td className="text-center px-0"><span className="fas fa-times"></span></td>
                            <td className="text-center"><span className="fas fa-check"></span></td>
                            <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                        </tr>
                        <tr>
                            <td><span className="bg-blight">235</span></td>
                            <td><span className="bg-bdark">DEF<span className="ps-1">LOANS</span></span></td>
                            <td><span className="bg-blight">1323</span></td>
                            <td><span className="bg-bdark">Secure<span>Trading</span></span></td>
                            <td><span className="bg-bdark">GBP</span></td>
                            <td className="text-center px-0"><span className="fas fa-times"></span></td>
                            <td className="text-center"><span className="fas fa-check"></span></td>
                            <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                        </tr>
                        <tr>
                            <td><span className="bg-blight">235</span></td>
                            <td><span className="bg-bdark">FEG<span className="ps-1">LOANS</span></span></td>
                            <td><span className="bg-blight">1443</span></td>
                            <td><span className="bg-bdark">Secure<span>Trading</span></span></td>
                            <td><span className="bg-bdark">GBP</span></td>
                            <td className="text-center px-0"><span className="fas fa-times"></span></td>
                            <td className="text-center"><span className="fas fa-check"></span></td>
                            <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                        </tr>
                        <tr>
                            <td><span className="bg-blight">237</span></td>
                            <td><span className="bg-bdark">GFR<span className="ps-1">LOANS</span></span></td>
                            <td><span className="bg-blight">1943</span></td>
                            <td><span className="bg-bdark">Faster<span>Trading</span></span></td>
                            <td><span className="bg-bdark">GBP</span></td>
                            <td className="text-center px-0"><span className="fas fa-times"></span></td>
                            <td className="text-center"><span className="fas fa-check"></span></td>
                            <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
                        </tr>
                        <tr>
                            <td><span className="bg-blight">235</span></td>
                            <td><span className="bg-bdark">ABC<span className="ps-1">LOANS</span></span></td>
                            <td><span className="bg-blight">1343</span></td>
                            <td><span className="bg-bdark">Faster<span>Trading</span></span></td>
                            <td><span className="bg-bdark">GBP</span></td>
                            <td className="text-center px-0"><span className="fas fa-times"></span></td>
                            <td className="text-center"><span className="fas fa-check"></span></td>
                            <td className="text-center"><span className="fas fa-ellipsis-h"></span></td>
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
    </div>

        </>
    )
}
export default EmpDashboard;
