import { DioAccount } from "./DioAccount";

export class AltAccount extends DioAccount {
  private creditValue: number = 10

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)


  }

  premiumDeposit = (depositValue: number): void => {

    this.deposit(this.getBalance() + depositValue + this.creditValue)


    console.log(`Voce tem ${this.getBalance()} em conta`)
  }





}