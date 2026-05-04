[typelab](../README.md) / [assertions](../assertions.md) / IsPropertyKey

```ts
type IsPropertyKey<T> = _IsTrue<IfPropertyKey<T, true, false>>;
```

Checks if a given type `T` is a [\`PropertyKey\`](#) type.

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

`true` if `T` is a [\`PropertyKey\`](#) type, `false` otherwise.

## Example

```ts
type Valid = IsPropertyKey<string>; // true
type Invalid = IsPropertyKey<bigint>; // false
```
