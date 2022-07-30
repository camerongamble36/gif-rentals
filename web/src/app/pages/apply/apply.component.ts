import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import Home from 'src/app/model/home.model';
import { HomesService } from 'src/app/services/homes.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  home?: Home;

  homeApplicationForm!: FormGroup;

  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
  dob = new FormControl();
  street = new FormControl();
  aptBuilding = new FormControl();
  city = new FormControl();
  state = new FormControl();
  zipCode = new FormControl();

  constructor(private homesService: HomesService, private router: Router, private route: ActivatedRoute) {
    this.homeApplicationForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      dob: this.dob,
      street: this.street,
      aptBuilding: this.aptBuilding,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode
    });
   }

  ngOnInit(): void {
  }

  submitForm(): void {
    const timestamp = new Date(Date.now());

    const home = new Home();

    const submitter = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      dob: this.dob.value,
      street: this.street.value,
      aptBuilding: this.aptBuilding.value,
      city: this.city.value,
      state: this.state.value,
      zipCode: this.zipCode.value
    }

    const submitters: any[] = []

    submitters.push(submitter);

    const application = { timestamp, home, submitters };

    this.homesService.apply(application);

    setTimeout(() => {
      this.router.navigate(["/"], { relativeTo: this.route });
    }, 3000);

  }

  getHome() {
    // TODO
  }

}
