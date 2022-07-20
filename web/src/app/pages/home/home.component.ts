import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  testimonials: any[] = [
    {
      img: '../../../assets/images/jpg/dummy_avatar_1.jpg',
      name: 'Amber Maidsen',
      rating: 5,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, etiam nullam volutpat egestas rutrum id egestas.',
    },
    {
      img: '../../../assets/images/jpg/dummy_avatar_2.jpg',
      name: 'Connor Madwolf',
      rating: 5,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, etiam nullam volutpat egestas rutrum id egestas.',
    },
    {
      img: '../../../assets/images/jpg/dummy_avatar_3.jpg',
      name: 'Katie Fisher',
      rating: 5,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, etiam nullam volutpat egestas rutrum id egestas.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
