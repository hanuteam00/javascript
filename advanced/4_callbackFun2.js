downloadPhoto('/Users/manhkaka/Downloads/automation-tut/javascript/advanced/CauMayHomeStay.jpg', handlePhoto)

function handlePhoto (error, photo) {
  if (error) console.error('Download error!', error)
  else console.log('Download finished', photo)
}

console.log('Download started')
