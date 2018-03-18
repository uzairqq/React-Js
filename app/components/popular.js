import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';


function RepoGrid(props) {
    return (
        <ul className='popular-list'>
            {props.repo.map(function (repo, index) {
                return (
                    <li key={repo.name} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt={'Avatar for ' + repo.owner.login}
                                />
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}
RepoGrid.propTypes = {
    repo: PropTypes.array.isRequired
}


function SelectLanguage(props) {
    var languages = ['All', 'Javascript', 'Ruby', 'Python', 'CSS', 'Java', 'Asp.Net'];
    return (
        <ul className="languages">
            {/* <p>Select Language:{this.state.selectedLanguage}</p> */}
            {languages.map((lang) => {
                return (
                    <li
                        style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang} > {lang}</li>
                )
            })}
        </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repo: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentWillMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(lang) {
        this.setState(() => {
            return {
                selectedLanguage: lang,
                repo: null
            }
        })
        api.fetchPopularRepos(lang)
            .then(function (repo) {
                this.setState(function () {
                    return { repo: repo }
                })
            }.bind(this))
    }
    render() {
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!this.state.repo ? <p>LOADING</p> : <RepoGrid repo={this.state.repo} />}
            </div>
        )
    }
}

export default Popular;