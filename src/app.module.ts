import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {MatTableModule} from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule, provideNativeDateAdapter } from "@angular/material/core";
import { MAT_DATE_LOCALE,MAT_DATE_FORMATS } from "@angular/material/core";
import { AppComponent } from "./app/app.component";
import { ExpenseListComponent } from "./app/components/expense-list/expense-list.component";
import { ExpenseSummaryComponent } from "./app/components/expense-summary/expense-summary.component";
import { AddExpenseComponent } from "./app/components/add-expense/add-expense.component";
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ExpenseListComponent,
        ExpenseSummaryComponent,
        AddExpenseComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        RouterOutlet,
        MatNativeDateModule,
        FormsModule
    ],
    providers: [
        provideNativeDateAdapter(),
        {
            provide: MAT_DATE_LOCALE, useValue:'en-US'
        }

    ],
    bootstrap: [
        AppComponent
    ]

})
//export class module
export class AppModule{}
