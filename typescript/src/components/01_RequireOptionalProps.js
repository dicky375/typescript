import React from 'react';

export function UserCard({ id, name, subtitle }) {
    const displayName = name ?? "Guest";
    return React.createElement(
        'div',
        null,
        React.createElement('strong', null, React.createElement('div', { id })),
        React.createElement('p', null, displayName),
        subtitle ? React.createElement('p', null, subtitle) : null
    );
}
