export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    price,
    bookingUrl,
    order
  }
`

export const footerQuery = `
    *[_type == "footer"] | order(order asc) {
        _id,
        title,
        price,
        bookingUrl,
        order
    }
`

export const barbersQuery = `
    *[_type == "barber"] | order(order asc) {
        _id,
        name,
        position,
        "imageUrl": photo.asset->url,
        order
    }
`