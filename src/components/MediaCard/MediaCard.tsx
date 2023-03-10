import { Media } from "../../interfaces/Media";
import play from "../../assets/play.svg";
import { useState } from "react";
//@ts-ignore - npm install --save @types/react-copy-to-clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import link from "../../assets/link.png";
import download from "../../assets/Combined Shape.png";

interface MediaCardProps {
  media: Media;
}

function MediaCard(props: MediaCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [copied, setCopied] = useState(false);

  const [copyCount, setCopyCount] = useState(0);

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleCopy = () => {
    setCopied(true);
    setCopyCount((prev) => prev + 1);
  };

  return (
    <div className="media__element__photo__div">
      {isPlaying ? null : (
        <img
          className="media__element__photo"
          width={300}
          height={500}
          src={props.media.cover_photo_url}
          alt=""
        />
      )}
      <div className="media__element__play__button__div" onClick={handlePlay}>
        {isPlaying ? (
          <video
            width={"100%"}
            height={500}
            controls={true}
            autoPlay={true}
            src={props.media.download_url}
          ></video>
        ) : props.media.media_type === "video" ? (
          <img className="media__element__play__button" src={play} alt="Play" />
        ) : null}
      </div>
      <div className="media__element__bottom">
        <div className="media__element__bottom__white__div">
          <CopyToClipboard text={props.media.tracking_link} onCopy={handleCopy}>
            <img className="pointer" width="24" height="24" src={link} alt="Copy Link" />
          </CopyToClipboard>
        </div>
        <div className="media__element__bottom__white__div">
          <a
            href={props.media.download_url}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <img width="24" height="24" src={download} alt="download" />
          </a>
        </div>
      </div>
      <div>Copied {copyCount} times</div>
    </div>
  );
}

export default MediaCard;
