import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample_24 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<String> names = new ArrayList<>();

        System.out.print("Enter the number of students: ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter name " + (i + 1) + ": ");
            names.add(sc.nextLine());
        }

        System.out.println("Student Names:");
        for (String name : names) {
            System.out.println(name);
        }

        sc.close();
    }
}