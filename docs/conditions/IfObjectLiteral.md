[typelab](../README.md) / [conditions](../conditions.md) / IfObjectLiteral

```ts
type IfObjectLiteral<T, Then, Else> = _IfNotAnyOrNever<T, T extends object ? T extends ReadonlyArray ? Else : T extends Fn ? Else : T extends NewableFn ? Else : T extends Async ? Else : keyof T extends never ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is object literal, otherwise resolves to `Else`.

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

The type to return if `T` is object literal.

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

The type to return if `T` is not object literal. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is object literal, `Else` otherwise.

## Example

```ts
type Yes = IfObjectLiteral<{ a: 1 }, 'yes', 'no'>; // 'yes'
type No = IfObjectLiteral<object, 'yes', 'no'>; // 'no'
type YesOrNo = IfObjectLiteral<{ a: 1 } | object, 'yes', 'no'>; // 'yes' | 'no'
```
