import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-sale-purchase',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './sale-purchase.component.html',
  styleUrls: ['./sale-purchase.component.scss']
})
export class SalePurchaseComponent implements OnInit {
  transactionForm: FormGroup;
  
  ledgerNames: string[] = ["99ba",
    "sdd","kmt"  ]; // This will hold the fetched ledger names
  stockNames: string[] = ['bar', 'pcs', 'ft', 'kachha', 'maal'];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; 
    this.transactionForm = this.fb.group({
      date: [formattedDate, Validators.required],
      transaction: ['', Validators.required],
      ledgerName: ['', Validators.required],
      stockName: ['', Validators.required],
      netWeight: [0, [Validators.required, Validators.min(0)]],
      touch: [99.5, Validators.required],
      pure: [{ value: 0, disabled: true }],
      rate: [0],
      amount: [0], // Fixed typo from 'ammount' to 'amount'
      cash: [0],
      comments: ['']
    });
    
 
  }

  ngOnInit(): void {
    this.fetchLedgerNames();
    this.onChanges();
  }

  fetchLedgerNames(): void {
    // Replace with your API call
    this.http.get<string[]>('api/ledger-names').subscribe(data => {
      this.ledgerNames = data;
    });
  }

  onChanges(): void {
    // Update pure value and amount when netWeight changes
    this.transactionForm.get('netWeight')?.valueChanges.subscribe(value => {
      const touch = this.transactionForm.get('touch')?.value;
      const pure = value * touch / 100; // Calculate pure value
      this.transactionForm.patchValue({ pure: pure.toFixed(2) });
      this.updateAmount(); // Call updateAmount method
    });

    // Update touch value based on selected stockName
    this.transactionForm.get('stockName')?.valueChanges.subscribe(value => {
      switch (value) {
        case 'bar':
          this.transactionForm.patchValue({ touch: 99.5 });
          break;
        case 'kachha':
          this.transactionForm.patchValue({ touch: 0 });
          break;
        default:
          this.transactionForm.patchValue({ touch: 100 });
      }
      this.transactionForm.get('netWeight')?.updateValueAndValidity(); // Ensure netWeight re-evaluates
      const netWeight = this.transactionForm.get('netWeight')?.value;
      this.transactionForm.patchValue({ pure: (netWeight * this.transactionForm.get('touch')?.value / 100).toFixed(2) });
      this.updateAmount(); // Call updateAmount method
    });

    // Update amount when rate changes
    this.transactionForm.get('rate')?.valueChanges.subscribe(() => {
      this.updateAmount(); // Call updateAmount method
    });
  }

  private updateAmount(): void {
    const pure = parseFloat(this.transactionForm.get('pure')?.value);
    const rate = this.transactionForm.get('rate')?.value;
    const amount = pure * rate; // Calculate amount
    this.transactionForm.patchValue({ amount: amount.toFixed(2) }); // Update the amount field
  }

  submit(): void {
    if (this.transactionForm.valid) {
      console.log(this.transactionForm.value);
      // Handle form submission, e.g., call an API
    }
  }
}
