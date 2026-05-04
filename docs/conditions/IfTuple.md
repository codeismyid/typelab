[typelab](../README.md) / [conditions](../conditions.md) / IfTuple

```ts
type IfTuple<T, Then, Else> = _IfNotAnyOrNever<T, T extends ReadonlyArray ? number extends T["length"] ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a tuple (readonly or writable), otherwise resolves to `Else`.

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

The type to return if `T` is a tuple.

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

The type to return if `T` is not a tuple. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a tuple, `Else` otherwise.

## Example

```ts
type Yes = IfTuple<[string], 'yes', 'no'>; // 'yes'
type No = IfTuple<string[], 'yes', 'no'>; // 'no'
type YesOrNo = IfTuple<[string] | string[], 'yes', 'no'>; // 'yes' | 'no'
```
