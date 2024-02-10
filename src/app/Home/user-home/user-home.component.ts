import { Component, Input, OnDestroy } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router, RouterLink } from '@angular/router';
import { ApiCallService } from '../../Services/api-call.service';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-user-home',
    standalone: true,
    templateUrl: './user-home.component.html',
    styleUrl: './user-home.component.css',
    imports: [NavbarComponent, FooterComponent,RouterLink,ReactiveFormsModule]
})
export class UserHomeComponent implements OnDestroy {
    user :any ;  
    
    // Inside your component class
    editProfileForm!: FormGroup;
    

    submitted = false;

    constructor(private api: ApiCallService, private router:Router) {}
    
    ngOnDestroy(): void {
        this.api.logout();
        localStorage.clear();
        
    }
   
    
    ngOnInit(){
         // Retrieve the user object from localStorage
        this.user = this.api.getObject();
        this.editProfileForm = new FormGroup({
            userId: new FormControl(this.user.userId),
            firstName: new FormControl(this.user.firstName),
            middleName: new FormControl(this.user.middleName),
            lastName: new FormControl(this.user.lastName),
            email: new FormControl(this.user.email),
            password: new FormControl(''),
            dob: new FormControl(this.user.dob),
            gender: new FormControl(this.user.gender),
            country: new FormControl(this.user.country),
            currentLocation: new FormControl(this.user.currentLocation),
            mobile: new FormControl(this.user.mobile),
            prefered_location:  new FormControl(this.user.prefered_location)
        });
    }
    
    // console.log(this.user);
    onSubmit() {
        this.submitted = true;

        this.api.update(this.editProfileForm.value)
        .subscribe({
            next:() =>{
                alert('User profile updated successfully');
                // window.location.reload()
                this.router.navigate(["/login"])
              }, 
              error:()=>{
                alert('user updation failed...');
                window.location.reload()
              }
        })
    
        
    
     }
  
    

   
   
    



}
