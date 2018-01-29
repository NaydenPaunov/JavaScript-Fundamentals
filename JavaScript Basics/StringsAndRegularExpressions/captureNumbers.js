function captuteNumbers(text) {
    const pattern = /\d+/g
    let numbers =[]
    let match;
    while(match = pattern.exec(text)){
        numbers.push(match[0])
    }

    console.log(numbers.join(' '));
}

captuteNumbers('The300\n' +
    'What is that?\n' +
    'I think it’s the 3rd movie.\n' +
    'Lets watch it at 22:45\n')