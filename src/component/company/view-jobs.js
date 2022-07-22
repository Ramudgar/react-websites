import '../../assets/style/view-jobs.css'

function ViewJobs() {
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
            <tr class="border-bottom">
              <td>
                <div class="p-2">
                  <span class="d-block font-weight-bold"></span>
                  <small>123</small>
                </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-row align-items-center mb-2">
                  <img src="https://i.imgur.com/ZSkeqnd.jpg" width="40" class="rounded-circle" />
                  <div class="d-flex flex-column ml-2">
                    <span class="d-block font-weight-bold">Jennifer john</span>
                    <small class="text-muted">Jasmine Owner Reality group</small>
                  </div>
                </div>

              </td>
              <td>
                <div class="p-2">
                  <span class="font-weight-bold">Full time</span>
                </div>
              </td>
              <td>
                <div class="p-2">
                  <span class="font-weight-bold">2072-02-1</span>
                </div>
              </td>
              <td>
                <div class="p-2">
                  <span class="font-weight-bold">2077-02-4</span>
                </div>
              </td>
              <td>
                <div class="p-2 d-flex flex-column">
                  <span>Kathmandu</span>
                  
                </div>
              </td>
              <td>
                <div class="p-2 icons">
                  <i class="fas fa-edit text-primary"></i>
                  <i class="fas fa-trash-alt text-danger"></i>
                    
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default ViewJobs;