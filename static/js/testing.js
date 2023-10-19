// test variables
let test1_value = ''
let test2_value = 0

// event targets
let test1_input = document.querySelector('#test1-input')
let test2_button = document.querySelector('#test2-button')
let test3_button = document.querySelector('#test3-button')

// outputs
let test1_output = document.querySelector('#test1-output')
let test2_output = document.querySelector('#test2-output')

function test1() {
    test1_value = test1_input.value
    test1_output.textContent = test1_value
}

function test2() {
    test2_value += 1
    test2_output.textContent = test2_value
}

function test3() {
    test2_value = 0
    test2_output.textContent = test2_value
}