import useSWR from "swr";
import "./App.css";
import { Campaign } from "./interfaces/Campaign";
import MediaCard from "./components/MediaCard/MediaCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://www.plugco.in/public/take_home_sample_feed",
    fetcher
  );

  if (error)
    return (
      <div>
        <h1>"An error has occurred."</h1>
        <button onClick={mutate}>Retry</button>
      </div>
    );
  if (isLoading) return <h1>"Loading..."</h1>;

  return (
    <main className="app">
      <h1 className="app__heading">Plugs</h1>
      {data.campaigns &&
        data.campaigns.map((campaign: Campaign) => (
          <div key={campaign.id} className="campaign__card">
            <div className="campaign__card__heading__div">
              <div>
                <img
                  className="campaign__card__heading__div__logo"
                  src={campaign.campaign_icon_url}
                  alt=""
                />
              </div>
              <div>
                <h1>{campaign.campaign_name}</h1>
                <p>{campaign.pay_per_install} per install</p>
              </div>
            </div>
            <div className="media__scroller snaps__inline">
              {campaign.medias &&
                campaign.medias.map((media, index) => {
                  return <MediaCard media={media} key={index} />;
                })}
            </div>
          </div>
        ))}
    </main>
  );
}

export default App;

/*
import useSWR from "swr";
import "./App.css";
import { Campaign } from "./interfaces/Campaign";
import play from "./assets/play.svg";
import MediaCard from "./components/MediaCard/MediaCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  const { data, error, isLoading } = useSWR(
    "https://www.plugco.in/public/take_home_sample_feed",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  console.log("data", data);

  return (
    <div className="App">
      {data.campaigns &&
        data.campaigns.map((campaign: Campaign) => (
          <div key={campaign.id} className="campaign__card">
            <div className="campaign__card__heading__div">
              <div>
                <img
                  className="campaign__card__heading__div__logo"
                  src={campaign.campaign_icon_url}
                  alt=""
                />
              </div>
              <div>
                <h1>{campaign.campaign_name}</h1>
                <p>{campaign.pay_per_install} per install</p>
              </div>
            </div>
            <div className="media__scroller snaps__inline">
              {campaign.medias &&
                campaign.medias.map((media, index) => {
                  return (
                    <div key={index}>
                      <div className="media__element__photo__div">
                        <img src={media.cover_photo_url} alt="" />
                        <div className="media__element__play__button__div">
                          {media.media_type === "video" ? (
                            <img
                              className="media__element__play__button"
                              src={play}
                              alt="Play"
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
*/
