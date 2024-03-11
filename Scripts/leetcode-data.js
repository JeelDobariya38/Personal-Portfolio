async function getLeetCodeStats(username) {
    const apiUrl = `https://leetcodestats.cyclic.app/${username}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.status === 'success') {
        const rank = data.ranking;
        const problemsSolved = data.totalSolved;
  
        return { rank, problemsSolved };
      } else {
        throw new Error('Failed to fetch data from LeetCode API.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
}
  
// Replace 'Jeel_Dobariya' with your actual LeetCode username
const leetCodeUsername = 'jeel9582';
var rank = "";
var solved = "";

function updatecontent(rank) {
    document.querySelector("#rank").innerHTML = rank
}

// Call the function and log the result
getLeetCodeStats(leetCodeUsername)
.then((result) => {
    if (result) {
        rank =result.rank;
        solved = result.problemsSolved;
        console.log("rank: " + rank);
        console.log("question-solved: " + solved);
        updatecontent(rank);
    }
})
.catch((error) => {
    console.error('Error:', error.message);
});
  
