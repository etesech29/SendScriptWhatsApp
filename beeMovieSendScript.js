async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Yo conozco una vecina
Que ha comprado una gallina
Me parece una sardina enlatada
Tiene las patas de alambre
Porque pasa mucho hambre
Y la pobre está todita desplumada
Pone huevos en la sala
Y también en la cocina
Pero nunca los pone en el corral
La gallina turuleca
Es un caso singular
La gallina turuleca
Está loca de verdad
La gallina turuleca
Ha puesto un huevo
Ha puesto dos, ha puesto tres
La gallina turuleca
Ha puesto cuatro
Ha puesto cinco, ha puesto seis
La gallina turuleca
Ha puesto siete
Ha puesto ocho, ha puesto nueve
¿Dónde está esa gallinita?
Déjala, la pobrecita
Déjala que ponga 10
Yo conozco una vecina
Que ha comprado una gallina
Me parece una sardina enlatada
Tiene las patas de alambre
Porque pasa mucho hambre
Y la pobre está todita desplumada
Pone huevos en la sala
Y también en la cocina
Pero nunca los pone en el corral
La gallina turuleca
Es un caso singular
La gallina turuleca
Está loca de verdad
La gallina turuleca
Ha puesto un huevo
Ha puesto dos, ha puesto tres
La gallina turuleca
Ha puesto cuatro
Ha puesto cinco, ha puesto seis
La gallina turuleca
Ha puesto siete
Ha puesto ocho, ha puesto
¿Dónde está esa gallinita?
Déjala, la pobrecita
Déjala que ponga 10
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
