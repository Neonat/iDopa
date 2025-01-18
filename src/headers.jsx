import React from 'react'

export function page1header() {
    const name = 'Nat';
    if (name)
        return <h1>Welcome to DOPA, {name}</h1>;
    return <h1>Welcome to DOPA</h1>;
}

export function page2header(datestart,dateend) {
    return <h2>Submit your availabilities for {datestart} to {dateend}.</h2>;
}

