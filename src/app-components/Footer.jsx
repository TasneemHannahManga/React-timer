import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <a
        className="attribution"
        href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=80262"
      >
        Sound Effect from Pixabay
      </a>
      <a className="attribution" href={props.attr}>
        Image by freepik
      </a>
    </div>
  );
}

export default Footer;
