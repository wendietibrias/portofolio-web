import {defineType} from 'sanity'

export default defineType({
    type:"document",
    name:"feedback",
    title:"Feedback",
    fields:[
        {
            type:'string',
            name:'name',
            title:'Name'
        },
        {
            type:'string',
            name:'email',
            title:'Email'
        },
        {
            type:'text',
            name:'feedback',
            title:'Feedback'
        }
    ]   
});