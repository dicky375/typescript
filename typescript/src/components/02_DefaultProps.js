import React from 'react';

export function GreetA({ name = 'Guest', shout = false }) {
    const text = shout ? name.toUpperCase() : name;
    return React.createElement('p', null, `hi ${text} `);
}
export function GreetB(props) {
    const name = props.name ?? 'Guest';
    const shout = props.shout ?? false;
    const text = shout ? name.toUpperCase() : name;
    return React.createElement('p', null, `hi ${text} `);
}
