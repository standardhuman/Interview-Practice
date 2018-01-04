/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [2, 5, 5, 11]

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var target = 12

// solved with loop
var twoSum_loop = function(nums, target){
    const solution = [];
    for (let a = 0; a < nums.length; a++) {
        for (let b = 1; b < nums.length; b++) {
            if (target == b+a) {
                solution.push(a, b)
                return solution
            }
        }
    }
}
console.log("loops solution: ", twoSum_loop(nums, target))

// solved with hash
let twoSums_hash = function(nums, target){
    let hash = new Map()
    for(let i = 0; i < nums.length; i++){
        hash[i] = nums[i];
        // console.log("hash[i]: ", hash[i])
        // console.log("nums[i]: ", nums[i])
    }
    console.log("hash: ", hash)
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        console.log("complement:", complement)
        if (hash.hasOwnProperty(complement) && hash.get(complement) !== i) {
            let result = [];
            result.push[i, hash.get(complement)];
            console.log("result: ", result)
            return result;
        }
    }
}

console.log("hash solution: ", twoSums_hash(nums, target))