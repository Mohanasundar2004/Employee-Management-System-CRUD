package project.EmployeeCRUD.Mapper;

import project.EmployeeCRUD.Model.Employee;
import project.EmployeeCRUD.dto.Employeedto;

public class EmployeeMap {

    public static Employeedto maptoEmplyeedto(Employee emp){
        return new Employeedto(
                emp.getId(),
                emp.getFirstName(),
                emp.getLastName(),
                emp.getEmail()
        );
    }

    public static Employee maptoEmployee(Employeedto empdto){
        return new Employee(
                empdto.getId(),
                empdto.getFirstName(),
                empdto.getLastName(),
                empdto.getEmail()
        );
    }
}
