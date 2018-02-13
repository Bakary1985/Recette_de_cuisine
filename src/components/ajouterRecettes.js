import React from 'react';


class AjouterRecettes extends React.Component{

	creerRecette = (e) =>{
		e.preventDefault();
		const recette = {
			nom: this.nom.value,
			image: this.image.value,
			ingrédients: this.ingrédients.value,
			instructions: this.instructions.value
		}
		this.props.ajouterRecette(recette)
		this.recetteForm.reset()
	}
	render(){
		return(
			<div className="card">
				<form 
				className="admin-form ajouter-recette"
				ref = { input =>this.recetteForm = input }
				onSubmit={ (e) => this.creerRecette(e) }
				>
					<input type="text" placeholder="Nom de le recette" ref={ input=> this.nom = input} />

					<input type="text" placeholder="Adresse de l'image" ref={ input=> this.image = input} />

					<textarea type="text" placeholder="la liste des ingrédients séparée par une virgule" ref={ input => this.ingrédients = input} rows="3" />
					
					<textarea type="text" placeholder="la liste des instructions séparée par une virgule" ref={ input => this.instructions = input} rows="15" />

					<button type="submit">+ Ajouter une recette</button>
				</form>
			</div>
		)
	}
	static propTypes = {
		ajouterRecette: React.PropTypes.func.isRequired
	}
}

export default AjouterRecettes;