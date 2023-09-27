import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss']
})
export class CardActionComponent implements OnInit, OnChanges {
  cardAction = [
    {
      "title": "Ace",
      "description": "Everyone reaches for the sky, and the last person to do so drinks."
    },
    {
      "title": "Two",
      "description": "Choose someone to take a drink."
    },
    {
      "title": "Three",
      "description": "The player who drew the card takes a drink."
    },
    {
      "title": "Four",
      "description": "Everyone touches the floor, and the last person to do so drinks."
    },
    {
      "title": "Five",
      "description": "All the guys playing take a drink."
    },
    {
      "title": "Six",
      "description": "All the ladies playing take a drink."
    },
    {
      "title": "Seven",
      "description": "Everyone reaches for the sky, and the last person to do so drinks."
    },
    {
      "title": "Eight",
      "description": "Choose someone to be your 'mate,' and they must drink whenever you drink for the rest of the game."
    },
    {
      "title": "Nine",
      "description": "The player who drew the card says a word, and everyone else must say a word that rhymes with it. The first person who can't think of a rhyme or repeats a word drinks."
    },
    {
      "title": "Ten",
      "description": "The player who drew the card chooses a category (e.g., types of fruits, car brands), and everyone takes turns naming items in that category. The first person who can't think of an item or repeats one drinks."
    },
    {
      "title": "Jack",
      "description": "The player who drew the card creates a rule that everyone must follow (e.g., you can only drink with your left hand, you must say 'cheers' before each drink). Anyone who breaks the rule drinks."
    },
    {
      "title": "Queen",
      "description": "The player who drew the card becomes the 'Question Master.' They can ask anyone a question, and that person must respond with a question. If someone answers instead of asking a question, they drink."
    },
    {
      "title": "King",
      "description": "The player who drew the card pours a small amount of their drink into a central cup. The person who draws the fourth king must drink the entire cup."
    },
    {
      "title": "Joker",
      "description": "Create a unique rule or action for the Joker card before starting the game. For example, it could mean everyone takes a shot, swaps seats, or does a dance."
    }
  ];

  title: string = "";
  description: string = "";
  @Input() card: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if(this.card){
      let cardNumber = parseInt(this.card.split('_')[1]);
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }

  }
}
