[typelab](../README.md) / [assertions](../assertions.md) / IsObjectArrayLike

```ts
type IsObjectArrayLike<T> = _IsTrue<IfObjectArrayLike<T, true, false>>;
```

Checks if a given type `T` is an `Object Array Like` type.

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

`true` if `T` is an `Object Array Like` type, `false` otherwise.

## Example

```ts
type Valid = IsObjectArrayLike<{ 0: number; 1: number }>; // true
type Invalid = IsObjectArrayLike<{ 0: number; a: number }>; // false
```
