function getTopTwoSum(nums) {
    if (nums.length === 0) {
        return 0;
    } 
    if (nums.length === 1) {
        return nums[0];
    }
    let max1 = -Infinity;
    let max2 = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] > max2) {
            max2 = nums[i];
        }
    }
    return max1 + max2;
}

let testCases = [
    {
        input: [1, 4, 2, 3, 5],
        expected: 9 
    },
    {
        input: [10, 5],
        expected: 15  
    },
    {
        input: [-1, -3, -5, -2, -4],
        expected: -3 
    },
    {
        input: [-10, 5, 7, -3, 2],
        expected: 12  
    },
    {
        input: [5, 5, 3, 1],
        expected: 10  
    },
    {
        input: [42],
        expected: 42  
    },
    {
        input: [],
        expected: 0  
    },
    {
        input: [1000, 999, 998, 997],
        expected: 1999 
    }
];

function runUnitTests() {
    let passedCount = 0;
    for (let i = 0; i < testCases.length; i++) {
        let test = testCases[i];
        let result = getTopTwoSum(test.input);
        let passed = result === test.expected;
        console.log(`TC ${i + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
        console.log("Input: " + JSON.stringify(test.input));
        console.log("Expected: " + test.expected);
        console.log("Result: " + result);
        if (passed) {
            passedCount++;
        }
    }
}

runUnitTests();
