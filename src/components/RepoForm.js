import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addRepo } from '../actions/repoActions';
import Loader from 'react-loader-spinner';

const RepoForm = props => {

    const [addRepoText, setAddRepoText] = useState('');

    const handleChanges = e => {
        setAddRepoText(e.target.value);
    }

    return (
        <div className="repoSearch">
            <label>Repo name:</label>
            <input
                type="text"
                name="RepoText"
                placeholder="eg. jgthms/bulma"
                onChange={handleChanges}
                value={addRepoText}
            />
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={500} width={500} />
            )}
            <button
                onClick={() => props.addRepo(addRepoText)}

            >Add repo</button>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        addRepo: state.addRepo,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { addRepo })(RepoForm);