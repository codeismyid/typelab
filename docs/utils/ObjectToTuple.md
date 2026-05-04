[typelab](../README.md) / [utils](../utils.md) / ObjectToTuple

```ts
type ObjectToTuple<T, IncludeNonIndex, HoleType, OmitHole> = IsArray<T> extends true ? T : IsObjectLiteral<T> extends true ? _ObjectToTuple<T, IncludeNonIndex, HoleType, OmitHole> : never;
```

Converts an `object` into a `Tuple` of its values.

- If `IncludeNonIndex` is `false`, only properties with numeric keys are included.
- If `IncludeNonIndex` is `true`, all properties are included.

⚠️ **Does not guarantee correct order**, if `IncludeNonIndex` is `true`.

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

The `object` type to convert.

</td>
</tr>
<tr>
<td>

`IncludeNonIndex` *extends* `boolean`

</td>
<td>

`false`

</td>
<td>

A flag that determines whether to include non-array index or not. defaults to `false`.

</td>
</tr>
<tr>
<td>

`HoleType`

</td>
<td>

`unknown`

</td>
<td>

Safety type, if there is a hole(s) in result, defaults to `unknown`. Ignored if `OmitHole` is `true`.

</td>
</tr>
<tr>
<td>

`OmitHole` *extends* `boolean`

</td>
<td>

`false`

</td>
<td>

Each element with `never` type will be omitted, defaults to `false`.

</td>
</tr>
</tbody>
</table>

## Returns

A `Tuple` type, if `T` is `ObjectLiteral` or `Tuple`, never otherwise.

## Example

```ts
type Obj1 = { 0: string; 1: number; 2: boolean };
// [string, number, boolean]
type TupleType1 = ObjectToTuple<Obj1>;

type Obj2 = { a: 'a'; b: 'b'; c: 'c' };
// ['a', 'b, 'c']
type TupleType2 = ObjectToTuple<Obj2, true>;
```
