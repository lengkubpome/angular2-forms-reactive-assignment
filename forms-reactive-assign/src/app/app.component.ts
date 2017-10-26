import { CustomeValivators } from './customer-valivators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  statuses = [
    { value: 'stable', viewValue: 'stable' },
    { value: 'critital', viewValue: 'critital' },
    { value: 'finished', viewValue: 'finished' }
  ];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, 
          [Validators.required, CustomeValivators.invalidProjectName],
          CustomeValivators.asyncInvalidProjectName
        ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critital')

    });
  }

  onSaveProject() {
    console.log(this.projectForm.status);
  }
}
