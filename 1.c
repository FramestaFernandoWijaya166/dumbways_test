#include <stdio.h>
#include <string.h>
#include <ctype.h>

char inp[10];
char temp[10];
int n, i, j = 0;

int main(){
    palindrom();
}

int palindrom(){

    printf("Framesta Fernando Wijaya\n");
    printf("1. Palindrom\n");
    printf("\nInput: ");
    gets(inp);
    n = strlen(inp);

    for(i = n-1; i >= 0; i--){
        temp[j] = inp[i];
        j++;
    }

    printf("Output: ");
    if(strcmp(inp, temp) == 0)
        printf("Merupakan bilangan palindrom");
    else
        printf("Bukan palindrom");
        
    return 0;
}