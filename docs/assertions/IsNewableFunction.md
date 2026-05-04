[typelab](../README.md) / [assertions](../assertions.md) / IsNewableFunction

```ts
type IsNewableFunction<T> = _IsTrue<IfNewableFunction<T, true, false>>;
```

Checks if a given type `T` is a newable function type.

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

`true` if `T` is a newable function type, `false` otherwise.

## Example

```ts
type Valid = IsNewableFunction<new () => string>; // true
type Invalid = IsNewableFunction<() => string>; // false
```
