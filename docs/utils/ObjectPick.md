[typelab](../README.md) / [utils](../utils.md) / ObjectPick

```ts
type ObjectPick<T, K, BailType> = { [Key in K as PropValue<T, Key> extends never ? never : Key]: PropValue<T, Key> } extends infer Result ? IsNonNullish<Result> extends true ? BailType : Result : never;
```

Extended TypeScript [\`Pick\`](#) to pick `K` from `T`.

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

`K` *extends* keyof `T`

</td>
<td>

&hyphen;

</td>
<td>

The keys of `T` that will be picked.

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

&hyphen;

</td>
</tr>
</tbody>
</table>

## Returns

Set of properties whose keys are in the union K.

## Example

```ts
type Obj = { a: string; b: string };

// { a: string; }
type Picked = ObjectPick<Obj, 'a'>;
```
