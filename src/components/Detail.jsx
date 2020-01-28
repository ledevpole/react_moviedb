import React from 'react';
import {getMovieById} from '../api/requests';
import {Link} from 'react-router-dom';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            movie: null
        }
        this.id = this.props.match.params.id
    }
    
    componentDidMount(){
        getMovieById(this.id)
        .then((res)=>{
            this.setState({movie: res});
        })

    }
    
    
    render() {
        const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
        return (
            <div>
                <Link to='/'>Retour</Link>
                <p>Id du film : {this.id}</p>
                { this.state.movie !== null  && <div>
                    <h1>{this.state.movie.title}</h1>
                    <img src={url_img+this.state.movie.poster_path} />
                    <p>{this.state.movie.overview}</p>
                </div>
                }
            </div>
        )
    }
    
    
}


export default Detail;