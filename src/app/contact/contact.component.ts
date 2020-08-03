import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:Contact[];
  contact:Contact;
  myForm:FormGroup;
  contactAdded:boolean;

  constructor(private contactSer:ContactService,public dialogRef: MatDialogRef<ContactComponent>)
   {
    this.contactAdded=false;
    this.contact = new Contact();
    this.contacts = this.contactSer.getContacts();
    this.myForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      lname:new FormControl(null,Validators.required),
      contactNumber:new FormControl(null,[Validators.required,Validators.min(9000000)])


    });

    }



    public get name() {
      return this.myForm.get('name');
  }
  public get lname() {
      return this.myForm.get('lname');
  }
  public get contactNumber() {
      return this.myForm.get('contactNumber');
  }
  

    addContact()
    {
      if(this.myForm.valid)
      {
        this.contact.name=this.name.value;
        this.contact.lname = this.lname.value;
        this.contact.contactNumber = this.contactNumber.value;
      
        this.contactSer.addContact(this.contact);
      this.contact = new Contact();
      this.contactAdded=true;
        console.log(this.contactAdded);
        console.log("done")
      }
    }


    addContact2(){
      this.contactSer.addContact(this.contact);
      this.contact=new Contact();
      this.dialogRef.close();
    }
    close() {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
