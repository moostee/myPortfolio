import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList  } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skillsList : AngularFireList<any>
  workExperienceList : AngularFireList<any>
  constructor(private firestore: AngularFireDatabase) { }

  getSkills(){
    this.skillsList = this.firestore.list('skills');
    return this.skillsList.snapshotChanges();
  }

  getWorkExperience(){
    this.workExperienceList = this.firestore.list('workExperience');
    return this.workExperienceList.snapshotChanges();
  }
}
