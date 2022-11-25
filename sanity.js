import sanity from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanity({
    projectId: 'hmembp1w',
    dataset: 'production',
    useCdn: true,
    apiVersion : '2021-10-21'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client

//sanity cors adding

//sanity cors add http://localhost:19000