export function formatCurrency(amount: number) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    const formattedAmount = formatter.format(amount);
    return formattedAmount
}