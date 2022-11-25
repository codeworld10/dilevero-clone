export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type:"string",
      title: 'Dish Name',
      validation: (Rule) => Rule.required(),
    },
    {
   name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    },
    {
      name:"price",
      title: 'Price of the dish',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(1000),
    },
    {
      name: 'image',
      title: 'Dish Image',
      type: 'image',
    },
  ]
}