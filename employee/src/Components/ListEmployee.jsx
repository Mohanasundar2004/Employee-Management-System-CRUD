
import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployee() {
    const [employee, setEmployee] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
       getAllEmployee();
    }, []);

    function getAllEmployee() {
         listEmployees()
        .then((res) => setEmployee(res.data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    function AddnewEmployee() {
        navigate('/add-employee')
    }
    
    function updateEmployee(id) {
        navigate(`/update-employee/${id}`);
    }

    function removeEmployee(id) {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            deleteEmployee(id).then((res) => {
                setTimeout(() => getAllEmployee(), 300);
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }

    return (
        <div className='container mt-4'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h2 className='mb-0'>
                    <i className="bi bi-list-ul me-2"></i>
                    Employee List
                </h2>
                <button 
                    className='btn btn-primary' 
                    onClick={AddnewEmployee}
                >
                    <i className="bi bi-plus-circle me-1"></i>
                    Add Employee
                </button>
            </div>
            
            <div className='table-responsive text-center'>
                <table className='table table-striped table-hover table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.email}</td>
                                <td>
                                    <button 
                                        className='btn btn-sm btn-info me-2'
                                        onClick={() => updateEmployee(data.id)}
                                    >
                                        <i className="bi bi-pencil-square me-1"></i>
                                        Edit
                                    </button>
                                    <button 
                                        className='btn btn-sm btn-danger'
                                        onClick={() => removeEmployee(data.id)}
                                    >
                                        <i className="bi bi-trash me-1"></i>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployee;