import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  message: String;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.message = this.route.snapshot.data['message'] + this.route.snapshot.url;
  }
}