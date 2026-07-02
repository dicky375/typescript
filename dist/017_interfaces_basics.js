"use strict";
// interface -> name shape for objects
const user333 = { id: 1,
    name: 'John',
    createdAt: new Date(),
    email: 'john@example.com'
};
const admin333 = {
    id: 2,
    name: 'Admin',
    createdAt: new Date(),
    email: 'admin@example.com',
    permissions: ['admin'],
};
const adminWitMeta333 = {
    id: 2,
    name: "Admin",
    createdAt: new Date(),
    email: "admin@example.com",
    permissions: ["admin"],
    meta: {
        active: true,
    }
};
