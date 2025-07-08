package project.EmployeeCRUD.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.EmployeeCRUD.Service.EmployeeService;
import project.EmployeeCRUD.dto.Employeedto;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    //Build add Employee rest API
    @PostMapping
    public ResponseEntity<Employeedto> createEmployee(@RequestBody Employeedto empdto){
        Employeedto savedEmp=employeeService.createEmployee(empdto);
        return new ResponseEntity<>(savedEmp, HttpStatus.CREATED);
    }

    // Build Get Employee rest API
    @GetMapping("{id}")
    public ResponseEntity<Employeedto> getEmployeeById(@PathVariable("id") Long empId){
        Employeedto getEmp=employeeService.getEmployeeById(empId);
        return new ResponseEntity<>(getEmp,HttpStatus.OK);
    }
    //Build Get All Employees
    @GetMapping
    public ResponseEntity<List<Employeedto>> getAllEmployees(){
        List<Employeedto> emp=employeeService.getAllEmployees();
        return new ResponseEntity<>(emp,HttpStatus.OK);
    }

    // Build Update Employee
    @PutMapping("{id}")
    public ResponseEntity<Employeedto> updateEmployee(@PathVariable("id") Long empId,@RequestBody Employeedto update){
        Employeedto emp=employeeService.updateEmployee(empId,update);
        return new ResponseEntity<>(emp,HttpStatus.OK);
    }

    //Build delete Employee
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long empId){
        employeeService.deleteEmployee(empId);
        return new ResponseEntity<>("Successfully deleted", HttpStatus.OK);
    }
}

