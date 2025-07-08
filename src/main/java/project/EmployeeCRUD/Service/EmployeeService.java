package project.EmployeeCRUD.Service;

import project.EmployeeCRUD.dto.Employeedto;

import java.util.List;

public interface EmployeeService {
    Employeedto createEmployee(Employeedto empdto);

    Employeedto getEmployeeById(long empId);

    List<Employeedto> getAllEmployees();

    Employeedto updateEmployee(long employeeId,Employeedto updateEmployee);

    void deleteEmployee(long empId);
}
