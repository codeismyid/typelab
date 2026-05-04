[typelab](../README.md) / [utils](../utils.md) / ArrayIndexes

```ts
type ArrayIndexes<T, IncludeString> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, number extends T["length"] ? number : Exclude<keyof T, keyof WritableArray> extends infer IndexesString ? ParseInt<IndexesString> extends infer IndexesNumber ? IsTrue<IncludeString> extends true ? IndexesNumber | IndexesString : IndexesNumber : never : never> : never;
```

Extracts the index keys of an `Array` or `Tuple` type.

- For a `Tuple`, returns `T` index union.
- For a general `Array`, returns `number` since arrays are indexed by numbers.

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

The array or `Tuple` type to extract index keys from.

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

The keys of the `Tuple` (as both `string` and number) or `number` for general arrays.

## Example

```ts
// 0 | 1 | 2
type Result1 = ArrayIndexes<[string, number, boolean]>;

// 0 | 1 | 2 | "0" | "1" | "2"
type Result2 = ArrayIndexes<[string, number, boolean], true>;

// number
type Result3 = ArrayIndexes<string[]>;

// never
type Never = ArrayIndexes<any>;
```
