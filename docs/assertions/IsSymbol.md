[typelab](../README.md) / [assertions](../assertions.md) / IsSymbol

```ts
type IsSymbol<T> = _IsTrue<IfSymbol<T, true, false>>;
```

Checks if a given type `T` is a `symbol`.

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

`true` if `T` is a `symbol`, `false` otherwise.

## Example

```ts
type Valid = IsSymbol<symbol>; // true
type Invalid = IsSymbol<string>; // false
```
