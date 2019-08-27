import { Component, OnInit , Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   { title: 'First Post' , content: 'This is First post\'s content ' },
  //   { title: 'Second Post' , content: 'This is Second post\'s content ' },
  //   { title: 'Third Post' , content: 'This is Third post\'s content ' }
  // ]

  @Input() posts : Post[] = [];

  constructor() { }

  ngOnInit() {
  }

}