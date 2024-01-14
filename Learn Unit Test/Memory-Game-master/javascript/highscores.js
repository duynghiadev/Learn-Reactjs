function getHighstores(mode, size) {
  const allScores = window.localStorage;
  const filteredScores = [];
  Object.keys(allScores).forEach(function(id) {
    try {
      const parsed = JSON.parse(allScores[id]);
      if (parsed.mode == mode && parsed.size == size) {
        filteredScores.push(parsed);
      }
    } catch (error) {}
  });

  filteredScores.sort(function(a, b) {
    return a.result - b.result;
  });
  return filteredScores;
}

// this is needed to show the winning message in a correct form for highscores table
function getResultTimeFormat(timeInSeconds) {
  var timeString = "";
  if (parseInt(timeInSeconds/3600) > 0) {
		timeString += parseInt(timeInSeconds/3600) + "h, ";
	}
	if (parseInt(timeInSeconds/60)%60 > 0) {
		timeString += parseInt(timeInSeconds/60)%60 + "m, ";
	}
	if (timeInSeconds%60 > 0) {
		timeString += timeInSeconds%60 + "s";
	}
  const result = timeString.trim();
  if (result[result.length - 1] === ",") {
    return result.substring(0,result.length - 1);
  }
	return result;
}

function updateHighstore() {
  const mode = readTypeOfElements();
  const size = readNumberOfElements();
  const highscores = getHighstores(mode, size);

  const data = document.getElementById("highscores-data");
  if (highscores.length > 0) {
    let table = '<table class="highscore-records">';
    table += '<tr><th class="record-position">Position</th>';
    table += '<th class="record-name">Name</th>';
    table += '<th class="record-result">Result</th></tr>';
    highscores.forEach(function(element, index) {
      table += '<tr><td class="record-position">' + (index + 1) + '</td>';
      table += '<td class="record-name">' + element.name + '</td>';
      table += '<td class="record-result">' + getResultTimeFormat(element.result) + '</td></tr>';
    });
    table += '</table>';
    data.innerHTML = table;
  } else {
    const message = '<h3>There is no any records here yet</h3>';
    data.innerHTML = message;
  }
}

function initHighstore() {
  updateHighstore();
  document.getElementsByName("difficulty").forEach(function(element) {
    element.addEventListener("change", function(event) {
      updateHighstore();
    });
  });
  document.getElementsByName("mode").forEach(function(element) {
    element.addEventListener("change", function(event) {
      updateHighstore();
    });
  });
}

initHighstore();
