import * as S from './styled'

type ReposProps = {
    nameRepo: string
    fullNameRepo: string
    linkToRepo: string
    description: string
}

export function RepositoryItems({
    nameRepo,
    description,
    linkToRepo,
    fullNameRepo
}: ReposProps) {

    return (
        <S.Wrapper>
            <div className="info">
                <h2>{nameRepo}</h2>
                <h4>{description}</h4>
            </div>
            <div className="link">
                <a href={linkToRepo} target="_blank" rel="noreferrer">{fullNameRepo}</a>
            </div>
        </S.Wrapper>
    )
}
