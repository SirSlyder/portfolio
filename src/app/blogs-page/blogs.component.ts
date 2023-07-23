import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  private httpClient: HttpClient;
  private headings : String[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient){
    this.httpClient = http;
    this.retrieveIndex();
  }
  goToLink(link: string): void {
    this.router.navigate([link], {relativeTo: this.route});
  }

  retrieveIndex(): void {
    let blogCount : number;
    this.httpClient.get('assets/blog/index.json', {responseType: 'text'}).subscribe(
      data => {
        console.log(data);
        var obj = JSON.parse(data);
        console.log(obj.blogs);
        this.headings = obj.blogs;
        this.headings.reverse();
      }
    );
  }

  get blogHeadings() : String[] {
    return this.headings;
  }

  blogIndex(heading: String) : number {
    return (this.headings.length - 1) - this.headings.indexOf(heading);
  }

  testFunction(): string[] {
    return ["foo"]
  }

  blogDate(index: number): String {
    this.httpClient.get(`assets/blog/${index}/${index}.json`, {responseType: 'text'}).subscribe(
      data => {
        console.log(data);
        var obj = JSON.parse(data);
        return obj.date;
      }
    );
    return "";
  }
}
