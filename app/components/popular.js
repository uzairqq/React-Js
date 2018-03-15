import React from 'react';

class Popular extends React.Component {
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