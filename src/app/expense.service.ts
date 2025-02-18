import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenseSubject = new BehaviorSubject<any[]>([]);
  private totalExpenseSubject = new BehaviorSubject<number>(0);

  expenses$=this.expenseSubject.asObservable();
  totalExpense$=this.totalExpenseSubject.asObservable();

  constructor() { }

  getExpenses(){
    return this.expenseSubject.value;
  }
  addExpense(expense:any){
    const currentExpense =this.getExpenses();
    this.expenseSubject.next([...currentExpense, expense]);
    this.updateTotalAmount();
  }
  deleteExpense(expense:any){
    const updateExpenses =this.getExpenses().filter(e => e !=expense);
    this.expenseSubject.next(updateExpenses);
    this.updateTotalAmount();
  }
   private updateTotalAmount(){
    this.expenseSubject.next([...this.getExpenses()])
    const total=this.getExpenses().reduce((sum, expense) => {
      return sum + Number(expense.amount); // Ensure the amount is treated as a number
    }, 0);
  
    // Update the totalExpenseSubject with the new total
    this.totalExpenseSubject.next(total);
   }
}
