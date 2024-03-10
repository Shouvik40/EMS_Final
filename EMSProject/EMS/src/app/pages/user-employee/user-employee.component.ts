import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
@Component({
  selector: 'app-user-employee',
  templateUrl: './user-employee.component.html',
  styleUrls: ['./user-employee.component.css'],
})
export class UserEmployeeComponent {
  employee: Employee | undefined;
  empID: any; // Input variable for employee ID

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  getEmployeeDetails() {
    if (this.empID) {
      // Check if empID is provided
      this.employeeService.getEmployee(this.empID).subscribe(
        (data: Employee) => {
          this.employee = data;
        },
        (error) => {
          console.error('Error fetching employee details:', error);
        }
      );
    }
  }
}
