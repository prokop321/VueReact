## Vue Reactivity Functions Documentation

### `ref<T>(initialValue: T): { value: T } & IVueReactReactiveValue`

Creates a reactive reference with an initial value.

- **Parameters**:
  - `initialValue` (T): The initial value of the reference.

- **Returns**:
  - `{ value: T } & IVueReactReactiveValue`: An object containing the reactive value and methods for subscription and unsubscription.

- **Methods**:
  - `_subscribe(callback: updateFunction)`: Subscribe a callback function to be notified of value changes.
  - `_unsubscribe(callback: updateFunction)`: Unsubscribe a previously registered callback.

- **Usage**:

  ```jsx
  import { ref } from "./vue-reactivity";

  const myRef = ref(42);

  // Access the reactive value
  console.log(myRef.value); // Output: 42

  // Subscribe to value changes
  myRef._subscribe((newValue, oldValue) => {
    console.log(`Value changed from ${oldValue} to ${newValue}`);
  });

  // Update the value
  myRef.value = 99; // Output: "Value changed from 42 to 99"
  ```

### `reactive<T extends object>(initialValue: T): T & IVueReactReactiveValue`

Creates a reactive value with an initial object.

- **Parameters**:
  - `initialValue` (T): The initial object to be made reactive.

- **Returns**:
  - `T & IVueReactReactiveValue`: A reactive object with methods for subscription and unsubscription.

- **Methods**:
  - `_subscribe(callback: updateFunction)`: Subscribe a callback function to be notified of value changes.
  - `_unsubscribe(callback: updateFunction)`: Unsubscribe a previously registered callback.

- **Usage**:

  ```jsx
  import { reactive } from "./vue-reactivity";

  const myReactive = reactive({ name: "John", age: 30 });

  // Access the reactive properties
  console.log(myReactive.name); // Output: "John"
  console.log(myReactive.age); // Output: 30

  // Subscribe to value changes
  myReactive._subscribe((newValue, oldValue) => {
    console.log(`Property changed from ${oldValue} to ${newValue}`);
  });

  // Update a property
  myReactive.name = "Jane"; // Output: "Property changed from John to Jane"
  ```

### `watch(prop: { value: any } & IVueReactReactiveValue, callback: updateFunction)`

Watches changes on a reactive value.

- **Parameters**:
  - `prop` ({ value: any } & IVueReactReactiveValue): The reactive value to watch.
  - `callback` (updateFunction): The callback function to be executed when the value changes.

- **Usage**:

  ```jsx
  import { watch } from "./vue-reactivity";

  const myRef = ref(42);

  // Watch for changes
  watch(myRef, (newValue, oldValue) => {
    console.log(`Value changed from ${oldValue} to ${newValue}`);
  });

  // Update the value
  myRef.value = 99; // Output: "Value changed from 42 to 99"
  ```

---

Please ensure to import the functions correctly according to your project setup. This documentation assumes that the functions are located in a file named `vue-reactivity.js` in the same directory.
