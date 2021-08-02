import { CollectionPost } from './../../../models/collectionpost.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CollectionPostService } from 'src/app/services/collection-post.service';

@Component({
  selector: "app-collection-post-read",
  templateUrl: "./collection-post-read.component.html",
  styleUrls: ["./collection-post-read.component.css"],
})
export class CollectionPostReadComponent implements OnInit {
  collectionsPosts: CollectionPost[] = [];

  collectionPostSelected!: CollectionPost;

  @Output() collectionPost = new EventEmitter();

  constructor(private collectionPostService: CollectionPostService) {
    this.collectionPostService.read().subscribe((collectionPosts) => {
      this.collectionsPosts = collectionPosts;
    });
  }

  ngOnInit(): void {}

  selectColletionPost(collectionPost: CollectionPost) {
    this.collectionPost.emit(collectionPost);
  }
}
