import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {
  gistContent: string = '';

  ngOnInit() {
    fetch("https://gist.githubusercontent.com/Raymondtawiah640/6bc58a332b4186676061f8431bb0eb68/raw")
      .then(res => res.text())
      .then(data => {
        this.gistContent = data;
      });
  }
}
