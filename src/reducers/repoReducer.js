import {
    ADD_REPO_START,
    ADD_REPO_SUCCESS,
    ADD_REPO_FAILURE,
} from '../actions/repoActions';

const initialState = {
    repos: [
        {
            "id": 50264296,
            "node_id": "MDEwOlJlcG9zaXRvcnk1MDI2NDI5Ng==",
            "name": "bulma",
            "full_name": "jgthms/bulma",
            "private": false,
            "owner": {
                "login": "jgthms",
                "id": 1254808,
                "node_id": "MDQ6VXNlcjEyNTQ4MDg=",
                "avatar_url": "https://avatars1.githubusercontent.com/u/1254808?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/jgthms",
                "html_url": "https://github.com/jgthms",
                "followers_url": "https://api.github.com/users/jgthms/followers",
                "following_url": "https://api.github.com/users/jgthms/following{/other_user}",
                "gists_url": "https://api.github.com/users/jgthms/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/jgthms/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/jgthms/subscriptions",
                "organizations_url": "https://api.github.com/users/jgthms/orgs",
                "repos_url": "https://api.github.com/users/jgthms/repos",
                "events_url": "https://api.github.com/users/jgthms/events{/privacy}",
                "received_events_url": "https://api.github.com/users/jgthms/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/jgthms/bulma",
            "description": "Modern CSS framework based on Flexbox",
            "fork": false,
            "url": "https://api.github.com/repos/jgthms/bulma",
            "forks_url": "https://api.github.com/repos/jgthms/bulma/forks",
            "keys_url": "https://api.github.com/repos/jgthms/bulma/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/jgthms/bulma/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/jgthms/bulma/teams",
            "hooks_url": "https://api.github.com/repos/jgthms/bulma/hooks",
            "issue_events_url": "https://api.github.com/repos/jgthms/bulma/issues/events{/number}",
            "events_url": "https://api.github.com/repos/jgthms/bulma/events",
            "assignees_url": "https://api.github.com/repos/jgthms/bulma/assignees{/user}",
            "branches_url": "https://api.github.com/repos/jgthms/bulma/branches{/branch}",
            "tags_url": "https://api.github.com/repos/jgthms/bulma/tags",
            "blobs_url": "https://api.github.com/repos/jgthms/bulma/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/jgthms/bulma/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/jgthms/bulma/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/jgthms/bulma/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/jgthms/bulma/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/jgthms/bulma/languages",
            "stargazers_url": "https://api.github.com/repos/jgthms/bulma/stargazers",
            "contributors_url": "https://api.github.com/repos/jgthms/bulma/contributors",
            "subscribers_url": "https://api.github.com/repos/jgthms/bulma/subscribers",
            "subscription_url": "https://api.github.com/repos/jgthms/bulma/subscription",
            "commits_url": "https://api.github.com/repos/jgthms/bulma/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/jgthms/bulma/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/jgthms/bulma/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/jgthms/bulma/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/jgthms/bulma/contents/{+path}",
            "compare_url": "https://api.github.com/repos/jgthms/bulma/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/jgthms/bulma/merges",
            "archive_url": "https://api.github.com/repos/jgthms/bulma/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/jgthms/bulma/downloads",
            "issues_url": "https://api.github.com/repos/jgthms/bulma/issues{/number}",
            "pulls_url": "https://api.github.com/repos/jgthms/bulma/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/jgthms/bulma/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/jgthms/bulma/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/jgthms/bulma/labels{/name}",
            "releases_url": "https://api.github.com/repos/jgthms/bulma/releases{/id}",
            "deployments_url": "https://api.github.com/repos/jgthms/bulma/deployments",
            "created_at": "2016-01-23T23:48:34Z",
            "updated_at": "2019-12-12T18:48:24Z",
            "pushed_at": "2019-12-11T23:23:35Z",
            "git_url": "git://github.com/jgthms/bulma.git",
            "ssh_url": "git@github.com:jgthms/bulma.git",
            "clone_url": "https://github.com/jgthms/bulma.git",
            "svn_url": "https://github.com/jgthms/bulma",
            "homepage": "https://bulma.io",
            "size": 82667,
            "stargazers_count": 37721,
            "watchers_count": 37721,
            "language": "CSS",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 3125,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 297,
            "license": {
                "key": "mit",
                "name": "MIT License",
                "spdx_id": "MIT",
                "url": "https://api.github.com/licenses/mit",
                "node_id": "MDc6TGljZW5zZTEz"
            },
            "forks": 3125,
            "open_issues": 297,
            "watchers": 37721,
            "default_branch": "master",
            "temp_clone_token": null,
            "network_count": 3125,
            "subscribers_count": 683
        }
    ],
    isFetching: false,
    error: ''
}

const repoReducer = (state = initialState, action) => {
    console.log(action.payload)
    console.log(state, action)
    switch (action.type) {
        case ADD_REPO_START:
            return {
                ...state,
                isFetching: true
            }
        case ADD_REPO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                repos: [
                    ...state.repos,
                    action.payload
                ]
            }
        case ADD_REPO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default repoReducer;