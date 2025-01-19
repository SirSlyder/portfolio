import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit{
  index: String = "fail";
  private httpClient : HttpClient;
  private blogData: any;
  private blog: String = "";
  variable: boolean = true;
  constructor(private route: ActivatedRoute, private http: HttpClient){
    this.httpClient = http;
  }

  ngOnInit(): void{
    this.index = this.route.snapshot.paramMap.get('index') ?? "fail";
    this.retrieveBlogData();
    this.retrieveBlog();
  }

  retrieveBlogData(): void {
    this.httpClient.get(`assets/blog/${this.index}/${this.index}.json`, {responseType: 'text'}).subscribe(
      data => {
        console.log(data);
        var obj = JSON.parse(data);
        this.blogData = obj;
        this.createImages();

        if(!this.blogData.images){
          this.variable = false;
        } else {
          this.variable = true;
        }
      }
    );
  }

  retrieveBlog(): void {
    this.httpClient.get(`assets/blog/${this.index}/${this.index}.txt`, {responseType: 'text'}).subscribe({
      next: (data) => {
        console.log(data);
        this.blog = data;
      },
      error: (e) => console.log("Darn, we couldn't find the text.", e)
    });
  }

  get blogText(): String {
    if(!this.blogData) return "";
    return this.blog != "" ? this.blog : "This blog is empty... whoops.";
  }

  get blogHeading(): String {
    if(!this.blogData) return "Loading blog...";
    return this.blogData.heading ?? "This blog has no title... whoops.";
  }

  get blogSubtitle(): String {
    if(!this.blogData) return "";
    return this.blogData.subheading ?? "";
  }

  get blogDate(): String {
    if(!this.blogData) return "";
    return this.blogData.date ?? "";
  }

  get blogImages(): String {
    if(!this.blogData || !this.blogData.images) return "";
    const images = this.blogData.images;
    console.log(this.blogData.images);

    for(let i = 0; i < Object.keys(images).length; i++){
      console.log(this.blogData.images[i]);
    }

    return `<img class='blogImage' src='assets/blog/${this.index}/images/0.png'>`;
  }

  blogImageSource(): String {
    return `assets/blog/${this.index}/images/0.png'>`;
  }

  createImages(): void {
    if(!this.blogData || !this.blogData.images) return;
    const images = this.blogData.images;
    console.log(this.blogData.images);

    for(let i = 0; i < Object.keys(images).length; i++){
      console.log(this.blogData.images[i]);
      var image = document.createElement('img');
      image.src = `assets/blog/${this.index}/images/${i}.png`

      image.style.position = "absolute";
      image.style.width = this.blogData.images[i]['width'];
      image.style.left = this.blogData.images[i]['left'];
      image.style.top = this.blogData.images[i]['top'];

      var imageHolder = document.getElementById('imageholder');
      if(imageHolder) imageHolder.appendChild(image);
    }
  }
}
