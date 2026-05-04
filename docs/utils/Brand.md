[typelab](../README.md) / [utils](../utils.md) / Brand

```ts
type Brand<T, BrandType> = T & {
  __brand: BrandType;
};
```

Create a branded version of a base type.

## Type Declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`__brand`

</td>
<td>

`BrandType`

</td>
<td>

Custom brand here

</td>
</tr>
</tbody>
</table>

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The original type.

</td>
</tr>
<tr>
<td>

`BrandType`

</td>
<td>

An identifier to distinguish the branded type.

</td>
</tr>
</tbody>
</table>

## Example

```ts
type UserId = Brand<string, 'UserId'>; // string & { __brand: "UserId" }
type OrderId = Brand<string, 'OrderId'>; // string & { __brand: "OrderId" }
type IsEqual = [UserId, OrderId] extends [OrderId, UserId] ? true : false; // false
```
