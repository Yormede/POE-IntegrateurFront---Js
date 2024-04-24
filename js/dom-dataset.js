/* la syntaxe switch */

const data = 14;

switch(data){
    case 13:
        console.log('pas de chance');
    break;
    case 22:
        console.log('c\'est les flics');
    break;
    case 12:
    case 14:
        console.log('c\'est 12 ou 14');
    break;
    case '':
    default:
        console.log('quand aucun résultat ne correspond');
}
/* switch remplace aisément ce type de if imbriqué : */
/*
if(data === 13){
    console.log('pas de chance');
}else if(data === 22){
    console.log('c\'est les flics');
}else if(data === 12 || data === 14){
    console.log('c\'est 12 ou 14');
}else{
    console.log('quand aucun résultat ne correspond');
}
*/

/* switch true */
switch(true){
    case ( (data+1) === 14 ):
        console.log('c\'est 14');
    case ( (data%2) === 0 ):
        console.log('c\'est paire');
    break;
    case ( (data%2) === 1 ):
        console.log('c\'est impaire');
    break;
    default:
        console.log(' 1 + 1 ça fait deux, banane');
}

/* au survol de chacun des paragraphe, selon les dataset, appliquer des changement de style */

/* récupérer les paragraphes ayant au moins le dataset "data-module" */

loaded(function(){
    const pModule = q('p[data-module]');
    /*console.log(allP);*/
    pModule.forEach(element=>{
        const module = element.dataset.module;
        /*console.log(module);*/
        switch(module){
            case 'color':
                const color = element.dataset.color || '#ff0000';
                element.addEventListener('mouseover', function(){
                    this.style.setProperty('color', color);
                });
                element.addEventListener('mouseleave', function(){
                    this.style.removeProperty('color');
                });
            break;
            case 'font':
            case 'magie':
                /* mini exo :  faire la partie font et magie, si pas d'indication de poid, appliquer '900' */
                const font = element.dataset.weight || '900';
                element.addEventListener('mouseover', function(){
                    this.style.setProperty('font-weight', font);
                });
                element.addEventListener('mouseleave', function(){
                    this.style.removeProperty('font-weight');
                });
            break;
            case 'after':
            default:
                /* code after ou par défaut */
                const style = element.dataset.style || 'italic';
                element.addEventListener('mouseover', function(){
                    this.style.setProperty('font-style', style);
                });
                element.addEventListener('mouseleave', function(){
                    this.style.removeProperty('font-style');
                });
        }
    });

    /* 
    interaction avec le tableaur : le pointeur 
    
    1 récupérer toutes les td qui sont concernées par la fonctionnalité

    2 abonner chaque td à deux écouteurs d'événement
        - un pour l'entrée dans le périmètre de la td
        - un pour la sortie du périmètre de la td

    */

    const tds = sA('#coord td[data-column][data-line]');
    tds.forEach(element=>{
        const column = element.dataset.column;
        element.addEventListener('mouseenter', function(){
            element.parentElement.style.background = 'rgba(255, 0, 0, 0.5)';
            sA(`#coord td[data-column="${column}"]`).forEach(td=>{
                td.style.background = 'rgba(255, 0, 0, 0.5)';
            });
        });
        
        element.addEventListener('mouseleave', function(){
            element.parentElement.style.removeProperty('background');
            sA(`#coord td[data-column="${column}"]`).forEach(td=>{
                td.style.removeProperty('background');
            });
        });
    });
});