#include <stdio.h>

//98% hasil mikir sendiri

char arr[15] = {'D', 'U', 'M', 'B', 'W', 'A', 'Y', 'S', 'I', 'D', 'U', 'J', 'I', 'A', 'N'};
int urut = -1;
int i, j, k, a = 5;

int main()
{
  for (i = 0; i <= 5; i++) {
    for (j = a; j > i; j--) {
      printf(" ");
    }
    k = 0;
    
    while(k < i){
        urut++;
        printf("%c", arr[urut]);
        printf(" ");
        k++;
    }
    
    printf("\n");
  }
  return 0;
}