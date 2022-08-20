import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { RegistrationComponent } from './registration/registration.component';
import { ManagerpageComponent } from './managerpage/managerpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FbkpageComponent } from './fbkpage/fbkpage.component';
import { EmpComponent } from './emp/emp.component';
import { RoutemapComponent } from './routemap/routemap.component';
import { InstructComponent } from './instruct/instruct.component';
import { DevicesComponent } from './devices/devices.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditComponent } from './edit/edit.component';
import { HelpComponent } from './help/help.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';

const routes: Routes = [
  {path:'',redirectTo: 'mainscreen',pathMatch:'full'},
  {path:'login' ,component:LoginComponent},
  {path:'home' ,component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'mainscreen',component:MainscreenComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'managerpage',component:ManagerpageComponent},
  {path:'userpage',component:UserpageComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'fbkpage',component:FbkpageComponent},
  {path:'emp',component:EmpComponent},
  {path:'routemap',component:RoutemapComponent},
  {path:'instruct',component:InstructComponent},
  {path:'devices',component:DevicesComponent},
  {path:'toolbar',component:ToolbarComponent},
  {path:'dialog',component:DialogComponent},
  {path:'edit',component:EditComponent},
  {path:'help',component:HelpComponent},
  {path:'adddevice',component:AdddeviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
