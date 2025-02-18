import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Expense Tracker';
  expenses: any[] = [
    // { date: new Date(), description: 'Groceries', amount: 100 },
    // { date: new Date(), description: 'Rent', amount: 500 },
  ];

  addExpense(newExpense: any) {
    // Add the new expense and create a new array reference for change detection
    this.expenses = [...this.expenses, newExpense];
  }
  // Function to remove an expense
  removeExpense(expenseToRemove: any) {
    this.expenses = this.expenses.filter(expense => expense !== expenseToRemove); // Filter out the deleted expense
    console.log(this.expenses);
  }
}
