import { Component, OnInit } from '@angular/core';
import { ListAdvertisementService } from 'src/app/shared/services';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  constructor(private conversorService: ListAdvertisementService) {}

  houses: any;

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.conversorService.list().subscribe(
      (response) => {
        this.houses = response;
        console.log(response)
      },
      (error) => console.log(error)
    );
  }
}
