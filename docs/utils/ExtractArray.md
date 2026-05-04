[typelab](../README.md) / [utils](../utils.md) / ExtractArray

```ts
type ExtractArray<T> = T extends ReadonlyArray<infer U> ? U : never;
```

Extract the value type from an `Array` type.

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

`T` *extends* [`ReadonlyArray`](../aliases/ReadonlyArray.md)

</td>
<td>

The input type which should be an `Array`.

</td>
</tr>
</tbody>
</table>

## Returns

The type of the elements in the `Array`, or never if `T` is not an `Array`.

## Example

```ts
type Valid = ExtractArray<number[]>; // number
type Invalid = ExtractArray<Promise<number>> // never
```
