import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';
import { PostsService } from './../posts.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  enteredContent ="";
  enteredTitle="";

  constructor(public postService: PostsService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    const post : Post = { title: form.value.title, content: form.value.content };
    
    this.postService.addPost(form.value.title ,form.value.content);
    form.resetForm();
  }

}
