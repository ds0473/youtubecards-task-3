import YouTubeCard from "./Components/YouTubeCard";

function App() {
  return (
    <div>
        <header
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            gap: "20px",
          }}
          src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
          alt="Greeksforgeeks"
        ></img>
        <div>
          <h2>geeksforgeeks</h2>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            type="none"
          >
            <li>. @GreeksorGreeks</li>
            <li>‧ 80.7K subscribers</li>
            <li>‧ 1.1K videos</li>
          </ul>
          <div>
            <a href="https://www.geeksforgeeks.org/">Greeksforgeeks :</a>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <button
              style={{
                border: "none",
                padding: "8px 20px",
                backgroundColor: "black",
                borderRadius: "20px",
                color: "white",
                marginRight: "10px",
                fontWeight: "550",
              }}
            >
              Subscribed{" "}
            </button>

            <button
              style={{
                border: "2px solid grey",
                padding: "8px 20px",
                backgroundColor: "white",
                borderRadius: "20px",
                fontWeight: "550",
              }}
            >
              Join
            </button>
          </div>
        </div>
      </header>
      <hr />
      <section>
        {/*youtube Video Card 1*/}
        <h3>Popular Videos</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <YouTubeCard
            imgLink="https://videocdn.geeksforgeeks.org/geeksforgeeks/PROBLEMOFTHEDAY14052024PathWithMinimumEffort/14MAY20240515034031-small.png"
            altText="Problme of the Day"
            title=" Path with Minimum Effort | GreeksorGreeks"
            paraText="149K views 2.8 years ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://videocdn.geeksforgeeks.org/geeksforgeeks/PROBLEMOFTHEDAY13052024NumberofGoodComponents/13MAY20240515033844-small.png"
            altText="Devops"
            title="Number of Good Components"
            para="145K views 1 year ago"
          ></YouTubeCard>

          <YouTubeCard
            imgLink="https://videocdn.geeksforgeeks.org/geeksforgeeks/PROBLEMOFTHEDAY11052024JugglerSequence/11MAY20240515033338-small.png"
            altText="potd"
            title="Juggler Sequence"
            para="900K views 4 years ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://media.geeksforgeeks.org/img-practice/prod/courses/287/Web/Content/c-web_1705404509.webp"
            altText="mc"
            title="Master in C"
            para="109K views 3 years ago98K views 1 year ago"
          ></YouTubeCard>
        </div>

        <h3>Interview Preparation Guide @ashokit</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <YouTubeCard
            imgLink="https://videocdn.geeksforgeeks.org/geeksforgeeks/ConvertIntegertoEnglishWordDSAProblem/33320240514181716-small.png"
            altText="Practice"
            title="Practice Problem"
            para="25K views 1 years ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://media.geeksforgeeks.org/img-practice/prod/courses/241/Web/Content/FSRNL_1705410152.webp"
            altText="Devops"
            title="Full stack development "
            para="25K views 1 years ago6k views 1 year ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://media.geeksforgeeks.org/img-practice/prod/courses/504/Web/Content/DSA-to-Dev_1705410853.webp"
            altText="Develoopment"
            title="DSA to development"
            paraText="15K views 1 years ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/Java-Programming_1705409391.webp"
            altText="Java"
            title="Java programming"
            paraText="80K views 1 year ago"
          ></YouTubeCard>
        </div>
      </section>
    </div>
  );
}

export default App;