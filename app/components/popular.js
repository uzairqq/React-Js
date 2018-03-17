import React from 'react';
import PropTypes from 'prop-types';

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
            selectedLanguage: 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(() => {
            return {
                selectedLanguage: lang
            }
        })
    }
    render() {
        return (
            <SelectLanguage
                selectedLanguage={this.state.selectedLanguage}
                onSelect={this.updateLanguage}
            />
        )
    }
}

export default Popular;