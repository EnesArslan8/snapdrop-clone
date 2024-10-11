import React, { useState } from 'react'
import shortId from 'shortid'

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Navigates to a room with the given id.
 * @param {Object} history - The history object from React Router.
 * @param {string} roomId - The id of the room to navigate to.
 */
/******  c10d7969-e7af-4f32-b3e8-95d0fb4b005e  *******/
const goToRoom = (history, roomId) => {
  history.push(`/${roomId}`)
}


export function goToRoomInput({history}) {
  let [roomId, setRoomId] = useState(shortId.generate());

  return (<div className="enter-room-container">
    <form>
          <input type="text" value={roomId} placeholder="Room id" onChange={(event) => {
            setRoomId(event.target.value)
          }}/>
          <button onClick={() => {
            goToRoom(history, roomId)
          }}>Enter</button>
          </form>
        </div>)
}