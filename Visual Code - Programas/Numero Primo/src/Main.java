import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Insira o numero que gostaria de saber se eh primo:");
        int n = input.nextInt();
        boolean ehPrimo=true;
        if(n==1){
            ehPrimo=false;
        } else{
            for (int i=2;i<n;i++){
                if(n%i==0){
                    ehPrimo=false;
                    break;
                }
            }  
        }

        if(ehPrimo){
            System.out.println(n + " eh primo");
        } else{
            System.out.println(n + " nao eh primo");
        }
    }
}