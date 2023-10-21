# VueReact

VueReact is a lightweight utility library that allows Vue developers to leverage the reactivity features of Vue while using React components. It provides functions for creating reactive references and values, as well as a watch function for monitoring changes.

## Installation

You can install VueReact via npm:

```bash
npm install vuereact
```

## Usage

### `ref<T>(initialValue: T): { value: T } & IVueReactReactiveValue`

Creates a reactive reference with an initial value.

#### Parameters

- `initialValue`: The initial value of the reference.

#### Returns

An object with the following properties:

- `value`: The current value of the reference.
- `_subscribe(callback: updateFunction)`: Subscribe a callback function to be notified of updates.
- `_unsubscribe(callback: updateFunction)`: Unsubscribe a previously subscribed callback.

### `reactive<T>(initialValue: T): { value: T } & IVueReactReactiveValue`

Creates a reactive value with an initial value.

#### Parameters

- `initialValue`: The initial value of the reactive value.

#### Returns

An object with the following properties:

- `value`: The current value of the reactive value.
- `_subscribe(callback: updateFunction)`: Subscribe a callback function to be notified of updates.
- `_unsubscribe(callback: updateFunction)`: Unsubscribe a previously subscribed callback.

### `watch(prop: { value: any } & IVueReactReactiveValue, callback: updateFunction)`

Watches changes on a reactive value.

#### Parameters

- `prop`: The reactive value to watch.
- `callback`: A callback function to be called when the value changes. It receives the new value as the first argument and the old value as the second argument.

#### Example

```jsx
import { ref, reactive, watch } from 'vuereact';

const App = () => {
  const count = ref(0);
  const message = reactive('Hello');

  watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
  });

  return (
    <div>
      <button onClick={() => count.value++}>Increment</button>
      <div>{message.value}</div>
    </div>
  );
};
```

## License

VueReact is licensed under the MIT License. See [LICENSE](link-to-license) for more information.

---

Feel free to customize the documentation further based on your specific preferences or additional details you'd like to include. Once you're satisfied with the documentation, you can publish it on NPM for Vue developers to use.
