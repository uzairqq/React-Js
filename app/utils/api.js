import axios from 'axios';

module.exports = {
    fetchPopularRepos: (language) => {
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'
            + language +
            '&sort=stars&order=desc&type=Repositories');

        return axios.get()
            .then((response) => {
                return respon.data.items;
            });
    }
}