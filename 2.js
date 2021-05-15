let arr = ['u', 'W', 'd', 'o', 'b', 'd', 'D', 's', 'y', 'a', 'i', 'm', 't']
//maaf saya terlanjur mengumpulkan link dan sceenshot HP saya tinggal sampai array 's', dan 'y'
//jadi yang a i m t saya mengarang. Dan saya sudah kehabisan waktu juga

//maaf saya juga kurang paham perintahnya untuk menyusun dengan bubble sort mejadi 'DumbWaysdotid'
//karena bubble sort mengurutkan nilainya dari yang terbesar sampai yang terkecil, jadi saya kurang paham

console.log(arr)

for (var i=1; i<arr.length; i++){
    for (var j=arr.length; j<1; j--){
        if (parseInt(arr[i-1]) < parseInt(arr[i])){
            var temp = arr[i-1]
            arr[i-1] = arr[i]
            arr[i] = temp
        }   
    }    
}

console.log(arr)
