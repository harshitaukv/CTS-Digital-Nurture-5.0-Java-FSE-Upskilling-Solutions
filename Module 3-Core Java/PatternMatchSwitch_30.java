public class Main {

    public static void checkType(Object obj) {

        switch (obj) {
            case Integer i ->
                System.out.println("Integer value: " + i);

            case String s ->
                System.out.println("String value: " + s);

            case Double d ->
                System.out.println("Double value: " + d);

            case Float f ->
                System.out.println("Float value: " + f);

            case null ->
                System.out.println("Object is null");

            default ->
                System.out.println("Unknown type");
        }
    }

    public static void PatternMatchSwitch_30(String[] args) {

        checkType(100);
        checkType("Hello");
        checkType(25.5);
        checkType(12.3f);
        checkType(null);
    }
}