import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from './contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private contactService : ContactService, private toastr : ToastrService) { }

  ngOnInit() : void{
    this.createContactForm();
  }


  createContactForm() {
    
    this.contactForm = this.fb.group({
      yourName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      comment: ['', Validators.required]
    })
  }

  //email = new FormControl('', [Validators.required, Validators.email]);
  getNameErrormessage(){
    return this.contactForm.controls['yourName'].hasError('required') ? 'Please enter your name' : '';
  }

  getEmailErrormessage(){
    return this.contactForm.controls['email'].hasError('required') ? 'You must enter an email' :
        this.contactForm.controls['email'].hasError('email') ? 'Not a valid email' :
          '';
  }

  getSubjectErrormessage(){
    return this.contactForm.controls['subject'].hasError('required') ? 'Please enter a subject' :
        '';
  }

  getCommentErrormessage(){
    return this.contactForm.controls['comment'].hasError('required') ? 'You must enter a comment' :
    '';
  }

  submitContact(){
    //console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.contactService.insertContact(this.contactForm.value);
      this.toastr.success('Submitted Successfully');
    }
    this.contactForm.reset();
  }

}

  
