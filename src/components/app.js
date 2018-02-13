import React from 'react';
import Header from './haeder';
import recettes from '../recettes';
import Admin from './admin';
import Cards from './cards';
import base from '../base';


class App extends React.Component{

	state ={
		recettes: {}	
	}

	//on s'inchronyse avec la base
	componentWillMount(){
		this.ref = base.syncState(`${this.props.params.pseudo}/recettes`,{
			context: this,
			state: 'recettes'
		})
	}

	//on demonte la synchronisation
	componentWillUnount(){
		base.removeBinding(this.ref);
	}

	chargerExemple = () =>{
		this.setState({ recettes })
	}

	ajouterRecette = (recette) =>{
		const recettes = {...this.state.recettes}
		const timestamp = Date.now();
		recettes[`recette-${ timestamp }`] = recette;
		this.setState({ recettes })
	}

	modifRecette = (key, modifRecette) => {
		const recettes = {...this.state.recettes}
		recettes[key] = modifRecette;
		this.setState({recettes})
	}
	render(){
		const cards = Object
			.keys(this.state.recettes)
			.map(key => <Cards key={key}  details={this.state.recettes[key]} /> )
		;
		return(
			<div className="box">
				<Header pseudo={this.props.params.pseudo} />
				<div className="cards">
					{ cards }
				</div>
				<Admin 
				recettes = {this.state.recettes}
				chargerExemple={this.chargerExemple} 
				ajouterRecette={this.ajouterRecette}
				modifRecette = {this.modifRecette} 
				/>
			</div>
		)
	}

	static propTypes = {
		params: React.PropTypes.object.isRequired
	}
}

export default App;