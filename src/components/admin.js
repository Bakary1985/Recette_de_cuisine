import React from 'react';
import AjouterRecettes from './ajouterRecettes'

class Admin extends React.Component{

	traiterChangement(e, key){
		const recette = this.props.recettes[key];
		const modifRecette = {
			...recette,
			[e.target.name]  : e.target.value
		}
		this.props.modifRecette(key, modifRecette)
	}

	renderAdmin = key =>{
		const recette = this.props.recettes[key];
		return(
			<div className="card" key={key }>
				<form 
				className="admin-form">
					<input onChange={e => this.traiterChangement(e, key)} type="text" placeholder="Nom de le recette" name="nom" value={recette.nom}  />
					<input onChange={e => this.traiterChangement(e, key)} type="text" placeholder="url de l'image" name="image" value={recette.image}  />
					<textarea onChange={e => this.traiterChangement(e, key)} rows="3" type="text" placeholder="la liste des ingredients" name="ingredients" value={recette.ingredients}  />
					<textarea onChange={e => this.traiterChangement(e, key)} rows="15" type="text" placeholder="la liste des instructions" name="instructions" value={recette.instructions}  />
				</form>
			</div>
		)
	}
	
	render(){

		const adminCards = Object
		.keys(this.props.recettes)
		.map(this.renderAdmin);
		return(
			<div className="cards">
				<AjouterRecettes ajouterRecette={this.props.ajouterRecette} />
				{ adminCards }
				<footer>
					<button onClick={(e)=>{this.props.chargerExemple(e)} }> Charger</button>
				</footer>
			</div>
		)
	}

	static propTypes = {
		recettes: React.PropTypes.object.isRequired,
		chargerExemple: React.PropTypes.func.isRequired,
		ajouterRecette: React.PropTypes.func.isRequired,
		modifRecette: React.PropTypes.func.isRequired
	}
}

export default Admin;