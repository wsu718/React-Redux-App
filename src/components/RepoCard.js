import React from 'react';

const RepoCard = props => {
    return (
        <div className="repoCard">
            <h3>{props.repo.name}</h3>
            <p><span className="titles">Stars: </span>{props.repo.stargazers_count}</p>
            <p><span className="titles">Forks: </span>{props.repo.forks_count}</p>
            <p><span className="titles">Open Issues: </span> {props.repo.open_issues_count}</p>
        </div>
    )
}

export default RepoCard;