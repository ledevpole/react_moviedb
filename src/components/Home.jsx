import React from 'react';
import {getMovieByKeyword} from '../api/requests'
import {Link} from 'react-router-dom';

class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			movies: []
		}
		
		this.keyword = ""
	}
	
	handleChangeInput(text) {
		this.keyword = text;
	}
	
	onClickSearch(e){
		e.preventDefault();
		getMovieByKeyword(this.keyword)
			.then((res)=>{
				this.setState({movies: res.results})
			})
	}
	
	displayListMovie() {
		return (
			<ul>
				{
					this.state.movies.map((movie)=>{
						return (
							<li key={movie.id}>
								<Link to={'/detail/'+movie.id}>
									{movie.title}
								</Link>
							</li>
						)
					})
				}
			</ul>

		)
	}
	

	render() {
	    return (
	      <div>
	        <h1>Home Page</h1>
				<p>Choisissez un film</p>
				<input 
		          type="text"
		          onChange={(e)=>{
		        	this.handleChangeInput(e.currentTarget.value);
		          }}
		        />
		        <button
		        	onClick={(e)=>{
		        		this.onClickSearch(e)	
		        	}}
		        >Envoyer</button>
		        <p>liste de film</p>
				{this.state.movies.length > 0 && this.displayListMovie()}
		        
	      </div>
	    );
	}
}

export default Home;
