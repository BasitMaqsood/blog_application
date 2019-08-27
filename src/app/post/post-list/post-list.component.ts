import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


import { PostsService } from '../posts.service';
import { Post } from './../post.model';

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

 posts : Post[] = [];
 private postsSub: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[])=>{
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postsSub.unsubscribe();
  }

}
