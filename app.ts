import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AltAccount } from './class/AltAccount'
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)

// peopleAccount.getBalance()
// peopleAccount.withdraw(5)
// peopleAccount.getBalance()


const altAcc = new AltAccount("Bruno conta alternativa", 3)
console.log(altAcc)

altAcc.premiumDeposit(15)

console.log(altAcc)






// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit()
// console.log(companyAccount)