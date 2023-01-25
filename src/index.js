window.onload = () => {
    console.log('loaded')

    let gameOver = false;

    game();
    /*
    // let cells = <GET ALL cell ELEMENTS>
    let cell = document.getElementsByClassName('cell-x')[0]
    // for (const cell of cells) {
        cell.onclick = (event) => {
            const [, x, y] = event.target.id.split('-')
            console.log(`click on ${x}:${y}`)
            if(cell.className === 'cell'){
                cell.className = 'cell-o'
            }else{
                if (cell.className === 'cell-o'){
                    cell.className = 'cell-x'
                }else{
                    cell.className = 'cell-o'
                }  
            }
        }
    // }*/
    function play(turno) {
        let cell = document.getElementsByClassName(turno)[0]
        cell.onclick = (event) => {
            const [, x, y] = event.target.id.split('-')
            console.log(`click on ${x}:${y}`)
            if(cell.className == 'cell'){
                cell.className = turno;
            }else{
                if (cell.className === 'cell-o'){
                    cell.className = 'cell-x'
                }else{
                    cell.className = 'cell-o'
                }  
            }
        }
    }

    function game() {
        let i = 0;
        
        while (gameOver == false && i<=8) {
            if (i%2 == 0) {
                //Turno de O
                document.getElementsById('turn').className="turn-cell-o"
                play('cell-o');

            }else{
                //Turno de X
                document.getElementsById('turn').className="turn-cell-x"
                play('cell-x');
            }
            i++;
        }
        if(i>8){
            //Emapte
        }
        //function acabar juego
    }

    function end(){

    }

    function win(player) {
        
    }
}


/* TO DO:
-ALTERNAR CIRCULO Y CRUZ
-CLICK SOBRE CASILLA
-CONDICIÓN DE VICTORIA
-FINAL GANAR
-FINAL EMPATAR
 */
