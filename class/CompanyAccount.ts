import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {

    if (!this.getAccountStatus()) return
    this.deposit(this.getBalance() + loanValue)

    console.log('Voce pegou um empréstimo')
  }
}
