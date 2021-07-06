createtictacarray();
    function createtictacarray()
    {
        var tictacarray =[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '];
        var updatedtictacarray = tictacarray.slice(1,10);
        console.log(" Array Created with Length.." , updatedtictacarray.length);
    }

    acceptinguserinput();
    function acceptinguserinput()
    {
        var userchoice = prompt("Please Choose X or 0 :");
        var computerchoice =0;
        if(userchoice == 0)
        {
            computerchoice = 'X';
        }
        console.log(" UserChoice = ",userchoice );
        console.log(" computerchoice = ",computerchoice );
    }
