import { HomesService } from './../../services/homes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Home from 'src/app/model/home.model';

@Component({
  selector: 'app-homes-list',
  templateUrl: './homes-list.component.html',
  styleUrls: ['./homes-list.component.css'],
})
export class HomesListComponent implements OnInit {
  homesList?: Home[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homesService: HomesService
  ) {}

  ngOnInit(): void {
    this.homesList = this.homesService.homes;
  }

  navigate(homeId: string): void {
    this.router.navigate([homeId, 'detail'], { relativeTo: this.route });
  }
}
