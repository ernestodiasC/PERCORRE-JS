const eEmail=document.getElementById("email")
const ePassword=document.getElementById("password")
const eResult=document.getElementById("result")

const users={
    "ernestodiasc@gmail.com":["1234567890",1],
    "cleiton@gmail.com":["bluepill?",0],
    "ermesonbarros@gmail.com":["percorrendo",0],
    "debugaccount":["debugplease",2],
}

function checkUserExists(str){
    return(Object.hasOwn(users,str))
}
function checkUserData(str){
    if(!checkUserExists(str)){return -4}
    
    return users[str]
}
function login_test(){
    if(!checkUserExists(eEmail.value)){return "Usuario não existe!"}
    let cUD=checkUserData(eEmail.value)
    if(cUD[0]!=ePassword.value){return "Senha incorreta"}
    switch(cUD[1]){
    case 0:
        return "Usuario correto \n logando nunca :)"
    case 1:
        return "Conta de Admin indentificado \n faça login funcionar logo!"
    case 2:
        return "Conta de Debug indentificado \n aproveite os bugs!"
    }
}
function login(){
    eResult.innerText=login_test()
}