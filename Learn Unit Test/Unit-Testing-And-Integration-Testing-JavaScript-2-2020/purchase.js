class Purchase {
  constructor(totalPrice, isInternetConnection, phoneLines, selectedCellPhones) {
    this.totalPrice = totalPrice
    this.isInternetConnection = isInternetConnection
    this.phoneLines = phoneLines
    this.selectedCellPhones = selectedCellPhones
  }

  internetConnection(isInternetConnectionChecked) {
    const internetConnectionPrice = 200

    if (typeof isInternetConnectionChecked !== 'boolean') {
      throw new Error('isInternetConnectionChecked must be a boolean.')
    }
    this.isInternetConnection = isInternetConnectionChecked // assign value to class attribute
    if (this.isInternetConnection) {
      this.totalPrice += internetConnectionPrice
    } else if (!this.isInternetConnection && this.totalPrice > 0) {
      this.totalPrice -= internetConnectionPrice
    }
    return this.totalPrice
  }

  addPhoneLines() {
    const phoneLinePrice = 150
    // non numerical and decimal numbers
    if (typeof this.phoneLines !== 'number' || !Number.isInteger(this.phoneLines)) {
      throw new Error('phoneLines must be an integer between 0 and 8.')
    }
    if (this.phoneLines < 0) {
      throw new Error('The minimum number of phone lines that can be hired is 0.')
    }
    // covers cases between 0 and 7
    if (this.phoneLines < 8) {
      this.phoneLines++
      this.totalPrice += phoneLinePrice
    } else {
      // > 8
      throw new Error('The maximum number of phone lines that can be hired is 8.')
    }
    return this.totalPrice
  }

  removePhoneLines() {
    const phoneLinePrice = 150
    // non numerical and decimal numbers
    if (typeof this.phoneLines !== 'number' || !Number.isInteger(this.phoneLines)) {
      throw new Error('phoneLines must be an integer between 0 and 8.')
    }
    if (this.phoneLines > 8) {
      throw new Error('The maximum number of phone lines that can be hired is 8.')
    }
    // covers cases between 0 and 8
    if (this.phoneLines > 0) {
      this.phoneLines--
      this.totalPrice -= phoneLinePrice
    } else {
      // < 0
      throw new Error('The minimum number of phone lines that can be hired is 0.')
    }
    return this.totalPrice
  }

  selectCellPhone(modelName) {
    const cellPhoneNames = [
      'Motorola G99',
      'iPhone 99',
      'Samsung Galaxy 99',
      'Sony Xperia 99',
      'Huawei 99'
    ]
    const cellPhonePrices = [800, 6000, 1000, 900, 900] // frequency array

    // if the parameter received is not a string, then throw an error
    if (typeof modelName !== 'string') {
      throw new Error('The parameter modelName must be a string.')
    }

    // if the parameter received is not included in the array of Available Phones (cellPhoneNames), then throw an error
    if (!cellPhoneNames.includes(modelName)) {
      throw new Error('The Model Name must be one of the 5 available Models!')
    }

    // iterate through the cellPhoneNames array
    // if we find an element in the array with the same name as the newly selected phone,
    // then add the newly selected phone name in the array of selectedCellPhones
    // increase the total price with the corresponding cost of the selected phone
    for (let i = 0; i < cellPhoneNames.length; i++) {
      if (modelName === cellPhoneNames[i]) {
        this.selectedCellPhones.push(modelName)
        this.totalPrice += cellPhonePrices[i]
        break
      }
    }
    return this.totalPrice
  }

  unselectCellPhone(modelName) {
    const cellPhoneNames = [
      'Motorola G99',
      'iPhone 99',
      'Samsung Galaxy 99',
      'Sony Xperia 99',
      'Huawei 99'
    ]
    const cellPhonePrices = [800, 6000, 1000, 900, 900] // frequency array

    // if the parameter received is not a string, then throw an error
    if (typeof modelName !== 'string') {
      throw new Error('The parameter modelName must be a string.')
    }

    // if the parameter received is not included in the array of Available Phones (cellPhoneNames), then throw an error
    if (!cellPhoneNames.includes(modelName)) {
      throw new Error('The Model Name must be one of the 5 available Models!')
    }

    // iterate through the selectedCellPhones array
    // if we find an element in the array with the same name as the newly selected phone,
    // then delete the newly selected phone name in the array of selectedCellPhones
    for (let i = 0; i < this.selectedCellPhones.length; i++) {
      if (modelName === this.selectedCellPhones[i]) {
        this.selectedCellPhones.splice(i, 1) // delete an element from array at index i
        break
      }
    }

    // iterate through the cellPhoneNames array
    // if we find an element in the array with the same name as the newly selected phone,
    // decrease the total price with the corresponding cost of the selected phone
    for (let i = 0; i < cellPhoneNames.length; i++) {
      if (modelName === cellPhoneNames[i]) {
        this.totalPrice -= cellPhonePrices[i]
        break
      }
    }
    return this.totalPrice
  }

  showBuyingReceipt() {
    let receiptMessage = ''
    if (this.isInternetConnection) {
      receiptMessage += 'Internet Connection: ' + this.isInternetConnection + '\n'
    }
    if (this.phoneLines > 0) {
      receiptMessage += 'Number of Phone Lines: ' + this.phoneLines + '\n'
    }
    if (this.selectedCellPhones.length > 0) {
      receiptMessage += 'Cell Phones: ' + this.selectedCellPhones + '\n'
    }
    if (this.totalPrice !== 0) {
      receiptMessage += 'Total Price: ' + this.totalPrice + ' DKK'
      return receiptMessage
    }
    receiptMessage += 'Nothing is selected! Please select an item!'
    return receiptMessage
  }
}

module.exports = Purchase
