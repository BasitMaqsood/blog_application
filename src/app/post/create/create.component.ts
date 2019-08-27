import { Component, OnInit , EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  enteredContent ="";
  enteredTitle="";
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost(){
    const post : Post = { title: this.enteredTitle, content: this.enteredContent };
    
    this.postCreated.emit(post);
  }

}
