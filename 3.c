#include<stdio.h>

int pt, bil, next;

int segitiga(int n){
  
    int i, j, h = 0;
    
    for(i = 1; i <= n; i++){
      
        for(j = 1; j <= i; j++){
            
            h = h + 1;
            prima(h);
            break;
        }
        printf("\n");
    }
    return 0;
}

int prima(p){
    
    if(bil == 0){
        next = 2;
    }
    else{
        bil = next;
    }
    
    int i = 0, cek;
    while(i < p){
        cek = 0;
        
        for(int j = 2; j <= bil; j++){
             if(bil % j== 0){  
                  cek++; 
             }
        }
        
        if(cek == 1){
             printf("%d ", bil); 
             i++;
        }
        bil++;
        next = bil;
    }
}

void main(){
  
    printf("Framesta Fernando Wijaya\n");
    printf("3. Segitia isi Prima\n\n");
    
    printf("Input: ");
    scanf("%d", &pt);
    printf("\n");
    
    segitiga(pt);
}