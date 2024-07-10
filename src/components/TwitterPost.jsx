import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TwitterPost = () => {
  return (
    <div className="relative p-4 top-5 flex flex-row items-center space-y-4">
      <div className="tweet-container w-[300px] h-[500px] overflow-y-auto">
        <TwitterTweetEmbed
          tweetId={'1678429042570326017'}
          options={{ width: 300 }}
        />
      </div>

      <div className="tweet-container w-[300px] h-[500px] overflow-y-auto">
        <TwitterTweetEmbed
          tweetId={'1756828436537176502'}
          options={{ width: 300 }}
        />
      </div>
    </div>
  );
};

export default TwitterPost;
