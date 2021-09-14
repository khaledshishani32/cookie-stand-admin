import React, { useState } from 'react'
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';



export default function Mian() {
    let lastone = []

    const [sales_0ne, setSale] = useState([])
    // const[workingHours,setworkingHours]=useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
    const [stores, setStore] = useState([]);
    function formhandler(event) {
        event.preventDefault();

        const store = {
            location: event.target.location.value,
            minimum: event.target.minimum.value,
            maximum: event.target.maximum.value,
            average: event.target.average.value,
        }
        const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

        const cal_hour=hours.map(()=>{
            return Math.floor(Math.random() * parseInt(store.average) * (parseInt(store.maximum) - parseInt(store.minimum)+ 1) + parseInt(store.minimum))
         })
     
        const objectData={
            location:event.target.location.value,
            cal_hour:cal_hour,
            sum:cal_hour.reduce((a, b) => a + b, 0)
        }
    
        setSale(storess => [...storess, objectData])

        setStore(storess => [...storess, store])

        lastone.push(stores.length - 1)
   
    }
    console.log(sales_0ne)
    // console,log(store)
    // console.log(stores);
    


    return (
        <>

            <CreateForm formhandler={formhandler} />
            {/* <ReportTable  sales_0ne ={sales_0ne}/> */}
            {
                // stores && stores.map(store => {
                //     <p>{store.location} {store.maximum} {store.minimum} {store.average}</p>
                // })

                // stores.map(obj => { 
                //     return(
                //         <p>{obj.location} {obj.minimum} {obj.minimum} {obj.average}</p>

                //     )
                          sales_0ne.map(obj =>{
                              return <h1 key={obj}>{obj.location} {obj.cal_hour}</h1>
                          })

                // })

            }

        </>
    )



}