import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { PostPopupComponent } from '../post-popup/post-popup.component';

@Component({
  selector: 'app-account-content',
  templateUrl: './account-content.component.html',
  styleUrls: ['./account-content.component.css']
})
export class AccountContentComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private http: HttpClient,
              private cS: CookieService) { }

    id = 0;
    posts: String[] = [];

  ngOnInit(): void {
    this.id = this.getPayload()._id;
    this.http.get("http://localhost:8000/posts/from/" + this.id)
      .subscribe(data => {
        const dataString = JSON.stringify(data);
        const dataParsed = JSON.parse(dataString)
        for(let post in dataParsed){
          this.posts.push(post)
        }
      })
  }

  createPost(){
    this.dialog.open(PostPopupComponent)
  }

  getPayload(){
    const cookie = this.cS.get('AuthenticationToken')
    const tokenPayloadUrl = cookie.split('.')[1];
    const tokenPayload = tokenPayloadUrl.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(tokenPayload));
  }

}
