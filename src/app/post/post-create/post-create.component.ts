import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../../Service/post.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  constructor(public postsService: PostService) {}

  ngOnInit(): void {}

  //IMP

  onAddPost(form: NgForm) {
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
