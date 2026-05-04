[typelab](../README.md) / [utils](../utils.md) / ArrayElements

```ts
type ArrayElements<T> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, T[number]> : never;
```

Extracts the elements of an `Array` type`.

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

The target `Array`.

</td>
</tr>
</tbody>
</table>

## Returns

Elements of type `T`.

## Example

```ts
type Elements = ArrayElements<[string, number]>; // string | number
type Never = ArrayElements<any>; // never
```
