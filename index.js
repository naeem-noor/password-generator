// let chars = ["0123456789","ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","!@#$%^&*()_+~\\`|}{[]:;?><,./-="]

let chars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~\\`|}{[]:;?><,./-=0123456789"]

let passFieldsEl1 = document.getElementById("pass-field1")
let passFieldsEl2 = document.getElementById("pass-field2")
let passFieldsEl3 = document.getElementById("pass-field3")
let passFieldsEl4 = document.getElementById("pass-field4")

function password(){
    var pass = ''
    let str = chars[0]
    
    for(let i = 0; i <=15; i++){
        var char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char)    
    }
    
                        //With String Value
    
    // var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~\\`|}{[]:;?><,./-=0123456789'       
    // for (let i = 1; i <= 15; i++) {
    //     var char = Math.floor(Math.random() * str.length + 1)
    //     pass += str.charAt(char)
    // }
    return pass
}

function generatePass() {
    passFieldsEl1.value = password()
    passFieldsEl2.value = password()
    passFieldsEl3.value = password()
    passFieldsEl4.value = password()
}