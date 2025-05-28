import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerService } from '../customer.service';
import { Customer } from '../register/customer';

@Component({
  selector: 'app-consult',
  imports: [MatCardModule, MatIconModule, MatInputModule, MatTableModule, FormsModule, FlexLayoutModule, MatButtonModule],
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.scss'
})
export class ConsultComponent implements OnInit {
  customerList: Customer[] = []
  
  constructor(private service: CustomerService) {

  }

  ngOnInit() {
    this.customerList = this.service.getStorage()
  }

}
