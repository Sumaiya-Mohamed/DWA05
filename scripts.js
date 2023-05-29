const form = document.querySelector("[data-form]");
const value = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dividendValue = document.querySelector('[data-dividend]').value
    const dividerValue = document.querySelector('[data-divider]').value
    const dividend = parseInt(dividendValue)
    const divider = parseInt(dividerValue)
    const result = dividend / divider;
    const formattedResult = Math.trunc(result); 
    // The above meets the first user story as the  Math.trunc() function removes the decimal numbers.
    value.innerText = formattedResult

    if(dividendValue === "" || dividerValue === ""){
      value.innerText = "";
      value.innerText = "Division not performed. Both values are required in inputs. Please try again"
    }
    /* The above if statement meets the second user story as this message will be displayed when either 
    or both inputs are left empty */

   
     if(dividendValue < 0 || dividerValue < 0){
        value.innerText = ""
        value.innerText = "Division not performed. Invalid number provided. Try again"
        throw new Error("Division not performed. Invalid number provided. Try again") 
        }
    /*The above meets the third user story as when one value is a negative number then this message is displayed 
    and  logged to the console. */  

    if(isNaN(dividendValue) || isNaN(dividerValue)){
        document.body.innerHTML = "";
        document.body.innerHTML = /* html */ 
        ` "Something critical went wrong. Please reload the page" `
        throw new Error("Something critical went wrong. Please reload the page")
    }
    /*The above meets the fourth user story as when YOLO and +++ are entered the system crashes and
    displays this message in the browser as well as in the console */
});