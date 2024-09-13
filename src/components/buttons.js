"use client";

import Button from "react-bootstrap/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
} from "react-share";

export const PrintCopyButtons = ({ copyString = "" }) => {
  return (
    <>
      <Button
        size="lg"
        className="m-3"
        onClick={() => {
          window.print();
        }}
      >
        Print
      </Button>
      <CopyToClipboard
        text={copyString}
        onCopy={() => {
          // console.log("copied");
        }}
      >
        <Button size="lg" className="m-3">
          Copy Link
        </Button>
      </CopyToClipboard>
    </>
  );
};

export const SocialButtons = ({ shareUrl = "", shareTitle = "" }) => {
  return (
    <>
      <FacebookShareButton
        url={shareUrl}
        style={{ border: "solid 2px white", borderRadius: "100%" }}
      >
        <FacebookIcon size={64} round bgStyle={{ fill: "transparent" }} />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={shareTitle}
        style={{ border: "solid 2px white", borderRadius: "100%" }}
        className="m-3"
      >
        <XIcon size={64} round bgStyle={{ fill: "transparent" }} />
      </TwitterShareButton>
      <EmailShareButton
        url={shareUrl}
        subject={shareTitle}
        body="body"
        style={{ border: "solid 2px white", borderRadius: "100%" }}
      >
        <EmailIcon size={64} round bgStyle={{ fill: "transparent" }} />
      </EmailShareButton>
    </>
  );
};
