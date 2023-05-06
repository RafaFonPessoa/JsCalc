const previusOperationText = document.querySelector("#previus-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previusOperationText, currentOperationText) {
        this.previusOperationText = previusOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = ""
    }

    //add digit to calculator screen
    addDigit(digit) {
        //check if current operation already has a dot
        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return;
        }
        
        this.currentOperation = digit
        this.updateScreen()
    }

    //process all calculator operations
    processOperation(operation){
        //Get current and previus value
        let operationValue
        let previus = +this.previusOperationText.innerText
        let current = +this.currentOperationText.innerText
    
        switch(operation) {
            case "+":
                operationValue = previus + current
                this.updateScreen(operationValue, operation, current, previus);
                break;

            case "-":
                operationValue = previus + current
                this.updateScreen(operationValue, operation, current, previus);
                break;
            case "/":
                operationValue = previus + current
                this.updateScreen(operationValue, operation, current, previus);
                break;
            case "*":  
                operationValue = previus + current
                this.updateScreen(operationValue, operation, current, previus);
                break;
        }
    }

    // Change values of the calculator screen
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previus = null){

            if(operationValue === null) {
                this.currentOperationText.innerText += this.currentOperation;
            } else {
                // Check if value is zero, if it is just add current value
                if(previus === 0){
                    operationValue = current
                }

                //add current value to previus
                this.previusOperationText.innerText = `${operationValue} ${operation}`
                this.currentOperationText.innerText = ""
            }
    }
}

const calc = new Calculator(previusOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }
    });
});