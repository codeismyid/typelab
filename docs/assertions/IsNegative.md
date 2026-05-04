[typelab](../README.md) / [assertions](../assertions.md) / IsNegative

```ts
type IsNegative<T> = _IsTrue<IfNegative<T, true, false>>;
```

Checks if a given number `T` is negative.

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

`true` if `T` is a negative number, `false` otherwise.

## Example

```ts
type Valid = IsNegative<-11 | -11n>; // true
type Invalid = IsNegative<11 | 11n>; // false
```
