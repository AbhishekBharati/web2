export default async function ({ params }: {
  params: {
    blogArray: Array<any>
  }
}) {
  const postId = (await params).blogArray;

  return (
    <div>
      Blog Page
      {postId} {JSON.stringify(postId)}

    </div>
  );
}
