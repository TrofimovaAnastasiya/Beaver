import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  showFiller = false;
  links = [
    { url: '/tasks', name: 'List of tasks' },
    { url: '/tasks', name: 'List of tasks' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
