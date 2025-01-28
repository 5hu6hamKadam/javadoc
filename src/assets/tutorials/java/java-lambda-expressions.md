# Java lambda expression
- Lambda expressions are a feature of Java introduced in `Java 8`.
- They provide a clear and concise way to `represent one method interface` using an expression.
- Lambda expressions are used primarily to define the `inline implementation` of a functional interface.

## Syntax of Lambda Expressions

  - The basic syntax is `(parameters) -> expression` or `(parameters) -> { statements; }`.
  - Example: `(int a, int b) -> a + b`

## Examples of Lambda Expressions

  - **No Parameter**
    ```java
    Runnable r = () -> System.out.println("Hello, world!");
    r.run();
    ```
  - **Single Parameter**
    ```java
    Consumer<String> c = s -> System.out.println(s);
    c.accept("Hello, world!");
    ```
  - **Multiple Parameters**
    ```java
    BinaryOperator<Integer> add = (a, b) -> a + b;
    System.out.println(add.apply(5, 3)); // Output: 8
    ```
  - **Block Body**
    ```java
    Comparator<Integer> comparator = (a, b) -> {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    };
    System.out.println(comparator.compare(5, 3)); // Output: 1
    ```

## Using Lambda Expressions with Collections

  - **Iterating through a List**
    ```java
    List<String> list = Arrays.asList("a", "b", "c");
    list.forEach(s -> System.out.println(s));
    ```
  - **Filtering a List**
    ```java
    List<String> list = Arrays.asList("a", "b", "c");
    List<String> filteredList = list.stream()
                                    .filter(s -> s.equals("a"))
                                    .collect(Collectors.toList());
    System.out.println(filteredList); // Output: [a]
    ```

## Benefits of Lambda Expressions

  - Reduces the amount of boilerplate code.
  - Enhances the readability of the code.
  - Facilitates functional programming.
