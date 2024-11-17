function App() {
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent
              name={"Harkirat"}
              subtitle={"20 followers"}
              time={"2m ago"}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"Want to know how to win big? Check out this folks won $6000 in bounties."}
            />
            <br />
          </div>
          <div>
            <PostComponent
              name={"raman"}
              subtitle={"promoted"}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"How to get job in 2024? I lost my job in 2023, this is the roadmap i followed to get a job."}
            />
            <br />
          </div>
          <div>
            <PostComponent
              name={"raman"}
              subtitle={"30 followers"}
              time={"3m ago"}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"How to get job in 2024? I lost my job in 2023, this is the roadmap I followed to get a job."}
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 };

function PostComponent({ name, subtitle, time, image, description }) {
  return <div style={style}>
    <div style={{ display: "flex" }}>
      <img src={image} style={{
        width: 45,
        height: 45,
        borderRadius: 20
      }} />
      <div style={{ fontSize: 15, marginLeft: 10 }}>
        <b>
          {name}
        </b>
        <div>{subtitle}</div>
        {time && <div style={{ display: "flex" }}>
          <div>{time}</div>
          <img style={{ width: 15, height: 19, borderRadius: 20 }} src="data:image/png;base64,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" />
        </div>}
      </div>
    </div>
    <div style={{ fontSize: 15 }}>
      {description}
    </div>
  </div>
}

export default App
