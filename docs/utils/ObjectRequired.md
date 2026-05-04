[typelab](../README.md) / [utils](../utils.md) / ObjectRequired

```ts
type ObjectRequired<T, Key, IncludeUndefined> = _ObjectRequired<T, Key, IncludeUndefined>;
```

Extended TypeScript [\`Required\`](#) to enforce specific properties as required.

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

The original `object` type.

</td>
</tr>
<tr>
<td>

`Key` *extends* keyof `T`

</td>
<td>

&hyphen;

</td>
<td>

The keys of `T` that should be required.

</td>
</tr>
<tr>
<td>

`IncludeUndefined` *extends* `boolean`

</td>
<td>

`false`

</td>
<td>

Include undefined type from `T[Key]`, defaults to `false`.

</td>
</tr>
</tbody>
</table>

## Returns

A type with the specified keys of `T` set as required.

## Example

```ts
type Obj = { a?: string; b?: string };

// { a: string; b?: string }
type RequiredObj = ObjectRequired<Obj, 'a'>;
```
