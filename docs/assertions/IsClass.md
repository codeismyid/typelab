[typelab](../README.md) / [assertions](../assertions.md) / IsClass

```ts
type IsClass<T> = _IsTrue<IfClass<T, true, false>>;
```

Checks if a given type `T` is a `Class` type.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The type to be checked.

</td>
</tr>
</tbody>
</table>

## Returns

`true` if `T` is a `Class` type, `false` otherwise.

## Example

```ts
class DummyClass {}
type Valid = IsClass<typeof DummyClass>; // true
type Invalid = IsClass<string>; // false
```
