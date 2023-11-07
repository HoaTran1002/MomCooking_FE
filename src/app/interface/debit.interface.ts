export interface IDebit {
    id?: string
    listItem:IListItemDebit[]
    statusDebitName: string
    typeStatus:'error' | 'success' | 'warning'
    sumDebit:number
    sumDebitHasBeenPay:number
    dayPay:Date
}

export interface IListItemDebit{
    name: string
    priceDebit: number
    priceDebitHasBeenPay: number
}