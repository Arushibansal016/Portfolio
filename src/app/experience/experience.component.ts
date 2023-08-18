import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  jobs: Array<string> = ['sdhfgd', 'ewrf', 'ewrg']
  companies = [
    {
      name: 'World Fashion Exchange',
      jobs: [
        {
          title: 'Software Developer',
          points: [
            'I have worked on the smart factory project in which I have done the front-end work using Angular and back-end work using Entity framework and DB work using SQL server'
            , 'I have worked on Angular, which is working with the latest Angular CLI and MS SQL DB'
            , 'I have helped in the migration of the application from the .net framework to Angular where I have handled the complete angular project and all of its common new dev/modifications.'
            , 'I have created common reusable components and grid components, which we use to make pages and grids. API iscreated in .Net and the backend I used is SQL']
        },
      ]
    },
  ];


}
