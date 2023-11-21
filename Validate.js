function validate(){
    let fname = document.getElementsByName('fnm')[0].value;
    let lname = document.getElementsByName('lnm')[0].value;
    if(fname === "" || fname === null){
        let x = document.getElementsByName('fnm')
        x[0].style.border = "solid 2px red"
        //let y = document.getElementsByClassName('container')
        //y[0].style.border = "solid 2px red"
        //(for border red)

        let errorMsg = document.getElementsByTagName('span')
        errorMsg[0].innerText = "This field cannot be empty"
        errorMsg[0].style.cssText = ("color:red; font-size:12px")
    
    return false;
    }
    
    else if(lname === "" || lname === null){
        let a = document.getElementsByName('lnm')
        a[0].style.border = "solid 2px red"

        let errorMsg1 = document.getElementsByClassName('errmsg') //or use tag name and specify the position as 1
        errorMsg1[0].innerText = "This field cannot be empty"
        errorMsg1[0].style.cssText = ("color:red; font-size:12px")

        return false
    }
}