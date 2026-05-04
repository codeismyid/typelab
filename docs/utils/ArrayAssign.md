[typelab](../README.md) / [utils](../utils.md) / ArrayAssign

```ts
type ArrayAssign<Target, Source> = _ArrayAssign<Target, Source>;
```

Assign the elements of `Source` into `Target`.

It's like [ObjectAssign](ObjectAssign.md) but for `Array` only.

- If `Target` is readonly, it returns `Target` as is. In order to follow the actual result of Object.assign.
- If either `Target` or `Source` is not an `Array` or `Tuple`, it returns `Target` as is.

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

`Target` *extends* [`ReadonlyArray`](../aliases/ReadonlyArray.md)

</td>
<td>

&hyphen;

</td>
<td>

The target `Array` or `Tuple`.

</td>
</tr>
<tr>
<td>

`Source`

</td>
<td>

\[\]

</td>
<td>

The `Array` or `Tuple` to be assigned to the `Target`.

</td>
</tr>
</tbody>
</table>

## Returns

A new `Array` or `Tuple` combining elements from both `Target` and `Source`.

## Example

```ts
// [0, 1, 2]
type Result1 = ArrayAssign<[1, 2], [0, 1, 2]>;

// (string | number)[]
type Result2 = ArrayAssign<string[], number[]>;

// readonly [1, 2]
type Result3 = ArrayAssign<readonly [1, 2], [0, 1, 2]>;
```
