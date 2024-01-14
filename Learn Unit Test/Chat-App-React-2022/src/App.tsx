import React, { useEffect, useRef, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { db } from './firestore'
import { v4 as uuidv4 } from 'uuid'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif;
		font-size: 16px;
	}

	*, :after, :before {
		box-sizing: border-box;
	}
`

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`

const Container = styled.div`
  h2 {
    text-align: center;
  }

  &.player-container {
    width: 300px;
    margin: 0px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      border: 1px solid rgba(2, 17, 44, 0.5);
      border-radius: 5px;
      height: 40px;
      width: 100%;
      padding: 8px;
      margin-bottom: 180px;
    }
  }

  &.chat-container {
    width: 600px;
    height: 100vh;
    padding-top: 0px;
    padding-bottom: 30px;
  }
`
const StyledChat = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  height: calc(100vh - 120px);
  border: 1px solid rgba(53, 121, 246, 0.9);
  border-radius: 10px;

  > li {
    padding: 4px 16px;
    margin: 0;

    & + li {
      border-top: 1px solid rgba(53, 121, 246, 0.3);
    }

    &:nth-child(even):not(.autoscroll-target) {
      background: rgba(53, 121, 246, 0.1);
    }

    & + li:hover,
    &:nth-child(even):not(.autoscroll-target):hover {
      background: rgba(53, 121, 246, 0.3);
      border-top: 1px solid rgba(53, 121, 246, 0.5);
      cursor: pointer;
    }

    > p {
      font-size: 14px;

      > .message-sender {
        font-weight: 700;
        background-color: rgba(83, 165, 81, 0.9);
        border-radius: 5px;
        border: 1px solid rgba(83, 165, 81, 1);
        padding: 5px;
        color: #fff;
      }

      > .message-timestamp {
        display: inline-block;
        float: right;
        font-style: italic;
        color: rgba(2, 17, 44, 0.5);
      }
    }

    > .message-content {
      word-break: break-all;
    }
  }
`

const pushToFirebase = async (user: string, text: string): Promise<void> => {
  // we push to the database
  const now = Date.now()

  // the user object will be:
  // user: {
  // 	[randomUuid]: {
  // 		messages: {
  // 			someTimeStamp: 'someMessage'
  // 			someOtherTimeStamp: 'someOtherMessage'
  // 		}
  // 	}
  // }

  await db
    .collection('users')
    .doc(user)
    .set(
      {
        messages: { [now]: text }
      },
      { merge: true }
    )
}

const Player = ({ id }: { id: string }) => {
  // a controlled form where on submit we send some data to firebase
  const [text, setText] = useState('')

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setText('')
          if (text.trim().length > 0) {
            pushToFirebase(id, text).then(() => {
              /* console.info('Message sent for id', id) */
            })
          }
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter message' />
      </form>
    </div>
  )
}

type PlayerIdentity = {
  id: string
  name: string
}
type Message = {
  sender: PlayerIdentity
  timestamp: number
  content: string
}
interface ChatProps {
  identities: Array<PlayerIdentity>
}
const Chat = (props: ChatProps): JSX.Element => {
  // TODO: Implement snapshot listeners on player 1 and player2. Display a chat of their messages.
  // https://firebase.google.com/docs/firestore/query-data/listen for snapshot documentation.
  // I have disabled all security, so you should not worry about that :)

  const [messageList, setMessageList] = useState<Array<Message>>([])

  // Auto-Scroll Functionality
  const messagesEndRef = useRef<HTMLLIElement>()
  const focusLastMessage = () => {
    if (messagesEndRef.current != null) {
      messagesEndRef.current.scrollIntoView()
    }
  }

  // Scroll Down every time there is a change in the messageList
  useEffect(() => {
    focusLastMessage()
  }, [messageList])

  useEffect(() => {
    // For all players (2 in this demo)
    props.identities.forEach((identity: PlayerIdentity) => {
      // ... listen for changes in the Datastore and update the messageList with the last message
      db.collection('users')
        .doc(identity.id)
        .onSnapshot((doc) => {
          setMessageList((prevMessageList: Array<Message>) => {
            const rawData = doc.data() as { messages: { [key: string]: string } }
            if (rawData != null) {
              const newMessages: Array<Message> = Object.keys(rawData.messages).map(
                (messageTimestamp: string) => {
                  return {
                    sender: identity,
                    timestamp: Number(messageTimestamp),
                    content: rawData.messages[messageTimestamp]
                  }
                }
              )
              return prevMessageList.concat(newMessages[newMessages.length - 1])
            } else {
              return prevMessageList
            }
          })
        })
    })
  }, [])

  return (
    <StyledChat>
      {messageList.map((message: Message, i: number) => {
        return (
          <li key={i}>
            <p>
              <span className='message-sender'>{message.sender.name}</span>
              <span className='message-timestamp'>
                {new Date(Number(message.timestamp)).toLocaleTimeString()} {' on '}
                {new Date(Number(message.timestamp)).toLocaleDateString()}
              </span>
            </p>
            <p className='message-content'>{message.content}</p>
          </li>
        )
      })}
      {/* Element used for Auto-scroll */}
      <li
        className='autoscroll-target'
        ref={(elem) => {
          messagesEndRef.current = elem || undefined
        }}
      ></li>
    </StyledChat>
  )
}

const App = (): JSX.Element => {
  // we generate a random uid for each player. We use this as their database id.
  // note: this means you cannot retrieve chats on page reload!

  const [idPlayerOne] = useState(uuidv4())
  const [idPlayerTwo] = useState(uuidv4())

  return (
    <Root>
      <GlobalStyle />

      <Container className='player-container'>
        <h2>Player 1</h2>
        <Player id={idPlayerOne} />
      </Container>

      <Container className='chat-container'>
        <h2>Chat</h2>
        <Chat
          identities={[
            { id: idPlayerOne, name: 'Player 1' },
            { id: idPlayerTwo, name: 'Player 2' }
          ]}
        />
      </Container>

      <Container className='player-container'>
        <h2>Player 2</h2>
        <Player id={idPlayerTwo} />
      </Container>
    </Root>
  )
}

export default App
