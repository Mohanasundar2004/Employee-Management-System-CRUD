package project.EmployeeCRUD.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.EmployeeCRUD.Model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee,Long> {
}
