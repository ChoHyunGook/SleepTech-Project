

export const DateCalc = (min)=>{
    const days = Math.floor(min / 60 / 24)
   return days
}

export const HourCalc = (min)=>{
    const days = Math.floor(min / 60 / 24)
    const hours = Math.floor((min - (days * 60 * 24 )) / 60);
    return hours
}

export const minsCalc = (min)=>{
    const days = Math.floor(min / 60 / 24)
    const hours = Math.floor((min - (days * 60 * 24 )) / 60);
    const mins = min - (days * 60 * 24) - (hours * 60);
    return mins
}





export const Data = [
         {
             date:'2023-03-01',
             beforeSleep:'60',
             sleepTime:'360',
             NREMSleep:'240',
             REMSleep:'120',
             Snoring:'20',
             Toss:'10'
         },
         {
             date:'2023-03-02',
             beforeSleep:'30',
             sleepTime:'480',
             NREMSleep:'280',
             REMSleep:'200',
             Snoring:'15',
             Toss:'20'
         },
         {
             date:'2023-03-03',
             beforeSleep:'10',
             sleepTime:'300',
             NREMSleep:'180',
             REMSleep:'120',
             Snoring:'15',
             Toss:'20'
         },
         {
             date:'2023-03-04',
             beforeSleep:'50',
             sleepTime:'420',
             NREMSleep:'300',
             REMSleep:'120',
             Snoring:'5',
             Toss:'3'
         },
         {
             date:'2023-03-05',
             beforeSleep:'20',
             sleepTime:'360',
             NREMSleep:'220',
             REMSleep:'140',
             Snoring:'20',
             Toss:'10'
         },
         {
             date:'2023-03-06',
             beforeSleep:'63',
             sleepTime:'540',
             NREMSleep:'480',
             REMSleep:'60',
             Snoring:'30',
             Toss:'15'
         },
         {
             date:'2023-03-07',
             beforeSleep:'26',
             sleepTime:'350',
             NREMSleep:'230',
             REMSleep:'120',
             Snoring:'3',
             Toss:'2'
         }
     ]
