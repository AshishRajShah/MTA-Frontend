import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../Services/api-call.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  constructor(private api:ApiCallService){}

  users: any;
  ngOnInit(): void {
    this.api.getAllUsers().subscribe({
      next:data =>{
        // console.log(data); 
        this.users = data;
        console.log("users : ",this.users); 
      }, 
      error:error=>{
        console.log(error);
      }
    })
  }

  delUser(id:number){
    this.api.deleteUser(id).subscribe({
      next:(data: any) =>{  
        alert('User Deleted successfully');
        window.location.reload()
      }, 
      error:(error:any)=>{
        alert('user updation failed...');
        window.location.reload()
      }
      
    })
  }

    id:any
  getId(value:any){
    this.id = value
  }

}
