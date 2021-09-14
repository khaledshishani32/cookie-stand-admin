import React from 'react'

export default function ReportTable({ sales_0ne }) {
    const times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
    // console.log(sales);
    return (
        <>
            <table className="table-fixed flex items-center justify-center " >
                <thead>

                    {
                        times.map(obj => {
                            return (

                                <th key={obj} className="px-4 py-2 ..." >{obj}</th>


                            )
                        })
                    }

                </thead>
                <tbody>
                     


                    {


                      

                    }


                    {/* {

                        <tr>
                                

                                
                                sales_0ne.map(obj=>{
                                 return (<td key={Math.random()}>{obj.loction}</td>)
                                
                                })



                        </tr>

                    } */}


                </tbody>
            </table>
        </>
    )
}
