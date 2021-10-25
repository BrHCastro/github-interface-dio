import React from 'react'

type ReposProps = {
    nameRepo: string
    fullNameRepo: string
    linkToRepo: string
}

export function RepositoryItems({ 
    nameRepo, 
    fullNameRepo, 
    linkToRepo 
}:ReposProps)  {

    return (
        <div>
            <h2>{ nameRepo }</h2>
            <h4>{ fullNameRepo }</h4>
            <a href={ linkToRepo } target="_blank" rel="noreferrer">{ fullNameRepo }</a>
        </div>
    )
}
