import React from 'react';

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }
    }
    render() {
        var languages = ['All', 'Javascript', 'Ruby', 'Python', 'CSS', 'Java', 'Asp.Net'];
        return (

            <ul className="languages">
                {languages.map(function (lang, index) {
                    return (
                        <li key={lang}>{lang}</li>
                    )
                })}
            </ul>
        )
    }
}

export default Popular;