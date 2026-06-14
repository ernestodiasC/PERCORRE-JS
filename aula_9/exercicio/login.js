const eEmail=document.getElementById("email")
const ePassword=document.getElementById("password")
const eResult=document.getElementById("result")

const users={
    "ernestodiascecilio@gmail.com":["1234567890",1],
    "cleiton@gmail.com":["bluepill?",0],
    "ermesonbarros@gmail.com":["percorrendo",0],
    "debugaccount":["debugplease",2],
    "noobinhogamaplais32@gmail.com":["senha",0],
    "isaac@binding.of":["pleasemomineedthis",3],
}

function checkUserExists(str){
    return(Object.hasOwn(users,str))
}
function checkUserData(str){
    if(!checkUserExists(str)){return -4}
    
    return users[str]
}
function login_test(result){
    if(!checkUserExists(eEmail.value)){
        result.innerHTML="<span class=\"red\">ERRO:</span><br>Usuario não existe!"
        return null
    }
    let cUD=checkUserData(eEmail.value)
    if(cUD[0]!=ePassword.value){
        result.innerHTML="<span class=\"red\">ERRO:</span><br>Senha incorreta"
        return null
    }
    switch(cUD[1]){
    case 0:
        window.location.href=window.location.href+"/sucesso.html";
        return "Usuario correto \n Espere um segundo"
    case 3:
        window.location.href=window.location.href+"/isaac.html";
        return "THE BINDING OF WHAT!?"
    case 1:
        return "Conta de Admin indentificado \n faça login funcionar logo!"
    case 2:
        return "Conta de Debug indentificado \n aproveite os bugs!"
    }
    return null
}
function login(){
    let i=login_test(eResult)
    if(login_test(eResult)!=null){
        eResult.innerText=login_test(eResult)
    }
}