import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  showFiller = false;
  links = [
    { url: '/', name: 'List of tasks' },
    { url: '/tasks', name: 'List of tasks' },
  ];
  listTasks = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.listTasks = new FormGroup({
    //   tasks: new FormArray([
    //     new FormControl('Apple'),
    //     new FormControl('Apple'),
    //     new FormControl('Apply'),
    //   ]),
    // });
    this.listTasks = this.formBuilder.group({
      tasks: this.formBuilder.array([['apple'], ['apple'], ['apple']]),
    });
    this.listTasks.valueChanges.subscribe((value) => console.log(value));
  }
  removeTask(index: number) {
    (this.listTasks.controls['tasks'] as FormArray).removeAt(index);
  }
  addTask() {
    (this.listTasks.controls['tasks'] as FormArray).push(new FormControl(''));
  }
}
