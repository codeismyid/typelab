[typelab](../README.md) / [utils](../utils.md) / ArrayOmitOptional

```ts
type ArrayOmitOptional<T> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, _ArrayOmitOptional<T>> : never;
```

Omit the optional elements from `T` type.

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

The `Array` type to omit the optional elements from.

</td>
</tr>
</tbody>
</table>

## Returns

`Array` with elements of `T` that are required.

## Example

```ts
// [string, string]
type Result = ArrayOmitOptional<[string, string, string?]>;

// never
type Never = ArrayOmitOptional<any>;
```
