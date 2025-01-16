import GrandChild from "./GrandChild.js";

function Child({ message, updateMessage }: {
  message: string,
  updateMessage: (newMessage: string) => void
}) {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild message={message} updateMessage={updateMessage} />
    </div>
  )
}

export default Child;
