import  CommentModel  from 'src/app/model/comment.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment?: CommentModel;

  constructor() { }

  ngOnInit(): void {
  }

}
