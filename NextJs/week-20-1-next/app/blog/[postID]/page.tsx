import axios from "axios";

export default async function postId({ params }: {
  params: Promise<{
    postID: string
  }>
}) {
  const postId = (await params).postID;
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = response.data;
  return (
    <div>
      Blog Page
      {postId}

      <br />
      title - {data.title}
      body - {data.body}
    </div>
  );
}
