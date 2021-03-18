import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../post/post.model';

import { PostService } from '../../Service/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  constructor(public postsService: PostService) {}

  posts: Post[] = [];
  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }
}
