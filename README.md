<div align="center">
    
# typelab
    
[![License](https://img.shields.io/github/license/codeismyid/typelab?style=flat-square&color=blue)](/LICENSE)
[![NPM Latest](https://img.shields.io/npm/v/typelab.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/typelab)
[![NPM Downloads](https://img.shields.io/npm/dt/typelab.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/typelab)

[![Github](https://img.shields.io/badge/github-repo-242424)](https://github.com/codeismyid/typelab)
[![CI](https://img.shields.io/github/actions/workflow/status/codeismyid/typelab/ci.yaml?style=flat-square&logo=github&label=CI&labelColor=383f47)](https://github.com/codeismyid/typelab/actions/workflows/ci.yaml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/codeismyid/typelab/codeql.yaml?style=flat-square&logo=github&label=CodeQL&labelColor=383f47)](https://github.com/codeismyid/typelab/actions/workflows/codeql.yaml)

<p align="center">A lab of reusable utility types for everyday TypeScript code.</p>

</div>

## 📝 Table of Contents
- [🤔 About ](#-about)
- [🔌 Installation ](#-installation)
- [📔 Docs ](#-docs)
  - [Showcases](#showcases)
  - [All Available Types](#all-available-types)
- [⛏️ Built Using ](#️-built-using)
- [📄 License](#-license)

## 🤔 About <a name="about"></a>

This package offers a suite of versatile utility types that simplify common tasks, improve type safety, and boost productivity.

* Easy to use
* Zero third party dependencies
* Type level only
* No more copy paste "type definitions" between projects

## 🔌 Installation <a name="installation"></a>

```bash
# NPM
npm install --save-dev typelab

# BUN
bun add -d typelab
```

## 📔 Docs <a name="docs"></a>

### Showcases

Here is an example for some types from each categories.

<details open>
<summary>Aliases</summary>

- `Primitive`
  ```ts
  const value1: Primitive = ""; // valid
  const value2: Primitive = {}; // invalid
  ```

- `Nullable`
  ```ts
  const example: Nullable<string> = null; // valid
  const example2: Nullable<string> = undefined; // invalid
  ```

- `Undefinable`
  ```ts
  const example: Undefinable<string> = undefined; // valid
  const example2: Undefinable<string> = null; // invalid
  ```

</details>


<details open>
<summary>Assertions</summary>

- `IsExtends`
  ```ts
  type Extends = IsExtends<'', string>; // true
  type NotExtends = IsExtends<string, ''>; // false
  ```

- `IsEqual`
  ```ts
  type Equal = IsEqual<string, string>; // true
  type NotEqual = IsEqual<string, ''>; // false
  ```

- `IsAny`
  ```ts
  type Valid = IsAny<any>; // true
  type Invalid = IsAny<string>; // false
  ```

</details>

<details open>
<summary>Conditions</summary>

- `IfExtends`
  ```ts
  type Yes = IfExtends<'', string, 'yes', 'no'>; // 'yes'
  type No = IfExtends<string, '', 'yes', 'no'>; // 'no'
  type YesOrNo = IfExtends<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
  ```

- `IfEqual`
  ```ts
  type Yes = IfEqual<string, string, 'yes', 'no'>; // 'yes'
  type No = IfEqual<string, number, 'yes', 'no'>; // 'no'
  ```

- `IfAny`
  ```ts
  type Yes = IfAny<any, 'yes', 'no'>; // 'yes'
  type No = IfAny<string, 'yes', 'no'>; // 'no'
  ```

</details>

<details open>
<summary>Utils</summary>

- `FunctionCallbackify`
  ```ts
  // (a: string, callback: (error: unknown, result: string) => void) => void
  type Callbackified = FunctionCallbackify<(a: string) => Promise<string>>;
  ```

- `FunctionPromisify`
  ```ts
  // Callback-style function:
  // (a: string) => Promise<string>
  type Promisified = FunctionPromisify<(a: string, callback: (error: Error, result: string) => void) => void>;

  // Regular function:
  // (a: string) => Promise<string>
  type PromisifiedFn = FunctionPromisify<(a: string) => string>;
  ```

- `ObjectAssign`
  ```ts
  // { a: string; b: string; c: boolean }
  type Assign1 = ObjectAssign<{ a: string; b: number }, { b: string; c: boolean }>;

  // { a: string; 0: string }
  type Assign2 = ObjectAssign<{ a: string }, [string]>;

  // { [x: number]: string, a: string }
  type Assign3 = ObjectAssign<{ a: string }, string[]>;

  // [number, number]
  type Assign4 = ObjectAssign<[string], [number, number]>;

  // (string | number)[]
  type Assign5 = ObjectAssign<string[], [number, number]>;

  // (string | number)[]
  type Assign6 = ObjectAssign<string[], number[]>;

  // [number, string]
  type Assign7 = ObjectAssign<[string], { 0: number; 1: string }>;

  // (string | number)[]
  type Assign8 = ObjectAssign<[number], 'str'>;

  // { [x: number]: string, a: string }
  type Assign9 = ObjectAssign<{a: string}, 'str'>;
  ```

</details>

### All Available Types

A complete reference for all available reusable types.

<details open>
<summary>Aliases</summary>

  - Arrays  
  [Array](docs/aliases/Array.md) · [Arr](docs/aliases/Arr.md) · [List](docs/aliases/List.md) · [ReadonlyArray](docs/aliases/ReadonlyArray.md) · [ReadonlyArr](docs/aliases/ReadonlyArr.md) · [ReadonlyList](docs/aliases/ReadonlyList.md) · [WritableArray](docs/aliases/WritableArray.md) · [WritableArr](docs/aliases/WritableArr.md) · [WritableList](docs/aliases/WritableList.md)

  - Tuples  
  [ReadonlyTuple](docs/aliases/ReadonlyTuple.md) · [Tuple](docs/aliases/Tuple.md) · [WritableTuple](docs/aliases/WritableTuple.md)

  - Functions  
  [AsyncFn](docs/aliases/AsyncFn.md) · [AsyncFunction](docs/aliases/AsyncFunction.md) · [Fn](docs/aliases/Fn.md) · [Function](docs/aliases/Function.md) · [NewableFn](docs/aliases/NewableFn.md) · [NewableFunction](docs/aliases/NewableFunction.md)

  - Objects  
  [ObjectArrayLike](docs/aliases/ObjectArrayLike.md) · [ObjectEmpty](docs/aliases/ObjectEmpty.md) · [ObjectGeneric](docs/aliases/ObjectGeneric.md)

  - Misc  
  [Any](docs/aliases/Any.md) · [Async](docs/aliases/Async.md) · [Class](docs/aliases/Class.md) · [Falsy](docs/aliases/Falsy.md) · [Infinity](docs/aliases/Infinity.md) · [NegativeInfinity](docs/aliases/NegativeInfinity.md) · [NonNullish](docs/aliases/NonNullish.md) · [Nullish](docs/aliases/Nullish.md) · [Nullable](docs/aliases/Nullable.md) · [Primitive](docs/aliases/Primitive.md) · [PositiveInfinity](docs/aliases/PositiveInfinity.md) · [Undefinable](docs/aliases/Undefinable.md) · [Void](docs/aliases/Void.md)

</details>

<details open>
<summary>Assertions</summary>

  - Arrays  
  [IsArray](docs/assertions/IsArray.md) · [IsArrayReadonly](docs/assertions/IsArrayReadonly.md) · [IsArrayWritable](docs/assertions/IsArrayWritable.md)

  - Tuples  
  [IsTuple](docs/assertions/IsTuple.md) · [IsTupleReadonly](docs/assertions/IsTupleReadonly.md) · [IsTupleWritable](docs/assertions/IsTupleWritable.md)

  - Functions  
  [IsAsyncFunction](docs/assertions/IsAsyncFunction.md) · [IsFunction](docs/assertions/IsFunction.md) · [IsNewableFunction](docs/assertions/IsNewableFunction.md)

  - Objects  
  [IsObject](docs/assertions/IsObject.md) · [IsObjectArrayLike](docs/assertions/IsObjectArrayLike.md) · [IsObjectEmpty](docs/assertions/IsObjectEmpty.md) · [IsObjectLiteral](docs/assertions/IsObjectLiteral.md) · [IsOptionalProperty](docs/assertions/IsOptionalProperty.md) · [IsRequiredProperty](docs/assertions/IsRequiredProperty.md)

  - Primitives  
  [IsBigInt](docs/assertions/IsBigInt.md) · [IsBoolean](docs/assertions/IsBoolean.md) · [IsFalse](docs/assertions/IsFalse.md) · [IsNull](docs/assertions/IsNull.md) · [IsNumber](docs/assertions/IsNumber.md) · [IsNumberDecimal](docs/assertions/IsNumberDecimal.md) · [IsNumberInteger](docs/assertions/IsNumberInteger.md) · [IsNumberLiteral](docs/assertions/IsNumberLiteral.md) · [IsPrimitive](docs/assertions/IsPrimitive.md) · [IsString](docs/assertions/IsString.md) · [IsStringLiteral](docs/assertions/IsStringLiteral.md) · [IsSymbol](docs/assertions/IsSymbol.md) · [IsTrue](docs/assertions/IsTrue.md) · [IsUndefined](docs/assertions/IsUndefined.md)

  - Comparisons  
  [IsAssignable](docs/assertions/IsAssignable.md) · [IsAssignableEitherWay](docs/assertions/IsAssignableEitherWay.md) · [IsAssignableMutually](docs/assertions/IsAssignableMutually.md) · [IsEqual](docs/assertions/IsEqual.md) · [IsExtends](docs/assertions/IsExtends.md) · [IsNotAssignable](docs/assertions/IsNotAssignable.md) · [IsNotAssignableEitherWay](docs/assertions/IsNotAssignableEitherWay.md) · [IsNotAssignableMutually](docs/assertions/IsNotAssignableMutually.md) · [IsNotEqual](docs/assertions/IsNotEqual.md) · [IsNotExtends](docs/assertions/IsNotExtends.md)

  - Misc  
  [IsAny](docs/assertions/IsAny.md) · [IsClass](docs/assertions/IsClass.md) · [IsFalsy](docs/assertions/IsFalsy.md) · [IsIntersected](docs/assertions/IsIntersected.md) · [IsNever](docs/assertions/IsNever.md) · [IsNonNullish](docs/assertions/IsNonNullish.md) · [IsNullish](docs/assertions/IsNullish.md) · [IsPositive](docs/assertions/IsPositive.md) · [IsPropertyKey](docs/assertions/IsPropertyKey.md) · [IsPromise](docs/assertions/IsPromise.md) · [IsTruthy](docs/assertions/IsTruthy.md) · [IsUnion](docs/assertions/IsUnion.md) · [IsUndefinable](docs/assertions/IsUndefinable.md) · [IsUnknown](docs/assertions/IsUnknown.md) · [IsVoid](docs/assertions/IsVoid.md)

</details>

<details open>
<summary>Conditions</summary>

  - Arrays  
  [IfArray](docs/conditions/IfArray.md) · [IfArrayReadonly](docs/conditions/IfArrayReadonly.md) · [IfArrayWritable](docs/conditions/IfArrayWritable.md)

  - Tuples  
  [IfTuple](docs/conditions/IfTuple.md) · [IfTupleReadonly](docs/conditions/IfTupleReadonly.md) · [IfTupleWritable](docs/conditions/IfTupleWritable.md)

  - Functions  
  [IfAsyncFunction](docs/conditions/IfAsyncFunction.md) · [IfFunction](docs/conditions/IfFunction.md) · [IfNewableFunction](docs/conditions/IfNewableFunction.md)

  - Objects  
  [IfObject](docs/conditions/IfObject.md) · [IfObjectArrayLike](docs/conditions/IfObjectArrayLike.md) · [IfObjectEmpty](docs/conditions/IfObjectEmpty.md) · [IfObjectLiteral](docs/conditions/IfObjectLiteral.md) · [IfOptionalProperty](docs/conditions/IfOptionalProperty.md) · [IfRequiredProperty](docs/conditions/IfRequiredProperty.md)

  - Primitives  
  [IfBigInt](docs/conditions/IfBigInt.md) · [IfBoolean](docs/conditions/IfBoolean.md) · [IfFalse](docs/conditions/IfFalse.md) · [IfNull](docs/conditions/IfNull.md) · [IfNumber](docs/conditions/IfNumber.md) · [IfNumberDecimal](docs/conditions/IfNumberDecimal.md) · [IfNumberInteger](docs/conditions/IfNumberInteger.md) · [IfNumberLiteral](docs/conditions/IfNumberLiteral.md) · [IfPrimitive](docs/conditions/IfPrimitive.md) · [IfString](docs/conditions/IfString.md) · [IfStringLiteral](docs/conditions/IfStringLiteral.md) · [IfSymbol](docs/conditions/IfSymbol.md) · [IfTrue](docs/conditions/IfTrue.md) · [IfUndefined](docs/conditions/IfUndefined.md)

  - Comparisons  
  [IfAssignable](docs/conditions/IfAssignable.md) · [IfAssignableEitherWay](docs/conditions/IfAssignableEitherWay.md) · [IfAssignableMutually](docs/conditions/IfAssignableMutually.md) · [IfEqual](docs/conditions/IfEqual.md) · [IfExtends](docs/conditions/IfExtends.md) · [IfNotAssignable](docs/conditions/IfNotAssignable.md) · [IfNotAssignableEitherWay](docs/conditions/IfNotAssignableEitherWay.md) · [IfNotAssignableMutually](docs/conditions/IfNotAssignableMutually.md) · [IfNotEqual](docs/conditions/IfNotEqual.md) · [IfNotExtends](docs/conditions/IfNotExtends.md)

  - Misc  
  [IfAny](docs/conditions/IfAny.md) · [IfClass](docs/conditions/IfClass.md) · [IfFalsy](docs/conditions/IfFalsy.md) · [IfIntersected](docs/conditions/IfIntersected.md) · [IfNever](docs/conditions/IfNever.md) · [IfNonNullish](docs/conditions/IfNonNullish.md) · [IfNullish](docs/conditions/IfNullish.md) · [IfPositive](docs/conditions/IfPositive.md) · [IfPropertyKey](docs/conditions/IfPropertyKey.md) · [IfPromise](docs/conditions/IfPromise.md) · [IfTruthy](docs/conditions/IfTruthy.md) · [IfUnion](docs/conditions/IfUnion.md) · [IfUndefinable](docs/conditions/IfUndefinable.md) · [IfUnknown](docs/conditions/IfUnknown.md) · [IfVoid](docs/conditions/IfVoid.md)

</details>

<details open>
<summary>Utils</summary>

  - Arrays  
  [ArrayLength](docs/utils/ArrayLength.md) · [ArrayElements](docs/utils/ArrayElements.md) · [ArrayValues](docs/utils/ArrayValues.md) · [ArrayIndexes](docs/utils/ArrayIndexes.md) · [ArrayAt](docs/utils/ArrayAt.md) · [ArrayFirst](docs/utils/ArrayFirst.md) · [ArrayLast](docs/utils/ArrayLast.md) · [ArrayConcat](docs/utils/ArrayConcat.md) · [ArrayPush](docs/utils/ArrayPush.md) · [ArrayPop](docs/utils/ArrayPop.md) · [ArrayUnshift](docs/utils/ArrayUnshift.md) · [ArrayShift](docs/utils/ArrayShift.md) · [ArrayFlat](docs/utils/ArrayFlat.md) · [ArrayTake](docs/utils/ArrayTake.md) · [ArraySkip](docs/utils/ArraySkip.md) · [ArrayRequired](docs/utils/ArrayRequired.md) · [ArrayPartial](docs/utils/ArrayPartial.md) · [ArrayRequiredIndexes](docs/utils/ArrayRequiredIndexes.md) · [ArrayOptionalIndexes](docs/utils/ArrayOptionalIndexes.md) · [ArrayRequiredElements](docs/utils/ArrayRequiredElements.md) · [ArrayOptionalElements](docs/utils/ArrayOptionalElements.md) · [ArrayRequiredValues](docs/utils/ArrayRequiredValues.md) · [ArrayOptionalValues](docs/utils/ArrayOptionalValues.md) · [ArrayOmitRequired](docs/utils/ArrayOmitRequired.md) · [ArrayOmitOptional](docs/utils/ArrayOmitOptional.md) · [ArrayToObject](docs/utils/ArrayToObject.md) · [ArrayAssign](docs/utils/ArrayAssign.md) · [ArrayOverwrite](docs/utils/ArrayOverwrite.md) · [ArrayMerge](docs/utils/ArrayMerge.md) · [ArrayUnionize](docs/utils/ArrayUnionize.md)

  - Objects  
  [ObjectPick](docs/utils/ObjectPick.md) · [ObjectRequired](docs/utils/ObjectRequired.md) · [ObjectPartial](docs/utils/ObjectPartial.md) · [ObjectRequiredKeys](docs/utils/ObjectRequiredKeys.md) · [ObjectOptionalKeys](docs/utils/ObjectOptionalKeys.md) · [ObjectOmitRequired](docs/utils/ObjectOmitRequired.md) · [ObjectOmitOptional](docs/utils/ObjectOmitOptional.md) · [ObjectReadonly](docs/utils/ObjectReadonly.md) · [ObjectWritable](docs/utils/ObjectWritable.md) · [ObjectPath](docs/utils/ObjectPath.md) · [ObjectPathValue](docs/utils/ObjectPathValue.md) · [ObjectToTuple](docs/utils/ObjectToTuple.md) · [ObjectAssign](docs/utils/ObjectAssign.md) · [ObjectOverwrite](docs/utils/ObjectOverwrite.md) · [ObjectMerge](docs/utils/ObjectMerge.md) · [ObjectUnionize](docs/utils/ObjectUnionize.md)

  - Functions  
  [FunctionAssign](docs/utils/FunctionAssign.md) · [FnAssign](docs/utils/FnAssign.md) · [FunctionOverwrite](docs/utils/FunctionOverwrite.md) · [FnOverwrite](docs/utils/FnOverwrite.md) · [FunctionMerge](docs/utils/FunctionMerge.md) · [FnMerge](docs/utils/FnMerge.md) · [FunctionPromisify](docs/utils/FunctionPromisify.md) · [FnPromisify](docs/utils/FnPromisify.md) · [FunctionCallbackify](docs/utils/FunctionCallbackify.md) · [FnCallbackify](docs/utils/FnCallbackify.md)

  - Unions  
  [UnionToIntersection](docs/utils/UnionToIntersection.md) · [UnionLast](docs/utils/UnionLast.md) · [UnionPop](docs/utils/UnionPop.md) · [UnionIntersection](docs/utils/UnionIntersection.md) · [UnionExclusive](docs/utils/UnionExclusive.md) · [UnionToTuple](docs/utils/UnionToTuple.md)

  - Parsing  
  [ParseInt](docs/utils/ParseInt.md) · [ParseIntNegative](docs/utils/ParseIntNegative.md) · [ParseIntPositive](docs/utils/ParseIntPositive.md) · [ParseFloat](docs/utils/ParseFloat.md) · [ParseFloatNegative](docs/utils/ParseFloatNegative.md) · [ParseFloatPositive](docs/utils/ParseFloatPositive.md) · [ParseBigInt](docs/utils/ParseBigInt.md) · [ParseBigIntNegative](docs/utils/ParseBigIntNegative.md) · [ParseBigIntPositive](docs/utils/ParseBigIntPositive.md) · [ParseString](docs/utils/ParseString.md) · [ParseBoolean](docs/utils/ParseBoolean.md) · [ParseObject](docs/utils/ParseObject.md)

  - Maths  
  [Increment](docs/utils/Increment.md) · [Decrement](docs/utils/Decrement.md)

  - Misc  
  [Brand](docs/utils/Brand.md) · [Detailed](docs/utils/Detailed.md) · [ExcludeNullish](docs/utils/ExcludeNullish.md) · [ExcludeNull](docs/utils/ExcludeNull.md) · [ExcludeUndefined](docs/utils/ExcludeUndefined.md) · [ExtractArray](docs/utils/ExtractArray.md) · [ExtractPromise](docs/utils/ExtractPromise.md) · [ExtractParams](docs/utils/ExtractParams.md) · [ExtractReturn](docs/utils/ExtractReturn.md) · [KeyOf](docs/utils/KeyOf.md) · [Mapped](docs/utils/Mapped.md) · [PropValue](docs/utils/PropValue.md) · [Toggle](docs/utils/Toggle.md) · [ValueOf](docs/utils/ValueOf.md)

</details>

## ⛏️ Built Using <a name="built_using"></a>

-   [Typescript](https://www.typescriptlang.org/)<br/>
    Strongly typed programming language that builds on JavaScript.
-   [Bun](https://bun.sh/)<br/>
    All-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.

## 📄 License

The code in this project is released under the [MIT License](LICENSE).