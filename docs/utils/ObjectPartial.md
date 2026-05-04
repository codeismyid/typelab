[typelab](../README.md) / [utils](../utils.md) / ObjectPartial

```ts
type ObjectPartial<T, K> = _ObjectPartial<T, K>;
```

Extended TypeScript [\`Partial\`](#) to make specific properties optional.

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

The original `object` type.

</td>
</tr>
<tr>
<td>

`K` *extends* keyof `T`

</td>
<td>

The keys of `T` that should be optional.

</td>
</tr>
</tbody>
</table>

## Returns

A type with the specified keys of `T` set as optional.

## Example

```ts
type Obj = { a: string; b: string };

// { a?: string; b: string }
type PartialObj = ObjectPartial<Obj, 'a'>;
```
