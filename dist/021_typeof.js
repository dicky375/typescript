"use strict";
function describeTypeof(x) {
    if (typeof x === 'string')
        return 'string ';
    if (typeof x === 'number') {
        return 10;
    }
    if (typeof x === 'boolean') {
        return true;
    }
    if (typeof x === 'bigint') {
        return 'bigint';
    }
    if (typeof x === 'symbol') {
        return 'symbol';
    }
    if (typeof x === 'undefined') {
        return 'undefined';
    }
    if (typeof x === 'function') {
        return () => { };
    }
    if (x === null)
        return null;
    return 'object';
}
console.log(describeTypeof('hi'), describeTypeof(23), describeTypeof(true), describeTypeof(10n), describeTypeof(Symbol('dicky')), describeTypeof(undefined), describeTypeof(() => { }), describeTypeof(null), describeTypeof({}));
function info(z) {
    if (Array.isArray(z)) {
        return z;
    }
    if (z instanceof Date) {
        return new Date();
    }
    if (z instanceof Error) {
        return new Error('hbhjg');
    }
    return 'other';
}
console.log(info([1, 2, 3, 4, 5]), info(new Date()), info(new Error('oopss! Error occured')));
