import { Component, OnInit } from '@angular/core';
import { SkillsService} from './skills.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  worksExperience : any[]
  skills : any[]
  workExperiences : any[]
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  constructor(private skillsService : SkillsService) { }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(res =>{
      //console.log(res);
      this.skills = res.map(item =>{
       return {
         $key : item.key,
         ...item.payload.val()
       }
      });
    });

    this.skillsService.getWorkExperience().subscribe(res =>{
      //console.log(res);
      this.workExperiences = res.map(item =>{
       return {
         $key : item.key,
         ...item.payload.val()
       }
      });
    });
  }

  GetWorkingDate(startingDate, dateEnded?){
    let message = '';
    let endDate = new Date()
    let startDateMonth = parseInt(startingDate.month)
    let startDateYear = parseInt(startingDate.year)

    let startDate = new Date(startDateYear,startDateMonth)
    let endDateMonth = parseInt(dateEnded.month)
    let endDateYear = parseInt(dateEnded.year)

    if(isNaN(endDateYear)){
      message = `${this.monthNames[startDate.getMonth()]} ${startDate.getFullYear()} - Till Date `
    }else{
      endDate = new Date(endDateYear,endDateMonth)
      message = `${this.monthNames[startDate.getMonth()]} ${startDate.getFullYear()} - ${this.monthNames[endDate.getMonth()]} ${endDate.getFullYear()}`         
    }

    let diff = endDate.getMonth() - (startDate.getMonth()-1) + (12 * (endDate.getFullYear() - startDate.getFullYear()));
    
    let yearNumber = Math.floor(diff / 12);
    let monthNumber = diff % 12;

    let year = yearNumber > 1 ? "years" : "year";
    let month = monthNumber > 1 ? "months" : "month"

    

    if(yearNumber == 0)
      return message += `(${monthNumber} ${month})`
    else if(monthNumber == 0)
      return  message += `(${yearNumber} ${year})`

    return message += `(${yearNumber} ${year} ${monthNumber} ${month})`;
  }

} 
