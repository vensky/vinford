// 1. Напишите рекурсивную функцию вычисления n факториала

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
