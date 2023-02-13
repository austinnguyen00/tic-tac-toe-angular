import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[] = [];
  xIsNext: boolean = true;
  winner: string = '';

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  // Method(function) to setup new values for the new game
  newGame() {
    this.squares = Array(9).fill(null); // arrays of 9 squares with no values in it
    this.winner = '';
    this.xIsNext = true;
  }

  // Getter player() - method to retrieve a value from an object's property
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // Method serve as an event handler for when user make a move on the board
  makeMove(idx: number): void {
    // Check if the square is empty 
    if (!this.squares[idx]) {
      // Change the content of the square array by
      // removing or replacing existing elements and/or adding new elements in place
      // In this case, we replace 1 element at index idx with current player symbol
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  // Method with an algorithm to determine the winner of the game
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      // Check if the symbol of the winning line is from the same player
      // If yes then we have the winner
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    return null;
  }
}
