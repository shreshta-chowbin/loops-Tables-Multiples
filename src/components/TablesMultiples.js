import React from 'react'
import '../tablesMultiples.css'

function TablesMultiples() {

    let a=1;

  return (
    <div className='tableMultiplesDiv'>
        
        <div className='buttonsDiv'>
            <button type='button'
            onClick={()=>{

                while(a<=100)
                    {
                        console.log(a);
                        a++;
                    }
            }}
            >while</button>
        </div>


        <div className='buttonsDiv'>
            <button type='button'
            onClick={()=>{
                do
                {
                    console.log(a);
                    a++;
                }
            while(a<=-1)
            }}
            >do while</button>
        </div>



        <div className='buttonsDiv'>
        <button type='button'
        onClick={()=>{

            for(let i=1 ; i<=1000 ; i++)
            {
                for(let j=1 ; j<=100 ; j++)
                {

                    if( ((i>77 && i<79) || (i>95 && i<97) || (i>53 && i<55) || (i>124 && i<126) || (i>745 && i<747) || (i>328 && i<330) || (i>110 && i<112) || (i>455 && i<457)) || ((j>9 && j<11) || (j>14 && j<16) || (j>19 && j<24) || (j>46 && j<48) || (j>75 && j<77) || (j>98 && j<100)) )
                        {
                            continue;
                        }
                        console.log(`${i}*${j}=${i*j}`);
                }
            }
            

        }}
        >for</button>
        </div>


    </div>
  )
}

export default TablesMultiples
