[typelab](../README.md) / [conditions](../conditions.md) / IfTupleWritable

```ts
type IfTupleWritable<T, Then, Else> = _IfNotAnyOrNever<T, T extends WritableArray ? number extends T["length"] ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a writable tuple, otherwise resolves to `Else`.

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

The type to be checked.

</td>
</tr>
<tr>
<td>

`Then`

</td>
<td>

&hyphen;

</td>
<td>

The type to return if `T` is a writable tuple.

</td>
</tr>
<tr>
<td>

`Else`

</td>
<td>

`never`

</td>
<td>

The type to return if `T` is not a writable tuple. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a writable tuple, `Else` otherwise.

## Example

```ts
// 'yes'
type Yes = IfTupleWritable<[string], 'yes', 'no'>;

// 'no'
type No = IfTupleWritable<readonly [string], 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfTupleWritable<[string] | readonly [string], 'yes', 'no'>;
```
