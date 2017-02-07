var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
  var legislatorsDivEl = document.querySelector('.legislator-container')
  var legislatorsObjList = serverRes.results

  var largeHtmlStr = ''
    forEach(legislatorsObjList, function(legislatorsObj){
      var firstAndLastName = legislatorsObj.first_name + ' ' + legislatorsObj.last_name
      var legislatorsTitle = legislatorsObj.title
      var legislatorsParty = legislatorsObj.party
      var legislatorsState = legislatorsObj.state
      var legislatorsEmail = legislatorsObj.oc_email
      var legislatorsWebsite = legislatorsObj.website
      var legislatorsFacebook = legislatorsObj.facebook_id
      var legislatorsTwitter = legislatorsObj.twitter_id
      var legislatorsTermEnd = legislatorsObj.term_end

      var legislatorDiv = '<div class="legislator">'
      legislatorDiv += '<h3>'+ firstAndLastName + '</h3>'
      legislatorDiv += '<h4>' + legislatorsTitle + ' -- ' + legislatorsParty + '-'+ legislatorsState + '</h4>'
      legislatorDiv += '<ul>' + '<li>' +'email: ' + legislatorsEmail + '</li>'
      legislatorDiv += '<li>' + 'website: ' + legislatorsWebsite + '</li>'
      legislatorDiv += '<li>' + 'facebook: ' + legislatorsFacebook + '</li>'
      legislatorDiv += '<li>' + 'twitter: ' + legislatorsTwitter + '</li>' + '</ul>'
      legislatorDiv += '<p>' + 'Term End ' + legislatorsTermEnd + '</p>'
      legislatorDiv += '</div>'

      largeHtmlStr += legislatorDiv
      console.log(largeHtmlStr)
    })
    legislatorsDivEl.innerHTML = largeHtmlStr
})
