import React, { Component } from "react"

class Footer extends React.Component {

  render() {

    return (
      <div class="Footer">
        <h3>Connect with me by clicking on a platform</h3>
        <hr />
        <br /><br />
        <div class="sidebyside">
          <a href="https://www.youtube.com/channel/UCT3WnNy39aTW1Xba8Wh8hGA/about?view_as=subscriber" target="_blank">
            <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/16/16030.png" width="80"></img></a>

          <a href="https://www.linkedin.com/in/david-mendez-462933145/" target="_blank">
            <img alt="build diagram" src="https://i.ya-webdesign.com/images/linkedin-icon-white-png-7.png" width="80"></img></a>

          <a href="https://github.com/DMendez49" target="_blank">
            <img alt="build diagram" src="http://pngimg.com/uploads/github/github_PNG20.png" width="90"></img></a>

          <a href="https://www.facebook.com/profile.php?id=100001773444206&ref=bookmarks" target="_blank">
            <img alt="build diagram" src="https://papermilkdesign.com/transparent450_/facebook-png-white-19.png" width="80"></img></a>
        </div>
        <br />
      </div>
    )
  }
}

export default Footer;