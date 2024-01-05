import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  card = [
    {
      name: 'Search What You are Looking For',
      src: 'assets/images/contentthumbnail1.png',
    },
    {
      name: 'Search What You are Looking For',
      src: 'assets/images/contentthumbnail1.png',
    },
    {
      name: 'Search What You are Looking For',
      src: 'assets/images/contentthumbnail1.png',
    },
  ];

  constructor() {
    this.selectedCard[0] = true;
  }
  selectedCard: boolean[] = [];
  selectCard(index: any) {
    this.selectedCard = this.selectedCard.map(() => false);
    this.selectedCard[index] = true;
  }

  ngOnInit() {}
}
