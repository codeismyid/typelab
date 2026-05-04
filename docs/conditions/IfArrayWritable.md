[typelab](../README.md) / [conditions](../conditions.md) / IfArrayWritable

```ts
type IfArrayWritable<T, Then, Else> = _IfNotAnyOrNever<T, T extends WritableArray ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a writable array, otherwise resolves to `Else`.

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

The type to return if `T` is a writable array.

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

The type to return if `T` is not a writable array. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a writable array, `Else` otherwise.

## Example

```ts
// 'yes'
type Yes = IfArrayWritable<string[], 'yes', 'no'>;

// 'no'
type No = IfArrayWritable<readonly string[], 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfArrayWritable<string[] | readonly string[], 'yes', 'no'>;
```
