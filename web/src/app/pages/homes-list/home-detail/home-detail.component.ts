import { ActivatedRoute } from '@angular/router';
import { HomesService } from './../../../services/homes.service';

import { Component, Input, OnInit } from '@angular/core';
import Home from 'src/app/model/home.model';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
})
export class HomeDetailComponent implements OnInit {
  home?: Home;

  constructor(
    private homesService: HomesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.home = this.homesService.findHomeById(
      this.route.snapshot.params['homeId']
    );

    console.log(this.home);
  }
}
