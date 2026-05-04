[typelab](../README.md) / [utils](../utils.md) / ArrayRequiredIndexes

```ts
type ArrayRequiredIndexes<T, IncludeString> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, _ArrayRequiredIndexes<T> extends infer IndexesNumber ? number extends IndexesNumber ? IndexesNumber : IsTrue<IncludeString> extends true ? IndexesNumber | ParseString<IndexesNumber> : IndexesNumber : never> : never;
```

Get the required indexes from `T` type.

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

The `Array` type to extract required indexes from.

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

The indexes of `T` that are required.

## Example

```ts
// 0 | 1
type Result1 = ArrayRequiredIndexes<[string, string, string?]>;

// 0 | 1 | "0" | "1"
type Result2 = ArrayRequiredIndexes<[string, string, string?], true>;

// number
type Result3 = ArrayRequiredIndexes<(string | undefined)[]>;

// never
type Never1 = ArrayRequiredIndexes<[string?, string?, string?]>;

// never
type Never2 = ArrayRequiredIndexes<any>;
```
