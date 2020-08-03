import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../contact/contact';
import { Pipe, PipeTransform } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent implements OnInit {
contact:Contact;
contactDel:Contact;
contactSearch:Contact[]=[];
contacts:Contact[];
contSort:Contact[];
icon:string;
name:string;
funcalled:boolean;
editFunc:boolean;
updateSuccess:boolean;
  constructor(private matDialog: MatDialog,private contactSer:ContactService) 
  {
   this.funcalled=false;
    this.contacts = this.contactSer.getContacts();
    this.contSort=this.contacts.sort();
    this.contactSearch=this.contactSer.getContacts();
    this.contact = new Contact();
    this.contactDel=new Contact();
    this.editFunc=false;
    this.updateSuccess=false;

    this.contacts.sort((a, b) => (a.name < b.name ? -1 : 1));

    this.icon="glyphicon glyphicon-user";

   }

   openDialog(){
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.id = "contact-component";
    dialogConfig.height = "400px";
    dialogConfig.width = "900000";
    
    const modalDialog = this.matDialog.open(ContactComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

  deleteCont(contact){
    console.log("In delete ")
    this.contactSer.deleteContact(contact);
    

  }

  editCont(contact)
  {
    console.log("in edit")
    this.editFunc=true;
    this.contactDel = contact;
    console.log(this.editFunc);
    console.log(contact.name);
    console.log(this.contactDel.name);
    console.log("In success")
    
    console.log(this.updateSuccess);

  }
Search(){

  if(this.contact.name!="")
  {

    this.contactSearch=this.contactSer.getContacts();
  console.log("above");
    this.funcalled=true;
this.contactSearch=this.contactSearch.filter(res=>{
  return res.name.toLocaleLowerCase().match(this.contact.name.toLocaleLowerCase());
}


);
  }

  else if(this.contact.name=="")
  {
    console.log("in ngon");
    this.funcalled=false;
    this.contact=new Contact();
    this.name="";
    this.contactSearch=[];
    this.ngOnInit();
    


  }







}
  

}
