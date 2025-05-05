const popUp = document.getElementById('popup')
window.onload = () => {
  popUp.style.display = 'flex'

  setTimeout(function() {
    popUp.style.display = 'none'
  }, 5000)
}

const closePopup = document.getElementById('close-popup').addEventListener('click', () => {
  popUp.style.display = 'none'
})

let sittingNo = 0;

const sitting = document.getElementById('select')
  sitting.addEventListener('change', function() {
    const selectvalue = sitting.value
    if (selectvalue === '1') {
      sittingNo = 1
    } else {
      sittingNo = 2
    }
  })
const recentScoreBtn = document.getElementById('recent')

const calculateBtn = document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault()
  
  const utmeScore = document.getElementById('utme-score')
  const utmeValue = Number(utmeScore.value)

  const subject1 = document.getElementById('subject-1')
  const subject1Value = subject1.value

  const subject2 = document.getElementById('subject-2')
  const subject2Value = subject2.value
  
  const subject3 = document.getElementById('subject-3')
  const subject3Value = subject3.value

  const subject4 = document.getElementById('subject-4')
  const subject4Value = subject4.value

  const spandisplay = document.getElementById('display-score')

  const recentScoreBtn = document.getElementById('recent')

  
// Function to check score
const checkScore = (score1, score2, score3, score4) => {
  if(score1 === 'A1') {
    olevelScore.subject1 = 90
  } else if (score1 === 'B2') {
    olevelScore.subject1 = 80
  } else if (score1 === 'B3') {
    olevelScore.subject1 = 70
  }else if (score1 === 'C4') {
    olevelScore.subject1 = 60
  } else if (score1 === 'C5') {
    olevelScore.subject1 = 55
  } else if (score1 === 'C6') {
    olevelScore.subject1 = 50
  } else if (score1 === 'D7') {
    olevelScore.subject1 = null
  } else if (score1 === 'E8') {
    olevelScore.subject1 = null
  } else if (score1 === 'F9') {
    olevelScore.subject1 = null
  }

  if (score2 === 'A1') {
    olevelScore.subject2 = 90
  } else if (score2 === 'B2') {
    olevelScore.subject2 = 80
  } else if (score2 === 'B3') {
    olevelScore.subject2 = 70
  } else if (score2 === 'C4') {
    olevelScore.subject2 = 60
  } else if (score2 === 'C5') {
    olevelScore.subject2 = 55
  } else if (score2 === 'C6') {
    olevelScore.subject2 = 50
  } else if (score2 === 'D7') {
    olevelScore.subject2 = null
  } else if (score2 === 'E8') {
    olevelScore.subject2 = null
  } else if (score2 === 'F9') {
    olevelScore.subject2 = null
  }

  if (score3 === 'A1') {
    olevelScore.subject3 = 90
  } else if (score3 === 'B2') {
    olevelScore.subject3 = 80
  } else if (score3 === 'B3') {
    olevelScore.subject3 = 70
  } else if (score3 === 'C4') {
    olevelScore.subject3 = 60
  } else if (score3 === 'C5') {
    olevelScore.subject3 = 55
  } else if (score3 === 'C6') {
    olevelScore.subject3 = 50
  } else if (score3 === 'D7') {
    olevelScore.subject3 = null
  } else if (score3 === 'E8') {
    olevelScore.subject3 = null
  } else if (score3 === 'F9') {
    olevelScore.subject3 = null
  }

  if (score4 === 'A1') {
    olevelScore.subject4 = 90
  } else if (score4 === 'B2') {
    olevelScore.subject4 = 80
  } else if (score4 === 'B3') {
    olevelScore.subject4 = 70
  } else if (score4 === 'C4') {
    olevelScore.subject4 = 60
  } else if (score4 === 'C5') {
    olevelScore.subject4 = 55
  } else if (score4 === 'C6') {
    olevelScore.subject4 = 50
  } else if (score4 === 'D7') {
    olevelScore.subject4 = null
  } else if (score4 === 'E8') {
    olevelScore.subject4 = null
  } else if (score4 === 'F9') {
    olevelScore.subject4 = null
  }

}

  const olevelScore = {
    subject1: 0,
    subject2: 0,
    subject3: 0,
    subject4: 0,
    ototalscore: 0
  }

  checkScore(subject1Value, subject2Value, subject3Value, subject4Value)



  if(utmeValue <= 400) {
    if (sittingNo <= 1)  {
    if(olevelScore.subject1 >= 50 && olevelScore.subject2 >= 50 && olevelScore.subject3 >= 50 && olevelScore.subject4 >= 50) {
        olevelScore.ototalscore = olevelScore.subject1 + olevelScore.subject2 + olevelScore.subject3 + olevelScore.subject4 + 10
    } else {
      olevelScore.ototalscore = olevelScore.subject1 + olevelScore.subject2 + olevelScore.subject3 + olevelScore.subject4
    }
  } else {
    olevelScore.ototalscore = olevelScore.subject1 + olevelScore.subject2 + olevelScore.subject3 + olevelScore.subject4
  }
  
  const displayTotal = Math.round((utmeValue * 0.7) + (olevelScore.ototalscore * 0.3))

  spandisplay.innerHTML = displayTotal;

  localStorage.setItem('recent-score', displayTotal)
  }
  

  recentScoreBtn.innerHTML = parseInt(localStorage.getItem('recent-score'))

})


const recentScore = parseInt(localStorage.getItem('recent-score'))
if (recentScore) {
  recentScoreBtn.innerHTML = recentScore
}