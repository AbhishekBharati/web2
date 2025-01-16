import Child from "./Child.js";

function Parent({ message, updateMessage }: {
  message: string,
  updateMessage: (newMessage: string) => void
}) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child message={message} updateMessage={updateMessage} />
    </div>
  )
}

export default Parent;
