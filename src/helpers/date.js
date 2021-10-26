import moment from "moment"

export const date = (dates) =>{

    const date = moment(dates);

    return date.format('HH:mm a | MMMM Do')
    
}