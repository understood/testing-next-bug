export default async function Page(props) {
  const params = await props.params


  return <div>
    {params.lang}<br />
    {params.flags}<br />
    {params.slug}<br />
  </div>

}