[typelab](../README.md) / [conditions](../conditions.md) / IfObjectEmpty

```ts
type IfObjectEmpty<T, Then, Else> = _IfNotAnyOrNever<T, T extends ObjectEmpty ? keyof T extends never ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is object empty, otherwise resolves to `Else`.

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

The type to return if `T` is object empty.

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

The type to return if `T` is not object empty. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is object empty, `Else` otherwise.

## Example

```ts
// 'yes'
type Yes = IfObjectEmpty<{ [x: string]: never; }, 'yes', 'no'>;

// 'no'
type No = IfObjectEmpty<{ a: 1 }, 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfObjectEmpty<{ [x: string]: never; } | { a: 1 }, 'yes', 'no'>;
```
