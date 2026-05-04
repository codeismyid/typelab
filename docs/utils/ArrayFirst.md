[typelab](../README.md) / [utils](../utils.md) / ArrayFirst

```ts
type ArrayFirst<T> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, T[0]> : never;
```

Extracts the type of the first element of an `Array` type.

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

The `Array` type to extract from.

</td>
</tr>
</tbody>
</table>

## Returns

The type of the first element from type `T`.

## Example

```ts
// string
type FirstElement = ArrayFirst<[string, number, boolean]>;

// string | number | boolean
type AllElements = ArrayFirst<(string | number | boolean)[]>;

// never
type Never = ArrayFirst<any>;
```
