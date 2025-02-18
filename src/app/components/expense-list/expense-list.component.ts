import { Component, Input,Output, OnInit,OnChanges, SimpleChanges ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnChanges{

  // Receiving the expenses array from parent component
  @Input() expenses: any[] = [];
  @Output() expenseDeleted = new EventEmitter<any>();


  // Array to specify the displayed columns in the table
  displayedColumns: string[] = ['date', 'description', 'amount', 'actions'];

  dataSource: any[] = [];


   // This will be triggered every time there is a change to the @Input() expenses
   ngOnChanges(changes: SimpleChanges): void {
    if (changes['expenses'] && changes['expenses'].currentValue) {
      this.dataSource = [...this.expenses]; // Update the dataSource with new data
      console.log(this.dataSource)
    }
  }

  // Function to handle deleting an expense
  deleteExpense(expense: any) {
    this.expenseDeleted.emit(expense);
    const index = this.expenses.indexOf(expense);
    if (index >= 0) {
      this.expenses.splice(index, 1);
      // Update dataSource to reflect the change
      this.dataSource = [...this.expenses];
    }
  }
}
