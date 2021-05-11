#include <stdio.h>

int ganjil[6] = {1, 9, 21, 27};
int genap5 = 5;
int ganjil5[2] = {15, 25};

int telur = 0;
int i;

int buyEgg(int tgl, int uang){
    
    telur = uang/2500;
    int lusin = telur/12;
 
    for(i = 0; i < 31; i++){
        
        if(tgl == ganjil[i]){          
            telur = telur + 3*lusin;
            return telur;
        }  
        else if(tgl == genap5){
            telur = telur + 20*lusin;
            return telur;
        }  
        else if(tgl == ganjil5[i]){
            telur = telur + 15*lusin;
            return telur;
        }
        else if(tgl == 2){
            telur = telur + 2*lusin;
            return telur;
        }
        else if(tgl % 2 == 0){
            return telur;
        }
        else{
            telur = telur + 2*lusin;
            return telur;
        }
    }
}

void main(){

    printf("Framesta Fernando Wijaya\n");
    printf("2. Hitung Telur\n");
    
    buyEgg(13, 60000);
    
    printf("\nOutput: %d", telur);
    
    return 0;
}
