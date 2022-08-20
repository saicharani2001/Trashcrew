import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import "hammerjs";
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ManagerpageComponent } from './managerpage/managerpage.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { UserpageComponent } from './userpage/userpage.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FbkpageComponent } from './fbkpage/fbkpage.component';
import { EmpComponent } from './emp/emp.component';
import {MatTableModule} from '@angular/material/table';
import { RoutemapComponent } from './routemap/routemap.component';
import {MatSelectModule} from '@angular/material/select';
import { InstructComponent } from './instruct/instruct.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DevicesComponent } from './devices/devices.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { EditComponent } from './edit/edit.component';
import { HelpComponent } from './help/help.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    MainscreenComponent,
    RegistrationComponent,
    ManagerpageComponent,
    UserpageComponent,
    FeedbackComponent,
    FbkpageComponent,
    EmpComponent,
    RoutemapComponent,
    InstructComponent,
    DevicesComponent,
    ToolbarComponent,
    DialogComponent,
    EditComponent,
    HelpComponent,
    AdddeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    SlickCarouselModule
  ],
  providers: [HomeComponent,MainscreenComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
