// 1. look through arg1 [{k1:"v1", k2:"v2"},...]
// 2. if arg2 { k:"v"} is contained in arg1
// 3. return [{k1:"v1", k2,"v2"}] in new array

// how to best loop through array of objects?

function whereArtThough(arg1, arg2) {
    var name = [];
    for (var i = 0; i < arg1.length; i++) {
        // Object.values(arg1[i]) returns ['Romeo':'Montague']
        // Object.values(arg2) returns ['Capulet']
        // loop through Object.values(arg1[i])
        // if Object.values(arg[i])[j] === Object.values(arg2)
        // var name = Object.values(arg1[i])
        console.log(arg2)
        for (var j = 0; j < Object.values(arg1[i]).length; j++) {
            // if Object.values(arg[i])[j] === Object.values(arg2) {
            //     var name = Object.values(arg1[i])
            console.log(Object.values(arg1[i])[j]);
            }
        }
    }


console.log(whereArtThough([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
}));