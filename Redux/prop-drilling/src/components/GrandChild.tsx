
function GrandChild({ message, updateMessage }: {
  message: string,
  updateMessage: (newMessage: string) => void
}) {
  return (
    <div>
      <h2>GrandChild Component</h2>
      <p>Message : {message}</p>
      <button onClick={() => updateMessage("Updated By the Grand Child")}>Update Message</button>
    </div>
  )
}

export default GrandChild;
