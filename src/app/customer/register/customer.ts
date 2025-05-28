import { v4 as uuid } from 'uuid'

export class Customer {
    id?: string;
    name?: string;
    email?: string;
    birthdate?: string;
    cpf?: string;

    static newCustomer() {
        const customer = new Customer();
        customer.id = uuid()
        return customer;
    }
}