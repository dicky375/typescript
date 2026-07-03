"use strict";
// partial <T> -> make all the top level fields optional
const patch10 = { name: 'Dicky' };
const patch11 = { address: { line1: 'line1', city: 'ci', } };
const userAllPatch11 = {
    id: 'u2',
    name: 'name2',
    address: { line1: 'line2', city: 'Dicky' },
    email: 'test',
};
const readonlyUser = {
    id: 'u3',
    name: 'name',
    address: { line1: 'line3',
        city: 'city123'
    }
};
const publicUser = { id: 'u5', name: 'sangan34', };
const omitUserN10 = {
    id: 'u4',
    name: 'name5',
    address: {
        line1: 'd',
        city: 'f'
    }
};
const dirN10 = {
    admin: { id: 'u10', name: 'admin', address: { line1: 'line1', city: 'city' } },
    user: { id: 'u11', name: 'user', address: { line1: 'line1', city: 'city' } },
    editor: { id: 'u12', name: 'editor', address: { line1: 'line1', city: 'city' } }
};
