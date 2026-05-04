[typelab](../README.md) / [assertions](../assertions.md) / IsPositive

```ts
type IsPositive<T> = _IsTrue<IfPositive<T, true, false>>;
```

Checks if a given number `T` is positive.

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

`T` *extends* `number` \| `bigint` \| `string`

</td>
<td>

The type to be checked.

</td>
</tr>
</tbody>
</table>

## Returns

`true` if `T` is a positive number, `false` otherwise.

## Example

```ts
type Valid = IsPositive<11 | 11n>; // true
type Invalid = IsPositive<-11 | -11n>; // false
```
