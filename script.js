/*Variables-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const cell = document.querySelectorAll('.cell');
const strike = document.querySelectorAll('.strike');
const reset = document.querySelector('.reset');
let turn = 0;
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/







/*Functions ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function winDecision(){
    /*Checking for O -------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    /*Checking row ---------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    if (cell[0].childNodes[1].style.visibility === 'visible' && cell[1].childNodes[1].style.visibility === 'visible' && cell[2].childNodes[1].style.visibility === 'visible')
    {
        document.querySelector('.r-top').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[3].childNodes[1].style.visibility === 'visible' && cell[4].childNodes[1].style.visibility === 'visible' && cell[5].childNodes[1].style.visibility === 'visible')
    {
        document.querySelector('.r-mid').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[6].childNodes[1].style.visibility === 'visible' && cell[7].childNodes[1].style.visibility === 'visible' && cell[8].childNodes[1].style.visibility === 'visible')
    {
        document.querySelector('.r-bottom').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }


    /*Checking column --------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    else if (cell[0].childNodes[1].style.visibility === 'visible' && cell[3].childNodes[1].style.visibility === 'visible' && cell[6].childNodes[1].style.visibility === 'visible')
    {
        document.querySelector('.c-left').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[1].childNodes[1].style.visibility === 'visible' && cell[4].childNodes[1].style.visibility === 'visible' && cell[7].childNodes[1].style.visibility === 'visible')
    {
        document.querySelector('.c-mid').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[2].childNodes[1].style.visibility === 'visible' && cell[5].childNodes[1].style.visibility === 'visible' && cell[8].childNodes[1].style.visibility === 'visible')
    {
        document.querySelector('.c-right').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }


    /*Checking diagonal -----------------------------------------------------------------------------------------------------------------------------------------------------------*/
    else if (cell[0].childNodes[1].style.visibility === 'visible' && cell[4].childNodes[1].style.visibility === 'visible' && cell[8].childNodes[1].style.visibility === 'visible')
    {
        document.querySelector('.d-backward').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[2].childNodes[1].style.visibility === 'visible' && cell[4].childNodes[1].style.visibility === 'visible' && cell[6].childNodes[1].style.visibility === 'visible')
    {
        document.querySelector('.d-forward').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }

    /*Checking for X --------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    /*Checking row ----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    else if (cell[0].childNodes[3].style.visibility === 'visible' && cell[1].childNodes[3].style.visibility === 'visible' && cell[2].childNodes[3].style.visibility === 'visible')
    {
        document.querySelector('.r-top').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[3].childNodes[3].style.visibility === 'visible' && cell[4].childNodes[3].style.visibility === 'visible' && cell[5].childNodes[3].style.visibility === 'visible')
    {
        document.querySelector('.r-mid').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[6].childNodes[3].style.visibility === 'visible' && cell[7].childNodes[3].style.visibility === 'visible' && cell[8].childNodes[3].style.visibility === 'visible')
    {
        document.querySelector('.r-bottom').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }


    /*Checking column -------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    else if (cell[0].childNodes[3].style.visibility === 'visible' && cell[3].childNodes[3].style.visibility === 'visible' && cell[6].childNodes[3].style.visibility === 'visible')
    {
        document.querySelector('.c-left').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[1].childNodes[3].style.visibility === 'visible' && cell[4].childNodes[3].style.visibility === 'visible' && cell[7].childNodes[3].style.visibility === 'visible')
    {
        document.querySelector('.c-mid').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[2].childNodes[3].style.visibility === 'visible' && cell[5].childNodes[3].style.visibility === 'visible' && cell[8].childNodes[3].style.visibility === 'visible')
    {
        document.querySelector('.c-right').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }


    /*Checking diagonal ----------------------------------------------------------------------------------------------------------------------------------------------------------*/
    else if (cell[0].childNodes[3].style.visibility === 'visible' && cell[4].childNodes[3].style.visibility === 'visible' && cell[8].childNodes[3].style.visibility === 'visible')
    {
        document.querySelector('.d-backward').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
    else if (cell[2].childNodes[3].style.visibility === 'visible' && cell[4].childNodes[3].style.visibility === 'visible' && cell[6].childNodes[3].style.visibility === 'visible')
    {
        document.querySelector('.d-forward').style.visibility = 'visible';
        for(let i = 0; i < cell.length; i++)
        {
            cell[i].style.pointerEvents = 'none';
        }
    }
}



function turnChanger() {
    if(turn === 0)
        turn = 1;
    else
        turn = 0;
}

function marking(i) {
    if(turn === 0)
    {
        cell[i].childNodes[1].style.visibility = 'visible';
        cell[i].style.pointerEvents = 'none'
    }
    else
    {
        cell[i].childNodes[3].style.visibility = 'visible';
        cell[i].style.pointerEvents = 'none'
    }
    winDecision();
    turnChanger();
}


function initialize() {
    turn = 0;
    for(let i = 0; i < cell.length; i++)
    {
        cell[i].childNodes[1].style.visibility = 'hidden';
        cell[i].childNodes[3].style.visibility = 'hidden';
        cell[i].style.pointerEvents = 'visible';
    }
    for(let i = 0; i < strike.length; i++)
    {
        strike[i].style.visibility = "hidden";
    }
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/








/*EventListeners--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
for(let i = 0; i < cell.length; i++)
{
    cell[i].addEventListener('click', function () {
        marking(i);
    })
}

reset.addEventListener('click', initialize);
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/