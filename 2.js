let arr = ['u', 'W', 'd', 'o', 'b', 'd', 'D', 's', 'y', 'a', 'i', 'm', 't']
//maaf saya terlanjur mengumpulkan link dan sceenshot HP saya tinggal sampai array 's', dan 'y'
//jadi yang a i m t saya mengarang. Dan saya sudah kehabisan waktu juga

//maaf saya juga kurang paham perintahnya untuk menyusun dengan bubble sort mejadi 'DumbWaysdotid'
//karena bubble sort mengurutkan nilainya dari yang terbesar sampai yang terkecil, atau sebaliknya.
//saya kurang paham jika harus menjadi 'DumbWaysdotid', jadi saya sort biasa saja

console.log("Sebelum:")
console.log(arr)

function bubble_Sort(a)
{
    var swapp
    var n = a.length-1
    var x=a
    do {
        swapp = false
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i]
               x[i] = x[i+1]
               x[i+1] = temp
               swapp = true
            }
        }
        n--
    } while (swapp)
 return x
}

console.log("Sesudah:")
console.log(bubble_Sort(arr));
