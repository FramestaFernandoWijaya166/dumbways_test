cekUsername('Kamusiapa');
cekEmail('kamusiapa@gmail.com');
cekPassword('Kamusiapa2169');

function cekUsername(username){
    let lc = username.toLowerCase()
    if(username === lc){
        console.log('Username Valid')
    }else{
        console.log('Username Invalid')
    }
}

function cekEmail(email){
    let lc = email.toLowerCase()
    let at = email.search('@')
    if(at != -1 && email === lc){
        console.log('Email Valid')
    }else{
        console.log('Email Invalid')
    }
}

//Yang passordnya gagal hehe
function cekPassword(password){
    let pwd = password.length;
    if(pwd >= 8){
        console.log('Password Valid')
    }else{
        console.log('Password Invalid')
    }
}