[typelab](../README.md) / [utils](../utils.md) / PropValue

```ts
type PropValue<T, K, BailType> = K extends keyof T ? T[K] : ParseString<K> extends infer Key ? T[Key] : BailType;
```

Gets the type of a property `K` from `T`.

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

The target type.

</td>
</tr>
<tr>
<td>

`K`

</td>
<td>

&hyphen;

</td>
<td>

The key of the property.

</td>
</tr>
<tr>
<td>

`BailType`

</td>
<td>

`never`

</td>
<td>

Bail type, if `K` is not a key of `T`, defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

The type of `T[K]`, or `BailType` if `K` is not a key of `T`.

## Example

```ts
type User = { name: string };
type Valid = PropValue<User, 'name'>; // string
type Invalid = PropValue<User, 'email'>; // never
```
