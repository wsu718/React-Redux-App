import React from 'react';
import RepoCard from './RepoCard';

import { connect } from 'react-redux';

const RepoList = props => {
    return (
        <div>
            <h3>Your packages:</h3>
            <div className="repoList">
                {props.repos.map(repo => (
                    <RepoCard repo={repo} />
                ))}
                {/* key={repo.id} */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        repos: state.repos,
        length: state.repos.length
    }
}

export default connect(mapStateToProps, {})(RepoList);