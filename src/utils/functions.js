export const truncateText = (text, max = 30) => {
    if (!text) return
  
    if (text.length > max) {
      return text.substring(0, max) + '...'
    } else return text
}

export const getLink = (data) => {

  if (data.sobconsulta[0] === "sim" ) {    
    return window.location.href = data.link 
  } 

   return window.location.href = data.items[0].sellers[0].addToCartLink
}


export const fixPrice = (data) => {
  return "R$" + Number((data.items[0].sellers[0].commertialOffer.Price)).toLocaleString() + ",00"
}

export const fixPortion = (data) => {
  return "10x de R$" + Number(data.items[0].sellers[0].commertialOffer.Installments[9].Value).toLocaleString() + ",00 sem juros"
}

