package project.EmployeeCRUD.Service;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.EmployeeCRUD.Exception.ResourceNotFoundException;
import project.EmployeeCRUD.Mapper.EmployeeMap;
import project.EmployeeCRUD.Model.Employee;
import project.EmployeeCRUD.Repository.EmployeeRepo;
import project.EmployeeCRUD.dto.Employeedto;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImp implements EmployeeService{

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employeedto createEmployee(Employeedto empdto) {
        Employee emp= EmployeeMap.maptoEmployee(empdto);
        Employee createEmp=employeeRepo.save(emp);
        return EmployeeMap.maptoEmplyeedto(createEmp);
    }

    @Override
    public Employeedto getEmployeeById(long empId) {
        Employee emp=employeeRepo.findById(empId).orElseThrow(()->new ResourceNotFoundException("Employee is not exists with given Id : "+empId));
        return EmployeeMap.maptoEmplyeedto(emp);
    }

    @Override
    public List<Employeedto> getAllEmployees() {
        List<Employee> employees=employeeRepo.findAll();
        return employees.stream().map((emp)->EmployeeMap.maptoEmplyeedto(emp)).collect(Collectors.toList());
    }

    @Override
    public Employeedto updateEmployee(long employeeId, Employeedto updateEmployee) {
        Employee emp=employeeRepo.findById(employeeId).orElseThrow(()->new ResourceNotFoundException("Employee is not found with given id : "+employeeId));
        emp.setFirstName(updateEmployee.getFirstName());
        emp.setLastName(updateEmployee.getLastName());
        emp.setEmail(updateEmployee.getEmail());
        Employee update=employeeRepo.save(emp);
        return EmployeeMap.maptoEmplyeedto(update);
    }

    @Override
    public void deleteEmployee(long empId) {
        Employee emp=employeeRepo.findById(empId).orElseThrow(()->new ResourceNotFoundException("Employee is not found with given id : "+empId));
        employeeRepo.deleteById(empId);
    }
}
