import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sale-purchase',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sale-purchase.component.html',
  styleUrls: ['./sale-purchase.component.scss']
})



export class SalePurchaseComponent implements OnInit {
  transactionForm: FormGroup;
  ledgerNames: string[] = []; // This will hold the fetched ledger names
  stockNames: string[] = ['bar', 'pcs', 'ft', 'kachha', 'maal'];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.transactionForm = this.fb.group({
      date: [new Date(), Validators.required],
      transaction: ['', Validators.required],
      ledgerName: ['', Validators.required],
      stockName: ['', Validators.required],
      netWeight: [0, [Validators.required, Validators.min(0)]],
      touch: [99.5, Validators.required],
      pure: [{ value: 0, disabled: true }],
      rate: [0],
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
    this.transactionForm.get('netWeight')?.valueChanges.subscribe(value => {
      const touch = this.transactionForm.get('touch')?.value;
      const pure = value * touch / 100; // Calculate pure value
      this.transactionForm.patchValue({ pure: pure.toFixed(2) });
    });

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
    });
  }

  submit(): void {
    if (this.transactionForm.valid) {
      console.log(this.transactionForm.value);
      // Handle form submission, e.g., call an API
    }
  }
}