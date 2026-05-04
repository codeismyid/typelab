[typelab](../README.md) / [conditions](../conditions.md) / IfNegative

```ts
type IfNegative<T, Then, Else> = T extends number | bigint ? `${T}` extends `-${infer _}` ? Then : Else : T extends `-${infer Digits}` ? Digits extends `${infer _ extends number}` ? Then : Digits extends `${infer _ extends number}n` ? Then : Else : Else;
```

Resolves to `Then` if the type `T` is negative, otherwise resolves to `Else`.

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

The type to return if `T` is negative.

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

The type to return if `T` is not negative. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is negative, `Else` otherwise.

## Example

```ts
type Yes = IfNegative<-11 | -11n | '-11' | '-11n', 'yes', 'no'>; // 'yes'
type No = IfNegative<11, 'yes', 'no'>; // 'no'
type YesOrNo = IfNegative<-11 | 11, 'yes', 'no'>; // 'yes' | 'no'
```
