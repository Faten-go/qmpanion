import React from 'react'
import {
    Input,
  } from 'semantic-ui-react';

function Searchbar() {
    return (
        <div>
            <Input
                icon={{ name: 'search'}}
                placeholder='Search users...'
            />
        </div>
    )
}

export default Searchbar
