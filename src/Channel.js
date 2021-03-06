import React from "react";
import Members from "./Members";
import ChannelInfo from "./ChannelInfo";
import Messages from "./Messages";
import ChatInputBox from "./ChatInputBox";

function Channel({ user }) {
  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo />
        <Messages />
        <ChatInputBox user={user} />
      </div>
      <Members />
    </div>
  );
}

export default Channel;
