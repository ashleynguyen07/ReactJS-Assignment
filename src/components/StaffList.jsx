import Button from "react-bootstrap/Button";
import { useState } from "react";
import { DEPARTMENTS } from "../data/departments";

function StaffList({ data }) {
  const [staffDetails, setStaffDetails] = useState({});

  function showDetail(staff) {
    setStaffDetails(staff);
  }

  function getDepartmentName(departmentId) {
    for (let department of DEPARTMENTS) {
      if (department.id === departmentId) {
        return department.name;
      }
    }
  }

  return (
    <div className="container">
      <div className="row">
        {data.map((staff) => (
          <div className="col-6 border p-2" key={staff.id}>
            <Button variant="light" onClick={() => showDetail(staff)}>
              <p>{staff.name}</p>
            </Button>
          </div>
        ))}
      </div>

      {Object.keys(staffDetails).length === 0 ? (
        <p>Bấm vào tên nhân viên để xem thông tin</p>
      ) : (
        <div className="p-2 text-start">
          <h3>Full name: {staffDetails.name}</h3>
          <p>DOB: {new Date(staffDetails.doB).toLocaleDateString()}</p>
          <p>
            Start date: {new Date(staffDetails.startDate).toLocaleDateString()}
          </p>
          <p>Department: {getDepartmentName(staffDetails.departmentId)}</p>
          <p>Annual leave: {staffDetails.annualLeave}</p>
          <p>Over time: {staffDetails.overTime}</p>
        </div>
      )}
    </div>
  );
}

export default StaffList;
