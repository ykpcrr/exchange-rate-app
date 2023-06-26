class Currency {
  constructor() {
    this.url = `https://api.freecurrencyapi.com/v1/latest?apikey=Agu3op0dVAfiov9qBlTzseHZvuyQBC6e3abOLwJc&base_currency=`;
  }
  async exchange(amount, firstvalue, secondvalue) {
    const response = await fetch(`${this.url}${firstvalue}`);
    const result = await response.json();
    const exchange = amount * result.data[secondvalue];
    return exchange;
  }
}
