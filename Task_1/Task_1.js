function topLengthStrings (strings) {
    if (strings.length === 0) {
        return [];
    }
    const count = {};
    for (let i = 0; i < strings.length; i++) {
        const len = strings[i].length;
        count[len] = (count[len] || 0) + 1;
    }
    let maxCount = 0;
    let maxLength = 0;
    for (const len in count) {
        if (count[len] > maxCount) {
            maxCount = count[len];
            maxLength = parseInt(len);
        }
    }
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length === maxLength) {
            result.push(strings[i]);
        }
    }
    return result;
}

let testCases = [
    {
        input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
        expected: ['ab', 'cd', 'gh']
    },
    {
        input: [],
        expected: []
    },
    {
        input: ['ab', 'cd', 'ef'],
        expected: ['ab', 'cd', 'ef']
    },
    {
        input: ['', 'a', 'ab'],
        expected: ['a']
    },
    {
        input: ['@', '#$', '%&*'],
        expected: ['@', '#$', '%&*']
    },
    {
        input: ['a', 'helloblueOC', 'b'],
        expected: ['a', 'b']
    }
];

function runUnitTest() {
    let passedCount = 0;
    for (let i = 0; i < testCases.length; i++) {
        const test = testCases[i];
        const result = topLengthStrings (test.input);
        const passed = JSON.stringify(result) === JSON.stringify(test.expected);
        console.log(`TC ${i + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
        console.log("Input:", test.input);
        console.log("Expected:", test.expected);
        console.log("Result:", result);
        if (passed) {
            passedCount++;
        }
    }
}
runUnitTest();
