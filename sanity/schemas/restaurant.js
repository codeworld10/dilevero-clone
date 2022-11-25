export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "restaurant",
      title: "Restaurant Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
     {
       name: "description",
       title: "Short Description",
       type: "string",
       validation: (Rule) => Rule.required().min(10).max(100),
     },
     {
       name: "image",
       title: "Restaurant Image",
       type: "image",
     },
     {
       name: "lat",
       title: "Latitude of Restaurant",
       type: "number",
     },
     {
       name: "long",
       title: "Longitude of Restaurant",
       type: "number",
     },
     {
       name: "address",
       title: "Address of Restaurant",
       type: "string",
       validation: (Rule) => Rule.required(),
     },
     {
       name: "rating",
      title: "Rating of Restaurant",
       type: "number",
       validation: (Rule) =>
         Rule.required()
           .min(1)
           .max(5)
          .error("Rating must be between 1 and 5"),
     },
     {
       name: 'type',
       title: 'Category',
       validation: (Rule) => Rule.required(),
       type: 'reference',
       to: [{type: 'category'}]
     },
     {
      name: 'dishes',
      title: 'Dishes',
       type: 'array',
       of: [{type: 'reference', to: [{type: 'dish'}]}]
     },
  ],
};
