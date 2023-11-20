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
El lorito Pepe es un meterete
Y un poquito charlatán
Es un loro muy travieso que siempre se mete
Cuando no tiene que hablar (¡prr, prr!)
Sobre su cabeza tiene un gran copete
Siempre despeinado está
Anteayer le regalaron un peine muy grande
Por si se quiere peinar
¡Hola, Pepe! (¡Hola, Pepe!)
¿Cómo te va? (¿Cómo te va?, ¡prr, prr!)
Rica papa (rica papa)
Te voy a dar (te voy a dar)
¡Hola, Pepe! (¡Hola, Pepe!)
¿Cómo te va? (¿Cómo te va?, ¡prr!)
Rica papa (rica papa)
Te voy a dar (te voy a dar, ¡prr, prr!)
El lorito Pepe vive en una rama
Muy tranquilo en libertad
Aunque, a veces, en su auto sale de paseo
Recorriendo la ciudad (¡prr, prr!)
Con tantas bocinas, iba distraído
Y en la calle se perdió
Mas charlando en una esquina con los pajaritos
Mi vecina lo encontró
¡Hola, Pepe! (¡Hola, Pepe!)
¿Cómo te va? (¿Cómo te va?, ¡prr, prr!)
Rica papa (rica papa)
Te voy a dar (te voy a dar)
¡Hola, Pepe! (¡Hola, Pepe!)
¿Cómo te va? (¿Cómo te va?, ¡prr!)
Rica papa (rica papa)
Te voy a dar (te voy a dar, ¡prr, prr!)
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
