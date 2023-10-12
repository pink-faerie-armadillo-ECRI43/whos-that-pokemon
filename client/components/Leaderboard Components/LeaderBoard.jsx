import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserScores from './UserScores.jsx'

// THIS IS HOW YOU WOULD USE AN ACTION TO INVOKE SPECIFIC REDUCER METHOD
// import { updateUser } from '../slices/pokemonSlice.js';
// const dispatch = useDispatch();
  // let response;
  // dispatch(updateUser(response))


const LeaderBoard = () => {
  const highScores = useSelector((state) => state.pokemon.highScores);

  // // Test array
  // const testState = [{username: 'rick', score: '1'}, {username: 'rick', score: '2'}, {username: 'rick', score: '3'}, {username: 'rick', score: '4'}, {username: 'rick', score: '5'}]
  
  // // logic to sort highScores state from object with hightest score to lowest score
  // for (let i = 0; i < testState.length; i++) {
  //   for (let j = 0; j < (testState.length - i - 1); j++) {
  //     if (testState[j].score < testState[j + 1].score) {
  //       let lowerScore = testState[j];
  //       testState[j] = testState[j + 1];
  //       testState[j + 1] = lowerScore;
  //       }
  //     }
  //   }
  
  // // test components
  // const testNameArr = []
  // for (let i = 0; i < testState.length; i++) {
  //   testNameArr.push(
  //     <UserScores 
  //       key = {i}
  //       username = {testState[i].username}
  //       // score = {testState[i].score}
  //       />
  //   )
  // }

  // const testScoreArr = []
  // for (let i = 0; i < testState.length; i++) {
  //   testScoreArr.push(
  //     <UserScores 
  //       key = {i}
  //       // username = {testState[i].username}
  //       score = {testState[i].score}
  //       />
  //   )
  // }


  return (
  <div className='leaderboard-container'>
    <h1>High Scores</h1>
      <div className='leaderboard-box'>
          {highScores.map(el => <UserScores key={el.username.concat(el.score)} username={el.username} score={el.score}/>)}
          {/* <div className='high-score-user-name'>
            {testNameArr}
          </div>
          <div className='high-score-score'>
            {testScoreArr}
          </div> */}
      </div>
  </div>
  );
};



export default LeaderBoard;

