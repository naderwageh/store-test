const CURRENCY_FORMATTER =new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
})
const formatCurrency =(Number)=>{
    return CURRENCY_FORMATTER.format(Number)
}



export default formatCurrency