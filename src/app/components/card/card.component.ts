import { Card } from './../../module/card';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  myId = uuid.v4();

  card: Card = {
    id: this.myId,
    titulo: '',
    conteudo: '',
    lista: '',
  };

  formCard!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.createCard(this.card);
  }

  createCard(card: Card) {
    this.formCard = new FormGroup({
      id: new FormControl(this.myId),
      titulo: new FormControl(card.titulo),
      conteudo: new FormControl(card.conteudo),
      lista: new FormControl(card.lista),
    });
    console.log(this.formCard.value, 'values card');
  }

  addCard() {
    const card = {
      ...this.formCard.value,
    };
    console.log(card);
    this.formCard.reset();
  }
}
