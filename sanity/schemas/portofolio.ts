import {defineType} from 'sanity';

export default defineType({
    name:'portofolio',
    type:'document',
    title:'Portofolio',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title',
        },
        {
            name:'excerpt',
            type:'string',
            title:'Excerpt'
        },
        {
            name:'category',
            type:'reference',
            title:'Category',
            to:[{ type:'category' }]
        },
        {
            name:'thumbnail',
            type:'image',
            title:'Thumbnail'
        },
        {
            name:'website',
            type:'string',
            title:'Website'
        },
        {
            name:'repository',
            type:'string',
            title:'Repository'
        },

        {
            name:'technology',
            type:'array',
            title:'Technology',
            of:[
                {
                    type:'object',
                    fields:[
                        {
                            name:'title',
                            type:'string',
                            title:'Title'
                        },
                        {
                            name:'icon',
                            type:'string',
                            title:'Icon'
                        },
                        
                    ]
                }
            ]
        }
    ]
});