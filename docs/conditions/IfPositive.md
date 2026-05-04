[typelab](../README.md) / [conditions](../conditions.md) / IfPositive

```ts
type IfPositive<T, Then, Else> = T extends number | bigint ? `${T}` extends `-${infer _}` ? Else : Then : `${T}` extends `-${infer Digits}` ? Digits extends `${infer _ extends number}` ? Else : Digits extends `${infer _ extends number}n` ? Else : Then : Then;
```

Resolves to `Then` if the type `T` is positive, otherwise resolves to `Else`.

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

`T` *extends* `number` \| `bigint` \| `string`

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

The type to return if `T` is positive.

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

The type to return if `T` is not positive. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is positive, `Else` otherwise.

## Example

```ts
type Yes = IfPositive<11 | 11n | '11' | '11n', 'yes', 'no'>; // 'yes'
type No = IfPositive<-11, 'yes', 'no'>; // 'no'
type YesOrNo = IfPositive<-11 | 11, 'yes', 'no'>; // 'yes' | 'no'
```
