import { Injectable } from '@angular/core';
import { Customer } from './register/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  static REPO_CUSTOMERS = '_CUSTOMERS'

  constructor() { }

  save(customer: Customer) {
    const storage = this.getStorage()
    storage.push(customer)

    localStorage.setItem(CustomerService.REPO_CUSTOMERS, JSON.stringify(storage))
  }

  getStorage(): Customer[] {
    const repoCustomers = localStorage.getItem(CustomerService.REPO_CUSTOMERS)

    if (repoCustomers) {
      const customers: Customer[] = JSON.parse(repoCustomers)
      return customers
    }

    const customers: Customer[] = [];
    localStorage.setItem(CustomerService.REPO_CUSTOMERS, JSON.stringify(customers))
    return customers;
  }

  searchCustomers(name: string): Customer[] {
    return this.getStorage()
  }
}
