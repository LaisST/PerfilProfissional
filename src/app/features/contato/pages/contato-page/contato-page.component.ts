import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contato-page.component.html',
  styleUrls: ['./contato-page.component.scss']
})
export class ContatoPageComponent implements OnInit {
  dadosContato = {
    endereco: "Poá/Sp",
    telefone: "(11) 99485-3110 / (11) 4610-5769",
    email: "laiscostast@gmail.com"
  };

  mailto(emailAddress: string, emailSubject: String) {
    return "mailto:" + emailAddress + "?subject=" + emailSubject
  }

  constructor() { }

 

  ngOnInit(): void {
  }

}
