db.collection('users').get().then(snapshot => {
    snapshot.docs.forEach(doc=>{
        renderUser(doc);
    })
})


function Account(UserName, AccountBalance) {
    this.UserName = UserName;
    this.AccountBalance = AccountBalance;
  }
  
  Account.deposit = function(amount) {
    if (this._isPositive(amount)) {
      this.AccountBalance += amount;
      console.info(`Deposit: ${this.UserName} new AccountBalance is ${this.AccountBalance}`);
      return true;
    }
    return false;
  }
  
  Account.withdraw = function(amount) {
    if (this._isAllowed(amount)) {
      this.AccountBalance -= amount;
      console.info(`Withdraw: ${this.UserName} new AccountBalance is ${this.AccountBalance}`);
      return true;
    }
    return false;
  }
  
  Account.transfer = function(amount, UserName) {
    if (this.withdraw(amount) && UserName.deposit(amount)) {
      console.info(`Transfer: ${amount} has been moved from ${this.UserName} to ${UserName}`);
      return true;
    }
    return false;
  }
  
  
  Account._isPositive = function(amount) {
    const isPositive = amount > 0;
    if (!isPositive) {
      console.error('Amount must be positive!');
      return false;
    }
    return true;
  }
  
  Account._isAllowed = function(amount) {
    if (!this._isPositive(amount)) return false;
  
    const isAllowed = this.AccountBalance - amount >= 0;
    if (!isAllowed) {
      console.error('You have insufficent funds!');
      return false;
    }
    return true;
  }
  
  