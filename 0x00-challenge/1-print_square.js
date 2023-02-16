#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


// Check if the size argument is provided
if (process.argv.length <= 2) {
    // console.error("Missing argument");
    process.stderr.write("Missing argument\n");
    // console.error("Usage: ./1-print_square.js <size>");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    // console.error("Example: ./1-print_square.js 8");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

// Parse the size argument and convert it to a number
const size = parseInt(process.argv[2], 10)

// Check if the size argument is a valid number
if (isNaN(size)) {
    console.error("Invalid argument: size must be a number");
    process.exit(1);
}

// Loop through each row of the square
for (let i = 0 ; i < size ; i ++) {
    let row = "";
    // Loop through each column of the square and add a # to the row string
    for (let j = 0 ; j < size ; j ++) {
        // row += "#";
        process.stdout.write("#");
    }
    // Print the row string to the console
    // console.log(row);
    process.stdout.write("\n");
}
