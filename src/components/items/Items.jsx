import React from 'react'
import { Item } from '@/components/Item/Item';

/**
 * Items Container
 */
export const Items = ({ response }) => {

    return (
        <>
            {response.items && response.items.map((item) =>
                <Item
                    key={item.id}
                    id={item.id}
                    picture={item.picture}
                    title={item.title}
                    price={item.price}
                    location={item.location}
                />)}
        </>
    )
}

