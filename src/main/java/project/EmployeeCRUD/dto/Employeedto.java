package project.EmployeeCRUD.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Employeedto {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}
