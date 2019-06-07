const modaalVenster = {
	alleInhoud: document.querySelectorAll('.Content'),
	alleKnoppen: document.querySelectorAll('.Button'),

	background() {
		let achtergrond = document.createElement('div');
		achtergrond.classList.add('modaal-achtergrond');
		achtergrond.addEventListener('click', () => this.sluiten());
		return achtergrond;
	},
	modaal() {
		let modaal = document.createElement('div');
		modaal.className = 'modaal';
		modaal.addEventListener('click', (evt) => evt.stopPropagation());
		return modaal;
	},
	closebutton() {
		let sluitknop = document.createElement('div');
		sluitknop.className = 'sluit-knop';
		sluitknop.innerHTML = '&#x00D7';
		sluitknop.addEventListener('click', () => this.sluiten());
		return sluitknop;
	},
	open(elem) {
		this.achtergrond = this.background();
		this.sluitKnop   = this.CloseButton();
		this.modaal      = this.Modaal();
		this.modaal       .appendChild(this.sluitKnop);
        this.modaal       .appendChild(elem);
		this.achtergrond  .appendChild(this.modaal);
		document.body     .appendChild(this.achtergrond);
	},
	sluiten() {
		this.modaal       .innerHTML = '';
		document.body     .removeChild(this.achtergrond);
	}
}

for (let i= 0; i<modaalVenster.alleInhoud.length; i++) {
	modaalVenster.alleInhoud[i].parentNode.removeChild(modaalVenster.alleInhoud[i]);
}
for (let i= 0; i<modaalVenster.alleInhoud.length; i++) {
	modaalVenster.alleKnoppen[i].addEventListener('click', () => {
		let inhoud = modaalVenster.alleInhoud[i];
		modaalVenster.open(inhoud);
	})
}
