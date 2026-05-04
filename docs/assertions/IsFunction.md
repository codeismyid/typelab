[typelab](../README.md) / [assertions](../assertions.md) / IsFunction

```ts
type IsFunction<T> = _IsTrue<IfFunction<T, true, false>>;
```

Checks if a given type `T` is a function type.

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

`true` if `T` is a function type, `false` otherwise.

## Example

```ts
type Valid = IsFunction<() => string>; // true
type Invalid = IsFunction<string>; // false
```
