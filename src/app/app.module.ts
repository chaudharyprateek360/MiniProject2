import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './contact/contact.service';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





var myRoutes:Routes=[
  {path:"add",component:ContactComponent},

  {path:"home",component:ContactsComponent},

  
  {path:"**",component:ContactsComponent,children:[{path:"add",component:ContactComponent}]}
  
  
  
  
  
]


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    MatDialogModule,
    BrowserAnimationsModule
    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
