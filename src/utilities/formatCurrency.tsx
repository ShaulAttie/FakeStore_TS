const   CURRNCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "USD", style:"currency"})

export function FormatCurrency(number:number){
    return CURRNCY_FORMATTER.format(number)
}