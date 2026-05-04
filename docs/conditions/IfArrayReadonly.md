[typelab](../README.md) / [conditions](../conditions.md) / IfArrayReadonly

```ts
type IfArrayReadonly<T, Then, Else> = _IfNotAnyOrNever<T, T extends ReadonlyArray ? T extends WritableArray ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a readonly array, otherwise resolves to `Else`.

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

The type to return if `T` is a readonly array.

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

The type to return if `T` is not a readonly array. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a readonly array, `Else` otherwise.

## Example

```ts
// 'yes'
type Yes = IfArrayReadonly<readonly string[], 'yes', 'no'>;

// 'no'
type No = IfArrayReadonly<string[], 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfArrayReadonly<readonly string[] | string[], 'yes', 'no'>;
```
