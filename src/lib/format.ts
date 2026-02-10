export function moneyEUR(n: number) {
    return new Intl.NumberFormat("sk-SK", { style: "currency", currency: "EUR" }).format(n);
}
