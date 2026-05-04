[typelab](../README.md) / [utils](../utils.md) / ArrayOmitRequired

```ts
type ArrayOmitRequired<T, OmitHole> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, _ArrayOmitRequired<T, OmitHole>> : never;
```

Omit the required elements from `T` type.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` *extends* [`ReadonlyArray`](../aliases/ReadonlyArray.md)

</td>
<td>

&hyphen;

</td>
<td>

The `Array` type to omit the required elements from.

</td>
</tr>
<tr>
<td>

`OmitHole` *extends* `boolean`

</td>
<td>

`true`

</td>
<td>

Whether to omit the hole or not. Defaults to `true`.

</td>
</tr>
</tbody>
</table>

## Returns

`Array` with elements of `T` that are optional.

## Example

```ts
// [string?, string?]
type Result1 = ArrayOmitRequired<[string, string, string?, string?]>;

// [unknown?, string?, string?]
type Result2 = ArrayOmitRequired<[string, string?, string?], false>;

// never
type Never = ArrayOmitRequired<any>;
```
