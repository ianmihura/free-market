/**
 * S: Current stock price
 * K: Option strike price
 * T: Time remaining until expiration (days)
 * V: Volatility of underlying
 * 
 * Risk free asset = 0
 * 
*/

const exp = (a) => Math.exp(a)
const log = (a) => Math.log(a)
const pow = (a) => Math.pow(a)
const sqrt = (a) => Math.sqrt(a)

// Credit: http://www.math.ucla.edu/~tom/distributions/normal.html
function norm_cdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
    return Math.round(100_000*Prob) / 100_000
}

function norm_pdf (x) {
    return exp(-pow(x, 2) * 0.5) / sqrt(2 * Math.PI)
}

function d_1(S, K, T, V) {
    return (log(S/K) + (pow(V)*0.5)*T) / (V*sqrt(T))
}

function d_2(S, K, T, V) {
    return d_1(S, K, T, V) - V*sqrt(T)
}

function price_call(S, K, T, V) {
    const d1 = d_1(S, K, T, V)
    const d2 = d_2(S, K, T, V)
    return norm_cdf(d1)*S - norm_cdf(d2)*K*exp(-T)
}

function price_put(S, K, T, V) {
    const d1 = d_1(S, K, T, V)
    const d2 = d_2(S, K, T, V)
    return norm_cdf(-d2)*K*exp(-T) - norm_cdf(-d1)*S
}

function delta_call(S, K, T, V) {
    const d1 = d_1(S, K, T, V)
    return norm_cdf(d1)
}

function delta_put(S, K, T, V) {
    const d1 = d_1(S, K, T, V)
    return norm_cdf(d1) -1
}

function gamma(S, K, T, V) {
    const d1 = d_1(S, K, T, V)
    return norm_pdf(d1) / (S*V*sqrt(T))
}

function vega(S, K, T, V) {
    const d1 = d_1(S, K, T, V)
    return S * sqrt(T) * norm_pdf(d1) / 100
}

function theta_call(S, K, T, V) {
    // return -s * norm.pdf(d1) * sigma / (2 * sqrt(T)) - r * k * exp(-r*T) * norm.cdf(d1 - sigma * sqrt(T)) / 365
    const d1 = d_1(S, K, T, V)
    return
}

function theta_put(S, K, T, V) {
    // return -s * norm.pdf(d1) * sigma / (2 * sqrt(T)) + r * k * exp(-r * T) * norm.cdf(-(d1 - sigma * sqrt(T))) / 365
    const d1 = d_1(S, K, T, V)
    return
}

function iv(S, K, T, V) {
    return
}
