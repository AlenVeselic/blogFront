import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-post-popup',
  templateUrl: './post-popup.component.html',
  styleUrls: ['./post-popup.component.css']
})
export class PostPopupComponent implements OnInit {

  postForm = this.fb.group({
    title : ["Write you title!...."],
    content : ["You can start to tell your story..."]
  });

  id = 0;

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private cS: CookieService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.getPayload()._id;
    
  }

  getPayload(){
    const cookie = this.cS.get('AuthenticationToken')
    const tokenPayloadUrl = cookie.split('.')[1];
    const tokenPayload = tokenPayloadUrl.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(tokenPayload));
  }

  onSubmit(){
    console.warn(JSON.stringify(this.postForm.value) + this.id)
    const pForm = this.postForm.controls
    const body = {
        title : pForm.title.value,
        content : pForm.content.value,
        userId : this.id
    }
    this.http.post("http://localhost:8000/posts", body)
      .subscribe(data => {
        console.log(JSON.stringify(data));
      })
  }

}
