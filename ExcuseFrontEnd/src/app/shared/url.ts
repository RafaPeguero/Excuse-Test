export let BASEURL = 'https://localhost:44344/api/';


export let APIURL = { 
    Excuses: {
        GetAllExcuses:`${BASEURL}Excuses`,
        GetExcuse:`${BASEURL}Excuses/`,
        PostExcuse:`${BASEURL}PostExcuse`,
        PutExcuse:`${BASEURL}PutExcuse/`,
        DeleteExcuse:`${BASEURL}DeleteExcuse/`,
        GetAllExcusesType:`${BASEURL}ExcuseTypes`


    }
}