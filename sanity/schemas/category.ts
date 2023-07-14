import {defineType} from 'sanity';

export default defineType({
     type:"document",
     name:"category",
     title:"Category",
     fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'portofolios',
            title:'Portofolios',
            type:'array',
            of:[
                { type:'reference',to:{ type:"portofolio" } }
            ]
        }
     ]
});