import React from 'react';

class Connexion extends React.Component{

	onConnect= (e) => {
		e.preventDefault();
		//recuperer la saisie pseudo
		const pseudo = this.pseudo.value;
		//canger l'url
		this.context.router.transitionTo(`/box/${pseudo}`)
		
	}
	render(){
		return(
			<div className="connexionBox">
				<form className="connexion" onSubmit={(e)=>this.onConnect(e)}>
					<input 
						type="text"
						required
						placeholder="Tapez ici votre pseudo"
						ref={(input) =>{this.pseudo = input}}
						/>
						<button type="submit">Connextion</button>
				</form>
			</div>
		)
	}
	static contextTypes = {
		router : React.PropTypes.object
	}
}

export default Connexion;