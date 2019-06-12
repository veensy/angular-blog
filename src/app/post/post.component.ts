import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  count = 0;
  onMore() {
    this.count += 1;
    this.postCreatedAt = new Date();
  }
  onLess() {
    this.count -= 1;
    this.postCreatedAt = new Date();
  }
  constructor() {}

  ngOnInit() {}
}
