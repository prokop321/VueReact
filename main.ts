import { useState, useEffect } from "react";
// Define the type for the update function 
type updateFunction = (newValue?: any, oldValue?: any) => any;
// Define the interface for reactive values
interface IVueReactReactiveValue { _subscribe: (callback: updateFunction) => void; _unsubscribe: (callback: updateFunction) => void; }
// Function to create a reactive reference 
export function ref(initialValue: T): { value: T } & IVueReactReactiveValue { const [_render, _setRender] = useState(false); let updateStack: (() => any)[] = [];const registerUpdate = (callback: () => any) => { updateStack.push(callback); };const unregisterUpdate = (callback: () => any) => { updateStack = updateStack.filter(a => callback !== a); };const handler = { set(target: any, prop: string, val: any) { updateStack.forEach((f) => f(val, target[prop])); target[prop] = val; _setRender(prev => !prev); return true; }, };const proxy = new Proxy({ value: initialValue, _subscribe: registerUpdate, _unsubscribe: unregisterUpdate }, handler); return proxy; }
// Function to create a reactive value 
export function reactive(initialValue: T): { value: T } & IVueReactReactiveValue { const [_render, _setRender] = useState(false); let updateStack: (() => any)[] = [];const registerUpdate = (callback: () => any) => { updateStack.push(callback); };const unregisterUpdate = (callback: () => any) => { updateStack = updateStack.filter(a => callback !== a); };const handler = { set(target: any, prop: string, val: any) { updateStack.forEach((f) => f(val, target[prop])); target[prop] = val; _setRender(prev => !prev); return true; }, };const proxy = new Proxy({ value: initialValue, _subscribe: registerUpdate, _unsubscribe: unregisterUpdate }, handler); return proxy; }
// Function to watch changes on reactive values
export function watch(prop: { value: any } & IVueReactReactiveValue, callback: updateFunction) { useEffect(() => { prop._subscribe(callback);return () => {
  prop._unsubscribe(callback);
};}, [prop]); }
