function Logout(){
    return(
        <>
        
    <div className="container shadow m-5 p-5">
        <div className="logout-header p-5">
            <h1>Logout</h1>
        </div>
        <div className="logout-body m-2">
            <p>Are you sure you want to logout?</p>
            <div className="logout-buttons">
                <button className="btn btn-primary" onClick={()=>{

                    localStorage.removeItem('token');
                    localStorage.removeItem('role');
                    localStorage.removeItem('email');
                    window.location.replace('login');
                }
                }>Yes</button>
                <button className="btn btn-danger" onClick={()=>{
                    window.location.reload();

                }
                }>No</button>
            </div>
        </div>
    </div>

        
        </>
    )
}
export default Logout;