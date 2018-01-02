/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [2, 5, 5, 11]

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var target = 12

var twosum = function(nums, target){
    const solution = [];
    for (let a = 0; a < nums.length; a++) {
        for (let b = 1; b < array.length; b++) {
            if (target == b+a) {
                solution.push(a, b)
                return solution
            }
        }
        
    }
}
console.log(twoSum(nums, target))

// loop1: a = 0, b = 1; ++