import React, { useState, useEffect } from 'react'
import Navbar from "../../../../Components/Navbar/Navbar"
import styles from './TypingChallengeLeaderboard.module.css'
import Form from "./ChallengeType/ChallengeForm"
import LeaderBoard from './ChallengeType/LeaderBoard'

const TypingChallengeLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([])
  const [data, setData] = useState([])
  const [numberOfDays, setNumberOfDays] = useState(0)
  const [teamCollegeName, setTeamCollegeName] = useState("")

  useEffect(() => {
    // console.log(data)
    setLeaderboard(data.map((member, index) => {
      let score = 0, streak = -1, qualified = true, brokenDays = 0
      // eslint-disable-next-line no-unused-vars
      const [no, name, ...days] = Object.values(member)

      // eslint-disable-next-line array-callback-return
      days.map((day, index) => {
        if (index < numberOfDays) {
          if (day === "TRUE") {
            score += 50
            streak += 1
            score += streak < 5 ? streak * 10 : 50
            brokenDays = 0
          }
          else {
            score -= 10
            streak = -1
            brokenDays += 1
          }
          if (brokenDays >= 3) qualified = false
          if (!qualified || score < 0) score = 0
          if (!qualified && streak >= 5) {
            qualified = true
            score += 50 * 6
          }
        }
      })
      // console.log(name, streak)
      return { name: name, score: score, streak: streak, qualified: qualified }
    }).sort((a, b) => b.score - a.score))
  }, [data, numberOfDays])


  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Form exportGoogleSheetData={setData} numberOfDays={numberOfDays} getNumberOfDays={setNumberOfDays} getCollege={setTeamCollegeName} />
        <LeaderBoard leaderboard={leaderboard} Day={numberOfDays} College={teamCollegeName} />
      </div>
    </>
  )
}

export default TypingChallengeLeaderboard