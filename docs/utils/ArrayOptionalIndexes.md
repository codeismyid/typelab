[typelab](../README.md) / [utils](../utils.md) / ArrayOptionalIndexes

```ts
type ArrayOptionalIndexes<T, IncludeString> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, _ArrayOptionalIndexes<T> extends infer IndexesNumber ? number extends IndexesNumber ? IndexesNumber : IsTrue<IncludeString> extends true ? IndexesNumber | ParseString<IndexesNumber> : IndexesNumber : never> : never;
```

Get the optional indexes from `T` type.

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

`T`

</td>
<td>

&hyphen;

</td>
<td>

The `Array` type to extract optional indexes from.

</td>
</tr>
<tr>
<td>

`IncludeString` *extends* `boolean`

</td>
<td>

`false`

</td>
<td>

Whether to include string keys (`true`) or only numeric keys (`false`). Defaults to `false`.

</td>
</tr>
</tbody>
</table>

## Returns

The indexes of `T` that are optional.

## Example

```ts
// 1 | 2
type Result1 = ArrayOptionalIndexes<[string, string?, string?]>;

// 1 | 2 | "1" | "2"
type Result2 = ArrayOptionalIndexes<[string, string?, string?], true>;

// number
type Result3 = ArrayOptionalIndexes<(string | undefined)[]>;

// never
type Never1 = ArrayOptionalIndexes<[string, string, string]>;

// never
type Never2 = ArrayOptionalIndexes<any>;
```
