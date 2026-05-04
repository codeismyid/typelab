[typelab](../README.md) / [conditions](../conditions.md) / IfTupleReadonly

```ts
type IfTupleReadonly<T, Then, Else> = _IfNotAnyOrNever<T, T extends ReadonlyArray ? number extends T["length"] ? Else : T extends WritableArray ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a readonly tuple, otherwise resolves to `Else`.

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

The type to return if `T` is a readonly tuple.

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

The type to return if `T` is not a readonly tuple. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a readonly tuple, `Else` otherwise.

## Example

```ts
// 'yes'
type Yes = IfTupleReadonly<readonly [string], 'yes', 'no'>;

// 'no'
type No = IfTupleReadonly<[string], 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfTupleReadonly<readonly [string] | [string], 'yes', 'no'>;
```
