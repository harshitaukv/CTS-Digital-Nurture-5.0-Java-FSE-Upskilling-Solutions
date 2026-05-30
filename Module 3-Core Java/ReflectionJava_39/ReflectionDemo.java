import java.lang.reflect.*;

public class ReflectionDemo {

    public static void main(String[] args) {

        try {
            Class<?> cls = Class.forName("Student");

            Object obj = cls.getDeclaredConstructor().newInstance();

            Method[] methods = cls.getDeclaredMethods();

            System.out.println("Methods in Student class:");

            for (Method m : methods) {
                System.out.println("Method Name: " + m.getName());

                Parameter[] params = m.getParameters();

                System.out.println("Number of Parameters: " + params.length);
            }
            Method method = cls.getDeclaredMethod("show");

            System.out.println("\nInvoking Method:");

            method.invoke(obj);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}