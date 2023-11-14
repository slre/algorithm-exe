function solution(A) {
    // Filter out negative and zero values
    const positiveNumbers = A.filter(num => num > 0);

    // If all numbers are negative or zero, the smallest positive integer is 1
    if (positiveNumbers.length === 0) {
        return 1;
    }

    // Sort the positive numbers
    positiveNumbers.sort((a, b) => a - b);

    // Find the smallest positive integer that does not occur in the array
    let smallestPositive = 1;
    for (const num of positiveNumbers) {
        if (num === smallestPositive) {
            smallestPositive++;
        } else if (num > smallestPositive) {
            return smallestPositive;
        }
    }

    return smallestPositive;
}

// Test cases
console.log(solution([1, 3, 6, 4, 1, 2])); // Output: 5
console.log(solution([1, 2, 3])); // Output: 4
console.log(solution([-1, -3])); // Output: 1
