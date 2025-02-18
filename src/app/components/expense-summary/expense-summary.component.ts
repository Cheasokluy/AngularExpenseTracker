import { Component, Input, OnChanges, SimpleChanges,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense-summary',
  templateUrl: './expense-summary.component.html',
  styleUrls: ['./expense-summary.component.css']
})
export class ExpenseSummaryComponent implements OnChanges {

  // Input to receive the expenses array from the parent component
  @Input() expenses: any[] = [];

  // Variable to hold the total expense amount
  totalExpense: number = 0;
  

  // Detect changes to the expenses and recalculate the total
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expenses'] && changes['expenses'].currentValue) {
      this.calculateTotal();
      console.log("total: "+this.totalExpense);
    }
  }

  // Function to calculate the total expense
  calculateTotal() {
    this.totalExpense = this.expenses.reduce((sum, expense) => {
      return sum + Number(expense.amount); // Ensure the amount is treated as a number
    }, 0);
  }
}
