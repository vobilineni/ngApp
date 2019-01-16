import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  getEmployees(){
    return [
      {"id": 1, "name": "srini", "gender": "Male"},
      {"id": 2, "name": "srinivas", "gender": "M"},
      {"id": 3, "name": "vobilineni", "gender": "male"}
    ]
  }

}
