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
    email: 'test@example.com',
    address: { line1: 'line3', city: 'city123' }
};
