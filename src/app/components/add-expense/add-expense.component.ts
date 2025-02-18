import { M } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
// export class AddExpenseComponent {
//   expenseDescription = '';
//   expenseAmount = 0;

//   @Output() expenseAdded = new EventEmitter<any>();
      
  

//   addExpense() {
//     const newExpense = {
//       description: this.expenseDescription,
//       amount: this.expenseAmount
//     };
//     this.expenseAdded.emit(newExpense);
//     this.expenseDescription = '';
//     this.expenseAmount = 0;
//   }
// }
export class AddExpenseComponent {
    @Output() expenseAdded = new EventEmitter<any>();
    expenseForm:FormGroup;

    constructor( private fb: FormBuilder){
      this.expenseForm = this.fb.group({
      date: [new Date(), Validators.required],
      description: ['', Validators.required],  // Description is required
      amount: [0, [Validators.required, Validators.min(0.01)]]  // Amount should be greater than 0
      
    });
    }

    addExpense(){
      if(this.expenseForm.valid){
        console.log(this.expenseForm.value);
        this.expenseAdded.emit(this.expenseForm.value);
        this.expenseForm.reset();
        
      }
    }


}
