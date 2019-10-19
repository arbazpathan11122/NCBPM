import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {




  processFlow = [
    {
      formName: '',
      formId: Number,
      ProcessId: Number,
      TaskFlow: [
        {
          assignToUser: [
            {
              userName: '',
              userEmail: '',
              userId: ''
            },
            {
              userName: '',
              userEmail: '',
              userId: ''
            },
            {
              userName: '',
              userEmail: '',
              userId: ''
            },
            {
              userName: '',
              userEmail: '',
              userId: ''
            },
          ],
          assignByUser: [
            {
              userName: '',
              userEmail: '',
              userId: ''
            },
            {
              userName: '',
              userEmail: '',
              userId: ''
            },
            {
              userName: '',
              userEmail: '',
              userId: ''
            },
            {
              userName: '',
              userEmail: '',
              userId: ''
            },
          ],
          assignTaskType: '',
          assignTaskId: '',
          AssignmentRoll: '',

        }
      ]
    }

  ];
















  constructor() { }

  ngOnInit() {
  }

}
