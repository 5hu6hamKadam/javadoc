# Collection Interface in Java

The root interface in the collection hierarchy represents a group of objects, known as elements. Collections can be ordered or unordered, and may allow duplicate elements. The JDK provides implementations of more specific subinterfaces like `Set` and `List`, but not direct implementations of this interface. This interface is used for maximum generality in passing and manipulating collections. Bags or multisets (unordered collections that may contain duplicates) should implement this interface directly.

## Constructors

All general-purpose `Collection` implementation classes should provide two standard constructors:
1. A no-argument constructor for creating an empty collection.
2. A constructor with a single `Collection` argument to create a new collection with the same elements as the argument.

The latter constructor allows copying any collection, producing an equivalent collection of the desired type. Although interfaces cannot enforce this convention, all general-purpose `Collection` implementations in the Java platform comply.

## Destructive Methods

Destructive methods modify the collection they operate on and throw `UnsupportedOperationException` if the collection does not support the operation. For example, invoking `addAll(Collection)` on an unmodifiable collection may throw the exception if the collection to be added is empty.

## Restrictions on Elements

Some implementations restrict the elements they may contain, such as prohibiting `null` elements or restricting element types. Adding an ineligible element throws an unchecked exception, typically `NullPointerException` or `ClassCastException`. Querying the presence of an ineligible element may throw an exception or return `false`. Attempting an operation on an ineligible element may throw an exception or succeed, depending on the implementation. Such exceptions are marked as "optional" in the specification.

## Synchronization Policy

Each collection determines its own synchronization policy. Undefined behavior may result from invoking any method on a collection being mutated by another thread, including direct invocations, passing the collection to a method that might perform invocations, and using an existing iterator to examine the collection.

## Equality and Hashing

Many methods in Collections Framework interfaces are defined in terms of the `equals` method. For example, `contains(Object o)` returns `true` if the collection contains at least one element `e` such that `(o==null ? e==null : o.equals(e))`. Implementations may optimize by comparing hash codes before invoking `equals`. Implementations can take advantage of the specified behavior of underlying `Object` methods as appropriate.

## Self-Referential Instances

Operations that perform recursive traversal of the collection may fail with an exception for self-referential instances where the collection directly or indirectly contains itself. This includes `clone()`, `equals()`, `hashCode()`, and `toString()` methods. Handling self-referential scenarios is optional, and most current implementations do not do so.

## Methods

| Modifier and Type | Method and Description |
|-------------------|------------------------|
| boolean | [add(E e)](#add) <br> Ensures that this collection contains the specified element (optional operation). |
| boolean | [addAll(Collection<? extends E> c)](#addAll) <br> Adds all of the elements in the specified collection to this collection (optional operation). |
| void | [clear()](#clear) <br> Removes all of the elements from this collection (optional operation). |
| boolean | [contains(Object o)](#contains) <br> Returns true if this collection contains the specified element. |
| boolean | [containsAll(Collection<?> c)](#containsAll) <br> Returns true if this collection contains all of the elements in the specified collection. |
| boolean | [equals(Object o)](#equals) <br> Compares the specified object with this collection for equality. |
| int | [hashCode()](#hashCode) <br> Returns the hash code value for this collection. |
| boolean | [isEmpty()](#isEmpty) <br> Returns true if this collection contains no elements. |
| Iterator<E> | [iterator()](#iterator) <br> Returns an iterator over the elements in this collection. |
| default Stream<E> | [parallelStream()](#parallelStream) <br> Returns a possibly parallel Stream with this collection as its source. |
| boolean | [remove(Object o)](#remove) <br> Removes a single instance of the specified element from this collection, if it is present (optional operation). |
| boolean | [removeAll(Collection<?> c)](#removeAll) <br> Removes all of this collection's elements that are also contained in the specified collection (optional operation). |
| default boolean | [removeIf(Predicate<? super E> filter)](#removeIf) <br> Removes all of the elements of this collection that satisfy the given predicate. |
| boolean | [retainAll(Collection<?> c)](#retainAll) <br> Retains only the elements in this collection that are contained in the specified collection (optional operation). |
| int | [size()](#size) <br> Returns the number of elements in this collection. |
| default Spliterator<E> | [spliterator()](#spliterator) <br> Creates a Spliterator over the elements in this collection. |
| default Stream<E> | [stream()](#stream) <br> Returns a sequential Stream with this collection as its source. |
| Object[] | [toArray()](#toArray) <br> Returns an array containing all of the elements in this collection. |
| <T> T[] | [toArray(T[] a)](#toArray) <br> Returns an array containing all of the elements in this collection; the runtime type of the returned array is that of the specified array. |



