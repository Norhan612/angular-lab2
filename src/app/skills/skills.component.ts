import { Component } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  //progressValues: number[] = [70, 60, 40, 50, 80, 90, 80, 50];

  progressData: { content: string, progress: number }[] = [
    {
      content: 'HTML',
      progress: 70
    },
    {
      content: 'CSS',
      progress: 60
    },
    {
      content: 'Javascript',
      progress: 40
    },
    {
      content: 'Angular',
      progress: 50
    },
    {
      content: 'Mysql',
      progress: 80
    },
    {
      content: 'PHP',
      progress: 90
    },
    {
      content: 'Bootstrap',
      progress: 90
    },
    {
      content: 'Laravel',
      progress: 50
    },
];


}
