import React from 'react';
import RepoList from './RepoList.jsx';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      userRepos: []
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.postRepo = this.postRepo.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    // this.props.onSearch(this.state.term);
    this.postRepo();
  }

  postRepo() {
    axios.post('/repos', {
      owner: this.state.term
    })
    .then((response) => {
      console.log(response);
      // setState of userRepos to repo's from response (array input)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username:
      <input
      value={this.state.term}
      onChange={this.onChange}
      />
      <button
      onClick={this.search}>
      Add Repos </button>
      <RepoList repos={this.state.userRepos}/>
    </div>)
  }
}

export default Search;