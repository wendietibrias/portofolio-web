import { defineType } from "sanity";

export default defineType({
    name:'skills',
    title:'Skills',
    type:'document',
    fields:[
        {
            type:'string',
            name:'title',
            title:'Title'
        },
        {
            type:'image',
            name:'icon',
            title:'Icon'
        },
        {
            type:'string',
            name:'excerpt',
            title:'Excerpt'
        }
    ]
});