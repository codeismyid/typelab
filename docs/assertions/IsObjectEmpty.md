[typelab](../README.md) / [assertions](../assertions.md) / IsObjectEmpty

```ts
type IsObjectEmpty<T> = _IsTrue<IfObjectEmpty<T, true, false>>;
```

Checks if a given type `T` is an `Object Empty` type.

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

`true` if `T` is an `Object Empty` type, `false` otherwise.

## Example

```ts
type Valid = IsObjectEmpty<{ [x: string]: never }>; // true
type Invalid = IsObjectEmpty<{ a: string }>; // false
```
