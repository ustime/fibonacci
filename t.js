function fibonacci(i){
    if(i<2) return i;
    return fibonacci(i-2) + fibonacci(i-1);
}
console.log(fibonacci(42))
