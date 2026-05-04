[typelab](../README.md) / [conditions](../conditions.md) / IfObjectArrayLike

```ts
type IfObjectArrayLike<T, Then, Else> = IfObjectLiteral<T, T extends T ? Exclude<keyof T extends infer U ? U extends number ? U : U extends `${infer V extends number}` ? V : U extends "length" ? T[U] extends number ? never : U : U : never, number> extends never ? Then : Else : never, Else>;
```

Resolves to `Then` if the type `T` is array-like object, otherwise resolves to `Else`.

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

The type to return if `T` is array-like object.

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

The type to return if `T` is not array-like object. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is array-like object, `Else` otherwise.

## Example

```ts
// 'yes'
type Yes = IfObjectArrayLike<{ 0: number; 1: number; }, 'yes', 'no'>;

// 'no'
type No = IfObjectArrayLike<{ 0: number; id: number; }, 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfObjectArrayLike<{ 0: number; 1: number; } | { 0: number; id: number; }, 'yes', 'no'>;
```
