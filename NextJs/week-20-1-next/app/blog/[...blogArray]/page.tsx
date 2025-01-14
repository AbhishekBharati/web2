export default async function blogArray({ params }: {
  params: Promise<{
    blogArray: Array<string>
  }>
}) {
  const postId = (await params).blogArray;

  return (
    <div>
      Blog Page
      {postId} {JSON.stringify(postId)}

    </div>
  );
}
