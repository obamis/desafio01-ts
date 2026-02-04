export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): number => {
    if (this.validateStatus()) {

      this.balance += value

      return this.balance
    }
    return this.balance

  }

  withdraw = (value: number): number => {
    if (this.validateStatus() && this.balance > 0) {
      this.balance -= value

      return this.balance

    }
    return this.balance

  }

  public getBalance = (): number => {
    console.log(this.balance)

    return this.balance
  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  public getAccountStatus = (): boolean => {
    return this.validateStatus()
  }
}
