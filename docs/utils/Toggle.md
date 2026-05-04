[typelab](../README.md) / [utils](../utils.md) / Toggle

```ts
type Toggle<T> = T extends true ? false : T extends false ? true : never;
```

Toggle the values of a `boolean` type.

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

`T` *extends* `boolean`

</td>
<td>

The `true` or `false` type.

</td>
</tr>
</tbody>
</table>

## Returns

The opposite of `T`.

## Example

```ts
type Toggled1 = Toggle<true>; // false
type Toggled2 = Toggle<false>; // true
```
