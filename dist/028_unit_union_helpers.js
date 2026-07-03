"use strict";
// Exclude<U, V> -> remove from U those members assinable to v
//Extract <U, V> -> keep from those members assaiable to V
// Nonnullable
function handleEvent1(e) {
    console.log(e);
}
function handleEvent2(e) {
    console.log(e);
}
function square(num) {
    return num * 2;
}
square(10);
// square(null)
