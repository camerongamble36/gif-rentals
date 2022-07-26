import { Component, Input, OnInit } from '@angular/core';
import CommentModel from 'src/app/model/comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() comments?: CommentModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
