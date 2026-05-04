[typelab](../README.md) / [utils](../utils.md) / ArrayLast

```ts
type ArrayLast<T> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, T extends readonly [...Any, infer Last] ? Last : T[number]> : never;
```

Extracts the type of the last element of an `Array` type.

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

The type of the last element from type `T`, or `never` if empty.

## Example

```ts
// boolean
type LastElement = ArrayLast<[string, number, boolean]>;

// string | number | boolean
type AllElements = ArrayLast<(string | number | boolean)[]>;

// never
type Never = ArrayLast<any>;
```
